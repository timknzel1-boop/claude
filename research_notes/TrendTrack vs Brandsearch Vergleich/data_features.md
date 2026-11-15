# TrendTrack vs Brandsearch: data sources, data quality and features (for a DACH/EU supplement brand on Meta)

Method note: direct fetches of trendtrack.io, brandsearch.co, winninghunter.com and gethookd.ai all failed (the hosts did not resolve in this sandbox). Everything below comes from search-result snippets of those pages and of third-party pages. Vendor pages are marked [vendor], and affiliate or competitor sources are marked [affiliate/competitor]. The figures were not checked against the live apps. As of mid-Nov 2026.

## 1. Database size claims (stores, brands, ads)

### Takeaway
Brandsearch publishes larger and more consistent headline numbers: 15M+ stores and 400M+ ads and posts. TrendTrack's store and ad counts vary widely by source, from 300k to 5M+ stores, and its pitch rests more on fresh indexing (2–3M new Meta ads per day) than on total size. None of these numbers is independently audited.

### Cited Findings
- Brandsearch [vendor] About page: 15M+ online stores tracked and 400M+ active ads indexed. The Spectre page breaks this down as 200M+ Meta ads, 110M+ TikTok ads and 100M+ Instagram posts plus TikTok organic posts, and says Google ads are not indexed. — [brandsearch.co/about](https://brandsearch.co/about); [brandsearch.co/spectre](https://brandsearch.co/spectre)
- Brandsearch's older pages and reviews give 7.5M+ Shopify stores and 160M+ Meta ads, and the discovery page says 14M+ brands. These are probably outdated figures. — [brandsearch.co/discovery](https://brandsearch.co/discovery); [toolsplorer.com](https://toolsplorer.com/tool/brandsearch/)
- Brandsearch pricing [vendor]: all 15M+ brands and 400M+ ads and posts are searchable on every plan, Starter included. Plans limit only the number of Spectre-tracked brands (5, 50 or 100). — [brandsearch.co/pricing](https://brandsearch.co/pricing)
- TrendTrack [vendor]: the infrastructure "scans the entire Shopify and Meta ecosystem daily, 2 to 3 million new ads indexed every 24 hours." — [trendtrack.io/blog-post/best-meta-adspy-tool](https://www.trendtrack.io/blog-post/best-meta-adspy-tool)
- TrendTrack's store counts conflict:
  - 5M+ Shopify stores, updated daily [vendor pages per review]
  - "250M+ ads, 5M+ stores" — [trendtrack.tech](https://trendtrack.tech/en/) [likely affiliate]
  - ~1.5M stores — [gethookd.ai comparison](https://www.gethookd.ai/learn/trendtrack-vs-brandsearch-vs-gethookd-features-pricing-use-cases/) [competitor]
  - an older official blog figure of 300,000+ Shopify stores — [trendtrack.io blog](https://www.trendtrack.io/blog-post/trendtrack-review-2026)
- TrendTrack's MCP blog [vendor]: "95 million indexed TikToks and 700,000+ brand profiles updated every 24 hours." — [docs.trendtrack.io Claude integration / blog](https://docs.trendtrack.io/en/docs/integrations/claude)
- One site says Brandsearch's "ad library is smaller" than TrendTrack's, which conflicts with the vendors' own numbers. — summarised in search of [trendtrackreview.com/alternatives](https://trendtrackreview.com/alternatives) [affiliate for TrendTrack]

### Inferences
- The "brand profiles" figure (TrendTrack, 700k) and the "stores" figure (Brandsearch, 15M) measure different things. Brandsearch's 15M probably includes every detected store, most of them small or inactive. The useful comparison is how many actively advertising DACH brands each tool covers, and neither vendor publishes that.
- For a single DACH supplement niche, the total index size matters less than whether the Meta EU ads for roughly 20–50 relevant competitors are captured and kept fresh. Both tools appear to pull Meta Ad Library data daily.

### Gaps
- No audited counts. No per-country (DE/AT/CH) breakdown from either vendor.
- I could not get a current official TrendTrack homepage number because the fetch was blocked.

## 2. Data sources, and whether TrendTrack's "real EU/UK ad spend" is real

### Takeaway
Under the DSA, Meta publishes EU (and UK) reach and impression-related data for commercial ads: estimated total reach with breakdowns by country, age and gender. It publishes spend only for political/issue ads, as ranges. TrendTrack's "real spend, not estimates" claim is therefore almost certainly spend modelled from Meta's disclosed reach, roughly reach × frequency × CPM. Brandsearch's Chrome extension and app overlay the same EU reach data and also show estimated spend ranges. EU reach is not a TrendTrack-exclusive data source.

### Cited Findings
- What Meta discloses for commercial EU ads: an `eu_total_reach` field and no spend field. Spend and impression ranges appear only for political ads. — [adlibrary.com DSA guide](https://adlibrary.com/posts/eu-dsa-ad-repositories-developers); [adpitstop.com](https://adpitstop.com/en/guides/ad-library-api); [socialmediatransparency.org](https://www.socialmediatransparency.org/blog/advertising-library-transparency-comparing-the-us-and-the-eu)
- Reach is an estimate of accounts that saw the ad at least once, aggregated, with per-country, age and gender breakdowns. It covers ads delivered in the EU and UK and is kept about 12 months after the last impression. — [klipio.io](https://klipio.io/blog/facebook-ad-library-eu-vs-us); [oppira.com](https://www.oppira.com/guides/meta-ad-library-eu-data/); [OIAT policy paper](https://research.oiat.at/fileadmin/Research/Dokumente/PolicyPaper_AdLibraries_300924.pdf)
- The headline reach covers the whole EU, the UK or Brazil, not a single country. Another guide says the per-ad transparency panel does break reach down by country, age and gender. — [searchthetrend.com](https://www.searchthetrend.com/blog/ad-library-chrome-extension); [oppira.com](https://www.oppira.com/guides/meta-ad-library-eu-data/)
- An Apify scraper that offers "EU spend" says outright that Meta does not disclose exact spend for commercial ads, and it simulates spend via CPM. — [apify.com voxatools](https://apify.com/voxatools/meta-ad-library-longevity-spy-scraper)
- TrendTrack's wording [vendor] is inconsistent:
  - the pricing page says "estimated reach and budget data for ads running in the EU, sourced from Meta's transparency report"
  - other pages say "real spend and reach figures from EU and UK Meta campaigns – not estimates, actual numbers"
  - the FAQ says spend is "sourced straight from Meta's own data"
  - Source: [trendtrack.io/pricing](https://www.trendtrack.io/pricing)
- Third-party reviews repeat the claim of "EU/UK Meta ad spend data sourced from the Digital Services Act – real spend figures". — [passivekit.com](https://www.passivekit.com/trendtrack-reviews/); [ucstrategies.com](https://ucstrategies.com/news/trendtrack-review-the-all-in-one-tool-for-scaling-brands/)
- Counter-view: trafik.plus says the figures "combine Meta's ad transparency with traffic data, among other sources" and are estimates. It also notes that reach and spend are unavailable outside Europe and the UK. — [trafik.plus](https://trafik.plus/blog/trendtrack-review-and-complete-guide)
- The formulas third-party tools use: spend ≈ reach/1000 × CPM × frequency. CPM assumptions vary a lot by country: UK about $10.85, DE about $10.05, US about $20.48. Using a US CPM would roughly double an EU spend estimate. — [adnova.ai](https://www.adnova.ai/blogs/find-competitors-meta-adspend); [competitionads.com](https://competitionads.com/)
- TrendTrack's own blog notes that Meta's Ad Library offers EU impression ranges for free, and that TikTok's Creative Center shows no UK/EU spend. — [trendtrack.io/fr competitor-ad-spend](https://www.trendtrack.io/fr/blog-post/competitor-ad-spend)
- Brandsearch [vendor] says its extension overlays EU reach and estimated daily spend ranges on each ad card in the Meta Ad Library, for EU markets only. The Chrome Web Store listing says the full ad list and EU & UK ad spend require a Pro plan. — [brandsearch.co blog meta-ad-library-eu-reach-chrome-extension](https://brandsearch.co/blog/meta-ad-library-eu-reach-chrome-extension); [Chrome Web Store](https://chromewebstore.google.com/detail/brandsearch-ecommerce-sto/fjoigefjdlinileegfbkkbfjjfeldbgb)
- Other sources by tool:
  - TrendTrack: Meta, TikTok (ads plus organic) and Google (Search, Shopping, and via the API also Maps and YouTube). It also tracks emails, with saved folders for ads, emails and shops. The MCP docs say "shops and emails are not shareable through MCP." — [trendtrack.io/industries/media-buyers](https://www.trendtrack.io/industries/media-buyers); [TrendTrack API reference](https://app.trendtrack.io/en/docs/reference/api-reference); [docs.trendtrack.io](https://docs.trendtrack.io/en/docs/integrations/claude)
  - Brandsearch: Meta, TikTok, Instagram organic, and product catalogs via the API. The Spectre page says Google ads are not indexed, but a Brandsearch blog post says Discovery covers "Meta, TikTok, Instagram, Google Ads, and email in one search". This is a vendor-internal contradiction. — [docs.brandsearch.co](https://docs.brandsearch.co/); [brandsearch.co/spectre](https://brandsearch.co/spectre); [brandsearch.co blog andromeda](https://brandsearch.co/blog/competitor-research-signals-andromeda-era)

### Inferences
- For an EU/DACH Meta advertiser, both tools' most valuable underlying signal is the same free public DSA reach data. Real reach for DE ads is high quality: Meta's own estimate, with a country split. The "spend" layered on top is a model whose accuracy depends on the CPM and frequency assumptions. Supplement or health CPMs in DE can differ a lot from averages, so treat spend as ranking and order of magnitude, not euros.
- TrendTrack's "not estimates" wording overstates what Meta provides, and TrendTrack's own pricing page says "estimated". When evaluating either tool, check whether it shows raw EU reach (verifiable against the Ad Library's EU transparency panel) separately from modelled spend.
- To validate: open 3–5 known DE competitor ads in the Meta Ad Library, compare the EU reach figure with what each tool shows, and back-calculate the CPM each tool implies.

### Gaps
- Neither vendor documents its CPM/frequency model, the country-specific CPMs it uses, or how often reach is refreshed per ad.
- Unclear whether either tool exposes per-country (DE/AT) reach splits or only the EU total.
- The Google/email coverage contradiction on Brandsearch is unresolved.

## 3. Revenue estimate methodology and accuracy

### Takeaway
Both tools' revenue figures are modelled from traffic, catalog and price, and conversion benchmarks, with no store-level ground truth. Independent tests rate them as directional only: TrendTrack scored 7.5/10 and Brandsearch 6/10 on database accuracy, both scores from WinningHunter, a competitor. Typical store-revenue tools miss by about 20–40%.

### Cited Findings
- Brandsearch [vendor]: revenue is a "directional estimate based on product catalog, traffic and conversion benchmarks". Brand pages show ranges, for example "$100.7K–$182.8K est. monthly revenue". — [brandsearch.co/brands/specterlabs.co](https://brandsearch.co/brands/specterlabs.co); [brandsearch.co/about](https://brandsearch.co/about)
- WinningHunter's Brandsearch review [competitor]: database accuracy 6/10, traffic is "directional", and there is no creative-level CTR/CPA/revenue attribution. Trustpilot showed 4.6 from 18 reviews. — [winninghunter.com brandsearch-review](https://winninghunter.com/insights/brandsearch-review)
- WinningHunter's TrendTrack review [competitor]: database accuracy 7.5/10 after checking against stores with public sales signals. Traffic trends were more useful than the revenue numbers, which "are just estimates and not verified financial data". — [winninghunter.com trendtrack-review](https://winninghunter.com/insights/trendtrack-review)
- TrendTrack's own Chrome-extension article [vendor] lists "revenue numbers are estimates (not exact)" as a downside. — [trendtrack.io chrome extensions blog](https://www.trendtrack.io/blog-post/the-best-chrome-extensions-for-shopify-in-2026)
- Category benchmark for revenue-estimate tools generally: errors of 20–40% in either direction, and worse for stores under $5k or over $500k per month. — [copyfy.io WinningHunter review](https://www.copyfy.io/en/blog/winninghunter-review)
- UCStrategies calls TrendTrack's revenue reliability "unmatched" but gives thin evidence. — [ucstrategies.com](https://ucstrategies.com/news/trendtrack-review-the-all-in-one-tool-for-scaling-brands/)
- Store traffic and revenue data cover Shopify stores only (Brandsearch extension). — [brandsearch.co/addon](https://brandsearch.co/addon)

### Inferences
- Many DACH supplement brands run on Shopify, but some large ones run on Shopware, custom builds or Amazon. Revenue estimates will be missing for those, and weaker for mid-size EU stores whose traffic models are built mostly on US data.
- Use revenue to rank competitors relative to each other, never to make budget decisions.

### Gaps
- No published methodology or validation study from either vendor. No EU-specific accuracy data.

## 4. Winner-ad detection (spend/reach sorting, active days, duplicates, scaling)

### Takeaway
Brandsearch documents more explicit winner heuristics: sort by duplicate count, a running-days filter (25+ days), "Winning/Scaling" phase filters, and sort by total reach. TrendTrack sells EU spend/reach sorting plus status, running-time and active-ad-volume filters. Both rely on the same proxies: longevity, duplication and EU reach.

### Cited Findings
- Brandsearch [vendor blog] heuristics:
  - "Open Brandsearch Discovery, Meta platform, sort by most duplicates", and a creative holding 10+ duplicates for 30 days is a proven winner
  - running days of 25+ suggest profitability
  - pair this with a "Winning" or "Scaling" phase filter and sort by total reach
  - Spectre flags batches of ads that are scaling
  - Sources: [brandsearch.co blog andromeda signals](https://brandsearch.co/blog/competitor-research-signals-andromeda-era); [brandsearch.co blog 3-hour workflow](https://brandsearch.co/blog/competitor-research-3-hour-workflow); [brandsearch.co blog agency research](https://brandsearch.co/blog/agency-competitor-research-10-clients)
- TrendTrack [vendor]:
  - filters ads by actual spend in supported regions, with demographics
  - advertiser filters for pages, countries, ad status, language, followers and technology
  - filter advertisers by industry, active ad volume and target country
  - the Google ads API filters by running time and reach
  - "Trending Ad" covers Meta and TikTok
  - Sources: [trendtrack.io/fr competitor-ad-spend](https://www.trendtrack.io/fr/blog-post/competitor-ad-spend); [trendtrack.io/pricing](https://www.trendtrack.io/pricing); [TrendTrack API reference](https://app.trendtrack.io/en/docs/reference/api-reference); [passivekit.com](https://www.passivekit.com/trendtrack-reviews/)

### Inferences
- After Meta's Andromeda changes, many brands run many near-duplicate creatives, so duplicate counts alone can mislead. EU reach per ad (both tools) is the stronger signal for DACH competitors. Longevity plus reach is the most robust combination.
- For health-claim ads, longevity also partly reflects ads that passed Meta review without rejection, which is useful compliance signal in itself.

### Gaps
- Could not confirm whether TrendTrack has an explicit duplicate/variation grouping or an "active days" sort for Meta. The search found nothing. Verify this in a trial.

## 5. Brand tracking (TrendTrack Brand Tracker vs Brandsearch Spectre)

### Takeaway
Both track named competitors daily and flag new or paused ads and creative changes. Spectre tracks more brands per plan (5, 50 or 100) and also tracks landing-page, price and SKU changes. TrendTrack's Brand Tracker caps are reported at 2–20 or 30 brands per plan (sources conflict). TrendTrack adds an MCP-driven daily summary in Claude.

### Cited Findings
- Spectre [vendor]:
  - monitors competitors and flags new ads, paused creatives and landing-page changes
  - plan limits: 5 brands (Starter), 50 (Outscaler), 100 (Agency)
  - a comparison page gives $79/mo for 50 brands
  - Sources: [brandsearch.co/spectre](https://brandsearch.co/spectre); [brandsearch.co/pricing](https://brandsearch.co/pricing); [brandsearch.co/alternatives/adspyder](https://brandsearch.co/alternatives/adspyder)
- Spectre per third parties: it updates daily, and changed hooks, offers and funnels show up in a watchlist automatically. Alerts cover new ad copy, price changes and new SKUs; it is unclear whether these are push alerts or a feed. — [toolsplorer.com](https://toolsplorer.com/tool/brandsearch/); [winninghunter.com](https://winninghunter.com/insights/brandsearch-review); [brandsearchreview.com](https://brandsearchreview.com/brandsearch-review/) (may describe a different product)
- TrendTrack Brand Tracker [vendor] "continuously monitors the advertising activity of your designated competitors and automatically alerts you when they launch ads, test angles, or change creatives". — [trendtrack.io monitor-competitors blog](https://www.trendtrack.io/blog-post/how-can-you-monitor-your-competitors-ads)
- TrendTrack tracked-brand limits: "2 to 20 depending on the plan" per trafik.plus, and "30 Pro / unlimited Business" per a GitHub promo page [affiliate]. Another review says it monitors creatives, demographics, hooks and landing pages daily. — [trafik.plus](https://trafik.plus/blog/trendtrack-review-and-complete-guide); [github.com/pin07416/TrendTrack](https://github.com/pin07416/TrendTrack)
- TrendTrack MCP: with the `trendtrack:brandtrackers.write` OAuth scope, Claude can add and manage tracked brands, and the vendor describes a daily Claude "radar" that summarises competitors' new ads from the last 24h. — [docs.trendtrack.io/…/claude](https://docs.trendtrack.io/en/docs/integrations/claude); [trendtrack.io blog](https://www.trendtrack.io/blog-post/best-meta-adspy-tool)

### Inferences
- For a DACH supplement brand tracking about 20–50 competitors (DE, international entrants and US brands entering the EU), Brandsearch's 50-brand tier fits for less money. TrendTrack may need its top tier.

### Gaps
- Alert channels (email, Slack, in-app) and exact update latency are unconfirmed for both tools.

## 6. Creative workflow (swipe files, extension, AI, transcripts, LP capture, teams)

### Takeaway
Brandsearch has the more documented creative-strategy features: auto-transcribed Scripts and Hooks tabs (filterable by language, relevant for German VO), AI-Radar positioning and USP extraction from ads and landing pages, Swipe File boards, and a free extension with EU reach overlay. TrendTrack covers ads, store and email research plus folders, a free Shopify-overlay extension and AI reports via MCP. I found no TrendTrack transcript feature.

### Cited Findings
- Brandsearch [vendor]:
  - Scripts tab: "every video ad is auto-transcribed — full scripts, word for word"
  - Hooks tab: transcribes the first 3–5 seconds of every video ad and filters by language
  - AI-Radar: an LLM reads every ad, landing page and product description and extracts positioning, USPs and keywords
  - Swipe File folders
  - Sources: [brandsearch.co blog hooks-tab](https://brandsearch.co/blog/hooks-tab-competitor-opening-lines); [brandsearch.co blog ai-radar](https://brandsearch.co/blog/competitor-brand-strategy-ai-radar); [brandsearch.co blog 3-hour workflow](https://brandsearch.co/blog/competitor-research-3-hour-workflow)
- Brandsearch's free Chrome extension: analyse Shopify stores, track competitors and save ads, including from the FB Ad Library and TikTok Creative Center. EU spend requires Pro. — [brandsearch.co/addon](https://brandsearch.co/addon); [Chrome Web Store](https://chromewebstore.google.com/detail/brandsearch-ecommerce-sto/fjoigefjdlinileegfbkkbfjjfeldbgb)
- WinningHunter: save creatives into boards and folders from Discovery or Spectre. — [winninghunter.com](https://winninghunter.com/insights/brandsearch-review)
- Brandsearch has a supplement-specific playbook [vendor]: "Facebook Ads for Health & Fitness: How to Avoid Bans and Scale Supplements". — [brandsearch.co blog](https://brandsearch.co/blog/facebook-ads-health-fitness-avoid-bans-scale-supplements)
- TrendTrack's free Chrome extension overlays revenue estimate, traffic, top products, apps and theme, and live ad count on any Shopify store. It is Chrome-only, and the free version shows some ads. — [passivekit.com chrome extension](https://www.passivekit.com/trendtrack-chromeextension/); [trendtrack.io chrome blog](https://www.trendtrack.io/blog-post/the-best-chrome-extensions-for-shopify-in-2026)
- TrendTrack:
  - saved folders for ads, emails and shops, and favourites shareable via MCP
  - AI produces "creative briefs and structured competitive reports" via the Claude/ChatGPT MCP
  - collaborative boards for agencies are mentioned
  - Business plan seats: 3 or 4 (conflicting sources)
  - a user complaint that AI credits run out quickly
  - Sources: [docs.trendtrack.io](https://docs.trendtrack.io/en/docs/integrations/claude); [trendtrack.io/industries/media-buyers](https://www.trendtrack.io/industries/media-buyers); [github promo](https://github.com/pin07416/TrendTrack); [trustpilot trendtrack](https://www.trustpilot.com/review/trendtrack.io)

### Inferences
- For a German-language creative team, Brandsearch's language-filterable Hooks and Scripts transcripts are directly useful for mining competitor hook and claim wording. With TrendTrack this would need MCP plus an LLM, or manual work.

### Gaps
- Not confirmed:
  - TrendTrack transcripts or video AI analysis
  - landing-page snapshot or history in either tool (Spectre flags LP changes but no archive was confirmed)
  - Brandsearch team seats and collaboration

## 7. API / MCP availability

### Takeaway
Both tools now offer an API and a remote MCP server usable from Claude and ChatGPT. Brandsearch: REST plus MCP at api.brandsearch.co/v1/mcp, 32 tools, API-key auth. TrendTrack: MCP at api.trendtrack.io/v1/mcp with OAuth scopes (including Brand Tracker writes) and a documented REST API. TrendTrack reportedly does not include API/MCP in its base tier.

### Cited Findings
- Brandsearch:
  - hosted MCP at `https://api.brandsearch.co/v1/mcp`
  - API covers brands, Meta, TikTok and Instagram creatives, and product catalogs
  - tools resolve Meta Ad Library IDs and Meta, TikTok and IG URLs
  - "32 tools across 5 areas"
  - auth via `X-API-Key` (keys `bsk_`), while marketing pages show the npm package `@brandsearch/mcp` with `bs_live_` keys and "request-based pricing" (inconsistent)
  - Sources: [docs.brandsearch.co](https://docs.brandsearch.co/); [docs.brandsearch.co/mcp](https://docs.brandsearch.co/mcp); [brandsearch.co/news API/MCP](https://brandsearch.co/news/build-ecommerce-workflows-api-mcp); [brandsearch.co/mcp](https://brandsearch.co/mcp)
- TrendTrack:
  - MCP endpoint `https://api.trendtrack.io/v1/mcp`, added as a custom connector in Claude with OAuth
  - a ChatGPT integration
  - tools include `search_tiktok_library`
  - shops and emails are not shareable through MCP
  - the REST API covers Google ads and more
  - API/MCP is not in the base tier, and higher tiers include credits [vendor review page]
  - Sources: [docs.trendtrack.io Claude](https://docs.trendtrack.io/en/docs/integrations/claude); [docs.trendtrack.io ChatGPT](https://docs.trendtrack.io/en/docs/integrations/chatgpt); [API reference](https://app.trendtrack.io/en/docs/reference/api-reference); [trendtrack.io review-2026](https://www.trendtrack.io/blog-post/trendtrack-review-2026)
- A third-party guide on X describes copying an MCP key from TrendTrack's "API Access → MCP Integration" page, which differs from the OAuth flow in the docs. — [x.com/Mehdi_Scalify](https://x.com/Mehdi_Scalify/status/2049419406091104430)

### Gaps
- Rate limits, credit costs per call and whether EU reach/spend fields are exposed via the API were not confirmed for either tool.

## 8. Supplement niche fit (DACH brands, health-claim ads, Meta EU)

### Takeaway
I found no evidence for or against either tool's DACH supplement coverage. Brandsearch does have German supplement Shopify stores indexed (for example nextvital.de) and publishes supplement-specific Meta content. Both tools' EU-reach strength actually favours EU advertisers: the DSA data is richer for DE ads than for US ads.

### Cited Findings
- Brandsearch has a brand page for nextvital.de, a German health/vitamins & supplements Shopify store. — [brandsearch.co/brands/nextvital.de](https://brandsearch.co/brands/nextvital.de)
- Brandsearch publishes a supplement and health Meta ads playbook (avoid bans, scale). — [brandsearch.co blog](https://brandsearch.co/blog/facebook-ads-health-fitness-avoid-bans-scale-supplements)
- TrendTrack's own claims and third-party reviews call EU/UK Meta data its main differentiator. — [trafik.plus](https://trafik.plus/blog/trendtrack-review-and-complete-guide); [gethookd.ai](https://www.gethookd.ai/learn/trendtrack-vs-brandsearch-vs-gethookd-features-pricing-use-cases/)
- TrendTrack is a French company (French-language blog and community), which suggests an EU focus. — [trendtrack.io/fr](https://www.trendtrack.io/fr/blog-post/competitor-ad-spend); [x.com/Mehdi_Scalify](https://x.com/Mehdi_Scalify/status/2049419406091104430)
- Context: German supplement ads fall under LFGB and EU health-claim rules, and influencer non-disclosure is a documented problem. — [raps.org](https://www.raps.org/resource/influencer-advertising-of-food-supplements.html); [kenresearch.com](https://www.kenresearch.com/germany-nutrition-sports-supplements-market)

### Inferences
- Coverage of the Meta ads themselves should be near-complete in both tools, because the source (the Meta Ad Library) covers every EU-delivered ad. The differences show up in store and revenue data for non-Shopify DACH brands, and in transcript and language features for German creatives. Neither tool flags health claims for compliance; that would need an LLM step, for example via MCP.
- Test both tools with a fixed list of DACH competitors (for example foodspring, ESN, Sunday Natural, Bears with Benefits, nextvital): count each brand's indexed Meta ads against the Meta Ad Library, and check whether EU reach is shown per ad.

### Gaps
- No DACH coverage stats, German-language search quality or supplement category taxonomy found for either tool.

## Pricing and trust signals (supporting context)

These numbers are not checked against the live pricing pages.

- TrendTrack price quotes conflict:
  - $49 / $89 / $159
  - $59 / $89 / $149
  - annual €34 / €62 / €111
  - Sources: [passivekit.com pricing](https://www.passivekit.com/trendtrack-pricing/); [ecomradar.co](https://ecomradar.co/en/competitor-intel/trendtrack-review-pricing/); [trafik.plus](https://trafik.plus/blog/trendtrack-review-and-complete-guide)
- Brandsearch is about $63–79/mo for the 50-brand tier, and a trial is mentioned. — [brandsearch.co/alternatives/adspyder](https://brandsearch.co/alternatives/adspyder); [trendtrackreview.com/alternatives](https://trendtrackreview.com/alternatives)
- Trust signals:
  - Brandsearch Trustpilot: 4.1 from 21 reviews on the AU listing; the vendor claims 4.8 from 2,847 reviews. — [au.trustpilot.com brandsearch](https://au.trustpilot.com/review/brandsearch.co)
  - TrendTrack Trustpilot includes a complaint about charges after cancelling. — [trustpilot.com trendtrack](https://www.trustpilot.com/review/trendtrack.io)
