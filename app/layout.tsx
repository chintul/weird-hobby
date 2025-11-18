import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Weird Hobby Picker 🎲',
  description: 'Discover unusual hobbies you never knew existed.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
