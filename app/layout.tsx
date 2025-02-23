import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
})

export const metadata: Metadata = {
  title: "EcoDrive+ Rewards",
  description: "Sistema de recompensas para conductores y pasajeros de EcoDrive+",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={nunito.variable}>
      <body className="font-nunito">{children}</body>
    </html>
  )
}



import './globals.css'