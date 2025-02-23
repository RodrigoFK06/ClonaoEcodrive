import FlipCard from "../ui/flip-card"

interface RewardCardProps {
  title: string
  days: string
  imageSrc: string
}

export default function RewardCard({ title, days, imageSrc }: RewardCardProps) {
  return (
    <FlipCard
      title={title}
      description={`Este premio está disponible los días: ${days}. ¡No pierdas la oportunidad de ganarlo!`}
      imageUrl={imageSrc}
    />
  )
}

