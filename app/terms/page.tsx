"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  FileText,
  Scale,
  AlertCircle,
  CheckCircle,
  XCircle,
  CreditCard,
  Calendar,
  Users,
  Shield,
  Gavel,
  BookOpen,
  Clock,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"

const termsSections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    icon: CheckCircle,
    type: "success",
    content: [
      "By accessing and using our website and services, you accept and agree to be bound by these Terms of Service",
      "If you do not agree to these terms, please do not use our services",
      "These terms apply to all visitors, users, and customers of Chhattisgarh Tourism services",
      "We reserve the right to update these terms at any time without prior notice",
    ],
  },
  {
    id: "booking-terms",
    title: "Booking Terms & Conditions",
    icon: Calendar,
    type: "info",
    content: [
      "All bookings are subject to availability and confirmation from our team",
      "A deposit may be required to secure your booking, with full payment due before travel",
      "Prices are subject to change until booking is confirmed and payment is received",
      "Special requests are subject to availability and may incur additional charges",
      "Group bookings may have different terms and conditions",
    ],
  },
  {
    id: "payment-terms",
    title: "Payment Terms",
    icon: CreditCard,
    type: "warning",
    content: [
      "Payment can be made through credit/debit cards, net banking, or other approved methods",
      "All payments are processed securely through our certified payment partners",
      "Additional charges may apply for certain payment methods",
      "Refunds will be processed according to our cancellation policy",
      "Currency conversion charges may apply for international payments",
    ],
  },
  {
    id: "user-responsibilities",
    title: "User Responsibilities",
    icon: Users,
    type: "info",
    content: [
      "You must provide accurate and complete information when making bookings",
      "You are responsible for ensuring all travel documents are valid and up-to-date",
      "You must comply with all local laws and regulations during your travel",
      "Any damage to property or facilities will be charged to the user",
      "You must respect local customs, traditions, and environmental guidelines",
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    icon: Shield,
    type: "error",
    content: [
      "We are not liable for any indirect, incidental, or consequential damages",
      "Our liability is limited to the amount paid for the specific service",
      "We are not responsible for delays or cancellations due to weather or natural disasters",
      "Travel insurance is recommended and is the responsibility of the traveler",
      "We are not liable for personal injuries or loss of personal belongings",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    icon: BookOpen,
    type: "info",
    content: [
      "All content on our website is protected by copyright and trademark laws",
      "You may not reproduce, distribute, or modify our content without permission",
      "User-generated content may be used by us for promotional purposes",
      "We respect intellectual property rights and expect users to do the same",
      "Report any copyright infringement to our legal team immediately",
    ],
  },
]

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      // Update active section
      const sections = termsSections.map((section) => section.id)
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

  const getCardStyle = (type: string) => {
    switch (type) {
      case "success":
        return "border-l-4 border-l-green-500 bg-green-50/50"
      case "warning":
        return "border-l-4 border-l-yellow-500 bg-yellow-50/50"
      case "error":
        return "border-l-4 border-l-red-500 bg-red-50/50"
      default:
        return "border-l-4 border-l-blue-500 bg-blue-50/50"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-slate-600 to-blue-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header */}
      <header className="sticky top-1 z-40 w-full border-b bg-white/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-slate-50">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-slate-600" />
            <span className="text-lg font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">
              Terms of Service
            </span>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-in slide-in-from-bottom duration-700">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-slate-600 to-blue-600 rounded-full mb-6">
            <Gavel className="h-10 w-10 text-white animate-bounce" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Please read these terms carefully before using our services. By using our platform, you agree to these terms
            and conditions.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Badge variant="secondary" className="animate-pulse">
              <Clock className="h-3 w-3 mr-1" />
              Last Updated: Dec 24, 2024
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Sections
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {termsSections.map((section, index) => {
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
                          ? "bg-gradient-to-r from-slate-600 to-blue-600 text-white shadow-lg"
                          : "hover:bg-slate-50"
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
            {/* Important Notice */}
            <Alert className="border-amber-200 bg-amber-50 animate-in slide-in-from-top duration-500">
              <AlertCircle className="h-4 w-4 text-amber-600" />
              <AlertDescription className="text-amber-800">
                <strong>Important:</strong> These terms constitute a legally binding agreement between you and
                Chhattisgarh Tourism. Please read them carefully and contact us if you have any questions.
              </AlertDescription>
            </Alert>

            {/* Terms Sections */}
            {termsSections.map((section, index) => {
              const Icon = section.icon
              return (
                <Card
                  key={section.id}
                  id={section.id}
                  className={`shadow-lg hover:shadow-xl transition-all duration-500 animate-in slide-in-from-right ${getCardStyle(section.type)}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div
                        className={`p-2 rounded-lg ${
                          section.type === "success"
                            ? "bg-green-600"
                            : section.type === "warning"
                              ? "bg-yellow-600"
                              : section.type === "error"
                                ? "bg-red-600"
                                : "bg-blue-600"
                        }`}
                      >
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
                          <div
                            className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                              section.type === "success"
                                ? "bg-green-600"
                                : section.type === "warning"
                                  ? "bg-yellow-600"
                                  : section.type === "error"
                                    ? "bg-red-600"
                                    : "bg-blue-600"
                            }`}
                          />
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}

            {/* Agreement Section */}
            <Card className="shadow-lg border-0 bg-gradient-to-r from-slate-600 to-blue-600 text-white animate-in slide-in-from-bottom duration-700">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-4">Agreement Acknowledgment</h3>
                  <p className="opacity-90">
                    By using our services, you acknowledge that you have read, understood, and agree to be bound by
                    these Terms of Service.
                  </p>
                </div>

                <div className="flex items-center justify-center gap-4 mb-6">
                  <button
                    onClick={() => setAcceptedTerms(!acceptedTerms)}
                    className={`flex items-center gap-2 p-3 rounded-lg transition-all duration-300 ${
                      acceptedTerms ? "bg-green-600 hover:bg-green-700" : "bg-white/10 hover:bg-white/20"
                    }`}
                  >
                    {acceptedTerms ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                    <span className="font-medium">{acceptedTerms ? "Terms Accepted" : "Accept Terms"}</span>
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button variant="secondary" className="gap-2 hover:scale-105 transition-transform">
                      <AlertCircle className="h-4 w-4" />
                      Have Questions?
                    </Button>
                  </Link>
                  <Link href="/plan">
                    <Button
                      variant="outline"
                      className={`gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all ${
                        !acceptedTerms ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      onClick={(e) => {
                        if (!acceptedTerms) {
                          e.preventDefault()
                          alert("Please accept the terms to continue")
                        }
                      }}
                    >
                      <Calendar className="h-4 w-4" />
                      Start Planning
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
