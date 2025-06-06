"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Maximize, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const virtualTours = [
  {
    id: "chitrakote",
    name: "Chitrakote Falls",
    description:
      "Chitrakot Waterfall is a beautiful waterfall situated on the river Indravati in Bastar district of Chhattisgarh state of India. The height of this waterfall is 90 feet. The specialty of this waterfall is that during the rainy days this water is reddish it looks absolutely white during the summer moonlight night,The waterfall is located at a distance of 40 km from Jagdalpur and 273 km from Raipur. Chitrakote waterfall is Chhattisgarh’s largest and most water-logged waterfall. dered as the main waterfall of Bastar division. Due to being adjacent to Jagdalpur it has also gained fame as a major picnic spot. Due to the similar shape of horse feet this fall is also called Niagara of India. Chitrakoot waterfall is very beautiful and the tourists like it very much. A large water body falling in the middle of the strong trees and Vindhya ranges which falls from this water fall attracts tourists attention,",
    image: "/chitrakote.jpg",
    location: "Bastar",
  },
  {
    id: "Onakona Temple",
    name: "Onakona Vishnu temple",
    description:
      "Explore the ancient Buddhist and Hindu archaeological site with temples dating back to the 5th-8th century.",
    image: "/Onakona Temple.jpg",
    location: "Mahasamund",
  },
  {
    id: "bhoramdeo",
    name: "Bhoramdeo Temple",
    description:
      "Discover the 11th century temple known as the 'Khajuraho of Chhattisgarh' with its intricate carvings.",
    image: "/bhoramdev.jpg",
    location: "Kawardha",
  },
]

export default function VirtualTourViewer() {
  const [activeTour, setActiveTour] = useState(virtualTours[0])
  const [isPlaying, setIsPlaying] = useState(false)

  const handleNext = () => {
    const currentIndex = virtualTours.findIndex((tour) => tour.id === activeTour.id)
    const nextIndex = (currentIndex + 1) % virtualTours.length
    setActiveTour(virtualTours[nextIndex])
    setIsPlaying(false)
  }

  const handlePrevious = () => {
    const currentIndex = virtualTours.findIndex((tour) => tour.id === activeTour.id)
    const previousIndex = (currentIndex - 1 + virtualTours.length) % virtualTours.length
    setActiveTour(virtualTours[previousIndex])
    setIsPlaying(false)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
          <Image src={activeTour.image || "/placeholder.svg"} alt={activeTour.name} fill className="object-cover" />

          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <Button
                variant="outline"
                size="icon"
                className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                onClick={() => setIsPlaying(true)}
              >
                <Play className="h-8 w-8 text-white" fill="white" />
                <span className="sr-only">Play virtual tour</span>
              </Button>
            </div>
          )}

          {isPlaying && (
            <div className="absolute bottom-4 right-4 flex gap-2">
              <Button variant="outline" size="icon" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                <Maximize className="h-4 w-4 text-white" />
                <span className="sr-only">Fullscreen</span>
              </Button>
            </div>
          )}

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-6 w-6 text-white" />
            <span className="sr-only">Previous tour</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6 text-white" />
            <span className="sr-only">Next tour</span>
          </Button>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">{activeTour.name}</h3>
          <p className="text-muted-foreground">{activeTour.description}</p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Available Virtual Tours</h3>
        <Tabs defaultValue="popular" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
          </TabsList>

          <TabsContent value="popular" className="space-y-4">
            {virtualTours.map((tour) => (
              <Card
                key={tour.id}
                className={`cursor-pointer transition-colors ${activeTour.id === tour.id ? "border-primary" : ""}`}
                onClick={() => {
                  setActiveTour(tour)
                  setIsPlaying(false)
                }}
              >
                <CardContent className="p-3 flex gap-3">
                  <div className="relative h-20 w-32 flex-shrink-0 rounded-md overflow-hidden">
                    <Image src={tour.image || "/placeholder.svg"} alt={tour.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-medium">{tour.name}</h4>
                    <p className="text-xs text-muted-foreground">{tour.location}</p>
                    <div className="flex items-center mt-1">
                      <Play className="h-3 w-3 text-primary mr-1" />
                      <span className="text-xs">360° Virtual Tour</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="new" className="space-y-4">
            <Card className="cursor-pointer">
              <CardContent className="p-3 flex gap-3">
                <div className="relative h-20 w-32 flex-shrink-0 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Tribal Museum"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Tribal Museum</h4>
                  <p className="text-xs text-muted-foreground">Raipur</p>
                  <div className="flex items-center mt-1">
                    <Play className="h-3 w-3 text-primary mr-1" />
                    <span className="text-xs">360° Virtual Tour</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer">
              <CardContent className="p-3 flex gap-3">
                <div className="relative h-20 w-32 flex-shrink-0 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Kanger Valley"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Kanger Valley</h4>
                  <p className="text-xs text-muted-foreground">Bastar</p>
                  <div className="flex items-center mt-1">
                    <Play className="h-3 w-3 text-primary mr-1" />
                    <span className="text-xs">360° Virtual Tour</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
