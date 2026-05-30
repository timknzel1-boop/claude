import { NextResponse } from 'next/server'

export async function GET() {
  const domain = process.env.SHOPIFY_SHOP_DOMAIN
  const token = process.env.SHOPIFY_ACCESS_TOKEN

  if (!domain || !token) {
    return NextResponse.json({
      error: 'Shopify credentials not configured',
      shop: null,
      orders: 0,
      products: 0,
    })
  }

  try {
    const headers = {
      'X-Shopify-Access-Token': token,
      'Content-Type': 'application/json',
    }
    const base = `https://${domain}/admin/api/2024-01`

    const [shopRes, ordersRes, productsRes] = await Promise.all([
      fetch(`${base}/shop.json`, { headers }),
      fetch(`${base}/orders/count.json?status=any`, { headers }),
      fetch(`${base}/products/count.json`, { headers }),
    ])

    const [shopData, ordersData, productsData] = await Promise.all([
      shopRes.json(),
      ordersRes.json(),
      productsRes.json(),
    ])

    return NextResponse.json({
      shop: shopData.shop ?? null,
      orders: ordersData.count ?? 0,
      products: productsData.count ?? 0,
    })
  } catch (err) {
    console.error('Shopify API error:', err)
    return NextResponse.json(
      { error: 'Failed to fetch Shopify data', shop: null, orders: 0, products: 0 },
      { status: 500 }
    )
  }
}
