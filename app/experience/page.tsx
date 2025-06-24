import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Heart, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

const experiences = [
  {
    id: 1,
    title: "My Magical Journey to Chitrakote Falls",
    summary:
      "An unforgettable experience witnessing the thunderous beauty of India's widest waterfall. The mist, the rainbows, and the sheer power of nature left me speechless.",
    content:
      "I had heard about Chitrakote Falls being called the 'Niagara of India', but nothing prepared me for the actual experience. The sound of the water crashing down could be heard from kilometers away...",
    author: "Priya Sharma",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/chitrakote.jpg",
    category: "Nature",
    likes: 124,
    comments: 18,
    tags: ["Waterfall", "Bastar", "Photography", "Nature"],
  },
  {
    id: 2,
    title: "Living with the Gond Tribe: A Cultural Immersion",
    summary:
      "Three days spent with a Gond tribal family opened my eyes to a completely different way of life. Their warmth, traditions, and connection with nature was truly inspiring.",
    content:
      "The invitation came unexpectedly. While exploring the villages around Kanker, I met Ramesh, a Gond tribal elder who invited me to stay with his family...",
    author: "Rajesh Kumar",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "February 28, 2024",
    readTime: "8 min read",
    image: "/godna.png",
    category: "Culture",
    likes: 89,
    comments: 12,
    tags: ["Tribal Culture", "Gond", "Village Life", "Traditions"],
  },
  {
    id: 3,
    title: "Wildlife Safari at Kanger Valley: Spotting the Elusive Leopard",
    summary:
      "After three attempts, I finally managed to spot a leopard in its natural habitat at Kanger Valley National Park. The patience was worth every moment.",
    content:
      "Dawn was breaking as our jeep entered the dense forests of Kanger Valley. Our guide, Suresh, had promised that today might be the day we spot the leopard...",
    author: "Dr. Meera Patel",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "January 20, 2024",
    readTime: "6 min read",
    image: "/national-parks-india-1.jpg",
    category: "Wildlife",
    likes: 156,
    comments: 24,
    tags: ["Wildlife", "Leopard", "Safari", "Photography"],
  },
  {
    id: 4,
    title: "The Ancient Mysteries of Sirpur: A Photographer's Paradise",
    summary:
      "Exploring the 1500-year-old ruins of Sirpur with my camera revealed incredible architectural details and stories carved in stone.",
    content:
      "As a photographer specializing in heritage sites, Sirpur had been on my bucket list for years. The ancient Buddhist and Hindu temples here date back to the 5th century...",
    author: "Amit Singh",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "December 10, 2023",
    readTime: "7 min read",
    image: "/tribalmuseum.png",
    category: "Heritage",
    likes: 203,
    comments: 31,
    tags: ["Heritage", "Photography", "Ancient", "Architecture"],
  },
  {
    id: 5,
    title: "Bastar Dussehra: 75 Days of Celebration",
    summary:
      "Witnessing the world's longest festival was a once-in-a-lifetime experience. The tribal traditions, rituals, and community spirit were absolutely mesmerizing.",
    content:
      "Most people know Dussehra as a 10-day festival, but in Bastar, it's a 75-day celebration that transforms the entire region. I was fortunate to witness this unique cultural phenomenon...",
    author: "Kavita Joshi",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "November 5, 2023",
    readTime: "9 min read",
    image: "/mario.png",
    category: "Festival",
    likes: 178,
    comments: 27,
    tags: ["Festival", "Bastar", "Dussehra", "Culture"],
  },
  {
    id: 6,
    title: "Trekking Through the Mainpat Plateau: Chhattisgarh's Mini Kashmir",
    summary:
      "The rolling hills, pine forests, and cool climate of Mainpat reminded me why it's called the 'Shimla of Chhattisgarh'. A perfect weekend getaway.",
    content:
      "Escaping the heat of the plains, I headed to Mainpat, often called the 'Shimla of Chhattisgarh'. The journey itself was an adventure through winding mountain roads...",
    author: "Arjun Verma",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "October 18, 2023",
    readTime: "4 min read",
    image: "/tigerpoint (2).jpg",
    category: "Adventure",
    likes: 92,
    comments: 15,
    tags: ["Trekking", "Mainpat", "Hills", "Adventure"],
  },
]

export default function ExperiencePage() {
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
              
              <span className="text-lg font-bold">Travel Experiences</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/destination" className="text-sm font-medium hover:underline underline-offset-4">
              Destinations
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
          <h1 className="text-4xl font-bold tracking-tight mb-4">Travel Experiences & Stories</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Read authentic travel experiences, tips, and stories from fellow travelers who have explored the wonders of
            Chhattisgarh
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <Input placeholder="Search experiences..." className="w-full" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Badge variant="default" className="cursor-pointer">
            All
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-accent">
            Nature
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-accent">
            Culture
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-accent">
            Wildlife
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-accent">
            Heritage
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-accent">
            Festival
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-accent">
            Adventure
          </Badge>
        </div>

        {/* Featured Experience */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Experience</h2>
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={experiences[0].image || "/placeholder.svg"}
                  alt={experiences[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge>{experiences[0].category}</Badge>
                    <span className="text-sm text-muted-foreground">{experiences[0].readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{experiences[0].title}</h3>
                  <p className="text-muted-foreground mb-4">{experiences[0].summary}</p>
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={experiences[0].authorImage || "/placeholder.svg"} alt={experiences[0].author} />
                      <AvatarFallback>{experiences[0].author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-medium">{experiences[0].author}</p>
                      <p className="text-muted-foreground">{experiences[0].date}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{experiences[0].likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{experiences[0].comments}</span>
                    </div>
                  </div>
                  <Button className="gap-2">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* All Experiences */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">All Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.slice(1).map((experience) => (
              <Card key={experience.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={experience.image || "/placeholder.svg"}
                    alt={experience.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-3 right-3">{experience.category}</Badge>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-muted-foreground">{experience.readTime}</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{experience.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold line-clamp-2">{experience.title}</h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{experience.summary}</p>
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={experience.authorImage || "/placeholder.svg"} alt={experience.author} />
                      <AvatarFallback>{experience.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{experience.author}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {experience.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{experience.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{experience.comments}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="gap-2">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Stories
          </Button>
        </div>

        {/* Share Your Experience CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
              <p className="text-muted-foreground mb-6">
                Have you visited Chhattisgarh? Share your travel story and inspire others to explore this beautiful
                state.
              </p>
              <Button size="lg" className="gap-2">
                Write Your Story <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
