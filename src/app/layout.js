import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '¿Cuanto Vale el Dolar?',
  description: 'Valor de la compra y venta del dolar segun sunat',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className='min-h-screen'>
          {children}
        </div>
        <Footer/>
        </body>
    </html>
  )
}
