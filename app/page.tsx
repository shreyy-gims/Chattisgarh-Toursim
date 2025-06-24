import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Globe, Map, MapPin, Compass, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

import DestinationCard from "@/app/destination-card"
import VirtualTourViewer from "@/app/virtual-tour-viewer"
import BudgetCalculator from "@/app/budget-calculator"
import TestimonialCarousel from "@/app/testimonial-carousel"
import CulturalExperiences from "@/app/cultural-experiences"
import NewsletterSignup from "@/app/newsletter-signup"
import DestinationTypeCard from "@/app/destination-type-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/log.jpg"
              alt="Chhattisgarh Tourism Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="text-xl font-bold"></span>
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
            <Link href="/culture" className="text-sm font-medium hover:underline underline-offset-4">
              Culture
            </Link>
            <Link href="#gallery" className="text-sm font-medium hover:underline underline-offset-4">
              Gallery
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Login
            </Button>
            <Button size="sm">Book Now</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[90vh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/buffalo.jpg"
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
              Experience the Heart of Incredible India
            </h1>
            <p className="max-w-[600px] text-lg text-white/90 md:text-xl">
              Explore ancient temples, lush forests, vibrant tribal cultures, and pristine waterfalls in India's hidden
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

        

        {/* Destination Types Section */}
        <section className="container py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Explore by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover Chhattisgarh through different types of destinations and experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DestinationTypeCard
              title="Waterfalls"
              description="Discover breathtaking waterfalls including Chitrakote Falls, the 'Niagara of India'"
              image="/waterfall.png"
              icon="💧"
              count="15+ Waterfalls"
              href="/destination/waterfall"
            />
            <DestinationTypeCard
              title="National Parks"
              description="Explore diverse wildlife sanctuaries and national parks with rich biodiversity"
              image="/national.png"
              icon="🌲"
              count="8+ Parks"
              href="/destination/national-park"
            />
            <DestinationTypeCard
              title="Temples"
              description="Visit ancient temples showcasing architectural marvels and spiritual heritage"
              image="/vishnumandir.jpg"
              icon="🏛️"
              count="25+ Temples"
              href="/destination/temple"
            />
            <DestinationTypeCard
              title="Water Parks"
              description="Enjoy fun-filled water parks perfect for family entertainment and recreation"
              image="/waterpark.png"
              icon="🏊"
              count="5+ Water Parks"
              href="/destination/waterpark"
            />
            <DestinationTypeCard
              title="Tour Packages"
              description="Choose from curated tour packages designed for different interests and budgets"
              image="/tour.png"
              icon="📦"
              count="20+ Packages"
              href="/destination/packages"
            />
            <DestinationTypeCard
              title="Cultural Sites"
              description="Experience rich tribal culture, traditional arts, and local festivals"
              image="/hanumanbhilai.jpg"
              icon="🎭"
              count="30+ Sites"
              href="/destination/cultural"
            />
          </div>

          <div className="mt-10 text-center">
            <Link href="/dest">
              <Button variant="outline" className="gap-2">
                View All Destinations <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
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
                Nature
              </Button>
              <Button variant="outline" size="sm">
                Heritage
              </Button>
              <Button variant="outline" size="sm">
                Tribal
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
              title="Dholkal Temple"
              description="Ancient Buddhist and Hindu archaeological site with temples dating back to the 5th-8th century"
              image="/dholkal.jpg"
              location="Kawardha"
              rating={4.6}
              category="Heritage"
            />
            <DestinationCard
              title="Tiger Point"
              description="Home to diverse wildlife including leopards, bears, and hundreds of bird species"
              image="/tigerpoint (2).jpg"
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
              title="Kanger Valley National Park"
              description="Featuring stunning caves, waterfalls, and rich biodiversity"
              image="/national-parks-india-1.jpg"
              location="Bastar"
              rating={4.9}
              category="Nature"
            />
            <DestinationCard
              title="Tribal Museum"
              description="Showcasing the rich cultural heritage of Chhattisgarh's tribal communities"
              image="/tribalmuseum.png"
              location="Raipur"
              rating={4.4}
              category="Culture"
            />
          </div>

          <div className="mt-10 text-center">
            <Link href="/destination"> {/* <-- Replace with your actual route */}
            <Button variant="outline" className="gap-2">
            View All Destinations <ArrowRight className="h-4 w-4" />
            </Button>
            </Link>
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

        {/* Budget Calculator */}
        <section id="plan" className="container py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
      <h2 className="text-3xl font-bold tracking-tight mb-4">Trip Budget Calculator</h2>
      <p className="text-lg font-semibold mb-2">
        Get an instant estimate of your trip cost to Chhattisgarh.
      </p>
      <p className="text-muted-foreground mb-6">
        Our smart calculator considers accommodation, transportation, food, and activities to give you a realistic budget range for your perfect getaway. Whether you're planning a weekend escape or a long vacation, our tool simplifies the process with precision and convenience.
      </p>

      {/* Feature List */}
      <div className="space-y-5">
        {/* Instant Cost Estimation */}
        <div className="flex items-start gap-3">
          <div className="bg-primary/10 p-2 rounded-full">
            <Calendar className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">Instant Cost Estimation</h3>
            <p className="text-sm text-muted-foreground">
              Get real-time budget calculations based on your travel preferences
            </p>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="flex items-start gap-3">
          <div className="bg-primary/10 p-2 rounded-full">
            <Map className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">Detailed Breakdown</h3>
            <p className="text-sm text-muted-foreground">
              See costs for hotels, transport, meals, and activities separately
            </p>
          </div>
        </div>

        {/* Budget Optimization */}
        <div className="flex items-start gap-3">
          <div className="bg-primary/10 p-2 rounded-full">
            <Globe className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">Budget Optimization</h3>
            <p className="text-sm text-muted-foreground">
              Get suggestions to optimize your budget without compromising experience
            </p>
          </div>
        </div>

        {/* Customized Suggestions */}
        <div className="flex items-start gap-3">
          <div className="bg-primary/10 p-2 rounded-full">
            <Map className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium">Customized Suggestions</h3>
            <p className="text-sm text-muted-foreground">
              Get location-based insights and curated travel recommendations
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Right Side: Budget Calculator */}
    <div>
      <BudgetCalculator />
    </div>
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
                    src="/dholkal.jpg"
                    alt="Chhattisgarh landscape"
                    width={400}
                    height={600}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/neelamsariwaterfall.jpg"
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
                    src="/Onakona Temple.jpg"
                    alt="Chhattisgarh temple"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/tribedrummer.jpg"
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
                    src="/village.jpg"
                    alt="Chhattisgarh tribal art"
                    width={400}
                    height={600}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/vishnumandir.jpg"
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
                    src="/bhilaisteelplant.jpg"
                    alt="Chhattisgarh food"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/ghatarani.jpg"
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
                    About Chhattisgarh
                  </Link>
                </li>
                <li>
                  <Link href="/destination" className="text-muted-foreground hover:text-foreground">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link href="/experience" className="text-muted-foreground hover:text-foreground">
                    Experiences
                  </Link>
                </li>
                <li>
                  <Link href="/plan" className="text-muted-foreground hover:text-foreground">
                    Plan Your Trip
                  </Link>
                </li>
                <li>
                  <Link href="/culture" className="text-muted-foreground hover:text-foreground">
                    Culture
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
                  <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/cancellation" className="text-muted-foreground hover:text-foreground">
                    Cancellation Policy
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="text-muted-foreground hover:text-foreground">
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Information</h3>
              <address className="not-italic text-muted-foreground space-y-2">
                <p>Chhattisgarh Tourism Board</p>
                <p>2nd Floor, Udyog Bhawan</p>
                <p>Raipur, Chhattisgarh 492001</p>
                <p className="pt-2">
                  <a href="tel:+917712422788" className="hover:text-foreground">
                    Phone: +91 771 242 2788
                  </a>
                </p>
                <p>
                  <a href="mailto:info@chhattisgarhtourism.in" className="hover:text-foreground">
                    Email: info@chhattisgarhtourism.in
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
