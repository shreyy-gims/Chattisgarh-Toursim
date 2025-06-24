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
      "Chitrakote Falls, often referred to as the (Niagara of India) is the widest waterfall in India, cascading dramatically from a height of about 90 feet. Located on the Indravati River in Bastar district, Chhattisgarh, this horseshoe-shaped waterfall offers a breathtaking sight, especially during the monsoon when the water flow is at its peak and the surroundings are lush and vibrant. The reddish hue of the water in the rainy season and the moonlit glow during summer nights create a magical ambiance. Surrounded by dense forests and natural beauty, Chitrakote is not only a photographer’s delight but also a popular spot for picnics, nature lovers, and spiritual seekers.",
    image: "/chitrakote.jpg",
    location: "Bastar",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!4v1750770319859!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRFM3ZUt4ZEE.!2m2!1d19.20727965850413!2d81.70004266444822!3f93.23426311766514!4f-7.288928584390703!5f0.7820865974627469" 
  },
  {
    id: "Onakona Temple",
    name: "Onakona Vishnu temple",
    description: "The Onakona Vishnu Temple is an ancient and culturally significant site nestled in the Mahasamund district of Chhattisgarh. This historical temple showcases early medieval Indian architecture and spiritual heritage, with roots believed to trace back to the 7th–8th century. While relatively lesser known, Onakona exudes a peaceful charm with its weathered stone carvings and intricate detailing, reflecting the artistic brilliance of early temple craftsmanship. The temple stands as a silent testament to the rich religious and architectural traditions of Chhattisgarh and invites history enthusiasts and pilgrims alike to explore its sacred grounds.",
    image: "/Onakona Temple.jpg",
    location: "Mahasamund",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!4v1750770645296!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ3kxOFA4YUE.!2m2!1d20.57458750307784!2d81.44453783571143!3f271.0111754807709!4f-3.0061366913180194!5f0.7820865974627469" 
  },
  {
    id: "bhoramdeo",
    name: "Bhoramdeo Temple",
    description: "Bhoramdeo Temple, often called the (Khajuraho of Chhattisgarh) is a magnificent 11th-century temple located in the Kabirdham district. Dedicated to Lord Shiva, this exquisite structure is adorned with detailed stone carvings depicting scenes from everyday life, mythology, and divine lore. The temple complex sits serenely at the foothills of the Maikal range, surrounded by thick forests, giving it an atmosphere of seclusion and mystique. Built in the Nagara style of architecture, Bhoramdeo's artistic richness and sculptural elegance make it a gem among India's heritage sites, drawing admiration from both devotees and art historians.",
    image: "/bhoramdev.jpg",
    location: "Kawardha",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!4v1750770898910!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ2E3TzJFN0FF!2m2!1d22.11533842745313!2d81.14801356665986!3f325.8646975978538!4f2.9813921476023495!5f0.7820865974627469"  
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
          {isPlaying ? (
  <iframe
    src={activeTour.embedUrl}
    className="w-full h-full absolute inset-0"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
  />
) : (
  <Image
    src={activeTour.image || "/placeholder.svg"}
    alt={activeTour.name}
    fill
    className="object-cover"
  />
)}


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
