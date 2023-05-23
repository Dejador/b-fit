import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'B-Fit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body suppressHydrationWarning={true} className={inter.className}><Navbar />{children}</body>
    </html>
  )
}
