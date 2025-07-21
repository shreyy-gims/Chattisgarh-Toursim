import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CulturalExperiences() {
  return (
    <Tabs defaultValue="tribal" className="w-full">
      <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
        <TabsTrigger value="tribal">Tribal</TabsTrigger>
        <TabsTrigger value="crafts">Crafts</TabsTrigger>
        <TabsTrigger value="cuisine">Cuisine</TabsTrigger>
        <TabsTrigger value="festivals">Festivals</TabsTrigger>
      </TabsList>

      <TabsContent value="tribal" className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Tribal Communities</h3>
            <p className="text-muted-foreground mb-4">
              Chhattisgarh is home to 42 different tribes, each with their unique customs, traditions, and way of life.
              Experience authentic tribal culture through immersive village stays, traditional dance performances, and
              interactive workshops.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Village tours with local tribal guides</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Traditional dance performances</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Authentic tribal cuisine experiences</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Cultural exchange programs</span>
              </li>
            </ul>
            <Button className="gap-2">
              Explore Tribal Experiences <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/tribedrummer.jpg"
              alt="Tribal culture in Chhattisgarh"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <div className="relative h-48 overflow-hidden">
              <Image src="/tigerpoint (2).jpg" alt="Bastar tribe" fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Bastar Tribe Experience</h4>
              <p className="text-sm text-muted-foreground">
                Experience the rich cultural heritage of the Bastar tribe through traditional dance, music, and art
                forms. Interact with local artisans and learn about their unique way of life.
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <div className="relative h-48 overflow-hidden">
              <Image src="/village.jpg" alt="Gond tribe" fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Gond Tribal Village Stay</h4>
              <p className="text-sm text-muted-foreground">
                Stay with a Gond tribal family and experience their daily life, traditions, and customs. Participate in
                cooking traditional meals and learn about their sustainable lifestyle.
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <div className="relative h-48 overflow-hidden">
              <Image src="/mario.png" alt="Maria tribe" fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Maria Tribe Dance Workshop</h4>
              <p className="text-sm text-muted-foreground">
                Learn the traditional dance forms of the Maria tribe in this interactive workshop. Experience the
                rhythmic beats and vibrant movements that tell stories of their heritage.
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="crafts" className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden md:order-first order-last">
            <Image
              src="/crafttab.png"
              alt="Traditional crafts of Chhattisgarh"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Traditional Arts & Crafts</h3>
            <p className="text-muted-foreground mb-4">
              Chhattisgarh is renowned for its exquisite handicrafts that showcase the artistic skills passed down
              through generations. From bell metal crafts to bamboo artifacts, terracotta to woodcarving, the state
              offers a treasure trove of traditional craftsmanship.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Dhokra (Bell Metal) Craft Workshops</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Bamboo Craft Demonstrations</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Terracotta Art Classes</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Sisal Craft Making</span>
              </li>
            </ul>
            <Button className="gap-2">
              Discover Craft Experiences <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <div className="relative h-48 overflow-hidden">
              <Image src="/dhokra.png" alt="Dhokra craft" fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Dhokra Craft Workshop</h4>
              <p className="text-sm text-muted-foreground">
                Learn the ancient lost-wax metal casting technique used to create intricate Dhokra artifacts. Create
                your own souvenir under the guidance of master artisans.
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button variant="outline" className="w-full">
                Book Workshop
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <div className="relative h-48 overflow-hidden">
              <Image src="/bamboo.png" alt="Bamboo craft" fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Bamboo Craft Experience</h4>
              <p className="text-sm text-muted-foreground">
                Discover the versatility of bamboo as you learn to create beautiful and functional items. This hands-on
                workshop teaches traditional techniques with a modern twist.
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button variant="outline" className="w-full">
                Book Workshop
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <div className="relative h-48 overflow-hidden">
              <Image src="/godna.png" alt="Godna art" fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Godna Art Painting Class</h4>
              <p className="text-sm text-muted-foreground">
                Learn the traditional Godna art form, originally used for tattoos and now adapted to canvas. Create
                beautiful patterns inspired by nature and tribal symbolism.
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button variant="outline" className="w-full">
                Book Workshop
              </Button>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="cuisine" className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Chhattisgarhi Cuisine</h3>
            <p className="text-muted-foreground mb-4">
              Explore the unique flavors of Chhattisgarh through its diverse culinary traditions. From tribal delicacies
              to regional specialties, the state offers a rich tapestry of tastes that reflect its cultural heritage and
              natural abundance.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Moong Dal Chilla</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Fara</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Gulgula</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Tribal cuisine tastings</span>
              </li>
            </ul>
            <Button className="gap-2">
              Explore Culinary Experiences <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/chapda.png"
              alt="Chhattisgarhi cuisine"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <div className="relative h-48 overflow-hidden">
              <Image src="/mongchilla.png" alt="Cooking class" fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Moong Dal Chilla</h4>
              <p className="text-sm text-muted-foreground">
                Moong Dal Chilla are Indian savory pancakes made with yellow moong dal, spices, herbs and vegetables
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button variant="outline" className="w-full">
                Taste it
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <div className="relative h-48 overflow-hidden">
              <Image src="/farra.png" alt="Food tour" fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">fara</h4>
              <p className="text-sm text-muted-foreground">
                Fara (Phara) is a snack and breakfast dish, this recipe uses rice flour, salt and water. 
                The dough is made and then rolled out into sticks.This boiled and tempered dish is easy and filling. 
                It is served alongside chutney. A simple dish that encourages you to reduce the waste of good food.
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button variant="outline" className="w-full">
                Try it Now
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <div className="relative h-48 overflow-hidden">
              <Image src="/gulgola.png" alt="Tribal cuisine" fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Gulgula</h4>
              <p className="text-sm text-muted-foreground">
                Sweet, tender on the inside, and crispy on the outside, these Gulgule (singular gulgula) are fennel-scented deep-fried balls of deliciousness from the North Indian cuisine
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button variant="outline" className="w-full">
                Khabe ?
              </Button>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="festivals" className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden md:order-first order-last">
            <Image
              src="/tribedance.jpg"
              alt="Chhattisgarh festivals"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Vibrant Festivals & Celebrations</h3>
            <p className="text-muted-foreground mb-4">
              Experience the colorful and vibrant festivals of Chhattisgarh that showcase the state's rich cultural
              heritage. From tribal celebrations to religious festivals, these events offer a glimpse into the
              traditions and customs of the local communities.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Bastar Dussehra (75-day celebration)</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Madai Festival</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Hareli & Teeja Festivals</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Goncha Festival</span>
              </li>
            </ul>
            <Button className="gap-2">
              Explore Festival Calendar <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <div className="relative h-48 overflow-hidden">
              <Image src="/dushera.png" alt="Bastar Dussehra" fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Bastar Dussehra Festival</h4>
              <p className="text-sm text-muted-foreground">
                Experience the world's longest festival, a 75-day celebration that showcases the unique tribal
                traditions of the Bastar region with rituals, dances, and processions.
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button variant="outline" className="w-full">
                View Festival Details
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <div className="relative h-48 overflow-hidden">
              <Image src="/harelii.png" alt="Hareli festival" fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Hareli Festival</h4>
              <p className="text-sm text-muted-foreground">
                Join the agricultural festival that marks the beginning of the farming season. Witness traditional
                rituals, bullock worship, and folk performances celebrating nature.
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button variant="outline" className="w-full">
                View Festival Details
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <div className="relative h-48 overflow-hidden">
              <Image src="/madai.png" alt="Madai festival" fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2">Madai Festival</h4>
              <p className="text-sm text-muted-foreground">
                Experience this tribal fair celebrated by the Gond and Maria tribes. Enjoy colorful processions,
                traditional music, dance performances, and local handicraft markets.
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button variant="outline" className="w-full">
                View Festival Details
              </Button>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  )
}
