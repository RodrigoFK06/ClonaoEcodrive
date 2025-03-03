import { HomeHeader } from "@/components/home/header"
import { Services } from "@/components/home/services"
import { Future } from "@/components/home/future"
import { MissionVision } from "@/components/home/mission-vision"
import Footer from "@/components/ui/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDF2E9]">
      <HomeHeader />
      <main>
        <Services />
        <Future />
        <MissionVision />
      </main>
      <Footer />
    </div>
  )
}
/*
import { HomeHeader } from "@/components/home/header"
import { Services } from "@/components/home/services"
import { Future } from "@/components/home/future"
import { MissionVision } from "@/components/home/mission-vision"
import { Stats } from "@/components/home/stats"
import Footer from "@/components/ui/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDF2E9]">
      <HomeHeader />
      <main>
        <Services />
        <Future />
        <Stats />
        <MissionVision />
      </main>
      <Footer />
    </div>
  )
}
*/
