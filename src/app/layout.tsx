import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import Header from '@/layout/header/Header'

import './globals.scss'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin', 'cyrillic'],
  variable: '--var-roboto'
})

export const metadata: Metadata = {
  title: 'Рак щитоподібної залози',
  description:
    'Злоякісна пухлина щитоподібної залози, що походить з фолікулярних або С-клітин щитоподібної залози та є найпоширенішим злоякісним новоутоворенням серед інших органів ендокринної системи.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={roboto.variable}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
