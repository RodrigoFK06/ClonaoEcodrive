"use client"

import { useEffect, useState } from "react"
import type { Reward } from "@/types/rewards"
import { fetchPassengerRewards } from "@/lib/api"
import RewardsGrid from "./rewards-grid"

export default function PassengerRewards() {
  const [rewards, setRewards] = useState<Reward[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string>()

  useEffect(() => {
    const loadRewards = async () => {
      try {
        setIsLoading(true)
        const response = await fetchPassengerRewards()
        if (response.error) {
          setError(response.error)
        } else {
          setRewards(response.data)
        }
      } catch (e) {
        setError("Error al cargar los premios")
      } finally {
        setIsLoading(false)
      }
    }

    loadRewards()
  }, [])

  return <RewardsGrid title="PREMIOS PASAJEROS" rewards={rewards} isLoading={isLoading} error={error} />
}

