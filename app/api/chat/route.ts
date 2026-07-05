import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

const SYSTEM_PROMPT = `You are a senior software engineer and Shopify expert. Help the user with coding tasks, Shopify development, and technical questions. When shown screenshots or URLs, analyze them and provide actionable coding advice.

You have deep expertise in:
- Shopify themes (Dawn, Liquid templating, theme architecture)
- Shopify App development (Node.js, React, Polaris, App Bridge)
- Shopify APIs (Admin REST, Admin GraphQL, Storefront API)
- Next.js, React, TypeScript, and modern web development
- Performance optimization, accessibility, and best practices

Provide clear, concise, and actionable responses. Use code examples when helpful. Format code blocks with appropriate language identifiers.`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    // Convert messages to Anthropic format
    const anthropicMessages: Anthropic.MessageParam[] = messages.map((msg: {
      role: string
      content: string | Array<{ type: string; text?: string; image_url?: string }>
    }) => {
      if (typeof msg.content === 'string') {
        return {
          role: msg.role as 'user' | 'assistant',
          content: msg.content,
        }
      }

      // Handle multipart content (text + images)
      const contentBlocks: Anthropic.ContentBlockParam[] = msg.content.map((block: {
        type: string
        text?: string
        image_url?: string
        media_type?: string
      }) => {
        if (block.type === 'text') {
          return { type: 'text' as const, text: block.text || '' }
        } else if (block.type === 'image') {
          // Extract base64 data from data URL
          const dataUrl = block.image_url || ''
          const matches = dataUrl.match(/^data:([^;]+);base64,(.+)$/)
          if (matches) {
            return {
              type: 'image' as const,
              source: {
                type: 'base64' as const,
                media_type: matches[1] as 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp',
                data: matches[2],
              },
            }
          }
        }
        return { type: 'text' as const, text: '' }
      })

      return {
        role: msg.role as 'user' | 'assistant',
        content: contentBlocks.filter(b => b.type === 'text' ? (b as Anthropic.TextBlockParam).text : true),
      }
    })

    // Stream the response
    const stream = await client.messages.stream({
      model: 'claude-sonnet-4-6',
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      messages: anthropicMessages,
    })

    // Create a ReadableStream for SSE
    const encoder = new TextEncoder()
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            if (
              chunk.type === 'content_block_delta' &&
              chunk.delta.type === 'text_delta'
            ) {
              const data = JSON.stringify({ text: chunk.delta.text })
              controller.enqueue(encoder.encode(`data: ${data}\n\n`))
            }
          }
          controller.enqueue(encoder.encode('data: [DONE]\n\n'))
          controller.close()
        } catch (err) {
          controller.error(err)
        }
      },
    })

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to process chat request' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
