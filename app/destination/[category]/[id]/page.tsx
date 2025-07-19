"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Star, Clock, Users, Camera, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const destinationData: {
  [category: string]: {
    [id: string]: any
  }
} = {
  waterfall: {
    "1": {
      id: 1,
      title: "Chitrakote Falls",
      description: "Known as the 'Niagara of India'...",
      image: "/chitrakoot169.jpg",
      video: "/chitrakotevid2.mp4", 
      location: "Bastar, Chhattisgarh",
      rating: 4.8,
      reviews: 245,
      category: "waterfall",
      bestTime: "October to March",
      duration: "2-3 hours",
      difficulty: "Easy",
      entryFee: "₹20 per person",
      timings: "6:00 AM - 6:00 PM",
      waterlevel: "Water Level: low",
      highlights: [
        "Widest waterfall in India",
        "Spectacular rainbow formations",
        "Boat rides available",
        "Photography paradise",
        "Tribal cultural experiences nearby",
      ],
      howToReach: {
        byAir: "Nearest airport is Raipur (340 km away)",
        byTrain: "Nearest railway station is Dantewada (70 km away)",
        byRoad: "Well connected by road from major cities",
      },
      nearbyAttractions: ["Tirathgarh Falls (45 km)", "Kanger Valley National Park (60 km)", "Bastar Palace (80 km)"],
      activities: ["Photography", "Boating", "Nature walks", "Tribal village visits", "Picnicking"],
      gallery: ["/chitrakote.jpg", "/chitrakote3.png", "/chitrakote4.png", "/chitrakote5.png"],
    },
    "2": {
      id: 2,
      title: "Tirathgarh Falls",
      description:
        "This is a multi-tiered waterfall and a popular destination...",
      image: "/tirathgarh169.png",
      video: "/tirathgarhvid1.mp4",
      location: "Bastar, Chhattisgarh",
      rating: 4.2,
      reviews: 107,
      category: "waterfall",
      bestTime: "October to March",
      duration: "1-2 hours",
      difficulty: "Medium",
      entryFee: "₹10 per person",
      timings: "6:00 AM - 6:00 PM",
      waterlevel: "Water Level: Medium",
      highlights: [
        "Tiered waterfall",
        "Natural pool at the base",
        "Easy to access",
        "Peaceful environment",
        "Near Kanger Valley National Park",
      ],
      howToReach: {
        byAir: "Nearest airport is Raipur (340 km away)",
        byTrain: "Nearest railway station is Dantewada (70 km away)",
        byRoad: "Well connected by road from major cities",
      },
      nearbyAttractions: ["Chitrakote Falls (45 km)", "Bastar Palace (60 km)"],
      activities: ["Photography", "Nature walks", "Trekking"],
      gallery: ["/chitrakote.jpg", "/chitrakote3.png", "/chitrakote4.png", "/chitrakote5.png"],
    },
  },

  // Example: Add temple category (you can expand more)
  temple: {
    "5": {
      id: 5,
      title: "Bhoramdev Temple",
      description: "Famous temple on hilltop with ropeway access.",
      image: "/bhoramdev.jpg",
      location: "Kawardha, Chhattisgarh",
      rating: 4.7,
      reviews: 320,
      category: "temple",
      bestTime: "September to February",
      duration: "1-2 hours",
      difficulty: "Moderate (Stairs)",
      entryFee: "Free",
      timings: "5:00 AM - 8:00 PM",
      waterlevel: "N/A",
      highlights: [
        "Ropeway ride",
        "Beautiful hilltop view",
        "Religious significance",
        "Festive environment during Navratri",
      ],
      howToReach: {
        byAir: "Nearest airport is Raipur (115 km)",
        byTrain: "Dongargarh Railway Station (2 km)",
        byRoad: "Connected by buses from major cities",
      },
      nearbyAttractions: ["Bhilai", "Rajnandgaon"],
      activities: ["Pilgrimage", "Photography", "Festivals"],
      gallery: ["/dongargarh.jpg"],
    },
  },

  nationalpark: {
    "4": {
      id: 4,
      title: "Bawanpara National Park",
      description: "Famous temple on hilltop with ropeway access.",
      image: "/national-parks-india-1.jpg",
      location: "Kawardha, Chhattisgarh",
      rating: 4.7,
      reviews: 320,
      category: "temple",
      bestTime: "September to February",
      duration: "1-2 hours",
      difficulty: "Moderate (Stairs)",
      entryFee: "Free",
      timings: "5:00 AM - 8:00 PM",
      waterlevel: "N/A",
      highlights: [
        "Ropeway ride",
        "Beautiful hilltop view",
        "Religious significance",
        "Festive environment during Navratri",
      ],
      howToReach: {
        byAir: "Nearest airport is Raipur (115 km)",
        byTrain: "Dongargarh Railway Station (2 km)",
        byRoad: "Connected by buses from major cities",
      },
      nearbyAttractions: ["Bhilai", "Rajnandgaon"],
      activities: ["Pilgrimage", "Photography", "Festivals"],
      gallery: ["/dongargarh.jpg"],
    },
  },
}

type PageProps = {
  params: {
    id: string
    category: string
  }
}

export default function DestinationDetailPage({ params }: PageProps) {
  const data = destinationData[params.category]?.[params.id]

  if (!data) {
    return <div className="text-center py-20 text-xl">Destination not found.</div>
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/destination">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Destinations
            </Button>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">Share</Button>
            <Link href="/plan">
              <Button size="sm">Plan Your Trip</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
  {data.video ? (
    <video
      src={data.video}
      autoPlay
      loop
      muted
      playsInline
      poster={data.image}
      className="absolute inset-0 w-full h-full object-cover"
    />
  ) : (
    <Image
      src={data.image || "/placeholder.svg"}
      alt={data.title}
      fill
      className="object-cover"
      priority
    />
  )}

  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
  <div className="absolute bottom-0 left-0 right-0 p-8">
    <div className="container">
      <Badge className="mb-4 capitalize">{data.waterlevel}</Badge>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{data.title}</h1>
      <div className="flex items-center gap-6 text-white/90">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          <span>{data.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          <span>{data.rating}</span>
          <span>({data.reviews} reviews)</span>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Main Content */}
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{data.description}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {data.highlights.map((highlight: string, index: number) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Activities</h2>
              <div className="flex flex-wrap gap-2">
                {data.activities.map((activity: string, index: number) => (
                  <Badge key={index} variant="secondary">
                    {activity}
                  </Badge>
                ))}
              </div>
            </section>

            <Tabs defaultValue="how-to-reach" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="how-to-reach">How to Reach</TabsTrigger>
                <TabsTrigger value="nearby">Nearby Attractions</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
              </TabsList>

              <TabsContent value="how-to-reach" className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">By Air</h4>
                  <p className="text-muted-foreground">{data.howToReach.byAir}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">By Train</h4>
                  <p className="text-muted-foreground">{data.howToReach.byTrain}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">By Road</h4>
                  <p className="text-muted-foreground">{data.howToReach.byRoad}</p>
                </div>
              </TabsContent>

              <TabsContent value="nearby" className="space-y-4">
                {data.nearbyAttractions.map((attraction: string, index: number) => (
                  <div key={index} className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{attraction}</span>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="gallery" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {data.gallery.map((img: string, index: number) => (
                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`${data.title} gallery ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <InfoItem icon={<Calendar />} title="Best Time to Visit" value={data.bestTime} />
                <Separator />
                <InfoItem icon={<Clock />} title="Duration" value={data.duration} />
                <Separator />
                <InfoItem icon={<Users />} title="Difficulty" value={data.difficulty} />
                <Separator />
                <InfoItem icon={<Camera />} title="Entry Fee" value={data.entryFee} />
                <Separator />
                <InfoItem icon={<Clock />} title="Timings" value={data.timings} />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Ready to Visit?</h3>
                <p className="text-muted-foreground mb-4">
                  Plan your perfect trip to {data.title} with our itinerary planner.
                </p>
                <Link href="/plan">
                  <Button className="w-full">Plan Your Trip</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Contact our travel experts for assistance.
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>Phone:</strong> +91 771 242 2788
                  </p>
                  <p className="text-sm">
                    <strong>Email:</strong> info@chhattisgarhtourism.in
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

// 🔹 Utility component for sidebar info
function InfoItem({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-primary">{icon}</div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{value}</p>
      </div>
    </div>
  )
}
