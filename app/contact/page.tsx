"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Headphones,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CheckCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our travel experts",
    details: "+91 771 242 2788",
    availability: "9:00 AM - 9:00 PM (IST)",
    color: "from-green-500 to-emerald-500",
    action: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us detailed queries and get comprehensive answers",
    details: "info@chhattisgarhtourism.in",
    availability: "Response within 2-4 hours",
    color: "from-blue-500 to-cyan-500",
    action: "Send Email",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our support team",
    details: "Available on website",
    availability: "24/7 Available",
    color: "from-purple-500 to-pink-500",
    action: "Start Chat",
  },
  {
    icon: Globe,
    title: "Social Media",
    description: "Connect with us on social platforms",
    details: "Follow for updates",
    availability: "Daily updates",
    color: "from-orange-500 to-red-500",
    action: "Follow Us",
  },
]

const officeLocations = [
  {
    name: "Main Office",
    address: "2nd Floor, Udyog Bhawan, Raipur, Chhattisgarh 492001",
    phone: "+91 771 242 2788",
    email: "info@chhattisgarhtourism.in",
    hours: "Monday - Saturday: 9:00 AM - 6:00 PM",
  },
  {
    name: "Bastar Regional Office",
    address: "Tourism Complex, Jagdalpur, Bastar, Chhattisgarh 494001",
    phone: "+91 7782 222 333",
    email: "bastar@chhattisgarhtourism.in",
    hours: "Monday - Saturday: 9:00 AM - 5:00 PM",
  },
]

const inquiryTypes = [
  "General Information",
  "Tour Booking",
  "Group Booking",
  "Cancellation/Refund",
  "Complaint",
  "Suggestion",
  "Partnership",
  "Media Inquiry",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    inquiryType: "",
    message: "",
    preferredContact: "email",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto shadow-2xl border-0 bg-white/80 backdrop-blur-sm animate-in zoom-in duration-500">
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Message Sent!
            </h2>
            <p className="text-muted-foreground mb-6">
              Thank you for contacting us. We'll get back to you within 2-4 hours.
            </p>
            <div className="space-y-3">
              <Link href="/">
                <Button className="w-full">Return to Home</Button>
              </Link>
              <Button variant="outline" onClick={() => setSubmitted(false)} className="w-full">
                Send Another Message
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-teal-50">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Headphones className="h-6 w-6 text-teal-600" />
            <span className="text-lg font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Contact Us
            </span>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-in slide-in-from-bottom duration-700">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full mb-6">
            <Phone className="h-10 w-10 text-white animate-pulse" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about your trip to Chhattisgarh? Our friendly team is here to help you plan the perfect
            adventure.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 animate-in slide-in-from-bottom border-0 bg-white/70 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                <p className="font-medium text-sm mb-1">{method.details}</p>
                <p className="text-xs text-muted-foreground mb-4">{method.availability}</p>
                <Button size="sm" variant="outline" className="hover:scale-105 transition-transform">
                  {method.action}
                </Button>
              </Card>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm animate-in slide-in-from-left duration-1000">
            <CardHeader className="bg-gradient-to-r from-teal-50 to-blue-50">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="h-6 w-6 text-teal-600" />
                Send us a Message
              </CardTitle>
              <p className="text-muted-foreground">Fill out the form below and we'll get back to you soon</p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type *</Label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, inquiryType: value }))}
                    >
                      <SelectTrigger className="transition-all duration-300 hover:scale-105">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, "-")}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                    className="transition-all duration-300 focus:scale-105"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    className="min-h-32 transition-all duration-300 focus:scale-105"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Preferred Contact Method</Label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === "email"}
                        onChange={(e) => setFormData((prev) => ({ ...prev, preferredContact: e.target.value }))}
                        className="text-teal-600"
                      />
                      <span>Email</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === "phone"}
                        onChange={(e) => setFormData((prev) => ({ ...prev, preferredContact: e.target.value }))}
                        className="text-teal-600"
                      />
                      <span>Phone</span>
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 text-lg bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 hover:scale-105 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Office Information & Map */}
          <div className="space-y-8">
            {/* Office Locations */}
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm animate-in slide-in-from-right duration-1000">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-teal-600" />
                  Our Offices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {officeLocations.map((office, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">{office.name}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-teal-600 mt-0.5" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-teal-600" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-teal-600" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-teal-600" />
                        <span>{office.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm animate-in slide-in-from-right duration-1200">
              <CardHeader>
                <CardTitle className="text-2xl">Follow Us</CardTitle>
                <p className="text-muted-foreground">Stay connected for updates and travel inspiration</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Facebook, name: "Facebook", color: "from-blue-600 to-blue-700", followers: "25K+" },
                    { icon: Instagram, name: "Instagram", color: "from-pink-600 to-purple-600", followers: "18K+" },
                    { icon: Twitter, name: "Twitter", color: "from-blue-400 to-blue-600", followers: "12K+" },
                    { icon: Youtube, name: "YouTube", color: "from-red-600 to-red-700", followers: "8K+" },
                  ].map((social, index) => (
                    <button
                      key={index}
                      className={`p-4 rounded-lg bg-gradient-to-r ${social.color} text-white hover:scale-105 transition-all duration-300 animate-in slide-in-from-bottom`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <social.icon className="h-6 w-6 mx-auto mb-2" />
                      <div className="text-sm font-medium">{social.name}</div>
                      <div className="text-xs opacity-90">{social.followers}</div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="shadow-2xl border-0 bg-gradient-to-r from-red-600 to-orange-600 text-white animate-in slide-in-from-right duration-1400">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Emergency Support</h3>
                <p className="mb-4 opacity-90">24/7 emergency assistance for travelers</p>
                <Button variant="secondary" className="gap-2 hover:scale-105 transition-transform">
                  <Phone className="h-4 w-4" />
                  +91 9876 543 210
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
