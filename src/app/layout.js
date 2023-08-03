import Header from '@/components/Header'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'MARVELdex',
  description: "Projeto criado com a intenção de praticar o uso de API's e adaptação ao NEXTJS 13",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
