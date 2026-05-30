'use client'

import { useEffect, useRef, useState } from 'react'

interface ContentBlock {
  type: 'text' | 'image'
  text?: string
  image_url?: string
}

interface Message {
  role: 'user' | 'assistant'
  content: string | ContentBlock[]
}

function isURL(str: string): boolean {
  try {
    const url = new URL(str.trim())
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

function MessageContent({ content }: { content: string | ContentBlock[] }) {
  if (typeof content === 'string') {
    return <div className="whitespace-pre-wrap break-words">{content}</div>
  }
  return (
    <div className="space-y-2">
      {content.map((block, i) => {
        if (block.type === 'image' && block.image_url) {
          return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={block.image_url}
              alt="Uploaded screenshot"
              className="max-w-xs rounded-lg border border-gray-600"
            />
          )
        }
        return (
          <div key={i} className="whitespace-pre-wrap break-words">
            {block.text}
          </div>
        )
      })}
    </div>
  )
}

function renderMarkdown(text: string) {
  // Simple markdown rendering: code blocks, inline code, bold, italic
  const lines = text.split('\n')
  const result: React.ReactNode[] = []
  let inCode = false
  let codeLines: string[] = []
  let codeLang = ''
  let key = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (line.startsWith('```')) {
      if (!inCode) {
        inCode = true
        codeLang = line.slice(3).trim()
        codeLines = []
      } else {
        result.push(
          <div key={key++} className="my-2">
            {codeLang && (
              <div className="text-xs text-gray-400 bg-gray-900 px-3 py-1 rounded-t border border-gray-700 border-b-0">
                {codeLang}
              </div>
            )}
            <pre className={`bg-gray-900 text-gray-100 p-3 rounded${codeLang ? '-b' : ''} overflow-x-auto text-sm border border-gray-700`}>
              <code>{codeLines.join('\n')}</code>
            </pre>
          </div>
        )
        inCode = false
        codeLines = []
        codeLang = ''
      }
    } else if (inCode) {
      codeLines.push(line)
    } else {
      // Process inline formatting
      const processed = line
        .replace(/`([^`]+)`/g, '<code class="bg-gray-800 text-green-300 px-1 rounded text-sm">$1</code>')
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      result.push(
        <p
          key={key++}
          className="leading-relaxed"
          dangerouslySetInnerHTML={{ __html: processed || '&nbsp;' }}
        />
      )
    }
  }

  if (inCode && codeLines.length > 0) {
    result.push(
      <pre key={key++} className="bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto text-sm border border-gray-700 my-2">
        <code>{codeLines.join('\n')}</code>
      </pre>
    )
  }

  return result
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [pendingImage, setPendingImage] = useState<string | null>(null)
  const [urlFetching, setUrlFetching] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function handleSend() {
    const trimmed = input.trim()
    if (!trimmed && !pendingImage) return
    if (loading) return

    let userContent: string | ContentBlock[] = trimmed

    // Check if the input is a URL
    if (trimmed && isURL(trimmed) && !pendingImage) {
      setUrlFetching(true)
      try {
        const res = await fetch('/api/fetch-url', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: trimmed }),
        })
        const data = await res.json()
        if (data.content) {
          userContent = [
            { type: 'text', text: `I'm sharing the content of this URL: ${trimmed}\n\nPage content:\n${data.content}` },
          ]
        }
      } catch {
        // fallback to plain text
      } finally {
        setUrlFetching(false)
      }
    }

    // If there's a pending image, build multipart content
    if (pendingImage) {
      const blocks: ContentBlock[] = []
      if (trimmed) {
        blocks.push({ type: 'text', text: trimmed })
      }
      blocks.push({ type: 'image', image_url: pendingImage })
      userContent = blocks
    }

    const userMessage: Message = { role: 'user', content: userContent }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setPendingImage(null)
    setLoading(true)

    // Add empty assistant message for streaming
    setMessages((prev) => [...prev, { role: 'assistant', content: '' }])

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })

      if (!res.ok || !res.body) throw new Error('Stream failed')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let assistantText = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value, { stream: true })
        const lines = chunk.split('\n')

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const data = line.slice(6).trim()
          if (data === '[DONE]') break
          try {
            const parsed = JSON.parse(data)
            if (parsed.text) {
              assistantText += parsed.text
              setMessages((prev) => {
                const updated = [...prev]
                updated[updated.length - 1] = { role: 'assistant', content: assistantText }
                return updated
              })
            }
          } catch {
            // ignore parse errors
          }
        }
      }
    } catch (err) {
      console.error('Chat error:', err)
      setMessages((prev) => {
        const updated = [...prev]
        updated[updated.length - 1] = {
          role: 'assistant',
          content: 'Sorry, an error occurred. Please try again.',
        }
        return updated
      })
    } finally {
      setLoading(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      setPendingImage(reader.result as string)
    }
    reader.readAsDataURL(file)
    e.target.value = ''
  }

  return (
    <div className="flex flex-col flex-1 min-h-0">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center py-16">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-200 mb-2">Claude Shopify Assistant</h2>
            <p className="text-gray-400 text-sm max-w-md">
              Ask me anything about Shopify development, Liquid templates, APIs, or paste a URL / upload a screenshot for analysis.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2 max-w-md w-full">
              {[
                'How do I create a custom Shopify section?',
                'Explain the Storefront API vs Admin API',
                'Help me write a GraphQL product query',
                'How do I add metafields to products?',
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => {
                    setInput(suggestion)
                    textareaRef.current?.focus()
                  }}
                  className="text-left text-xs text-gray-400 bg-gray-800 hover:bg-gray-750 border border-gray-700 rounded-lg p-3 transition-colors hover:text-gray-200"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.role === 'assistant' && (
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            )}
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white rounded-br-sm'
                  : 'bg-gray-800 text-gray-100 rounded-bl-sm border border-gray-700'
              }`}
            >
              {msg.role === 'assistant' ? (
                typeof msg.content === 'string' && msg.content === '' && loading && i === messages.length - 1 ? (
                  <div className="flex gap-1 items-center py-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                ) : (
                  <div className="space-y-1">
                    {typeof msg.content === 'string' ? renderMarkdown(msg.content) : <MessageContent content={msg.content} />}
                  </div>
                )
              ) : (
                <MessageContent content={msg.content} />
              )}
            </div>
            {msg.role === 'user' && (
              <div className="w-7 h-7 rounded-lg bg-gray-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input area */}
      <div className="border-t border-gray-800 p-4">
        {pendingImage && (
          <div className="mb-2 flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={pendingImage} alt="Pending upload" className="h-12 w-12 object-cover rounded border border-gray-600" />
            <span className="text-xs text-gray-400">Image attached</span>
            <button
              onClick={() => setPendingImage(null)}
              className="ml-auto text-gray-500 hover:text-gray-300 text-xs"
            >
              ✕ Remove
            </button>
          </div>
        )}
        <div className="flex items-end gap-2 bg-gray-800 rounded-xl border border-gray-700 p-2">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-700 rounded-lg transition-colors flex-shrink-0"
            title="Upload screenshot"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={urlFetching ? 'Fetching URL...' : 'Type a message, paste a URL, or upload a screenshot…'}
            disabled={loading || urlFetching}
            rows={1}
            className="flex-1 bg-transparent text-gray-100 placeholder-gray-500 text-sm resize-none outline-none py-1.5 px-1 max-h-32 overflow-y-auto"
            style={{ minHeight: '36px' }}
          />
          <button
            onClick={handleSend}
            disabled={loading || urlFetching || (!input.trim() && !pendingImage)}
            className="p-2 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:text-gray-500 text-white rounded-lg transition-colors flex-shrink-0"
            title="Send"
          >
            {loading || urlFetching ? (
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            )}
          </button>
        </div>
        <p className="text-xs text-gray-600 mt-1.5 text-center">
          Press Enter to send · Shift+Enter for newline · Paste a URL for context
        </p>
      </div>
    </div>
  )
}
