import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ryo — Portfolio',
  description: 'Ryo のポートフォリオとブログ',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>
}
