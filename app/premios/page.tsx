import MainSection from "@/components/rewards/main-section"
import DailyRewards from "@/components/rewards/daily-rewards"
import DriverRewards from "@/components/rewards/driver-rewards"
import PassengerRewards from "@/components/rewards/passenger-rewards"
import Footer from "@/components/ui/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainSection />
      <div className="bg-[#FDF2E9] pt-16">
        <DailyRewards />
        <DriverRewards />
        <PassengerRewards />
      </div>
      <Footer />
    </div>
  )
}

