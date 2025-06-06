import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Globe, Map, MapPin, Compass, Users } from "lucide-react"
import "react-datepicker/dist/react-datepicker.css";

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

import DestinationCard from "@/app/destination-card"
import VirtualTourViewer from "@/app/virtual-tour-viewer"
import TripPlanner from "@/app/trip-planner"
import TestimonialCarousel from "@/app/testimonial-carousel"
import CulturalExperiences from "@/app/cultural-experiences"
import NewsletterSignup from "@/app/newsletter-signup"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-29">
            <Image
              src="/log.jpg"
              alt="Chhattisgarh Tourism Logo"
              width={40}
              height={40}
              className="rounded-full ml-4"
            />
            <span className="text-xl font-bold"></span>
          </div>
          <nav className="hidden md:flex items-center gap-7 mx-auto">
            <Link href="/dest/pagee.tsx" className="text-sm font-medium hover:underline underline-offset-4">
              Destinations
            </Link>
            <Link href="#experiences" className="text-sm font-medium hover:underline underline-offset-4">
              Experiences
            </Link>
            <Link href="#plan" className="text-sm font-medium hover:underline underline-offset-4">
              Plan Your Trip
            </Link>
            <Link href="#culture" className="text-sm font-medium hover:underline underline-offset-4">
              Culture
            </Link>
            <Link href="#gallery" className="text-sm font-medium hover:underline underline-offset-4">
              Gallery
            </Link>
          </nav>
        <div className="flex items-center gap-8 ml-auto">
          <Link href="/auth/login" passHref>
            <Button variant="outline" size="sm" className="hidden md:flex ml-8">
            Login
            </Button>
          </Link>

          <Link href="/signup" passHref>
            <Button size="sm">
          Sign in
            </Button>
          </Link>
        </div>
      </div>
      </header>
      <main className="flex-5s">
        {/* Hero Section */}
        <section className="relative h-[90vh] overflow-hidden">
<div className="absolute inset-0">
  <Image
    src="/buffalo.jpg" // ✅ correct path
    alt="Chhattisgarh landscape"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
</div>

          <div className="container relative z-10 flex h-full flex-col items-start justify-center gap-6 pt-16">
            <Badge className="bg-green-600 hover:bg-green-700">Discover Chhattisgarh</Badge>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Experience the Heart of Incredible Chhattisgarh
            </h1>
            <p className="max-w-[600px] text-lg text-white/90 md:text-xl">
              Explore ancient temples, lush forests, vibrant tribal cultures, and pristine waterfalls in Chhattisgarh's hidden
              gem.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="gap-2">
                Explore Destinations <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20">
                Virtual Tours
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-24" />
        </section>

        {/* Search and Filter Section */}
        <section className="container relative -mt-27 z-27">
          <Card className="border shadow-none">
            <CardContent className="p-6">
              <Tabs defaultValue="destinations" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="destinations">Destinations</TabsTrigger>
                  <TabsTrigger value="experiences">Experiences</TabsTrigger>
                  <TabsTrigger value="packages">Packages</TabsTrigger>
                </TabsList>
                <TabsContent value="destinations" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Where to go?"
                        list="destinations"
                        className="w-full rounded-md border border-input bg-background px-9 py-3 text-sm"
                      />
                      <datalist id="destinations">
                        <option value="Chitrakote Watefall"/>
                        <option value="Tirathgarh Waterfall"/>
                        <option value="Bhoram Dev Temple"/>
                        <option value="Jatmai Ghatarani Temple"/>
                        <option value="Ranidhara Waterfall"/>
                        <option value="Dhaskund Waterfall"/>
                        <option value="Dev Bawali Waterfall"/>
                        <option value="Kanha Kesli"/>
                        </datalist>
                    </div>
                    <div className="flex-1">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        id="start-date"
                        type="date"
                        placeholder="When?"
                        className="w-full rounded-md border border-input bg-background px-9 py-3 text-sm"
                      />
                    </div>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="number"
                        min="1"
                        max="100"
                        placeholder="Travelers"
                        className="w-full rounded-md border border-input bg-background px-9 py-3 text-sm"
                      />
                    </div>
                    <Button className="w-full">Search</Button>
                  </div>
                </TabsContent>
                <TabsContent value="experiences" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="relative">
                      <Compass className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Activity type"
                        className="w-full rounded-md border border-input bg-background px-9 py-3 text-sm"
                      />
                    </div>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="date"
                        placeholder="When?"
                        className="w-full rounded-md border border-input bg-background px-9 py-3 text-sm"
                      />
                    </div>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Group size"
                        className="w-full rounded-md border border-input bg-background px-9 py-3 text-sm"
                      />
                    </div>
                    <Button className="w-full">Search</Button>
                  </div>
                </TabsContent>
                <TabsContent value="packages" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="relative">
                      <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Package type"
                        className="w-full rounded-md border border-input bg-background px-9 py-3 text-sm"
                      />
                    </div>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Duration"
                        className="w-full rounded-md border border-input bg-background px-9 py-3 text-sm"
                      />
                    </div>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Budget"
                        className="w-full rounded-md border border-input bg-background px-9 py-3 text-sm"
                      />
                    </div>
                    <Button className="w-full">Search</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* Featured Destinations */}
        <section id="destinations" className="container py-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Destinations</h2>
              <p className="text-muted-foreground max-w-2xl">
                Discover the most beautiful and captivating places in Chhattisgarh
              </p>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <Button variant="outline" size="sm">
                All Destinations
              </Button>
              <Button variant="outline" size="sm">
                Waterfalls
              </Button>
              <Button variant="outline" size="sm">
                Temples
              </Button>
              <Button variant="outline" size="sm">
                Mountains
              </Button>
              <Button variant="outline" size="sm">
                National Park
              </Button>
              <Button variant="outline" size="sm">
                Waterparks
              </Button>
              <Button variant="outline" size="sm">
                Packages
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DestinationCard
              title="Chitrakote Falls"
              description="India's widest waterfall, often called the 'Niagara of India'"
              image="/chitrakote.jpg"
              location="Bastar"
              rating={4.8}
              category="Nature"
            />
            <DestinationCard
              title="Dholkal"
              description="Beautiful spot located 3000 feet high in the Bailadila Mountain ranges in District Dantewada"
              image="/dholkal.jpg"
              location="Dantewada"
              rating={4.6}
              category="Heritage"
            />
            <DestinationCard
              title="Onakona Temple"
              description="Home to diverse wildlife including leopards, bears, and hundreds of bird species"
              image="/Onakona Temple.jpg"
              location="Raipur"
              rating={4.5}
              category="Wildlife"
            />
            <DestinationCard
              title="Bhoramdeo Temple"
              description="11th century temple known as the 'Khajuraho of Chhattisgarh'"
              image="/bhoramdev.jpg"
              location="Kawardha"
              rating={4.7}
              category="Heritage"
            />
            <DestinationCard
              title="Tiger Point Waterafall"
              description="Featuring waterfalls, and rich biodiversity"
              image="/tigerpoint (2).jpg"
              location="Mainpat"
              rating={4.9}
              category="Nature"
            />
            <DestinationCard
              title="Vishnu Manir"
              description="Showcasing the rich cultural heritage of Chhattisgarh's tribal communities"
              image="/vishnumandir.jpg"
              location="Janjgir"
              rating={4.4}
              category="Culture"
            />
          </div>

         

          <div className="mt-10 text-center">
           <Button variant="outline" asChild className="gap-2">
             <Link href="/dest">
             View All Destinations <ArrowRight className="h-4 w-4" />
             </Link>
           </Button>
          </div>
        </section>

        {/* Virtual Tour Section */}
        <section className="bg-muted py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Experience Virtual Tours</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore Chhattisgarh's most beautiful destinations from the comfort of your home
              </p>
            </div>

            <VirtualTourViewer />

            <div className="mt-10 text-center">
              <Button className="gap-2">
                Explore More Virtual Tours <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Trip Planner */}
        <section id="plan" className="container py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Plan Your Perfect Trip</h2>
              <p className="text-muted-foreground mb-6">
                Our AI-powered trip planner helps you create a personalized itinerary based on your preferences, budget,
                and travel dates. Get recommendations for destinations, accommodations, and activities.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Personalized Itineraries</h3>
                    <p className="text-sm text-muted-foreground">
                      Get a day-by-day plan tailored to your interests and travel style
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Map className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Interactive Maps</h3>
                    <p className="text-sm text-muted-foreground">
                      Visualize your journey with detailed maps and directions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Local Insights</h3>
                    <p className="text-sm text-muted-foreground">
                      Discover hidden gems and authentic experiences recommended by locals
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <TripPlanner />
          </div>
        </section>

        {/* Cultural Experiences */}
        <section id="culture" className="bg-muted py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Immersive Cultural Experiences</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Dive deep into Chhattisgarh's rich tribal heritage, traditional arts, and authentic cuisine
              </p>
            </div>

            <CulturalExperiences />
          </div>
        </section>

        {/* Testimonials */}
        <section className="container py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">What Travelers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from visitors who have experienced the magic of Chhattisgarh
            </p>
          </div>

          <TestimonialCarousel />
        </section>

        {/* Gallery */}
        <section id="gallery" className="bg-muted py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Explore Our Gallery</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Stunning visuals from across Chhattisgarh that will inspire your next adventure
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/neelamsariwaterfall.jpg"
                    alt="Chhattisgarh landscape"
                    width={400}
                    height={600}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/bhilaisteelplant.jpg"
                    alt="Chhattisgarh culture"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/bamboo.png"
                    alt="Chhattisgarh temple"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/village.jpg"
                    alt="Chhattisgarh waterfall"
                    width={400}
                    height={600}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/tribedrummer.jpg"
                    alt="Chhattisgarh tribal art"
                    width={400}
                    height={600}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/neelamsariwaterfall.jpg"
                    alt="Chhattisgarh wildlife"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/ghatarani.jpg"
                    alt="Chhattisgarh food"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/buffalo.jpg"
                    alt="Chhattisgarh festival"
                    width={400}
                    height={600}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Button variant="outline" className="gap-2">
                View Full Gallery <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="container py-20">
          <NewsletterSignup />
        </section>
      </main>
      <footer className="bg-background border-t">
        <div className="container py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/log.jpg"
                  alt="Chhattisgarh Tourism Logo"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
                <span className="text-xl font-bold">Chhattisgarh Tourism</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Discover the heart of incredible India with its rich cultural heritage, pristine nature, and authentic
                experiences.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="https://www.instagram.com/tripchalein?igsh=MTdocGUzNjhnaWNmNw==" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
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
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-youtube"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">FGTG
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Experiences
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Plan Your Trip
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Travel Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Events & Festivals
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Cancellation Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Information</h3>
              <address className="not-italic text-muted-foreground space-y-2">
                <p>Chhattisgarh Tourism Board</p>
                <p>Sec 10 St 42 Qua-6/B</p>
                <p>Bhilai, Chhattisgarh 490009</p>u
                <p className="pt-2">
                  <a href="tel:+917712422788" className="hover:text-foreground">
                    Phone: +91 771 242 2788
                  </a>
                </p>
                <p>
                  <a href="mailto:info@chhattisgarhtourism.in" className="hover:text-foreground">
                    Email: info@tripchalein.in
                  </a>
                </p>
              </address>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Chhattisgarh Tourism. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
