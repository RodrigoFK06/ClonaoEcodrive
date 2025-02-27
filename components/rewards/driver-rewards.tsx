"use client"

import { useEffect, useState } from "react"
import type { Reward } from "@/types/rewards"
import { fetchDriverRewards } from "@/lib/api"
import RewardsGrid from "./rewards-grid"
import LoadingMessage from "../ui/loading-message"

export default function DriverRewards() {
  const [rewards, setRewards] = useState<Reward[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [message, setMessage] = useState<string>()

  useEffect(() => {
    const loadRewards = async () => {
      try {
        setIsLoading(true)
        const response = await fetchDriverRewards()
        setRewards(response.data)
        if (response.message) {
          setMessage(response.message)
        }
      } catch (e) {
        setMessage("Mostrando datos de ejemplo. Actualizando premios...")
      } finally {
        setIsLoading(false)
      }
    }

    loadRewards()
  }, [])

  if (isLoading) {
    return <LoadingMessage />
  }

  return <RewardsGrid title="PREMIOS CONDUCTORES" rewards={rewards} message={message} isLoading={isLoading} />
}

