"use client"
import type { Reward } from "@/types/rewards"
import RewardCard from "./reward-card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import SkeletonLoader from "../ui/skeleton-loader"
import { motion } from "framer-motion"

interface RewardsGridProps {
  title: string
  rewards: Reward[]
  isLoading: boolean
  error?: string
}

export default function RewardsGrid({ 
  title, 
  rewards, 
  isLoading, 
  error 
}: RewardsGridProps) {
  return (
    <section className="py-8 container mx-auto px-4 font-nunito overflow-hidden">
      <motion.div
        className="bg-[#E67E22] rounded-[2rem] p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Título con animación independiente */}
        <motion.h2
          className="text-3xl font-black text-black text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {title}
        </motion.h2>

        {/* Contenido condicional */}
        {isLoading && <SkeletonLoader />}
        
        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {!isLoading && !error && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
          >
            {rewards.map((reward, index) => (
              <motion.div
                key={reward.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <RewardCard {...reward} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}