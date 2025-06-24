"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Shield,
  Eye,
  Lock,
  Database,
  UserCheck,
  Globe,
  Mail,
  Phone,
  Cookie,
  FileText,
  CheckCircle,
  AlertTriangle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const privacySections = [
  {
    id: "information-collection",
    title: "Information We Collect",
    icon: Database,
    content: [
      "Personal information (name, email, phone number) when you book tours or contact us",
      "Payment information processed securely through our payment partners",
      "Usage data including pages visited, time spent, and user interactions",
      "Device information such as IP address, browser type, and operating system",
      "Location data when you use our location-based services (with your consent)",
    ],
  },
  {
    id: "information-use",
    title: "How We Use Your Information",
    icon: UserCheck,
    content: [
      "Process and fulfill your tour bookings and travel arrangements",
      "Send booking confirmations, updates, and important travel information",
      "Provide customer support and respond to your inquiries",
      "Improve our services and website functionality",
      "Send promotional offers and newsletters (with your consent)",
      "Comply with legal obligations and prevent fraudulent activities",
    ],
  },
  {
    id: "information-sharing",
    title: "Information Sharing",
    icon: Globe,
    content: [
      "We do not sell, trade, or rent your personal information to third parties",
      "We may share information with trusted service providers who assist in our operations",
      "Information may be disclosed to comply with legal requirements or court orders",
      "In case of business merger or acquisition, information may be transferred",
      "We may share aggregated, non-personal data for analytics and research purposes",
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    icon: Lock,
    content: [
      "We implement industry-standard security measures to protect your data",
      "All sensitive information is encrypted during transmission and storage",
      "Regular security audits and updates to maintain data protection",
      "Access to personal information is restricted to authorized personnel only",
      "We use secure payment gateways for all financial transactions",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and Tracking",
    icon: Cookie,
    content: [
      "We use cookies to enhance your browsing experience and remember preferences",
      "Analytics cookies help us understand how visitors use our website",
      "Marketing cookies may be used to show relevant advertisements",
      "You can control cookie settings through your browser preferences",
      "Essential cookies are necessary for website functionality and cannot be disabled",
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights",
    icon: Shield,
    content: [
      "Right to access your personal information we hold about you",
      "Right to correct or update inaccurate personal information",
      "Right to delete your personal information (subject to legal requirements)",
      "Right to restrict or object to processing of your personal information",
      "Right to data portability - receive your data in a structured format",
      "Right to withdraw consent for marketing communications at any time",
    ],
  },
]

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      // Update active section based on scroll position
      const sections = privacySections.map((section) => section.id)
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header */}
      <header className="sticky top-1 z-40 w-full border-b bg-white/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-blue-50">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-in slide-in-from-bottom duration-700">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 animate-pulse">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal
            information.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Badge variant="secondary" className="animate-bounce">
              <CheckCircle className="h-3 w-3 mr-1" />
              GDPR Compliant
            </Badge>
            <Badge variant="secondary" className="animate-bounce" style={{ animationDelay: "0.2s" }}>
              <Lock className="h-3 w-3 mr-1" />
              Secure
            </Badge>
            <Badge variant="secondary" className="animate-bounce" style={{ animationDelay: "0.4s" }}>
              <Eye className="h-3 w-3 mr-1" />
              Transparent
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Contents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {privacySections.map((section, index) => {
                  const Icon = section.icon
                  return (
                    <button
                      key={section.id}
                      onClick={() => {
                        document.getElementById(section.id)?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        })
                      }}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                        activeSection === section.id
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                          : "hover:bg-blue-50"
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4" />
                        <span className="text-sm font-medium">{section.title}</span>
                      </div>
                    </button>
                  )
                })}
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Last Updated */}
            <Card className="border-l-4 border-l-blue-600 shadow-lg animate-in slide-in-from-right duration-500">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                  <span className="font-semibold">Last Updated</span>
                </div>
                <p className="text-muted-foreground">
                  This Privacy Policy was last updated on <strong>December 24, 2024</strong>. We may update this policy
                  from time to time, and we will notify you of any significant changes.
                </p>
              </CardContent>
            </Card>

            {/* Privacy Sections */}
            {privacySections.map((section, index) => {
              const Icon = section.icon
              return (
                <Card
                  key={section.id}
                  id={section.id}
                  className="shadow-lg border-0 bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-500 animate-in slide-in-from-right"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-3 animate-in slide-in-from-left duration-300"
                          style={{ animationDelay: `${itemIndex * 0.1}s` }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}

            {/* Contact Information */}
            <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white animate-in slide-in-from-bottom duration-700">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Questions About Privacy?</h3>
                <p className="mb-6 opacity-90">
                  If you have any questions about this Privacy Policy or how we handle your data, please don't hesitate
                  to contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button variant="secondary" className="gap-2 hover:scale-105 transition-transform">
                      <Mail className="h-4 w-4" />
                      Contact Us
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all"
                  >
                    <Phone className="h-4 w-4" />
                    +91 771 242 2788
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
