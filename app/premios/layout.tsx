import type React from "react"
import Header from "@/components/ui/UniversalHeader"
import Footer from "@/components/ui/footer"
import UniversalHeader from "@/components/ui/UniversalHeader"

export default function PrizesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <UniversalHeader />
      {children}
    </div>
  )
}

