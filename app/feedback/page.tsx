"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, MessageSquare, Star, Send, ThumbsUp, Heart, Award, Zap, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const feedbackCategories = [
  { value: "booking", label: "Booking Experience" },
  { value: "tour", label: "Tour Experience" },
  { value: "guide", label: "Tour Guide" },
  { value: "accommodation", label: "Accommodation" },
  { value: "transportation", label: "Transportation" },
  { value: "website", label: "Website/App" },
  { value: "customer-service", label: "Customer Service" },
  { value: "other", label: "Other" },
]

const ratingEmojis = [
  { value: 1, emoji: "😞", label: "Very Poor", color: "text-red-500" },
  { value: 2, emoji: "😕", label: "Poor", color: "text-orange-500" },
  { value: 3, emoji: "😐", label: "Average", color: "text-yellow-500" },
  { value: 4, emoji: "😊", label: "Good", color: "text-blue-500" },
  { value: 5, emoji: "😍", label: "Excellent", color: "text-green-500" },
]

const improvementAreas = [
  "Booking Process",
  "Communication",
  "Tour Content",
  "Guide Knowledge",
  "Transportation",
  "Accommodation",
  "Food Quality",
  "Value for Money",
  "Customer Service",
  "Website Experience",
]

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bookingReference: "",
    category: "",
    overallRating: 0,
    serviceRating: 0,
    valueRating: 0,
    recommendationLikelihood: 0,
    feedback: "",
    improvements: [] as string[],
    allowContact: false,
    shareTestimonial: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleRatingClick = (field: string, rating: number) => {
    setFormData((prev) => ({ ...prev, [field]: rating }))
  }

  const handleImprovementToggle = (improvement: string) => {
    setFormData((prev) => ({
      ...prev,
      improvements: prev.improvements.includes(improvement)
        ? prev.improvements.filter((item) => item !== improvement)
        : [...prev.improvements, improvement],
    }))
  }

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
              Thank You!
            </h2>
            <p className="text-muted-foreground mb-6">
              Your feedback has been submitted successfully. We truly appreciate your time and insights.
            </p>
            <div className="space-y-3">
              <Link href="/">
                <Button className="w-full">Return to Home</Button>
              </Link>
              <Button variant="outline" onClick={() => setSubmitted(false)} className="w-full">
                Submit Another Feedback
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-purple-50">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-purple-600" />
            <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Share Your Feedback
            </span>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-in slide-in-from-bottom duration-700">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
            <Heart className="h-10 w-10 text-white animate-pulse" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            We Value Your Feedback
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your experience matters to us. Help us improve our services by sharing your thoughts and suggestions.
          </p>
        </div>

        {/* Feedback Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Award, label: "Reviews Collected", value: "2,500+", color: "from-yellow-500 to-orange-500" },
            { icon: ThumbsUp, label: "Satisfaction Rate", value: "98%", color: "from-green-500 to-blue-500" },
            { icon: Zap, label: "Response Time", value: "< 24hrs", color: "from-purple-500 to-pink-500" },
          ].map((stat, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-lg transition-all duration-300 animate-in slide-in-from-bottom border-0 bg-white/70 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3`}
              >
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <p className="text-2xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Feedback Form */}
        <Card className="max-w-4xl mx-auto shadow-2xl border-0 bg-white/80 backdrop-blur-sm animate-in slide-in-from-bottom duration-1000">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
            <CardTitle className="text-2xl flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-purple-600" />
              Feedback Form
            </CardTitle>
            <p className="text-muted-foreground">All fields marked with * are required</p>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b pb-2">Personal Information</h3>
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
                    <Label htmlFor="booking">Booking Reference</Label>
                    <Input
                      id="booking"
                      placeholder="e.g., CG2024001"
                      value={formData.bookingReference}
                      onChange={(e) => setFormData((prev) => ({ ...prev, bookingReference: e.target.value }))}
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Feedback Category */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b pb-2">Feedback Category</h3>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
                >
                  <SelectTrigger className="transition-all duration-300 hover:scale-105">
                    <SelectValue placeholder="Select feedback category *" />
                  </SelectTrigger>
                  <SelectContent>
                    {feedbackCategories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Ratings */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold border-b pb-2">Rate Your Experience</h3>

                {/* Overall Rating */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">Overall Experience *</Label>
                  <div className="flex gap-2 justify-center">
                    {ratingEmojis.map((rating) => (
                      <button
                        key={rating.value}
                        type="button"
                        onClick={() => handleRatingClick("overallRating", rating.value)}
                        className={`p-3 rounded-lg border-2 transition-all duration-300 hover:scale-110 ${
                          formData.overallRating === rating.value
                            ? "border-purple-500 bg-purple-50 shadow-lg"
                            : "border-gray-200 hover:border-purple-300"
                        }`}
                      >
                        <div className="text-3xl mb-1">{rating.emoji}</div>
                        <div className={`text-xs font-medium ${rating.color}`}>{rating.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service Quality */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">Service Quality</Label>
                  <div className="flex gap-1 justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingClick("serviceRating", star)}
                        className="transition-all duration-300 hover:scale-125"
                      >
                        <Star
                          className={`h-8 w-8 ${
                            star <= formData.serviceRating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Value for Money */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">Value for Money</Label>
                  <div className="flex gap-1 justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingClick("valueRating", star)}
                        className="transition-all duration-300 hover:scale-125"
                      >
                        <Star
                          className={`h-8 w-8 ${
                            star <= formData.valueRating ? "text-green-500 fill-green-500" : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recommendation */}
                <div className="space-y-3">
                  <Label className="text-base font-medium">How likely are you to recommend us? (1-10)</Label>
                  <div className="flex gap-1 justify-center flex-wrap">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => handleRatingClick("recommendationLikelihood", num)}
                        className={`w-10 h-10 rounded-full border-2 font-semibold transition-all duration-300 hover:scale-110 ${
                          formData.recommendationLikelihood === num
                            ? "border-blue-500 bg-blue-500 text-white shadow-lg"
                            : "border-gray-300 hover:border-blue-300"
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Detailed Feedback */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b pb-2">Detailed Feedback</h3>
                <div className="space-y-2">
                  <Label htmlFor="feedback">Share your experience with us *</Label>
                  <Textarea
                    id="feedback"
                    required
                    placeholder="Tell us about your experience, what you loved, and what could be improved..."
                    value={formData.feedback}
                    onChange={(e) => setFormData((prev) => ({ ...prev, feedback: e.target.value }))}
                    className="min-h-32 transition-all duration-300 focus:scale-105"
                  />
                </div>
              </div>

              {/* Improvement Areas */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b pb-2">Areas for Improvement</h3>
                <p className="text-sm text-muted-foreground">Select areas where you think we can improve (optional)</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {improvementAreas.map((area) => (
                    <div key={area} className="flex items-center space-x-2">
                      <Checkbox
                        id={area}
                        checked={formData.improvements.includes(area)}
                        onCheckedChange={() => handleImprovementToggle(area)}
                        className="data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                      />
                      <Label htmlFor={area} className="text-sm cursor-pointer">
                        {area}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Permissions */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b pb-2">Permissions</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="contact"
                      checked={formData.allowContact}
                      onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, allowContact: !!checked }))}
                      className="data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                    />
                    <Label htmlFor="contact" className="cursor-pointer">
                      Allow us to contact you for follow-up questions
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="testimonial"
                      checked={formData.shareTestimonial}
                      onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, shareTestimonial: !!checked }))}
                      className="data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                    />
                    <Label htmlFor="testimonial" className="cursor-pointer">
                      Allow us to use your feedback as a testimonial (name will be kept anonymous)
                    </Label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Submit Feedback
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
