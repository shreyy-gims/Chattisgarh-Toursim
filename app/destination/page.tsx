import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const destinations = [
  {
    id: 1,
    title: "Chitrakote Falls",
    description:
      "India's widest waterfall, often called the 'Niagara of India'. Experience the thunderous roar and misty spray of this magnificent natural wonder.",
    image: "/chitrakote.jpg",
    video: "public\chitrakotevid2.mp4",
    category: "waterfall",
    location: "Bastar",
    rating: 4.8,
    reviews: 245,
  },
  {
    id: 2,
    title: "Tirathgarh Falls",
    description:
      "A spectacular multi-tiered waterfall cascading down from a height of 300 feet, surrounded by lush green forests.",
    image: "/tirathgarh.png",
    category: "waterfall",
    location: "Bastar",
    rating: 4.6,
    reviews: 189,
  },
  {
    id: 3,
    title: "Kanger Valley National Park",
    description:
      "Home to diverse wildlife, stunning caves, and pristine waterfalls. A paradise for nature lovers and adventure enthusiasts.",
    image: "/national-parks-india-1.jpg",
    category: "national-park",
    location: "Bastar",
    rating: 4.9,
    reviews: 312,
  },
  {
    id: 4,
    title: "Barnawapara Wildlife Sanctuary",
    description:
      "Discover diverse wildlife including leopards, bears, and hundreds of bird species in their natural habitat.",
    image: "/national.png",
    category: "national-park",
    location: "Raipur",
    rating: 4.5,
    reviews: 156,
  },
  {
    id: 5,
    title: "Bhoramdeo Temple",
    description:
      "11th century temple known as the 'Khajuraho of Chhattisgarh' featuring intricate stone carvings and architectural marvels.",
    image: "/bhoramdev.jpg",
    category: "temple",
    location: "Kawardha",
    rating: 4.7,
    reviews: 203,
  },
  {
    id: 6,
    title: "Sirpur Archaeological Site",
    description: "Ancient Buddhist and Hindu archaeological site with temples dating back to the 5th-8th century.",
    image: "/vishnumandir.jpg",
    category: "temple",
    location: "Mahasamund",
    rating: 4.6,
    reviews: 178,
  },
  {
    id: 7,
    title: "MM Fun City Water Park",
    description:
      "Raipur's premier water park featuring thrilling water slides, wave pools, and family-friendly attractions.",
    image: "/waterpark.png",
    category: "waterpark",
    location: "Raipur",
    rating: 4.3,
    reviews: 89,
  },
  {
    id: 8,
    title: "Aqua Village Water Park",
    description: "A fun-filled water park with exciting rides, lazy river, and recreational facilities for all ages.",
    image: "/Shishupal.jpg",
    category: "waterpark",
    location: "Bilaspur",
    rating: 4.2,
    reviews: 67,
  },
  {
    id: 9,
    title: "Bastar Heritage Package",
    description:
      "7-day comprehensive tour covering tribal villages, waterfalls, and cultural experiences in the heart of Bastar.",
    image: "/tribedance.jpg",
    category: "packages",
    location: "Bastar Region",
    rating: 4.8,
    reviews: 145,
  },
  {
    id: 10,
    title: "Wildlife & Nature Package",
    description:
      "5-day adventure package exploring national parks, wildlife sanctuaries, and natural wonders of Chhattisgarh.",
    image: "/bamboo.png",
    category: "packages",
    location: "Multiple Locations",
    rating: 4.7,
    reviews: 98,
  },
  {
    id: 11,
    title: "Ranidhara Waterfall",
    description:
      "5-day adventure package exploring national parks, wildlife sanctuaries, and natural wonders of Chhattisgarh.",
    image: "/bamboo.png",
    category: "packages",
    location: "Multiple Locations",
    rating: 4.7,
    reviews: 98,
  },
]

export default function DestinationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              
              <span className="text-lg font-bold">Destinations</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/experience" className="text-sm font-medium hover:underline underline-offset-4">
              Experiences
            </Link>
            <Link href="/plan" className="text-sm font-medium hover:underline underline-offset-4">
              Plan Your Trip
            </Link>
            <Link href="/culture" className="text-sm font-medium hover:underline underline-offset-4">
              Culture
            </Link>
          </nav>
        </div>
      </header>

      <main className="container py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Explore Chhattisgarh Destinations</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover breathtaking waterfalls, pristine national parks, ancient temples, exciting water parks, and
            curated tour packages
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search destinations..." className="pl-9" />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="waterfall">Waterfalls</TabsTrigger>
            <TabsTrigger value="national-park">National Parks</TabsTrigger>
            <TabsTrigger value="temple">Temples</TabsTrigger>
            <TabsTrigger value="waterpark">Water Parks</TabsTrigger>
            <TabsTrigger value="packages">Packages</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="waterfall">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations
                .filter((d) => d.category === "waterfall")
                .map((destination) => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="national-park">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations
                .filter((d) => d.category === "national-park")
                .map((destination) => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="temple">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations
                .filter((d) => d.category === "temple")
                .map((destination) => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="waterpark">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations
                .filter((d) => d.category === "waterpark")
                .map((destination) => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="packages">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations
                .filter((d) => d.category === "packages")
                .map((destination) => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

function DestinationCard({ destination }: { destination: any }) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={destination.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute top-3 right-3 capitalize">{destination.category.replace("-", " ")}</Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{destination.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{destination.description}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{destination.location}</span>
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            <span>{destination.rating}</span>
            <span className="text-muted-foreground">({destination.reviews})</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Link href={`/destination/${destination.category}/${destination.id}`} className="flex-1">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
        <Link href="/plan" className="flex-1">
          <Button className="w-full">Plan Your Trip</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
