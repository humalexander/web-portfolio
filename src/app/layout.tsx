import type { Metadata } from 'next'
import { Space_Grotesk, Space_Mono } from 'next/font/google'
import './globals.css'

const spaceSans = Space_Grotesk({
  variable: '--font-space-sans',
  subsets: ['latin']
})

const spaceMono = Space_Mono({
  variable: '--font-space-mono',
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Alexander Hum',
  description: "Alex's web portfolio."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceSans.variable} ${spaceMono.variable} antialiased bg-neutral-900`}
      >
        {children}
      </body>
    </html>
  )
}
