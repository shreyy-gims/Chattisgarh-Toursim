"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  XCircle,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  RefreshCw,
  Phone,
  Mail,
  FileText,
  Calculator,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const cancellationTiers = [
  {
    period: "7+ Days Before",
    refund: 80,
    color: "green",
    icon: CheckCircle,
    description: "Full refund minus processing fee",
  },
  {
    period: "3-7 Days Before",
    refund: 50,
    color: "yellow",
    icon: AlertTriangle,
    description: "Partial refund available",
  },
  {
    period: "1-3 Days Before",
    refund: 25,
    color: "orange",
    icon: Clock,
    description: "Limited refund due to commitments",
  },
  {
    period: "Same Day/No Show",
    refund: 0,
    color: "red",
    icon: XCircle,
    description: "No refund available",
  },
]

const specialCircumstances = [
  {
    title: "Medical Emergency",
    description: "Full refund with valid medical certificate",
    icon: CheckCircle,
    color: "green",
  },
  {
    title: "Natural Disasters",
    description: "Full refund or rescheduling options",
    icon: RefreshCw,
    color: "blue",
  },
  {
    title: "Government Restrictions",
    description: "Full refund if travel is prohibited",
    icon: AlertTriangle,
    color: "yellow",
  },
  {
    title: "Our Cancellation",
    description: "Full refund plus compensation",
    icon: CheckCircle,
    color: "green",
  },
]

export default function CancellationPolicyPage() {
  const [bookingAmount, setBookingAmount] = useState("")
  const [daysBeforeTravel, setDaysBeforeTravel] = useState("")
  const [refundAmount, setRefundAmount] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const calculateRefund = () => {
    const amount = Number.parseFloat(bookingAmount)
    const days = Number.parseInt(daysBeforeTravel)

    if (!amount || !days) return

    let refundPercentage = 0
    if (days >= 7) refundPercentage = 80
    else if (days >= 3) refundPercentage = 50
    else if (days >= 1) refundPercentage = 25
    else refundPercentage = 0

    const calculatedRefund = (amount * refundPercentage) / 100
    setRefundAmount(calculatedRefund)
  }

  useEffect(() => {
    calculateRefund()
  }, [bookingAmount, daysBeforeTravel])

  const getColorClasses = (color: string) => {
    const colors = {
      green: "bg-green-100 text-green-800 border-green-200",
      yellow: "bg-yellow-100 text-yellow-800 border-yellow-200",
      orange: "bg-orange-100 text-orange-800 border-orange-200",
      red: "bg-red-100 text-red-800 border-red-200",
      blue: "bg-blue-100 text-blue-800 border-blue-200",
    }
    return colors[color as keyof typeof colors] || colors.green
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-red-600 to-orange-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header */}
      <header className="sticky top-1 z-40 w-full border-b bg-white/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-red-50">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <XCircle className="h-6 w-6 text-red-600" />
            <span className="text-lg font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Cancellation Policy
            </span>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-in slide-in-from-bottom duration-700">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-600 to-orange-600 rounded-full mb-6">
            <FileText className="h-10 w-10 text-white animate-bounce" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Cancellation Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We understand that plans can change. Here's our transparent cancellation policy to help you make informed
            decisions.
          </p>
        </div>

        {/* Important Notice */}
        <Alert className="mb-8 border-amber-200 bg-amber-50 animate-in slide-in-from-top duration-500">
          <AlertTriangle className="h-4 w-4 text-amber-600" />
          <AlertDescription className="text-amber-800">
            <strong>Important:</strong> Cancellation charges are calculated from the date of travel, not the booking
            date. All refunds are processed within 7-10 business days.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Refund Calculator */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 shadow-lg border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-blue-600" />
                  Refund Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="amount">Booking Amount (₹)</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Enter amount"
                    value={bookingAmount}
                    onChange={(e) => setBookingAmount(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="days">Days Before Travel</Label>
                  <Input
                    id="days"
                    type="number"
                    placeholder="Enter days"
                    value={daysBeforeTravel}
                    onChange={(e) => setDaysBeforeTravel(e.target.value)}
                    className="mt-1"
                  />
                </div>
                {refundAmount > 0 && (
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200 animate-in slide-in-from-bottom duration-300">
                    <p className="text-sm text-green-700 mb-1">Estimated Refund</p>
                    <p className="text-2xl font-bold text-green-800">₹{refundAmount.toLocaleString()}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Policy Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Cancellation Tiers */}
            <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm animate-in slide-in-from-right duration-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Calendar className="h-6 w-6 text-red-600" />
                  Cancellation Timeline
                </CardTitle>
                <p className="text-muted-foreground">Refund percentage based on cancellation timing</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cancellationTiers.map((tier, index) => {
                    const Icon = tier.icon
                    return (
                      <Card
                        key={index}
                        className={`border-l-4 hover:shadow-lg transition-all duration-300 animate-in slide-in-from-left ${getColorClasses(tier.color)}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon className="h-5 w-5" />
                            <span className="font-semibold">{tier.period}</span>
                          </div>
                          <div className="text-2xl font-bold mb-1">{tier.refund}% Refund</div>
                          <p className="text-sm opacity-80">{tier.description}</p>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Special Circumstances */}
            <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm animate-in slide-in-from-right duration-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  Special Circumstances
                </CardTitle>
                <p className="text-muted-foreground">Exceptions to standard cancellation policy</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {specialCircumstances.map((circumstance, index) => {
                    const Icon = circumstance.icon
                    return (
                      <Card
                        key={index}
                        className={`border-l-4 hover:shadow-lg transition-all duration-300 animate-in slide-in-from-right ${getColorClasses(circumstance.color)}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon className="h-5 w-5" />
                            <span className="font-semibold">{circumstance.title}</span>
                          </div>
                          <p className="text-sm opacity-80">{circumstance.description}</p>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Process & Terms */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm animate-in slide-in-from-left duration-900">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <RefreshCw className="h-5 w-5 text-blue-600" />
                    Cancellation Process
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <p className="text-sm">Contact our support team via phone or email</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <p className="text-sm">Provide booking reference and reason for cancellation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <p className="text-sm">Receive cancellation confirmation and refund details</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <p className="text-sm">Refund processed within 7-10 business days</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm animate-in slide-in-from-right duration-900">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                    Important Terms
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2" />
                    <p className="text-sm">Processing fee of ₹500 applies to all cancellations</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2" />
                    <p className="text-sm">Peak season bookings may have different terms</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2" />
                    <p className="text-sm">Group bookings (8+ people) have separate policies</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2" />
                    <p className="text-sm">Refunds processed to original payment method</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact for Cancellation */}
            <Card className="shadow-lg border-0 bg-gradient-to-r from-red-600 to-orange-600 text-white animate-in slide-in-from-bottom duration-1000">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Need to Cancel Your Booking?</h3>
                <p className="mb-6 opacity-90">
                  Our support team is here to help you with the cancellation process and answer any questions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" className="gap-2 hover:scale-105 transition-transform">
                    <Phone className="h-4 w-4" />
                    Call +91 771 242 2788
                  </Button>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all"
                    >
                      <Mail className="h-4 w-4" />
                      Email Support
                    </Button>
                  </Link>
                </div>
                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <p className="text-sm opacity-90">
                    <strong>Support Hours:</strong> Monday to Sunday, 9:00 AM - 9:00 PM IST
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
