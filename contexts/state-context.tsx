"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export interface StateInfo {
  id: string
  name: string
  displayName: string
  description: string
  image: string
  destinations: {
    waterfalls: number
    nationalParks: number
    temples: number
    waterParks: number
    packages: number
    culturalSites: number
  }
}

const states: StateInfo[] = [
  {
    id: "chhattisgarh",
    name: "Chhattisgarh",
    displayName: "Chhattisgarh Tourism",
    description: "Experience the Heart of Incredible India",
    image: "/buffalo.jpg",
    destinations: {
      waterfalls: 15,
      nationalParks: 8,
      temples: 25,
      waterParks: 5,
      packages: 20,
      culturalSites: 30,
    },
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    displayName: "Rajasthan Tourism",
    description: "Land of Kings and Royal Heritage",
    image: "/rajasthanhero2.png",
    destinations: {
      waterfalls: 8,
      nationalParks: 12,
      temples: 45,
      waterParks: 3,
      packages: 35,
      culturalSites: 60,
    },
  },
  {
    id: "kerala",
    name: "Kerala",
    displayName: "Kerala Tourism",
    description: "God's Own Country",
    image: "/keralahero.jpg",
    destinations: {
      waterfalls: 20,
      nationalParks: 15,
      temples: 30,
      waterParks: 8,
      packages: 40,
      culturalSites: 25,
    },
  },
  {
    id: "himachal",
    name: "Himachal Pradesh",
    displayName: "Himachal Tourism",
    description: "Land of Snow-Capped Mountains",
    image: "/himachalpradeshhero1.png",
    destinations: {
      waterfalls: 12,
      nationalParks: 10,
      temples: 35,
      waterParks: 2,
      packages: 30,
      culturalSites: 20,
    },
  },
  {
    id: "goa",
    name: "Goa",
    displayName: "Goa Tourism",
    description: "Pearl of the Orient",
    image: "/goahero.png",
    destinations: {
      waterfalls: 6,
      nationalParks: 4,
      temples: 15,
      waterParks: 10,
      packages: 25,
      culturalSites: 18,
    },
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    displayName: "Tamil Nadu Tourism",
    description: "Land of Temples and Rich Culture",
    image: "/tamilnaduhero.png",
    destinations: {
      waterfalls: 18,
      nationalParks: 14,
      temples: 65,
      waterParks: 7,
      packages: 45,
      culturalSites: 55,
    },
  },
  {
    id: "karnataka",
    name: "Karnataka",
    displayName: "Karnataka Tourism",
    description: "One State Many Worlds",
    image: "/karnatakahero.jpg",
    destinations: {
      waterfalls: 22,
      nationalParks: 16,
      temples: 40,
      waterParks: 9,
      packages: 38,
      culturalSites: 42,
    },
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    displayName: "Maharashtra Tourism",
    description: "Unlimited Maharashtra",
    image: "/maharashtrahero.jpg",
    destinations: {
      waterfalls: 25,
      nationalParks: 18,
      temples: 50,
      waterParks: 12,
      packages: 42,
      culturalSites: 48,
    },
  },
  {
    id: "madhya-pradesh",
    name: "Madhya Pradesh",
    displayName: "Madhya Pradesh Tourism",
    description: "Heart of Incredible India",
    image: "/madhyapradeshhero.jpg",
    destinations: {
      waterfalls: 15,
      nationalParks: 22,
      temples: 55,
      waterParks: 6,
      packages: 35,
      culturalSites: 65,
    },
  },
  {
    id: "odisha",
    name: "Odisha",
    displayName: "Odisha Tourism",
    description: "Soul of Incredible India",
    image: "/orrisahero.png",
    destinations: {
      waterfalls: 12,
      nationalParks: 8,
      temples: 40,
      waterParks: 4,
      packages: 28,
      culturalSites: 45,
    },
  },
  {
    id: "jharkhand",
    name: "Jharkhand",
    displayName: "Jharkhand Tourism",
    description: "Land of Forests and Waterfalls",
    image: "/jharkhandhero.png",
    destinations: {
      waterfalls: 20,
      nationalParks: 12,
      temples: 25,
      waterParks: 3,
      packages: 22,
      culturalSites: 30,
    },
  },
  {
    id: "andhra-pradesh",
    name: "Andhra Pradesh",
    displayName: "Andhra Pradesh Tourism",
    description: "Kohinoor of India",
    image: "/andrapradesh.png",
    destinations: {
      waterfalls: 16,
      nationalParks: 10,
      temples: 50,
      waterParks: 8,
      packages: 32,
      culturalSites: 40,
    },
  },
]

interface StateContextType {
  selectedState: StateInfo
  setSelectedState: (state: StateInfo) => void
  states: StateInfo[]
}

const StateContext = createContext<StateContextType | undefined>(undefined)

export function StateProvider({ children }: { children: React.ReactNode }) {
  const [selectedState, setSelectedState] = useState<StateInfo>(states[0])

  // Load saved state from localStorage on mount
  useEffect(() => {
    const savedStateId = localStorage.getItem("selectedState")
    if (savedStateId) {
      const savedState = states.find((state) => state.id === savedStateId)
      if (savedState) {
        setSelectedState(savedState)
      }
    }
  }, [])

  // Save state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("selectedState", selectedState.id)
  }, [selectedState])

  return <StateContext.Provider value={{ selectedState, setSelectedState, states }}>{children}</StateContext.Provider>
}

export function useStateContext() {
  const context = useContext(StateContext)
  if (context === undefined) {
    throw new Error("useStateContext must be used within a StateProvider")
  }
  return context
}
