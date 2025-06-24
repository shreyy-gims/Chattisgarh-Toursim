import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Star, Clock, Users, Camera, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data - in real app this would come from API/database
const waterfallData: { [key: string]: any } = {
  "1": {
    id: 1,
    title: "Chitrakote Falls",
    description:
      "Known as the 'Niagara of India', Chitrakote Falls is the widest waterfall in India and one of the most spectacular natural wonders of Chhattisgarh. The horseshoe-shaped waterfall spans about 300 meters in width and drops from a height of 30 meters, creating a thunderous roar that can be heard from miles away.",
    image: "/chitrakoot169.jpg",
    location: "Bastar, Chhattisgarh",
    rating: 4.8,
    reviews: 245,
    category: "waterfall",
    bestTime: "October to March",
    duration: "2-3 hours",
    difficulty: "Easy",
    entryFee: "₹20 per person",
    timings: "6:00 AM - 6:00 PM",
    waterlevel:" Water Level: low",
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
    gallery: [
      "/chitrakote.jpg",
      "/chitrakote3.png",
      "/chitrakote4.png",
      "/chitrakote5.png",
    ],
  },
  "2": {
    id: 2,
    title: "Tirathgarh Falls",
    description:
      "Known as the 'Niagara of India', Chitrakote Falls is the widest waterfall in India and one of the most spectacular natural wonders of Chhattisgarh. The horseshoe-shaped waterfall spans about 300 meters in width and drops from a height of 30 meters, creating a thunderous roar that can be heard from miles away.",
    image: "/tirathgarh169.png",
    location: "Bastar, Chhattisgarh",
    rating: 4.2,
    reviews: 107,
    category: "waterfall",
    bestTime: "October to March",
    duration: "1-2 hours",
    difficulty: "Medium",
    entryFee: "₹10 per person",
    timings: "6:00 AM - 6:00 PM",
    waterlevel:" Water Level: Medium",
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
    gallery: [
      "/chitrakote.jpg",
      "/chitrakote3.png",
      "/chitrakote4.png",
      "/chitrakote5.png",
    ],
  },
}

export default function WaterfallDetailPage({ params }: { params: { id: string } }) {
  const waterfall = waterfallData[params.id]

  if (!waterfall) {
    return <div>Waterfall not found</div>
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/destination">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Destinations
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Share
            </Button>
            <Link href="/plan">
              <Button size="sm">Plan Your Trip</Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <Image
            src={waterfall.image || "/placeholder.svg"}
            alt={waterfall.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container">
              <Badge className="mb-4 capitalize">{waterfall.waterlevel}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{waterfall.title}</h1>
              <div className="flex items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>{waterfall.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <span>{waterfall.rating}</span>
                  <span>({waterfall.reviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{waterfall.description}</p>
              </section>

              {/* Highlights */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {waterfall.highlights.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Activities */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Activities</h2>
                <div className="flex flex-wrap gap-2">
                  {waterfall.activities.map((activity: string, index: number) => (
                    <Badge key={index} variant="secondary">
                      {activity}
                    </Badge>
                  ))}
                </div>
              </section>

              {/* Detailed Information */}
              <Tabs defaultValue="how-to-reach" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="how-to-reach">How to Reach</TabsTrigger>
                  <TabsTrigger value="nearby">Nearby Attractions</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>

                <TabsContent value="how-to-reach" className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">By Air</h4>
                      <p className="text-muted-foreground">{waterfall.howToReach.byAir}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">By Train</h4>
                      <p className="text-muted-foreground">{waterfall.howToReach.byTrain}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">By Road</h4>
                      <p className="text-muted-foreground">{waterfall.howToReach.byRoad}</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="nearby" className="space-y-4">
                  <div className="space-y-3">
                    {waterfall.nearbyAttractions.map((attraction: string, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{attraction}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="gallery" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {waterfall.gallery.map((image: string, index: number) => (
                      <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${waterfall.title} gallery ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Best Time to Visit</p>
                      <p className="text-sm text-muted-foreground">{waterfall.bestTime}</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Duration</p>
                      <p className="text-sm text-muted-foreground">{waterfall.duration}</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Difficulty Level</p>
                      <p className="text-sm text-muted-foreground">{waterfall.difficulty}</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <Camera className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Entry Fee</p>
                      <p className="text-sm text-muted-foreground">{waterfall.entryFee}</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Timings</p>
                      <p className="text-sm text-muted-foreground">{waterfall.timings}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Plan Your Trip CTA */}
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2">Ready to Visit?</h3>
                  <p className="text-muted-foreground mb-4">
                    Plan your perfect trip to {waterfall.title} with our personalized itinerary planner.
                  </p>
                  <Link href="/plan">
                    <Button className="w-full">Plan Your Trip</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Contact our travel experts for personalized assistance.
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
      </main>
    </div>
  )
}
