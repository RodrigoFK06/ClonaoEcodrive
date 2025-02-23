import type React from "react"
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"

export default function BeneficiosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

