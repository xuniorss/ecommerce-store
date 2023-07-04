import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import { Urbanist } from 'next/font/google'
import { ReactNode } from 'react'

import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
   title: 'Store',
   description: 'Store',
}

export default function RootLayout({ children }: { children: ReactNode }) {
   return (
      <html lang="pt-BR">
         <body className={font.className}>
            <ModalProvider />
            <ToastProvider />
            {/* @ts-expect-error Server Component */}
            <Navbar />
            {children}
            <Footer />
         </body>
      </html>
   )
}
