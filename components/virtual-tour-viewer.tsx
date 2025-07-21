"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { MapPin, ExternalLink, Eye } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useStateContext } from "@/contexts/state-context"

interface VirtualTour {
  id: string
  title: string
  location: string
  thumbnail: string
  description: string
  category: string
  embedUrl?: string
}

export default function VirtualTourViewer() {
  const { selectedState } = useStateContext()
  const [selectedTour, setSelectedTour] = useState<VirtualTour | null>(null)

  // Virtual tours data based on selected state
  const getToursForState = (stateId: string): VirtualTour[] => {
    const toursByState = {
      chhattisgarh: [
        {
          id: "chitrakote-falls",
          title: "Chitrakote Falls Virtual Tour",
          location: "Bastar, Chhattisgarh",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Chitrakote+Falls",
          description: "Experience the thundering beauty of India's widest waterfall",
          category: "Nature",
          embedUrl: "<iframe src="//www.google.com/maps/embed?pb=!4v1753033110384!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRGFvdDdfdmdF!2m2!1d19.20727753132451!2d81.69718947534021!3f122.36418661197456!4f-28.806763391154156!5f0.7820865974627469"></iframe>",
        },
        {
          id: "sirpur-heritage",
          title: "Ancient Sirpur Archaeological Site",
          location: "Mahasamund, Chhattisgarh",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Sirpur+Heritage",
          description: "Explore 1500-year-old Buddhist and Hindu temples",
          category: "Heritage",
          embedUrl: "https://maps.google.com/embed/sirpur-heritage",
        },
        {
          id: "tribal-museum",
          title: "Tribal Museum Cultural Journey",
          location: "Raipur, Chhattisgarh",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Tribal+Museum",
          description: "Discover rich tribal culture and traditional arts",
          category: "Culture",
          embedUrl: "https://maps.google.com/embed/tribal-museum",
        },
      ],
      rajasthan: [
        {
          id: "jaipur-palace",
          title: "Jaipur City Palace Tour",
          location: "Jaipur, Rajasthan",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Jaipur+Palace",
          description: "Walk through the magnificent royal palace complex",
          category: "Heritage",
          embedUrl: "https://maps.google.com/embed/jaipur-palace",
        },
        {
          id: "thar-desert",
          title: "Thar Desert Safari Experience",
          location: "Jaisalmer, Rajasthan",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Thar+Desert",
          description: "Experience the golden dunes and desert life",
          category: "Adventure",
          embedUrl: "https://maps.google.com/embed/thar-desert",
        },
        {
          id: "udaipur-lakes",
          title: "Udaipur Lake Palace Tour",
          location: "Udaipur, Rajasthan",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Udaipur+Lake",
          description: "Explore the floating marble palace on Lake Pichola",
          category: "Heritage",
          embedUrl: "https://maps.google.com/embed/udaipur-lakes",
        },
      ],
      kerala: [
        {
          id: "backwaters-cruise",
          title: "Alleppey Backwaters Cruise",
          location: "Alleppey, Kerala",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Alleppey+Backwaters",
          description: "Sail through serene canals and coconut groves",
          category: "Nature",
          embedUrl: "https://maps.google.com/embed/alleppey-backwaters",
        },
        {
          id: "munnar-tea-gardens",
          title: "Munnar Tea Plantation Walk",
          location: "Munnar, Kerala",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Munnar+Tea",
          description: "Stroll through lush green tea plantations",
          category: "Nature",
          embedUrl: "https://maps.google.com/embed/munnar-tea",
        },
        {
          id: "fort-kochi",
          title: "Historic Fort Kochi Tour",
          location: "Kochi, Kerala",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Fort+Kochi",
          description: "Discover colonial architecture and Chinese fishing nets",
          category: "Heritage",
          embedUrl: "https://maps.google.com/embed/fort-kochi",
        },
      ],
      himachal: [
        {
          id: "manali-valley",
          title: "Manali Valley Adventure",
          location: "Manali, Himachal Pradesh",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Manali+Valley",
          description: "Experience snow-capped peaks and adventure sports",
          category: "Adventure",
          embedUrl: "https://maps.google.com/embed/manali-valley",
        },
        {
          id: "dharamshala-monastery",
          title: "Dharamshala Monastery Tour",
          location: "Dharamshala, Himachal Pradesh",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Dharamshala",
          description: "Visit Tibetan monasteries and spiritual centers",
          category: "Spiritual",
          embedUrl: "https://maps.google.com/embed/dharamshala",
        },
        {
          id: "spiti-valley",
          title: "Spiti Valley Expedition",
          location: "Spiti, Himachal Pradesh",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Spiti+Valley",
          description: "Journey through the cold desert and ancient monasteries",
          category: "Adventure",
          embedUrl: "https://maps.google.com/embed/spiti-valley",
        },
      ],
      goa: [
        {
          id: "old-goa-churches",
          title: "Old Goa Churches Heritage Walk",
          location: "Old Goa, Goa",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Old+Goa",
          description: "Explore UNESCO World Heritage Portuguese churches",
          category: "Heritage",
          embedUrl: "https://maps.google.com/embed/old-goa",
        },
        {
          id: "dudhsagar-falls",
          title: "Dudhsagar Falls Nature Trek",
          location: "Mollem, Goa",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Dudhsagar+Falls",
          description: "Witness the spectacular four-tiered waterfall",
          category: "Nature",
          embedUrl: "https://maps.google.com/embed/dudhsagar-falls",
        },
        {
          id: "spice-plantation",
          title: "Goan Spice Plantation Tour",
          location: "Ponda, Goa",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Spice+Plantation",
          description: "Discover aromatic spices and traditional farming",
          category: "Nature",
          embedUrl: "https://maps.google.com/embed/spice-plantation",
        },
      ],
      "tamil-nadu": [
        {
          id: "meenakshi-temple",
          title: "Meenakshi Temple Virtual Tour",
          location: "Madurai, Tamil Nadu",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Meenakshi+Temple",
          description: "Explore the magnificent Dravidian temple architecture",
          category: "Heritage",
          embedUrl: "https://maps.google.com/embed/meenakshi-temple",
        },
        {
          id: "ooty-hills",
          title: "Ooty Hill Station Experience",
          location: "Ooty, Tamil Nadu",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Ooty+Hills",
          description: "Journey through the Queen of Hill Stations",
          category: "Nature",
          embedUrl: "https://maps.google.com/embed/ooty-hills",
        },
        {
          id: "mahabalipuram",
          title: "Mahabalipuram Shore Temple",
          location: "Mahabalipuram, Tamil Nadu",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Shore+Temple",
          description: "Discover ancient rock-cut temples by the sea",
          category: "Heritage",
          embedUrl: "https://maps.google.com/embed/mahabalipuram",
        },
      ],
      karnataka: [
        {
          id: "mysore-palace",
          title: "Mysore Palace Royal Tour",
          location: "Mysore, Karnataka",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Mysore+Palace",
          description: "Experience the opulent royal palace architecture",
          category: "Heritage",
          embedUrl: "https://maps.google.com/embed/mysore-palace",
        },
        {
          id: "hampi-ruins",
          title: "Hampi Historical Ruins",
          location: "Hampi, Karnataka",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Hampi+Ruins",
          description: "Explore the ancient Vijayanagara Empire ruins",
          category: "Heritage",
          embedUrl: "https://maps.google.com/embed/hampi-ruins",
        },
        {
          id: "coorg-coffee",
          title: "Coorg Coffee Plantation Tour",
          location: "Coorg, Karnataka",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Coorg+Coffee",
          description: "Walk through lush coffee estates in Scotland of India",
          category: "Nature",
          embedUrl: "https://maps.google.com/embed/coorg-coffee",
        },
      ],
      maharashtra: [
        {
          id: "ajanta-caves",
          title: "Ajanta Caves Virtual Experience",
          location: "Aurangabad, Maharashtra",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Ajanta+Caves",
          description: "Explore UNESCO World Heritage Buddhist cave paintings",
          category: "Heritage",
          embedUrl: "https://maps.google.com/embed/ajanta-caves",
        },
        {
          id: "ellora-caves",
          title: "Ellora Caves Rock-Cut Temples",
          location: "Aurangabad, Maharashtra",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Ellora+Caves",
          description: "Discover multi-religious rock-cut temple complex",
          category: "Heritage",
          embedUrl: "https://maps.google.com/embed/ellora-caves",
        },
        {
          id: "lonavala-hills",
          title: "Lonavala Hill Station Tour",
          location: "Lonavala, Maharashtra",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Lonavala+Hills",
          description: "Experience scenic valleys and ancient caves",
          category: "Nature",
          embedUrl: "https://maps.google.com/embed/lonavala-hills",
        },
      ],
      "madhya-pradesh": [
        {
          id: "khajuraho-temples",
          title: "Khajuraho Temples Virtual Tour",
          location: "Khajuraho, Madhya Pradesh",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Khajuraho+Temples",
          description: "Explore UNESCO World Heritage erotic temple sculptures",
          category: "Heritage",
          embedUrl: "https://maps.google.com/embed/khajuraho-temples",
        },
        {
          id: "bandhavgarh-safari",
          title: "Bandhavgarh Tiger Safari",
          location: "Umaria, Madhya Pradesh",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Bandhavgarh+Tigers",
          description: "Virtual wildlife safari in famous tiger reserve",
          category: "Wildlife",
          embedUrl: "https://maps.google.com/embed/bandhavgarh-safari",
        },
        {
          id: "sanchi-stupa",
          title: "Sanchi Stupa Buddhist Monument",
          location: "Sanchi, Madhya Pradesh",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Sanchi+Stupa",
          description: "Discover ancient Buddhist architecture and sculptures",
          category: "Heritage",
          embedUrl: "https://maps.google.com/embed/sanchi-stupa",
        },
      ],
      odisha: [
        {
          id: "jagannath-temple",
          title: "Jagannath Temple Sacred Tour",
          location: "Puri, Odisha",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Jagannath+Temple",
          description: "Experience the sacred Char Dham pilgrimage site",
          category: "Spiritual",
          embedUrl: "https://maps.google.com/embed/jagannath-temple",
        },
        {
          id: "konark-temple",
          title: "Konark Sun Temple Chariot",
          location: "Konark, Odisha",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Konark+Sun+Temple",
          description: "Marvel at the UNESCO World Heritage sun chariot temple",
          category: "Heritage",
          embedUrl: "https://maps.google.com/embed/konark-temple",
        },
        {
          id: "chilika-lake",
          title: "Chilika Lake Bird Sanctuary",
          location: "Puri, Odisha",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Chilika+Lake",
          description: "Explore Asia's largest brackish water lagoon ecosystem",
          category: "Nature",
          embedUrl: "https://maps.google.com/embed/chilika-lake",
        },
      ],
      jharkhand: [
        {
          id: "hundru-falls",
          title: "Hundru Falls Nature Experience",
          location: "Ranchi, Jharkhand",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Hundru+Falls",
          description: "Witness the spectacular 320-foot waterfall cascade",
          category: "Nature",
          embedUrl: "https://maps.google.com/embed/hundru-falls",
        },
        {
          id: "betla-safari",
          title: "Betla National Park Safari",
          location: "Latehar, Jharkhand",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Betla+National+Park",
          description: "Virtual wildlife safari in tiger reserve with ancient ruins",
          category: "Wildlife",
          embedUrl: "https://maps.google.com/embed/betla-safari",
        },
        {
          id: "deoghar-temple",
          title: "Baidyanath Jyotirlinga Temple",
          location: "Deoghar, Jharkhand",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Baidyanath+Temple",
          description: "Sacred pilgrimage to one of the twelve Jyotirlingas",
          category: "Spiritual",
          embedUrl: "https://maps.google.com/embed/deoghar-temple",
        },
      ],
      "andhra-pradesh": [
        {
          id: "tirupati-temple",
          title: "Tirupati Balaji Temple Darshan",
          location: "Tirupati, Andhra Pradesh",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Tirupati+Temple",
          description: "Virtual darshan of world's most visited Hindu temple",
          category: "Spiritual",
          embedUrl: "https://maps.google.com/embed/tirupati-temple",
        },
        {
          id: "araku-valley",
          title: "Araku Valley Coffee Plantations",
          location: "Visakhapatnam, Andhra Pradesh",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Araku+Valley",
          description: "Journey through scenic hill station and tribal culture",
          category: "Nature",
          embedUrl: "https://maps.google.com/embed/araku-valley",
        },
        {
          id: "belum-caves",
          title: "Belum Caves Underground Journey",
          location: "Kurnool, Andhra Pradesh",
          thumbnail: "/placeholder.svg?height=300&width=400&text=Belum+Caves",
          description: "Explore India's longest cave system with stalactites",
          category: "Adventure",
          embedUrl: "https://maps.google.com/embed/belum-caves",
        },
      ],
    }
    return toursByState[stateId as keyof typeof toursByState] || toursByState.chhattisgarh
  }

  const tours = getToursForState(selectedState.id)

  useEffect(() => {
    if (tours.length > 0 && !selectedTour) {
      setSelectedTour(tours[0])
    }
  }, [tours, selectedTour])

  const handleTourSelect = (tour: VirtualTour) => {
    setSelectedTour(tour)
  }

  const openVirtualTour = () => {
    if (selectedTour?.embedUrl) {
      window.open(selectedTour.embedUrl, "_blank")
    }
  }

  if (!selectedTour) return null

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Main Tour Display */}
      <Card className="overflow-hidden">
        <div className="relative aspect-video bg-black">
          <Image
            src={selectedTour.thumbnail || "/placeholder.svg"}
            alt={selectedTour.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />

          {/* Tour Info Overlay */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex justify-between items-start">
            <div>
              <Badge className="mb-2 text-xs">{selectedTour.category}</Badge>
              <h3 className="text-white font-semibold text-sm sm:text-lg">{selectedTour.title}</h3>
              <p className="text-white/80 text-xs sm:text-sm flex items-center gap-1 mt-1">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                {selectedTour.location}
              </p>
            </div>
          </div>

          {/* Virtual Tour Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Button size="lg" className="rounded-full w-16 h-16 sm:w-20 sm:h-20" onClick={openVirtualTour}>
              <Eye className="h-6 w-6 sm:h-8 sm:w-8" />
            </Button>
          </div>

          {/* External Link Button */}
          <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4">
            <Button size="sm" variant="secondary" className="rounded-full" onClick={openVirtualTour}>
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              <span className="hidden sm:inline">Open Tour</span>
            </Button>
          </div>
        </div>
        <CardContent className="p-3 sm:p-4">
          <p className="text-muted-foreground text-sm leading-relaxed">{selectedTour.description}</p>
          <div className="mt-3 flex items-center justify-between">
            <p className="text-xs text-muted-foreground">Click the eye icon to start virtual tour</p>
            <Badge variant="outline" className="text-xs">
              360° Experience
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Tour Selection Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {tours.map((tour) => (
          <Card
            key={tour.id}
            className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
              selectedTour.id === tour.id ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => handleTourSelect(tour)}
          >
            <div className="relative aspect-video overflow-hidden rounded-t-lg">
              <Image
                src={tour.thumbnail || "/placeholder.svg"}
                alt={tour.title}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20" />
              <Badge className="absolute top-2 right-2 text-xs">{tour.category}</Badge>
              <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                <Eye className="h-3 w-3" />
                Virtual Tour
              </div>
            </div>
            <CardContent className="p-3">
              <h4 className="font-medium text-sm sm:text-base line-clamp-1 mb-1">{tour.title}</h4>
              <p className="text-muted-foreground text-xs sm:text-sm flex items-center gap-1 mb-2">
                <MapPin className="h-3 w-3" />
                {tour.location}
              </p>
              <p className="text-xs text-muted-foreground line-clamp-2">{tour.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Instructions */}
      <Card className="bg-muted/50">
        <CardContent className="p-4 text-center">
          <h4 className="font-medium mb-2">How to Experience Virtual Tours</h4>
          <p className="text-sm text-muted-foreground">
            Select a destination above and click the eye icon or "Open Tour" button to launch the immersive 360° virtual
            experience. You can navigate using your mouse or touch gestures on mobile devices.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
