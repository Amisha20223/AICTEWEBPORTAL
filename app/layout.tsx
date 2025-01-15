import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navi'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AICTE Curriculum Design Portal',
  description: 'A comprehensive platform for curriculum design and educational resource management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

