import MessageInputView from '@/components/MessageInputView'
import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WG Smarthome',
  description: 'Smarthome Website',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  height: 'device-height',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-dark-100'>
      <body className={`
        ${inter.className}
        h-screen
        max-h-screen
        flex
        flex-col
        justify-between
      `}>
        <div
          className="
            h-full
            max-h-full
            overflow-auto
            scrollbar-hidden
          "
        >
          {children}
        </div>
        <div className='m-1 mt-3'>
          <MessageInputView />
        </div>
      </body>
    </html>
  )
}
