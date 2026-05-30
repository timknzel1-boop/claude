import Chat from '@/components/Chat'
import ShopifyPanel from '@/components/ShopifyPanel'

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-950">
      {/* Main chat area */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-900">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div>
              <h1 className="text-sm font-semibold text-gray-100">Claude Assistant</h1>
              <p className="text-xs text-gray-400">Shopify & Code Expert</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-xs text-green-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              claude-sonnet-4-6
            </span>
          </div>
        </header>
        <Chat />
      </div>

      {/* Shopify sidebar */}
      <aside className="w-72 border-l border-gray-800 bg-gray-900 flex flex-col">
        <div className="px-4 py-4 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.96 8.37a.57.57 0 00-.55-.49l-1.45-.07-.97-2.87a.57.57 0 00-.54-.38.57.57 0 00-.55.43l-.6 1.9-1.14-.05a6.4 6.4 0 00-5.46 3.3L8.4 13.5l-1.2.05-.04.01a.57.57 0 00-.52.67l1.36 8.87c.06.38.4.65.79.63l10.82-.44c.37-.02.68-.3.72-.67l1.6-14.02a.57.57 0 00-.17-.43l-1-.8z"/>
            </svg>
            <h2 className="text-sm font-semibold text-gray-100">Shopify Store</h2>
          </div>
        </div>
        <ShopifyPanel />
      </aside>
    </div>
  )
}
