import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Music, Palette, ChefHat, Users, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const cultureData = {
  festivals: [
    {
      id: 1,
      title: "Bastar Dussehra",
      description:
        "The world's longest festival celebrated for 75 days, showcasing unique tribal traditions and rituals.",
      image: "/dushera.png",
      duration: "75 days",
      location: "Bastar",
      season: "September - November",
      highlights: ["Rath Yatra", "Tribal Dances", "Traditional Rituals", "Cultural Processions"],
    },
    {
      id: 2,
      title: "Hareli Festival",
      description:
        "Agricultural festival marking the beginning of farming season with bullock worship and folk performances.",
      image: "/harelii.png",
      duration: "1 day",
      location: "Statewide",
      season: "July - August",
      highlights: ["Bullock Decoration", "Folk Songs", "Traditional Games", "Community Feasts"],
    },
    {
      id: 3,
      title: "Madai Festival",
      description: "Tribal fair celebrated by Gond and Maria tribes with colorful processions and handicraft markets.",
      image: "/madai.png",
      duration: "3-5 days",
      location: "Bastar Region",
      season: "December - February",
      highlights: ["Tribal Markets", "Folk Dances", "Traditional Crafts", "Cultural Exchange"],
    },
  ],
  dances: [
    {
      id: 1,
      title: "Panthi Dance",
      description:
        "Traditional dance form performed during religious festivals, especially associated with Satnami community.",
      image: "/panthidance.png",
      origin: "Satnami Community",
      occasion: "Religious Festivals",
      characteristics: ["Rhythmic Movements", "Group Performance", "Devotional Songs", "Traditional Costumes"],
    },
    {
      id: 2,
      title: "Raut Nacha",
      description: "Folk dance performed by Yadav community depicting stories of Lord Krishna and his adventures.",
      image: "/rautnacha.jpg",
      origin: "Yadav Community",
      occasion: "Dev Uthani Ekadashi",
      characteristics: ["Krishna Stories", "Colorful Costumes", "Musical Instruments", "Dramatic Performance"],
    },
    {
      id: 3,
      title: "Karma Dance",
      description: "Tribal dance celebrating the worship of Karma tree, performed during Karma festival.",
      image: "/karmadance.png",
      origin: "Tribal Communities",
      occasion: "Karma Festival",
      characteristics: ["Nature Worship", "Circular Formation", "Traditional Songs", "Seasonal Celebration"],
    },
  ],
  food: [
    {
      id: 1,
      title: "Chila",
      description: "Traditional rice pancake served with various chutneys and curries, a staple breakfast dish.",
      image: "/mongchilla.png",
      type: "Breakfast",
      ingredients: ["Rice", "Lentils", "Spices"],
      region: "Statewide",
    },
    {
      id: 2,
      title: "Farra",
      description: "Steamed rice flour dumplings stuffed with spiced lentils, a popular snack and festival food.",
      image: "/farra.png",
      type: "Snack",
      ingredients: ["Rice Flour", "Lentils", "Spices"],
      region: "Central Chhattisgarh",
    },
    {
      id: 3,
      title: "Chapda",
      description: "Chapda is a spicy, tangy chutney made by grinding red ants and their eggs with garlic, ginger, salt, chili, and coriander.",
      image: "/chapda.png",
      type: "Main Course",
      ingredients: ["Chana Dal", "Spices", "Herbs"],
      region: "Bastar",
    },
  ],
  arts: [
    {
      id: 1,
      title: "Dhokra Art",
      description: "Ancient lost-wax metal casting technique used to create intricate brass and bronze artifacts.",
      image: "/dhokra.png",
      technique: "Lost-wax casting",
      materials: ["Brass", "Bronze", "Wax"],
      products: ["Figurines", "Jewelry", "Decorative Items"],
    },
    {
      id: 2,
      title: "Bamboo Craft",
      description: "Traditional bamboo weaving creating functional and decorative items using locally sourced bamboo.",
      image: "/bamboo.png",
      technique: "Weaving",
      materials: ["Bamboo", "Natural Dyes"],
      products: ["Baskets", "Furniture", "Decorative Items"],
    },
    {
      id: 3,
      title: "Godna Art",
      description:
        "Traditional tattoo art form now adapted to canvas and walls, featuring geometric and nature patterns.",
      image: "/godna.png",
      technique: "Pattern Drawing",
      materials: ["Natural Pigments", "Canvas"],
      products: ["Wall Art", "Canvas Paintings", "Body Art"],
    },
  ],
  music: [
    {
      id: 1,
      title: "Pandavani",
      description: "Musical storytelling tradition narrating tales from Mahabharata, performed by traveling artists.",
      image: "/pandvani.jpg",
      style: "Narrative Singing",
      instruments: ["Tambura", "Manjira"],
      themes: ["Mahabharata", "Moral Stories"],
    },
    {
      id: 2,
      title: "Bihav Geet",
      description: "Traditional wedding songs sung during marriage ceremonies, expressing joy and blessings.",
      image: "/bihavgeet.jpg",
      style: "Folk Songs",
      instruments: ["Dhol", "Manjeera"],
      themes: ["Wedding", "Celebration", "Blessings"],
    },
    {
      id: 3,
      title: "Sohar Geet",
      description: "Songs sung during childbirth and naming ceremonies, celebrating new life and family joy.",
      image: "/sohargeet.jpg",
      style: "Ceremonial Songs",
      instruments: ["Traditional Drums"],
      themes: ["Birth", "Family", "Celebration"],
    },
  ],
}

export default function CulturePage() {
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
              <span className="text-lg font-bold">Culture & Heritage</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/destination" className="text-sm font-medium hover:underline underline-offset-4">
              Destinations
            </Link>
            <Link href="/experience" className="text-sm font-medium hover:underline underline-offset-4">
              Experiences
            </Link>
            <Link href="/plan" className="text-sm font-medium hover:underline underline-offset-4">
              Plan Your Trip
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <Image
            src="/national-parks-india-1.jpg"
            alt="Chhattisgarh Culture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Rich Cultural Heritage</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Discover the vibrant traditions, festivals, arts, and customs of Chhattisgarh
              </p>
            </div>
          </div>
        </section>

        <div className="container py-12">
          {/* Culture Categories */}
          <Tabs defaultValue="festivals" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="festivals" className="gap-2">
                <Calendar className="h-4 w-4" />
                Festivals
              </TabsTrigger>
              <TabsTrigger value="dances" className="gap-2">
                <Users className="h-4 w-4" />
                Dance
              </TabsTrigger>
              <TabsTrigger value="food" className="gap-2">
                <ChefHat className="h-4 w-4" />
                Food
              </TabsTrigger>
              <TabsTrigger value="arts" className="gap-2">
                <Palette className="h-4 w-4" />
                Arts
              </TabsTrigger>
              <TabsTrigger value="music" className="gap-2">
                <Music className="h-4 w-4" />
                Music
              </TabsTrigger>
            </TabsList>

            {/* Festivals */}
            <TabsContent value="festivals" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Vibrant Festivals</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Experience the colorful celebrations that showcase Chhattisgarh's rich cultural diversity
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cultureData.festivals.map((festival) => (
                  <Card key={festival.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={festival.image || "/placeholder.svg"}
                        alt={festival.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <Badge className="absolute top-3 right-3">{festival.duration}</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle>{festival.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{festival.location}</span>
                        <span>•</span>
                        <span>{festival.season}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{festival.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-medium">Highlights:</h4>
                        <div className="flex flex-wrap gap-1">
                          {festival.highlights.map((highlight, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full gap-2">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Dance */}
            <TabsContent value="dances" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Traditional Dance Forms</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Discover the rhythmic expressions of Chhattisgarh's diverse communities
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cultureData.dances.map((dance) => (
                  <Card key={dance.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={dance.image || "/placeholder.svg"}
                        alt={dance.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{dance.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{dance.origin}</span>
                        <span>•</span>
                        <span>{dance.occasion}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{dance.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-medium">Characteristics:</h4>
                        <div className="flex flex-wrap gap-1">
                          {dance.characteristics.map((char, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {char}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full gap-2">
                        Watch Performance <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Food */}
            <TabsContent value="food" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Traditional Cuisine</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Savor the authentic flavors of Chhattisgarh's traditional dishes
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cultureData.food.map((dish) => (
                  <Card key={dish.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={dish.image || "/placeholder.svg"}
                        alt={dish.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <Badge className="absolute top-3 right-3">{dish.type}</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle>{dish.title}</CardTitle>
                      <div className="text-sm text-muted-foreground">{dish.region}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{dish.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-medium">Main Ingredients:</h4>
                        <div className="flex flex-wrap gap-1">
                          {dish.ingredients.map((ingredient, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {ingredient}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full gap-2">
                        Get Recipe <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Arts */}
            <TabsContent value="arts" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Traditional Arts & Crafts</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explore the exquisite handicrafts and artistic traditions of Chhattisgarh
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cultureData.arts.map((art) => (
                  <Card key={art.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={art.image || "/placeholder.svg"}
                        alt={art.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{art.title}</CardTitle>
                      <div className="text-sm text-muted-foreground">Technique: {art.technique}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{art.description}</p>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-sm">Materials:</h4>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {art.materials.map((material, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {material}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">Products:</h4>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {art.products.map((product, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {product}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full gap-2">
                        Learn Craft <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Music */}
            <TabsContent value="music" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Folk Music Traditions</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Listen to the melodious folk music that echoes through Chhattisgarh's villages
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cultureData.music.map((music) => (
                  <Card key={music.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={music.image || "/placeholder.svg"}
                        alt={music.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{music.title}</CardTitle>
                      <div className="text-sm text-muted-foreground">Style: {music.style}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{music.description}</p>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-sm">Instruments:</h4>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {music.instruments.map((instrument, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {instrument}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">Themes:</h4>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {music.themes.map((theme, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {theme}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full gap-2">
                        Listen Now <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Cultural Experiences CTA */}
          <div className="mt-16 text-center">
            <Card className="max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Experience Chhattisgarh Culture</h3>
                <p className="text-muted-foreground mb-6">
                  Immerse yourself in authentic cultural experiences through workshops, performances, and village stays.
                  Connect with local artisans and learn traditional crafts firsthand.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/plan">
                    <Button size="lg" className="gap-2">
                      Plan Cultural Tour <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/experience">
                    <Button variant="outline" size="lg" className="gap-2">
                      Read Experiences <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
