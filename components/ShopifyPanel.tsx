'use client'

import { useEffect, useState } from 'react'

interface ShopData {
  name: string
  email: string
  domain: string
  plan_name: string
  currency: string
  country_name: string
  created_at: string
}

interface StoreInfo {
  shop: ShopData | null
  orders: number
  products: number
  error?: string
}

export default function ShopifyPanel() {
  const [data, setData] = useState<StoreInfo | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/shopify')
      .then((r) => r.json())
      .then((d) => setData(d))
      .catch(() => setData({ shop: null, orders: 0, products: 0, error: 'Failed to load' }))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="flex-1 p-4 space-y-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-16 rounded-lg bg-gray-800 animate-pulse" />
        ))}
      </div>
    )
  }

  if (!data || data.error || !data.shop) {
    return (
      <div className="flex-1 p-4">
        <div className="rounded-lg bg-gray-800 border border-gray-700 p-4 text-center">
          <svg className="w-8 h-8 text-gray-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-xs text-gray-400">
            {data?.error || 'No Shopify credentials configured'}
          </p>
          <p className="text-xs text-gray-500 mt-1">Set SHOPIFY_SHOP_DOMAIN and SHOPIFY_ACCESS_TOKEN in .env.local</p>
        </div>
      </div>
    )
  }

  const shop = data.shop
  const createdYear = new Date(shop.created_at).getFullYear()

  const stats = [
    { label: 'Total Orders', value: data.orders.toLocaleString(), icon: '📦', color: 'text-blue-400' },
    { label: 'Products', value: data.products.toLocaleString(), icon: '🛍️', color: 'text-purple-400' },
    { label: 'Currency', value: shop.currency, icon: '💱', color: 'text-yellow-400' },
    { label: 'Since', value: String(createdYear), icon: '📅', color: 'text-green-400' },
  ]

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {/* Store info */}
      <div className="rounded-lg bg-gray-800 border border-gray-700 p-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 2.1L14.3.8c-.3-.5-.9-.8-1.5-.8H11c-.6 0-1.2.3-1.5.8L8.3 2.1C7.1 2.4 6 3.3 5.5 4.5L2 13v6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-6L18.3 4.5c-.5-1.2-1.6-2.1-2.8-2.4zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-100 truncate">{shop.name}</p>
            <p className="text-xs text-gray-400 truncate">{shop.domain}</p>
            <span className="inline-block mt-1 text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
              {shop.plan_name}
            </span>
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-2">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg bg-gray-800 border border-gray-700 p-3">
            <div className="text-lg mb-1">{stat.icon}</div>
            <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Contact info */}
      <div className="rounded-lg bg-gray-800 border border-gray-700 p-4 space-y-2">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Contact</p>
        <div className="space-y-1">
          <p className="text-xs text-gray-300 flex items-center gap-2">
            <span className="text-gray-500">✉</span>
            <span className="truncate">{shop.email}</span>
          </p>
          <p className="text-xs text-gray-300 flex items-center gap-2">
            <span className="text-gray-500">🌍</span>
            {shop.country_name}
          </p>
        </div>
      </div>

      {/* Quick tips */}
      <div className="rounded-lg bg-purple-500/10 border border-purple-500/20 p-4">
        <p className="text-xs font-medium text-purple-400 mb-2">Quick Tips</p>
        <ul className="space-y-1">
          {[
            'Paste a URL for analysis',
            'Upload screenshots',
            'Ask about Liquid templates',
            'Get GraphQL query help',
          ].map((tip) => (
            <li key={tip} className="text-xs text-gray-400 flex items-start gap-1.5">
              <span className="text-purple-500 mt-0.5">›</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
