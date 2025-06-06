"use client";

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DestinationsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Explore Chhattisgarh</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover the hidden treasures of Chhattisgarh - from majestic waterfalls and ancient temples to vibrant tribal
          culture and lush forests.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination) => (
          <Card key={destination.id} className="overflow-hidden group">
            <div className="relative h-60 overflow-hidden">
              <Image
                src={destination.imageUrl || "/placeholder.svg"}
                alt={destination.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3">
                <Badge variant="secondary" className="bg-white/90 text-black font-medium">
                  {destination.category}
                </Badge>
              </div>
            </div>
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-xl">{destination.name}</CardTitle>
              </div>
              <div className="flex items-center text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{destination.location}</span>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-foreground/80">{destination.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                Save to Wishlist
              </Button>
              <Button asChild size="sm" className="gap-1">
                <Link href={`/destinations/${destination.id}`}>
                  Explore <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

const destinations = [
  {
    id: "chitrakote-falls",
    name: "Chitrakote Falls",
    location: "Bastar District",
    category: "Waterfall",
    description:
      "Known as the 'Niagara Falls of India', this horseshoe-shaped waterfall on the Indravati River is a breathtaking natural wonder.",
    imageUrl: "/bhilaisteelplant.jpg",
  },
  {
    id: "barnawapara-wildlife",
    name: "Barnawapara Wildlife Sanctuary",
    location: "Mahasamund District",
    category: "Wildlife",
    description:
      "Home to diverse flora and fauna including leopards, bears, and various species of deer in a pristine forest setting.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "sirpur",
    name: "Sirpur",
    location: "Mahasamund District",
    category: "Heritage",
    description:
      "An ancient city with archaeological remains of Buddhist viharas, temples, and monasteries dating back to the 5th-8th centuries.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "bastar",
    name: "Bastar Tribal Culture",
    location: "Bastar District",
    category: "Culture",
    description:
      "Experience the vibrant tribal culture, traditional arts, crafts, and festivals of the indigenous communities of Bastar.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "kanger-valley",
    name: "Kanger Valley National Park",
    location: "Bastar District",
    category: "Nature",
    description:
      "A biodiversity hotspot featuring stunning limestone caves, pristine waterfalls, and rich wildlife in the Eastern Highlands.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "raipur-purkhauti",
    name: "Purkhauti Muktangan",
    location: "Raipur",
    category: "Culture",
    description:
      "An open-air museum showcasing the rich cultural heritage, traditional houses, and artifacts of Chhattisgarh.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "mainpat",
    name: "Mainpat",
    location: "Surguja District",
    category: "Hill Station",
    description:
      "Known as the 'Shimla of Chhattisgarh', this plateau offers panoramic views, lush greenery, and a pleasant climate.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "bhoramdeo-temple",
    name: "Bhoramdeo Temple",
    location: "Kawardha District",
    category: "Heritage",
    description:
      "Often called the 'Khajuraho of Chhattisgarh', this 11th-century temple features intricate carvings and sculptures.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "tirathgarh-falls",
    name: "Tirathgarh Falls",
    location: "Bastar District",
    category: "Waterfall",
    description:
      "A stunning multi-tiered waterfall cascading down rocky steps, surrounded by lush forests and scenic beauty.",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
]
