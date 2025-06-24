"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  HelpCircle,
  Search,
  ChevronDown,
  MapPin,
  CreditCard,
  Calendar,
  Users,
  Phone,
  Mail,
  Clock,
  Star,
  Zap,
  ThumbsUp,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const faqCategories = [
  {
    id: "booking",
    title: "Booking & Reservations",
    icon: Calendar,
    color: "blue",
    faqs: [
      {
        question: "How do I book a tour package?",
        answer:
          "You can book a tour package through our website by visiting the 'Plan Your Trip' page, filling out the booking form with your preferences, or by calling our customer service at +91 771 242 2788. Our team will create a customized itinerary based on your requirements.",
      },
      {
        question: "Can I modify my booking after confirmation?",
        answer:
          "Yes, you can modify your booking up to 48 hours before your travel date, subject to availability. Modifications may incur additional charges depending on the changes requested. Please contact our support team for assistance.",
      },
      {
        question: "What is the minimum advance booking required?",
        answer:
          "We recommend booking at least 7 days in advance for domestic tours and 15 days for international visitors. However, we can accommodate last-minute bookings subject to availability.",
      },
      {
        question: "Do you offer group discounts?",
        answer:
          "Yes, we offer attractive group discounts for bookings of 8 or more people. The discount varies based on group size, season, and package selected. Contact us for a customized group quote.",
      },
    ],
  },
  {
    id: "payment",
    title: "Payment & Pricing",
    icon: CreditCard,
    color: "green",
    faqs: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit/debit cards, net banking, UPI, digital wallets, and bank transfers. International visitors can pay using international credit cards or through PayPal.",
      },
      {
        question: "Is advance payment required?",
        answer:
          "Yes, we require a 30% advance payment to confirm your booking. The remaining amount can be paid up to 24 hours before your travel date or upon arrival, depending on the package.",
      },
      {
        question: "Are there any hidden charges?",
        answer:
          "No, we believe in transparent pricing. All costs including accommodation, transportation, meals (as per package), and activities are clearly mentioned. Any optional services or personal expenses are clearly stated separately.",
      },
      {
        question: "Can I get a refund if I cancel?",
        answer:
          "Refunds are processed according to our cancellation policy. Generally, cancellations made 7+ days in advance receive 80% refund, 3-7 days receive 50%, and less than 3 days receive 25%. Please check our detailed cancellation policy.",
      },
    ],
  },
  {
    id: "travel",
    title: "Travel & Destinations",
    icon: MapPin,
    color: "purple",
    faqs: [
      {
        question: "What are the must-visit places in Chhattisgarh?",
        answer:
          "Top destinations include Chitrakote Falls (Niagara of India), Kanger Valley National Park, Sirpur archaeological site, Bhoramdeo Temple, Barnawapara Wildlife Sanctuary, and various tribal villages in Bastar region.",
      },
      {
        question: "What is the best time to visit Chhattisgarh?",
        answer:
          "October to March is the ideal time with pleasant weather. Monsoon season (July-September) is perfect for waterfalls but may limit some activities. Summer (April-June) can be hot but offers good wildlife viewing opportunities.",
      },
      {
        question: "Do you provide transportation?",
        answer:
          "Yes, we provide comfortable transportation including AC cars, SUVs, and buses depending on group size. We also offer self-drive options and can arrange train/flight bookings if required.",
      },
      {
        question: "Are guides provided for tours?",
        answer:
          "Yes, all our packages include experienced local guides who are knowledgeable about the history, culture, and wildlife of the region. They speak Hindi, English, and local languages.",
      },
    ],
  },
  {
    id: "accommodation",
    title: "Accommodation & Services",
    icon: Users,
    color: "orange",
    faqs: [
      {
        question: "What types of accommodation do you offer?",
        answer:
          "We offer a range of accommodations from budget hotels and guesthouses to luxury resorts and heritage properties. We also arrange homestays with tribal families for authentic cultural experiences.",
      },
      {
        question: "Are meals included in the packages?",
        answer:
          "Most packages include breakfast and dinner. Lunch is usually included for full-day tours. We cater to various dietary preferences including vegetarian, vegan, and special dietary requirements with advance notice.",
      },
      {
        question: "Do you arrange special experiences?",
        answer:
          "Yes, we arrange unique experiences like tribal village stays, traditional craft workshops, wildlife safaris, photography tours, and cultural performances. These can be customized based on your interests.",
      },
      {
        question: "Is travel insurance included?",
        answer:
          "Basic travel insurance is included in our premium packages. For other packages, we strongly recommend purchasing travel insurance separately. We can help you choose appropriate coverage.",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("booking")
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)
  const [filteredFAQs, setFilteredFAQs] = useState(faqCategories)

  useEffect(() => {
    if (searchTerm) {
      const filtered = faqCategories
        .map((category) => ({
          ...category,
          faqs: category.faqs.filter(
            (faq) =>
              faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
              faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
        }))
        .filter((category) => category.faqs.length > 0)
      setFilteredFAQs(filtered)
    } else {
      setFilteredFAQs(faqCategories)
    }
  }, [searchTerm])

  const toggleFAQ = (categoryId: string, faqIndex: number) => {
    const faqId = `${categoryId}-${faqIndex}`
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId)
  }

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-600 to-blue-700 border-blue-200 bg-blue-50",
      green: "from-green-600 to-green-700 border-green-200 bg-green-50",
      purple: "from-purple-600 to-purple-700 border-purple-200 bg-purple-50",
      orange: "from-orange-600 to-orange-700 border-orange-200 bg-orange-50",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-indigo-50">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-indigo-600" />
            <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-in slide-in-from-bottom duration-700">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full mb-6">
            <HelpCircle className="h-10 w-10 text-white animate-pulse" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
            How Can We Help You?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Find answers to common questions about booking tours, payments, destinations, and more.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-lg border-2 focus:border-indigo-500 transition-all duration-300"
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Star, label: "4.8/5 Rating", value: "1000+ Reviews" },
            { icon: Clock, label: "24/7 Support", value: "Always Here" },
            { icon: ThumbsUp, label: "98% Satisfaction", value: "Happy Customers" },
            { icon: Zap, label: "Quick Response", value: "< 2 Hours" },
          ].map((stat, index) => (
            <Card
              key={index}
              className="text-center p-4 hover:shadow-lg transition-all duration-300 animate-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="h-8 w-8 mx-auto mb-2 text-indigo-600" />
              <p className="font-semibold text-sm">{stat.label}</p>
              <p className="text-xs text-muted-foreground">{stat.value}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Navigation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {faqCategories.map((category, index) => {
                  const Icon = category.icon
                  const isActive = activeCategory === category.id
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                        isActive
                          ? `bg-gradient-to-r ${getColorClasses(category.color).split(" ")[0]} ${getColorClasses(category.color).split(" ")[1]} text-white shadow-lg`
                          : "hover:bg-gray-50"
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="h-5 w-5" />
                        <div>
                          <span className="text-sm font-medium block">{category.title}</span>
                          <span className={`text-xs ${isActive ? "text-white/80" : "text-muted-foreground"}`}>
                            {category.faqs.length} questions
                          </span>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </CardContent>
            </Card>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            {filteredFAQs.map((category, categoryIndex) => {
              if (searchTerm || category.id === activeCategory) {
                const Icon = category.icon
                return (
                  <div key={category.id} className="mb-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${getColorClasses(category.color)}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">{category.title}</h2>
                        <p className="text-muted-foreground">{category.faqs.length} frequently asked questions</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {category.faqs.map((faq, faqIndex) => {
                        const faqId = `${category.id}-${faqIndex}`
                        const isExpanded = expandedFAQ === faqId

                        return (
                          <Card
                            key={faqIndex}
                            className={`shadow-lg hover:shadow-xl transition-all duration-300 animate-in slide-in-from-right border-l-4 ${getColorClasses(category.color).split(" ")[2]} ${getColorClasses(category.color).split(" ")[3]}`}
                            style={{ animationDelay: `${faqIndex * 0.1}s` }}
                          >
                            <CardHeader
                              className="cursor-pointer hover:bg-gray-50/50 transition-colors"
                              onClick={() => toggleFAQ(category.id, faqIndex)}
                            >
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-lg font-semibold pr-4">{faq.question}</CardTitle>
                                <div className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                                </div>
                              </div>
                            </CardHeader>

                            <div
                              className={`overflow-hidden transition-all duration-300 ${
                                isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                              }`}
                            >
                              <CardContent className="pt-0 pb-6">
                                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                              </CardContent>
                            </div>
                          </Card>
                        )
                      })}
                    </div>
                  </div>
                )
              }
              return null
            })}

            {/* No Results */}
            {searchTerm && filteredFAQs.length === 0 && (
              <div className="text-center py-12 animate-in slide-in-from-bottom duration-500">
                <HelpCircle className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">No results found</h3>
                <p className="text-muted-foreground mb-6">
                  We couldn't find any FAQs matching "{searchTerm}". Try different keywords or contact us directly.
                </p>
                <Button onClick={() => setSearchTerm("")} variant="outline">
                  Clear Search
                </Button>
              </div>
            )}

            {/* Contact CTA */}
            <Card className="mt-12 shadow-lg border-0 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white animate-in slide-in-from-bottom duration-700">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                <p className="mb-6 opacity-90">
                  Can't find what you're looking for? Our friendly support team is here to help you 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button variant="secondary" className="gap-2 hover:scale-105 transition-transform">
                      <Mail className="h-4 w-4" />
                      Contact Support
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all"
                  >
                    <Phone className="h-4 w-4" />
                    Call +91 771 242 2788
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
