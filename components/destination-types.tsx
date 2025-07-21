"use client"

import { Mountain, Waves, Building2, TreePine, Package, Palette } from "lucide-react"
import DestinationTypeCard from "./destination-type-card"
import { useStateContext } from "@/contexts/state-context"

export default function DestinationTypes() {
  const { selectedState } = useStateContext()

  const destinationTypes = [
  {
    icon: Waves,
    title: "Waterfalls",
    count: selectedState.destinations.waterfalls,
    image: "/chitrakote.jpg",
    description: "Spectacular cascades and natural pools",
    color: "bg-blue-500",
  },
  {
    icon: TreePine,
    title: "National Parks",
    count: selectedState.destinations.nationalParks,
    image: "/images/national-parks.jpg",
    description: "Wildlife sanctuaries and nature reserves",
    color: "bg-green-500",
  },
  {
    icon: Building2,
    title: "Temples",
    count: selectedState.destinations.temples,
    image: "/images/temples.jpg",
    description: "Ancient architecture and spiritual sites",
    color: "bg-orange-500",
  },
  {
    icon: Mountain,
    title: "Water Parks",
    count: selectedState.destinations.waterParks,
    image: "/images/water-parks.jpg",
    description: "Fun-filled aquatic adventures",
    color: "bg-cyan-500",
  },
  {
    icon: Package,
    title: "Tour Packages",
    count: selectedState.destinations.packages,
    image: "/images/tour-packages.jpg",
    description: "Curated experiences and guided tours",
    color: "bg-purple-500",
  },
  {
    icon: Palette,
    title: "Cultural Sites",
    count: selectedState.destinations.culturalSites,
    image: "/images/cultural-sites.jpg",
    description: "Heritage sites and cultural experiences",
    color: "bg-pink-500",
  },
]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {destinationTypes.map((type, index) => (
        <DestinationTypeCard key={index} {...type} />
      ))}
    </div>
  )
}
