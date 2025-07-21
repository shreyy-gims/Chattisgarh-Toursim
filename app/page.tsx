"use client"

import Link from "next/link"
import Image from "next/image"
import { Calendar, Globe, MapPin, Compass, Users, Menu, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import VirtualTourViewer from "@/components/virtual-tour-viewer"
import TestimonialCarousel from "@/components/testimonial-carousel"
import CulturalExperiences from "@/components/cultural-experiences"
import NewsletterSignup from "@/components/newsletter-signup"
import StateSelector from "@/components/state-selector"
import DestinationCard from "@/components/destination-card"
import DestinationTypeCard from "@/components/destination-type-card"
import BudgetCalculator from "@/components/budget-calculator"
import { useStateContext } from "@/contexts/state-context"

export default function Home() {
  const { selectedState } = useStateContext()

  // Dynamic destinations based on selected state
  const getDestinationsForState = (stateId: string) => {
    const destinationsByState = {
      chhattisgarh: [
        {
          title: "Chitrakote Falls",
          description: "India's widest waterfall, often called the 'Niagara of India'",
          image: "/chitrakote.jpg",
          location: "Bastar",
          rating: 4.8,
          category: "Nature",
        },
        {
          title: "Bhoramdev Temple",
          description: "Ancient Buddhist and Hindu archaeological site with temples dating back to the 5th-8th century",
          image: "/bhoramdev.jpg",
          location: "Kawardha",
          rating: 4.6,
          category: "Heritage",
        },
        {
          title: "Barnawapara Wildlife Sanctuary",
          description: "Home to diverse wildlife including leopards, bears, and hundreds of bird species",
          image: "/sher2.png",
          location: "Nanwapara",
          rating: 4.5,
          category: "Wildlife",
        },
        {
          title: "Tirathgarh Waterfall",
          description: "11th century temple known as the 'Khajuraho of Chhattisgarh'",
          image: "/tirathgarh169.png",
          location: "Bastar",
          rating: 4.7,
          category: "Heritage",
        },
        {
          title: "Kanger Valley National Park",
          description: "Featuring stunning caves, waterfalls, and rich biodiversity",
          image: "/placeholder.svg?height=400&width=600&text=Kanger+Valley",
          location: "Bastar",
          rating: 4.9,
          category: "Nature",
        },
        {
          title: "Tribal Museum",
          description: "Showcasing the rich cultural heritage of Chhattisgarh's tribal communities",
          image: "/placeholder.svg?height=400&width=600&text=Tribal+Museum",
          location: "Raipur",
          rating: 4.4,
          category: "Culture",
        },
      ],
      rajasthan: [
        {
          title: "Jaipur City Palace",
          description: "Magnificent royal palace complex showcasing Rajasthani architecture",
          image: "/placeholder.svg?height=400&width=600&text=Jaipur+Palace",
          location: "Jaipur",
          rating: 4.7,
          category: "Heritage",
        },
        {
          title: "Thar Desert",
          description: "Experience camel safaris and desert camping under starlit skies",
          image: "/placeholder.svg?height=400&width=600&text=Thar+Desert",
          location: "Jaisalmer",
          rating: 4.8,
          category: "Adventure",
        },
        {
          title: "Udaipur Lake Palace",
          description: "Floating marble palace on Lake Pichola, epitome of romance",
          image: "/placeholder.svg?height=400&width=600&text=Udaipur+Lake",
          location: "Udaipur",
          rating: 4.9,
          category: "Heritage",
        },
        {
          title: "Ranthambore National Park",
          description: "Famous tiger reserve with ancient fort ruins",
          image: "/placeholder.svg?height=400&width=600&text=Ranthambore+Tigers",
          location: "Sawai Madhopur",
          rating: 4.6,
          category: "Wildlife",
        },
        {
          title: "Mehrangarh Fort",
          description: "Imposing fort overlooking the blue city of Jodhpur",
          image: "/placeholder.svg?height=400&width=600&text=Mehrangarh+Fort",
          location: "Jodhpur",
          rating: 4.8,
          category: "Heritage",
        },
        {
          title: "Pushkar Lake",
          description: "Sacred lake surrounded by ghats and temples",
          image: "/placeholder.svg?height=400&width=600&text=Pushkar+Lake",
          location: "Pushkar",
          rating: 4.5,
          category: "Spiritual",
        },
      ],
      kerala: [
        {
          title: "Alleppey Backwaters",
          description: "Serene network of canals, rivers, and lakes with houseboat cruises",
          image: "/placeholder.svg?height=400&width=600&text=Alleppey+Backwaters",
          location: "Alleppey",
          rating: 4.8,
          category: "Nature",
        },
        {
          title: "Munnar Tea Gardens",
          description: "Rolling hills covered with lush green tea plantations",
          image: "/placeholder.svg?height=400&width=600&text=Munnar+Tea",
          location: "Munnar",
          rating: 4.7,
          category: "Nature",
        },
        {
          title: "Periyar Wildlife Sanctuary",
          description: "Elephant and tiger reserve around Periyar Lake",
          image: "/placeholder.svg?height=400&width=600&text=Periyar+Wildlife",
          location: "Thekkady",
          rating: 4.6,
          category: "Wildlife",
        },
        {
          title: "Fort Kochi",
          description: "Historic port city with colonial architecture and Chinese fishing nets",
          image: "/placeholder.svg?height=400&width=600&text=Fort+Kochi",
          location: "Kochi",
          rating: 4.5,
          category: "Heritage",
        },
        {
          title: "Varkala Beach",
          description: "Dramatic cliffs overlooking pristine beaches and mineral springs",
          image: "/placeholder.svg?height=400&width=600&text=Varkala+Beach",
          location: "Varkala",
          rating: 4.7,
          category: "Beach",
        },
        {
          title: "Wayanad Hills",
          description: "Misty mountains with spice plantations and tribal culture",
          image: "/placeholder.svg?height=400&width=600&text=Wayanad+Hills",
          location: "Wayanad",
          rating: 4.6,
          category: "Nature",
        },
      ],
      himachal: [
        {
          title: "Shimla Mall Road",
          description: "Colonial hill station with Victorian architecture and mountain views",
          image: "/placeholder.svg?height=400&width=600&text=Shimla+Mall",
          location: "Shimla",
          rating: 4.5,
          category: "Hill Station",
        },
        {
          title: "Manali Valley",
          description: "Adventure hub with snow-capped peaks and river rafting",
          image: "/placeholder.svg?height=400&width=600&text=Manali+Valley",
          location: "Manali",
          rating: 4.7,
          category: "Adventure",
        },
        {
          title: "Dharamshala",
          description: "Home to Dalai Lama with Tibetan culture and monasteries",
          image: "/placeholder.svg?height=400&width=600&text=Dharamshala",
          location: "Dharamshala",
          rating: 4.6,
          category: "Spiritual",
        },
        {
          title: "Spiti Valley",
          description: "Cold desert with ancient monasteries and dramatic landscapes",
          image: "/placeholder.svg?height=400&width=600&text=Spiti+Valley",
          location: "Spiti",
          rating: 4.8,
          category: "Adventure",
        },
        {
          title: "Kullu Valley",
          description: "Valley of gods with apple orchards and river adventures",
          image: "/placeholder.svg?height=400&width=600&text=Kullu+Valley",
          location: "Kullu",
          rating: 4.5,
          category: "Nature",
        },
        {
          title: "Rohtang Pass",
          description: "High mountain pass with snow activities and panoramic views",
          image: "/placeholder.svg?height=400&width=600&text=Rohtang+Pass",
          location: "Manali",
          rating: 4.7,
          category: "Adventure",
        },
      ],
      goa: [
        {
          title: "Baga Beach",
          description: "Popular beach with water sports, nightlife, and beach shacks",
          image: "/placeholder.svg?height=400&width=600&text=Baga+Beach",
          location: "North Goa",
          rating: 4.4,
          category: "Beach",
        },
        {
          title: "Old Goa Churches",
          description: "UNESCO World Heritage churches showcasing Portuguese architecture",
          image: "/placeholder.svg?height=400&width=600&text=Old+Goa+Churches",
          location: "Old Goa",
          rating: 4.6,
          category: "Heritage",
        },
        {
          title: "Dudhsagar Falls",
          description: "Spectacular four-tiered waterfall in the Western Ghats",
          image: "/placeholder.svg?height=400&width=600&text=Dudhsagar+Falls",
          location: "Mollem",
          rating: 4.7,
          category: "Nature",
        },
        {
          title: "Anjuna Beach",
          description: "Bohemian beach famous for flea markets and trance parties",
          image: "/placeholder.svg?height=400&width=600&text=Anjuna+Beach",
          location: "North Goa",
          rating: 4.5,
          category: "Beach",
        },
        {
          title: "Spice Plantations",
          description: "Aromatic spice gardens with guided tours and traditional meals",
          image: "/placeholder.svg?height=400&width=600&text=Spice+Plantations",
          location: "Ponda",
          rating: 4.3,
          category: "Nature",
        },
        {
          title: "Fort Aguada",
          description: "17th-century Portuguese fort with lighthouse and sea views",
          image: "/placeholder.svg?height=400&width=600&text=Fort+Aguada",
          location: "Sinquerim",
          rating: 4.4,
          category: "Heritage",
        },
      ],
      "tamil-nadu": [
        {
          title: "Meenakshi Temple",
          description: "Magnificent Dravidian temple with intricate sculptures and colorful gopurams",
          image: "/placeholder.svg?height=400&width=600&text=Meenakshi+Temple",
          location: "Madurai",
          rating: 4.9,
          category: "Heritage",
        },
        {
          title: "Ooty Hill Station",
          description: "Queen of hill stations with tea gardens and toy train rides",
          image: "/placeholder.svg?height=400&width=600&text=Ooty+Hills",
          location: "Ooty",
          rating: 4.6,
          category: "Hill Station",
        },
        {
          title: "Mahabalipuram Shore Temple",
          description: "UNESCO World Heritage site with ancient rock-cut temples by the sea",
          image: "/placeholder.svg?height=400&width=600&text=Shore+Temple",
          location: "Mahabalipuram",
          rating: 4.7,
          category: "Heritage",
        },
        {
          title: "Kodaikanal Lake",
          description: "Star-shaped lake surrounded by hills and eucalyptus forests",
          image: "/placeholder.svg?height=400&width=600&text=Kodaikanal+Lake",
          location: "Kodaikanal",
          rating: 4.5,
          category: "Nature",
        },
        {
          title: "Rameswaram Temple",
          description: "Sacred pilgrimage site with longest temple corridor in the world",
          image: "/placeholder.svg?height=400&width=600&text=Rameswaram+Temple",
          location: "Rameswaram",
          rating: 4.8,
          category: "Spiritual",
        },
        {
          title: "Nilgiri Mountain Railway",
          description: "UNESCO World Heritage toy train through scenic mountain landscapes",
          image: "/placeholder.svg?height=400&width=600&text=Nilgiri+Railway",
          location: "Ooty",
          rating: 4.6,
          category: "Adventure",
        },
      ],
      karnataka: [
        {
          title: "Mysore Palace",
          description: "Opulent royal palace known for its Indo-Saracenic architecture",
          image: "/placeholder.svg?height=400&width=600&text=Mysore+Palace",
          location: "Mysore",
          rating: 4.8,
          category: "Heritage",
        },
        {
          title: "Hampi Ruins",
          description: "UNESCO World Heritage site with ancient Vijayanagara Empire ruins",
          image: "/placeholder.svg?height=400&width=600&text=Hampi+Ruins",
          location: "Hampi",
          rating: 4.9,
          category: "Heritage",
        },
        {
          title: "Coorg Coffee Plantations",
          description: "Scotland of India with lush coffee estates and misty hills",
          image: "/placeholder.svg?height=400&width=600&text=Coorg+Coffee",
          location: "Coorg",
          rating: 4.7,
          category: "Nature",
        },
        {
          title: "Jog Falls",
          description: "India's second-highest plunge waterfall in the Western Ghats",
          image: "/placeholder.svg?height=400&width=600&text=Jog+Falls",
          location: "Shimoga",
          rating: 4.6,
          category: "Nature",
        },
        {
          title: "Bandipur National Park",
          description: "Tiger reserve with diverse wildlife and scenic landscapes",
          image: "/placeholder.svg?height=400&width=600&text=Bandipur+Wildlife",
          location: "Chamarajanagar",
          rating: 4.5,
          category: "Wildlife",
        },
        {
          title: "Gokarna Beaches",
          description: "Pristine beaches and sacred temples in a laid-back coastal town",
          image: "/placeholder.svg?height=400&width=600&text=Gokarna+Beach",
          location: "Gokarna",
          rating: 4.6,
          category: "Beach",
        },
      ],
      maharashtra: [
        {
          title: "Ajanta Caves",
          description: "UNESCO World Heritage Buddhist cave paintings and sculptures",
          image: "/placeholder.svg?height=400&width=600&text=Ajanta+Caves",
          location: "Aurangabad",
          rating: 4.8,
          category: "Heritage",
        },
        {
          title: "Ellora Caves",
          description: "Rock-cut temples representing Hindu, Buddhist, and Jain traditions",
          image: "/placeholder.svg?height=400&width=600&text=Ellora+Caves",
          location: "Aurangabad",
          rating: 4.9,
          category: "Heritage",
        },
        {
          title: "Lonavala Hill Station",
          description: "Popular hill station with scenic valleys and ancient caves",
          image: "/placeholder.svg?height=400&width=600&text=Lonavala+Hills",
          location: "Lonavala",
          rating: 4.4,
          category: "Hill Station",
        },
        {
          title: "Shirdi Sai Baba Temple",
          description: "Sacred pilgrimage site dedicated to the revered saint Sai Baba",
          image: "/placeholder.svg?height=400&width=600&text=Shirdi+Temple",
          location: "Shirdi",
          rating: 4.7,
          category: "Spiritual",
        },
        {
          title: "Mahabaleshwar",
          description: "Hill station famous for strawberries and panoramic valley views",
          image: "/placeholder.svg?height=400&width=600&text=Mahabaleshwar",
          location: "Mahabaleshwar",
          rating: 4.5,
          category: "Hill Station",
        },
        {
          title: "Tadoba National Park",
          description: "Maharashtra's oldest tiger reserve with rich biodiversity",
          image: "/placeholder.svg?height=400&width=600&text=Tadoba+Tigers",
          location: "Chandrapur",
          rating: 4.6,
          category: "Wildlife",
        },
      ],
    }
    return destinationsByState[stateId as keyof typeof destinationsByState] || destinationsByState.chhattisgarh
  }

  const currentDestinations = getDestinationsForState(selectedState.id)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40&text=IN"
              alt={`${selectedState.name} Tourism Logo`}
              width={32}
              height={32}
              className="rounded-md sm:w-10 sm:h-10"
            />
            <span className="text-lg sm:text-xl font-bold truncate">{selectedState.displayName}</span>
          </div>

          {/* State Selector - Always visible */}
          <div className="flex items-center gap-4">
            <StateSelector />
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/destination" className="text-sm font-medium hover:underline underline-offset-4">
              Destinations
            </Link>
            <Link href="/experience" className="text-sm font-medium hover:underline underline-offset-4">
              Experiences
            </Link>
            <Link href="/plan" className="text-sm font-medium hover:underline underline-offset-4">
              Plan Your Trip
            </Link>
            <Link href="/culture" className="text-sm font-medium hover:underline underline-offset-4">
              Culture
            </Link>
            <Link href="#gallery" className="text-sm font-medium hover:underline underline-offset-4">
              Gallery
            </Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="outline" size="sm" className="hidden sm:flex text-xs sm:text-sm bg-transparent">
              Login
            </Button>
            <Button size="sm" className="text-xs sm:text-sm px-3 sm:px-4">
              Book Now
            </Button>
            <Button variant="ghost" size="sm" className="lg:hidden p-2">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[70vh] sm:h-[80vh] lg:h-[90vh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={selectedState.image || "/placeholder.svg?height=1080&width=1920"}
              alt={`${selectedState.name} landscape`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          </div>
          <div className="container relative z-10 flex h-full flex-col items-start justify-center gap-4 sm:gap-6 pt-8 sm:pt-16 px-4 sm:px-6">
            <Badge className="bg-green-600 hover:bg-green-700 text-xs sm:text-sm">Discover {selectedState.name}</Badge>
            <h1 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-white leading-tight">
              {selectedState.description}
            </h1>
            <p className="max-w-[600px] text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
              {selectedState.id === "chhattisgarh"
                ? "Explore ancient temples, lush forests, vibrant tribal cultures, and pristine waterfalls in India's hidden gem."
                : selectedState.id === "rajasthan"
                  ? "Discover majestic palaces, golden deserts, colorful festivals, and royal heritage in the land of maharajas."
                  : selectedState.id === "kerala"
                    ? "Experience serene backwaters, lush hill stations, exotic wildlife, and rich cultural traditions in God's own country."
                    : selectedState.id === "himachal"
                      ? "Adventure through snow-capped mountains, pristine valleys, ancient monasteries, and thrilling outdoor activities."
                      : selectedState.id === "goa"
                        ? "Relax on pristine beaches, explore Portuguese heritage, enjoy vibrant nightlife, and savor delicious seafood."
                        : selectedState.id === "tamil-nadu"
                          ? "Discover magnificent temples, classical arts, hill stations, and rich Dravidian culture in the land of temples."
                          : selectedState.id === "karnataka"
                            ? "Experience royal palaces, ancient ruins, coffee plantations, and diverse landscapes in one state many worlds."
                            : "Explore ancient caves, hill stations, spiritual sites, and rich Marathi culture in the land of warriors."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Button size="lg" className="gap-2 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                Explore Destinations <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white hover:bg-white/20 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
              >
                Virtual Tours
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-16 sm:h-24" />
        </section>

        {/* Search and Filter Section */}
        <section className="container relative -mt-8 sm:-mt-16 z-20 px-4 sm:px-6">
          <Card className="border shadow-lg">
            <CardContent className="p-4 sm:p-6">
              <Tabs defaultValue="destinations" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-4 sm:mb-6 h-auto">
                  <TabsTrigger value="destinations" className="text-xs sm:text-sm py-2">
                    Destinations
                  </TabsTrigger>
                  <TabsTrigger value="experiences" className="text-xs sm:text-sm py-2">
                    Experiences
                  </TabsTrigger>
                  <TabsTrigger value="packages" className="text-xs sm:text-sm py-2">
                    Packages
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="destinations" className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Where to go?"
                        className="w-full rounded-md border border-input bg-background px-9 py-2.5 sm:py-3 text-sm"
                      />
                    </div>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="When?"
                        className="w-full rounded-md border border-input bg-background px-9 py-2.5 sm:py-3 text-sm"
                      />
                    </div>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Travelers"
                        className="w-full rounded-md border border-input bg-background px-9 py-2.5 sm:py-3 text-sm"
                      />
                    </div>
                    <Button className="w-full py-2.5 sm:py-3">Search</Button>
                  </div>
                </TabsContent>
                <TabsContent value="experiences" className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    <div className="relative">
                      <Compass className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Activity type"
                        className="w-full rounded-md border border-input bg-background px-9 py-2.5 sm:py-3 text-sm"
                      />
                    </div>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="When?"
                        className="w-full rounded-md border border-input bg-background px-9 py-2.5 sm:py-3 text-sm"
                      />
                    </div>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Group size"
                        className="w-full rounded-md border border-input bg-background px-9 py-2.5 sm:py-3 text-sm"
                      />
                    </div>
                    <Button className="w-full py-2.5 sm:py-3">Search</Button>
                  </div>
                </TabsContent>
                <TabsContent value="packages" className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    <div className="relative">
                      <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Package type"
                        className="w-full rounded-md border border-input bg-background px-9 py-2.5 sm:py-3 text-sm"
                      />
                    </div>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Duration"
                        className="w-full rounded-md border border-input bg-background px-9 py-2.5 sm:py-3 text-sm"
                      />
                    </div>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Budget"
                        className="w-full rounded-md border border-input bg-background px-9 py-2.5 sm:py-3 text-sm"
                      />
                    </div>
                    <Button className="w-full py-2.5 sm:py-3">Search</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* Destination Types Section */}
        <section className="container py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Explore by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
              Discover {selectedState.name} through different types of destinations and experiences
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <DestinationTypeCard
              title="Waterfalls"
              description={`Discover breathtaking waterfalls across ${selectedState.name}`}
              image="/placeholder.svg?height=400&width=600&text=Waterfalls"
              icon="💧"
              count={`${selectedState.destinations.waterfalls}+ Waterfalls`}
              href="/destination/waterfall"
            />
            <DestinationTypeCard
              title="National Parks"
              description={`Explore diverse wildlife sanctuaries and national parks in ${selectedState.name}`}
              image="/placeholder.svg?height=400&width=600&text=National+Parks"
              icon="🌲"
              count={`${selectedState.destinations.nationalParks}+ Parks`}
              href="/destination/national-park"
            />
            <DestinationTypeCard
              title="Temples"
              description={`Visit ancient temples showcasing architectural marvels in ${selectedState.name}`}
              image="/placeholder.svg?height=400&width=600&text=Temples"
              icon="🏛️"
              count={`${selectedState.destinations.temples}+ Temples`}
              href="/destination/temple"
            />
            <DestinationTypeCard
              title="Water Parks"
              description={`Enjoy fun-filled water parks perfect for family entertainment`}
              image="/placeholder.svg?height=400&width=600&text=Water+Parks"
              icon="🏊"
              count={`${selectedState.destinations.waterParks}+ Water Parks`}
              href="/destination/waterpark"
            />
            <DestinationTypeCard
              title="Tour Packages"
              description={`Choose from curated tour packages designed for ${selectedState.name}`}
              image="/placeholder.svg?height=400&width=600&text=Tour+Packages"
              icon="📦"
              count={`${selectedState.destinations.packages}+ Packages`}
              href="/destination/packages"
            />
            <DestinationTypeCard
              title="Cultural Sites"
              description={`Experience rich culture, traditional arts, and local festivals in ${selectedState.name}`}
              image="/placeholder.svg?height=400&width=600&text=Cultural+Sites"
              icon="🎭"
              count={`${selectedState.destinations.culturalSites}+ Sites`}
              href="/destination/cultural"
            />
          </div>

          <div className="mt-8 sm:mt-10 text-center">
            <Link href="/destination">
              <Button variant="outline" className="gap-2 text-sm sm:text-base px-6 sm:px-8 bg-transparent">
                View All Destinations <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Featured Destinations */}
        <section id="destinations" className="container py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 sm:mb-12 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Featured Destinations</h2>
              <p className="text-muted-foreground max-w-2xl text-sm sm:text-base">
                Discover the most beautiful and captivating places in {selectedState.name}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 w-full lg:w-auto">
              <Button variant="outline" size="sm" className="text-xs sm:text-sm bg-transparent">
                All Destinations
              </Button>
              <Button variant="outline" size="sm" className="text-xs sm:text-sm bg-transparent">
                Nature
              </Button>
              <Button variant="outline" size="sm" className="text-xs sm:text-sm bg-transparent">
                Heritage
              </Button>
              <Button variant="outline" size="sm" className="text-xs sm:text-sm bg-transparent">
                Cultural
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {currentDestinations.map((destination, index) => (
              <DestinationCard
                key={index}
                title={destination.title}
                description={destination.description}
                image={destination.image}
                location={destination.location}
                rating={destination.rating}
                category={destination.category}
              />
            ))}
          </div>

          <div className="mt-8 sm:mt-10 text-center">
            <Button variant="outline" className="gap-2 text-sm sm:text-base px-6 sm:px-8 bg-transparent">
              View All Destinations <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Virtual Tour Section */}
        <section className="bg-muted py-12 sm:py-16 lg:py-20">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Experience Virtual Tours</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
                Explore {selectedState.name}'s most beautiful destinations from the comfort of your home
              </p>
            </div>

            <VirtualTourViewer />

            <div className="mt-8 sm:mt-10 text-center">
              <Button className="gap-2 text-sm sm:text-base px-6 sm:px-8">
                Explore More Virtual Tours <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Budget Calculator */}
        <section id="plan" className="container py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">Trip Budget Calculator</h2>
              <p className="text-muted-foreground mb-6 text-sm sm:text-base leading-relaxed">
                Get an instant estimate of your trip cost to {selectedState.name}. Our smart calculator considers
                accommodation, transportation, food, and activities to give you a realistic budget range for your
                perfect getaway.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm sm:text-base">Instant Cost Estimation</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Get real-time budget calculations based on your travel preferences
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm sm:text-base">Detailed Breakdown</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      See costs for hotels, transport, meals, and activities separately
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                    <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm sm:text-base">Budget Optimization</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Get suggestions to optimize your budget without compromising experience
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <BudgetCalculator />
            </div>
          </div>
        </section>

        {/* Cultural Experiences */}
        <section id="culture" className="bg-muted py-12 sm:py-16 lg:py-20">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Immersive Cultural Experiences</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
                Dive deep into {selectedState.name}'s rich cultural heritage, traditional arts, and authentic cuisine
              </p>
            </div>

            <CulturalExperiences />
          </div>
        </section>

        {/* Testimonials */}
        <section className="container py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">What Travelers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
              Hear from visitors who have experienced the magic of {selectedState.name}
            </p>
          </div>

          <TestimonialCarousel />
        </section>

        {/* Gallery */}
        <section id="gallery" className="bg-muted py-12 sm:py-16 lg:py-20">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Explore Our Gallery</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
                Stunning visuals from across {selectedState.name} that will inspire your next adventure
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              <div className="grid gap-2 sm:gap-4">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=400&text=Gallery+1"
                    alt={`${selectedState.name} landscape`}
                    width={400}
                    height={600}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=400&text=Gallery+2"
                    alt={`${selectedState.name} culture`}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              </div>
              <div className="grid gap-2 sm:gap-4">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=400&text=Gallery+3"
                    alt={`${selectedState.name} temple`}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=400&text=Gallery+4"
                    alt={`${selectedState.name} nature`}
                    width={400}
                    height={600}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              </div>
              <div className="grid gap-2 sm:gap-4 hidden sm:block">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=400&text=Gallery+5"
                    alt={`${selectedState.name} heritage`}
                    width={400}
                    height={600}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=400&text=Gallery+6"
                    alt={`${selectedState.name} wildlife`}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              </div>
              <div className="grid gap-2 sm:gap-4 hidden lg:block">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=400&text=Gallery+7"
                    alt={`${selectedState.name} food`}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=400&text=Gallery+8"
                    alt={`${selectedState.name} festival`}
                    width={400}
                    height={600}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 text-center">
              <Button variant="outline" className="gap-2 text-sm sm:text-base px-6 sm:px-8 bg-transparent">
                View Full Gallery <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="container py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <NewsletterSignup />
        </section>
      </main>

      <footer className="bg-background border-t">
        <div className="container py-8 sm:py-10 px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40&text=IN"
                  alt={`${selectedState.name} Tourism Logo`}
                  width={32}
                  height={32}
                  className="rounded-md sm:w-10 sm:h-10"
                />
                <span className="text-lg sm:text-xl font-bold">{selectedState.displayName}</span>
              </div>
              <p className="text-muted-foreground mb-4 text-sm sm:text-base leading-relaxed">
                Discover the heart of incredible India with its rich cultural heritage, pristine nature, and authentic
                experiences in {selectedState.name}.
              </p>
              <div className="flex gap-3 sm:gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook sm:w-6 sm:h-6"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter sm:w-6 sm:h-6"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram sm:w-6 sm:h-6"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-youtube sm:w-6 sm:h-6"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm sm:text-base">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground text-sm">
                    About {selectedState.name}
                  </Link>
                </li>
                <li>
                  <Link href="/destination" className="text-muted-foreground hover:text-foreground text-sm">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link href="/experience" className="text-muted-foreground hover:text-foreground text-sm">
                    Experiences
                  </Link>
                </li>
                <li>
                  <Link href="/plan" className="text-muted-foreground hover:text-foreground text-sm">
                    Plan Your Trip
                  </Link>
                </li>
                <li>
                  <Link href="/culture" className="text-muted-foreground hover:text-foreground text-sm">
                    Culture
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground text-sm">
                    Events & Festivals
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm sm:text-base">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-foreground text-sm">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground text-sm">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground text-sm">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/cancellation" className="text-muted-foreground hover:text-foreground text-sm">
                    Cancellation Policy
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="text-muted-foreground hover:text-foreground text-sm">
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm sm:text-base">Contact Information</h3>
              <address className="not-italic text-muted-foreground space-y-2 text-sm">
                <p>{selectedState.displayName}</p>
                <p>Tourism Development Board</p>
                <p>{selectedState.name}, India</p>
                <p className="pt-2">
                  <a href="tel:+917712422788" className="hover:text-foreground">
                    Phone: +91 771 242 2788
                  </a>
                </p>
                <p>
                  <a href={`mailto:info@${selectedState.id}tourism.in`} className="hover:text-foreground">
                    Email: info@{selectedState.id}tourism.in
                  </a>
                </p>
              </address>
            </div>
          </div>
          <Separator className="my-6 sm:my-8" />
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} {selectedState.displayName}. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/privacy" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
