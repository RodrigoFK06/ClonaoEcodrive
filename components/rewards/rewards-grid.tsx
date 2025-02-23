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

export default function RewardsGrid({ title, rewards, isLoading, error }: RewardsGridProps) {
  return (
    <section className="py-8 container mx-auto px-4">
      <div className="bg-[#E67E22] rounded-[2rem] p-6">
        <motion.h2
          className="text-3xl font-bold text-black text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>

        {isLoading ? (
          <SkeletonLoader />
        ) : error ? (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : (
          <motion.div
            className="grid grid-cols-3 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {rewards.map((reward, index) => (
              <motion.div
                key={reward.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <RewardCard {...reward} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}

