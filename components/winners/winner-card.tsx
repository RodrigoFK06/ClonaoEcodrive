import FlipCard from "../ui/flip-card"

interface WinnerCardProps {
  name: string
  prize: string
  image: string
  date: string
}

export default function WinnerCard({ name, prize, image, date }: WinnerCardProps) {
  return (
    <div className="flex flex-col">
      <div className="w-full aspect-square">
        <FlipCard
          title={prize}
          description={`¡Felicitaciones ${name}! Has ganado este increíble premio. Disfruta de tu ${prize.toLowerCase()}.`}
          imageUrl={image.startsWith("http") ? image : "/placeholder.svg"} // 🔥 Asegurar URL válida
          winnerName={name}
          size="full"
        />

      </div>
      <h3 className="text-xl font-bold text-[#E67E22] text-center mt-4">{prize}</h3>
      <p className="text-gray-600 text-center">{date}</p>
    </div>
  )
}

