import type { ApiResponse } from "@/types/rewards";
import { fallbackRewards } from "./fallback-data";
import { fetchFromApi } from "./api";

export async function fetchDriverRewards(): Promise<ApiResponse> {
  return fetchFromApi("driver-rewards", fallbackRewards.driverRewards);
}

export async function fetchPassengerRewards(): Promise<ApiResponse> {
  return fetchFromApi("passenger-rewards", fallbackRewards.passengerRewards);
}
