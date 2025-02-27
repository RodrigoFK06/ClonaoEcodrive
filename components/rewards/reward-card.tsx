import { useState } from "react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import Image from "next/image"

interface RewardCardProps {
  title: string
  days: string
  imageSrc: string
}

export default function RewardCard({ title, days, imageSrc }: RewardCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [15, -15])
  const rotateY = useTransform(x, [-100, 100], [-15, 15])

  const springConfig = { stiffness: 300, damping: 30 }
  const rotateXSpring = useSpring(rotateX, springConfig)
  const rotateYSpring = useSpring(rotateY, springConfig)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isFlipped) return
    const rect = event.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top
    const xPct = (mouseX / width - 0.5) * 2
    const yPct = (mouseY / height - 0.5) * 2
    x.set(xPct * 100)
    y.set(yPct * 100)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    // Add padding to the parent container to create space for the 3D effect
    <div className="p-2 w-full">
      <motion.div
        className="w-full aspect-square cursor-pointer transform-gpu"
        onClick={() => setIsFlipped(!isFlipped)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
        whileHover={{ scale: 1.02 }}
        onKeyDown={(e) => e.key === "Enter" && setIsFlipped(!isFlipped)}
        tabIndex={0}
        role="button"
        aria-label={isFlipped ? "Ver imagen" : "Ver descripción"}
      >
        <motion.div
          className="w-full h-full relative shadow-xl rounded-3xl"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
        >
          {/* Cara frontal - Estilo como en la referencia del cliente */}
          <div
            className={`absolute w-full h-full bg-[#FFF5E9] rounded-3xl p-4 flex flex-col items-center ${
              isFlipped ? "pointer-events-none" : ""
            }`}
            style={{ backfaceVisibility: "hidden" }}
            aria-hidden={isFlipped}
          >
            <div className="w-full h-3/4 relative rounded-3xl overflow-hidden mb-3">
              <Image 
                src={imageSrc || "/placeholder.svg"} 
                alt={title} 
                fill 
                className="object-cover" 
                priority 
              />
            </div>
            <div className="w-full text-center">
              <h3 className="font-black text-lg text-black mb-1">{title}</h3>
              <p className="text-sm text-gray-700">Días: {days}</p>
            </div>
          </div>

          {/* Cara trasera */}
          <div
            className={`absolute w-full h-full bg-white rounded-3xl p-6 flex flex-col justify-center ${
              !isFlipped ? "pointer-events-none" : ""
            }`}
            style={{ 
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
            aria-hidden={!isFlipped}
          >
            <div>
              <h3 className="text-[#E67E22] text-xl font-bold mb-4">{title}</h3>
              <p className="text-gray-600 text-sm mb-6 whitespace-pre-line">
                Este premio está disponible los días: {days}. ¡No pierdas la oportunidad de ganarlo!
              </p>
              <button
                className="bg-[#E67E22] text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#E67E22]/90 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsFlipped(false)
                }}
              >
                Ver imagen
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}