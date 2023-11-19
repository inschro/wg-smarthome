import MessageInputView from '@/components/MessageInputView'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SideMenu from '@/components/SideMenu'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WG Smarthome',
  description: 'Smarthome Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en"
      className="
        bg-[url('/images/background.bmp')]
        bg-repeat
        text-light
      "
    >
      <ClerkProvider
        appearance={
          {elements: {footer: "hidden"}}
        }
      >
        <body className={`
          ${inter.className}
          h-screen
          max-h-screen
          flex
          flex-col
          justify-between
          backdrop-blur-sm
          backdrop-brightness-50
        `}>
          <SideMenu/>
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
      </ClerkProvider>
    </html>
  )
}
