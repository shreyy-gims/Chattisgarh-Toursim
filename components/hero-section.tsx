"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, MapPin, Calendar, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { useStateContext } from "@/contexts/state-context"

export default function HeroSection() {
  const { selectedState } = useStateContext()
  const [searchQuery, setSearchQuery] = useState("")

  const heroData = {
    chhattisgarh: {
      title: "Discover the Heart of India",
      subtitle: "Experience Chhattisgarh's Natural Beauty & Rich Heritage",
      image: "/bhilaisteelplant.jpg",
      highlights: ["Ancient Temples", "Pristine Waterfalls", "Tribal Culture", "Wildlife Sanctuaries"],
    },
    rajasthan: {
      title: "Land of Kings and Palaces",
      subtitle: "Experience Royal Heritage & Desert Adventures in Rajasthan",
      image: "/placeholder.svg?height=1080&width=1920&text=Rajasthan+Palace",
      highlights: ["Majestic Palaces", "Desert Safari", "Royal Heritage", "Colorful Festivals"],
    },
    kerala: {
      title: "God's Own Country",
      subtitle: "Experience Backwaters, Hills & Spices in Kerala",
      image: "/placeholder.svg?height=1080&width=1920&text=Kerala+Backwaters",
      highlights: ["Serene Backwaters", "Hill Stations", "Spice Gardens", "Ayurvedic Wellness"],
    },
    himachal: {
      title: "Land of Snow-Capped Mountains",
      subtitle: "Experience Adventure & Spirituality in Himachal Pradesh",
      image: "/placeholder.svg?height=1080&width=1920&text=Himachal+Mountains",
      highlights: ["Mountain Adventures", "Spiritual Retreats", "Apple Orchards", "Scenic Valleys"],
    },
    goa: {
      title: "Pearl of the Orient",
      subtitle: "Experience Beaches, Heritage & Vibrant Culture in Goa",
      image: "/placeholder.svg?height=1080&width=1920&text=Goa+Beach",
      highlights: ["Golden Beaches", "Portuguese Heritage", "Vibrant Nightlife", "Water Sports"],
    },
    maharashtra: {
      title: "Gateway to India",
      subtitle: "Experience Bollywood, Heritage Caves & Hill Stations in Maharashtra",
      image: "/placeholder.svg?height=1080&width=1920&text=Maharashtra+Gateway",
      highlights: ["Bollywood Studios", "Ajanta Ellora Caves", "Hill Stations", "Marathi Culture"],
    },
    madhyapradesh: {
      title: "Heart of Incredible India",
      subtitle: "Experience Tigers, Temples & Tribal Heritage in Madhya Pradesh",
      image: "/placeholder.svg?height=1080&width=1920&text=Madhya+Pradesh+Tigers",
      highlights: ["Tiger Reserves", "Khajuraho Temples", "Tribal Culture", "Ancient Forts"],
    },
    odisha: {
      title: "Soul of Incredible India",
      subtitle: "Experience Ancient Temples, Classical Dance & Pristine Beaches in Odisha",
      image: "/placeholder.svg?height=1080&width=1920&text=Odisha+Temples",
      highlights: ["Jagannath Temple", "Classical Dance", "Golden Beaches", "Tribal Art"],
    },
    jharkhand: {
      title: "Land of Forests and Waterfalls",
      subtitle: "Experience Tribal Culture, Waterfalls & Wildlife in Jharkhand",
      image: "/placeholder.svg?height=1080&width=1920&text=Jharkhand+Waterfalls",
      highlights: ["Tribal Heritage", "Spectacular Waterfalls", "Dense Forests", "Wildlife Sanctuaries"],
    },
    andhrapradesh: {
      title: "Kohinoor of India",
      subtitle: "Experience Ancient Temples, Spicy Cuisine & Rich Heritage in Andhra Pradesh",
      image: "/placeholder.svg?height=1080&width=1920&text=Andhra+Pradesh+Temples",
      highlights: ["Tirupati Temple", "Spicy Cuisine", "Buddhist Heritage", "Coastal Beauty"],
    },
  }

  const currentHero = heroData[selectedState.id as keyof typeof heroData] || heroData.chhattisgarh

  return (
    <section className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={currentHero.image || "/placeholder.svg"}
          alt={`${selectedState.name} landscape`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">{currentHero.title}</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white/90">{currentHero.subtitle}</p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {currentHero.highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium"
              >
                {highlight}
              </div>
            ))}
          </div>

          {/* Search Card */}
          <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm">
            <CardContent className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Destination
                  </label>
                  <Input
                    placeholder={`Search in ${selectedState.name}`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Check-in
                  </label>
                  <Input type="date" className="border-gray-300" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Check-out
                  </label>
                  <Input type="date" className="border-gray-300" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Guests
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4+ Guests</option>
                  </select>
                </div>
              </div>
              <Button className="w-full mt-4 sm:mt-6" size="lg">
                <Search className="h-4 w-4 mr-2" />
                Search Destinations
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
