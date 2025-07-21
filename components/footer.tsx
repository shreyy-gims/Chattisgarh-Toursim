import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">IN</span>
              </div>
              <span className="font-bold text-lg">Incredible India</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Discover the incredible diversity, rich culture, and breathtaking beauty of India's states. From ancient
              temples to modern cities, experience the magic of Incredible India across all 12 featured destinations.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/destination" className="text-muted-foreground hover:text-foreground transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-muted-foreground hover:text-foreground transition-colors">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="/plan" className="text-muted-foreground hover:text-foreground transition-colors">
                  Plan Your Trip
                </Link>
              </li>
              <li>
                <Link href="/culture" className="text-muted-foreground hover:text-foreground transition-colors">
                  Culture
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-muted-foreground hover:text-foreground transition-colors">
                  Feedback
                </Link>
              </li>
              <li>
                <Link href="/cancellation" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Info</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">+91 1800-111-363</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">info@incredibleindia.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Ministry of Tourism, New Delhi</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">incredibleindia.org</span>
              </div>
            </div>

            {/* Tourist Helpline */}
            <div className="bg-primary/10 p-3 rounded-lg">
              <h4 className="font-medium text-sm mb-1">24/7 Tourist Helpline</h4>
              <p className="text-primary font-semibold text-lg">1363</p>
              <p className="text-xs text-muted-foreground">For emergency assistance & travel support</p>
            </div>
          </div>
        </div>

        {/* Featured States */}
        <div className="border-t mt-8 pt-8">
          <h3 className="font-semibold mb-4 text-center">Explore Our Featured States</h3>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {[
              "Chhattisgarh",
              "Rajasthan",
              "Kerala",
              "Himachal Pradesh",
              "Goa",
              "Maharashtra",
              "Madhya Pradesh",
              "Odisha",
              "Jharkhand",
              "Andhra Pradesh",
            ].map((state) => (
              <span key={state} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                {state}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <p className="text-muted-foreground text-sm">
                © 2024 Ministry of Tourism, Government of India. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <span>🇮🇳</span>
                <span>Incredible India</span>
                <span>•</span>
                <span>Atithi Devo Bhava</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4">
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Terms of Service
              </Link>
              <Link
                href="/accessibility"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>

          {/* Government Links */}
          <div className="mt-4 pt-4 border-t border-muted/50">
            <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              <Link href="https://www.india.gov.in" className="hover:text-foreground transition-colors">
                India.gov.in
              </Link>
              <Link href="https://www.mygov.in" className="hover:text-foreground transition-colors">
                MyGov.in
              </Link>
              <Link href="https://www.digitalindia.gov.in" className="hover:text-foreground transition-colors">
                Digital India
              </Link>
              <Link href="https://swachhbharatmission.gov.in" className="hover:text-foreground transition-colors">
                Swachh Bharat
              </Link>
              <Link href="https://www.makeinindia.com" className="hover:text-foreground transition-colors">
                Make in India
              </Link>
              <Link href="https://www.startupindia.gov.in" className="hover:text-foreground transition-colors">
                Startup India
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
