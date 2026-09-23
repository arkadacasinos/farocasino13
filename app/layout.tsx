import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Faro Casino — официальный сайт, зеркало и игра онлайн',
  description: 'Faro Casino: официальный сайт, рабочее зеркало и понятный гид по игре онлайн. Узнайте, как проверить ссылку, начать игру и соблюдать правила безопасности.',
  generator: 'v0.app',
  alternates: { canonical: 'https://farocasino13.vercel.app/' },
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b1424',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <link rel="canonical" href="https://farocasino13.vercel.app/" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0b1424" />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
