"use client"

import React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Car,
  Hotel,
  Camera,
  CheckCircle,
  Users,
  Calendar,
  Train,
  Bus,
  Wifi,
  Waves,
  ParkingMeter,
  Wine,
  ChefHat,
  Dumbbell,
  Smartphone,
  Video,
  UserCheck,
  Utensils,
  Check,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const steps = [
  { id: 1, title: "Trip Details", icon: MapPin, description: "Where and when" },
  { id: 2, title: "Transportation", icon: Car, description: "How you'll travel" },
  { id: 3, title: "Stay & Dining", icon: Hotel, description: "Where you'll stay" },
  { id: 4, title: "Add-ons", icon: Camera, description: "Extra services" },
  { id: 5, title: "Confirmation", icon: CheckCircle, description: "Review & submit" },
]

const travelModes = [
  { id: "suv", name: "SUV", icon: Car, description: "Comfortable for 4-7 people", price: "₹15/km" },
  { id: "muv", name: "MUV", icon: Car, description: "Perfect for families", price: "₹12/km" },
  { id: "hatchback", name: "Hatchback", icon: Car, description: "Economic choice", price: "₹8/km" },
  { id: "minibus", name: "Minibus", icon: Bus, description: "Groups of 8-15", price: "₹20/km" },
  { id: "bus", name: "Bus", icon: Bus, description: "Large groups", price: "₹25/km" },
  { id: "train", name: "Train", icon: Train, description: "Scenic journey", price: "₹500-2000" },
]

const hotelFacilities = [
  { id: "wifi", name: "Free WiFi", icon: Wifi, popular: true },
  { id: "pool", name: "Swimming Pool", icon: Waves, popular: true },
  { id: "parking", name: "Free Parking", icon: ParkingMeter, popular: true },
  { id: "restaurant", name: "Restaurant", icon: ChefHat, popular: false },
  { id: "bar", name: "Bar/Lounge", icon: Wine, popular: false },
  { id: "gym", name: "Fitness Center", icon: Dumbbell, popular: false },
  { id: "spa", name: "Spa Services", icon: Hotel, popular: false },
  { id: "ac", name: "Air Conditioning", icon: Hotel, popular: true },
]

const kitchenItems = [
  { id: "kadhai", name: "Kadhai", price: "₹50/day" },
  { id: "pressure-cooker", name: "Pressure Cooker", price: "₹40/day" },
  { id: "tawa", name: "Tawa", price: "₹30/day" },
  { id: "spoons", name: "Spoons & Forks", price: "₹20/day" },
  { id: "plates", name: "Plates & Bowls", price: "₹30/day" },
  { id: "knife-set", name: "Knife Set", price: "₹25/day" },
]

const gadgets = [
  { id: "iphone", name: "iPhone 15 Pro", icon: Smartphone, price: "₹500/day" },
  { id: "gopro", name: "GoPro Hero 12", icon: Camera, price: "₹300/day" },
  { id: "dslr", name: "DSLR Camera", icon: Camera, price: "₹800/day" },
  { id: "drone", name: "DJI Drone", icon: Camera, price: "₹1200/day" },
  { id: "powerbank", name: "Power Bank", icon: Smartphone, price: "₹100/day" },
  { id: "tripod", name: "Professional Tripod", icon: Camera, price: "₹200/day" },
]

const helperServices = [
  { id: "cook", name: "Personal Cook", icon: ChefHat, price: "₹1500/day" },
  { id: "photographer", name: "Photographer", icon: Camera, price: "₹3000/day" },
  { id: "videographer", name: "Videographer", icon: Video, price: "₹4000/day" },
  { id: "guide", name: "Local Guide", icon: UserCheck, price: "₹1000/day" },
  { id: "driver", name: "Personal Driver", icon: Car, price: "₹800/day" },
]

export default function PlanTripPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    userLocation: "",
    destination: "",
    days: "",
    nights: "",
    people: "",
    travelMode: "",
    selfDriver: false,
    hotelRating: "",
    hotelFacilities: [] as string[],
    mealPreference: "",
    kitchenUtensils: [] as string[],
    gadgets: [] as string[],
    helper: [] as string[],
    specialRequests: "",
    termsAccepted: false,
  })

  const progress = (currentStep / steps.length) * 100

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    console.log("Form submitted:", formData)
    alert("🎉 Trip plan submitted successfully! We'll contact you within 24 hours.")
  }

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleArrayField = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].includes(value)
        ? (prev[field as keyof typeof prev] as string[]).filter((item) => item !== value)
        : [...(prev[field as keyof typeof prev] as string[]), value],
    }))
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.userLocation && formData.destination && formData.days && formData.nights && formData.people
      case 2:
        return formData.travelMode
      case 3:
        return formData.hotelRating && formData.mealPreference
      case 4:
        return true // Optional step
      case 5:
        return formData.termsAccepted
      default:
        return false
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2 hover:bg-blue-50">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Plan Your Trip
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Hero Section */}
        <div className="text-center mb-8 animate-in slide-in-from-bottom duration-500">
          <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Plan Your Perfect Trip to Chhattisgarh
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tell us about your preferences and we'll create a personalized itinerary just for you
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8 animate-in slide-in-from-top duration-700">
          <div className="flex items-center justify-between mb-6 max-w-4xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = currentStep === step.id
              const isCompleted = currentStep > step.id

              return (
                <div key={step.id} className="flex flex-col items-center relative">
                  {index < steps.length - 1 && (
                    <div
                      className={`absolute top-5 left-12 w-24 h-0.5 transition-colors duration-500 ${
                        isCompleted ? "bg-green-500" : "bg-gray-200"
                      }`}
                    />
                  )}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 hover:scale-105 ${
                      isCompleted
                        ? "bg-green-500 border-green-500 text-white"
                        : isActive
                          ? "bg-blue-500 border-blue-500 text-white shadow-lg shadow-blue-200"
                          : "border-gray-300 text-gray-400 bg-white"
                    }`}
                  >
                    {isCompleted ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                  </div>
                  <div className="text-center mt-2">
                    <span className={`text-xs font-medium ${isActive ? "text-blue-600" : "text-gray-500"}`}>
                      {step.title}
                    </span>
                    <p className="text-xs text-gray-400 max-w-20">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <Progress value={progress} className="w-full max-w-4xl mx-auto h-2" />
        </div>

        {/* Form Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="animate-in slide-in-from-right duration-300">
            <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader className="text-center pb-6">
                <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                  {React.createElement(steps[currentStep - 1].icon, {
                    className: "h-6 w-6 text-blue-600",
                  })}
                  {steps[currentStep - 1].title}
                </CardTitle>
                <p className="text-muted-foreground">{steps[currentStep - 1].description}</p>
              </CardHeader>

              <CardContent className="space-y-8">
                {/* Step 1: Trip Details */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 animate-in slide-in-from-left duration-500">
                        <Label htmlFor="userLocation" className="text-sm font-medium">
                          Your Location
                        </Label>
                        <Input
                          id="userLocation"
                          placeholder="Enter your city/location"
                          value={formData.userLocation}
                          onChange={(e) => updateFormData("userLocation", e.target.value)}
                          className="h-12 border-2 focus:border-blue-500 transition-colors"
                        />
                      </div>

                      <div className="space-y-2 animate-in slide-in-from-right duration-500">
                        <Label htmlFor="destination" className="text-sm font-medium">
                          Destination in Chhattisgarh
                        </Label>
                        <Select
                          value={formData.destination}
                          onValueChange={(value) => updateFormData("destination", value)}
                        >
                          <SelectTrigger className="h-12 border-2 focus:border-blue-500">
                            <SelectValue placeholder="Select destination" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bastar">Bastar Region</SelectItem>
                            <SelectItem value="raipur">Raipur</SelectItem>
                            <SelectItem value="bilaspur">Bilaspur</SelectItem>
                            <SelectItem value="korba">Korba</SelectItem>
                            <SelectItem value="jagdalpur">Jagdalpur</SelectItem>
                            <SelectItem value="kanker">Kanker</SelectItem>
                            <SelectItem value="multiple">Multiple Destinations</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 animate-in slide-in-from-bottom duration-700">
                      <div className="space-y-2">
                        <Label htmlFor="days" className="text-sm font-medium flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Days
                        </Label>
                        <Input
                          id="days"
                          type="number"
                          min="1"
                          max="30"
                          placeholder="0"
                          value={formData.days}
                          onChange={(e) => updateFormData("days", e.target.value)}
                          className="h-12 border-2 focus:border-blue-500 text-center text-lg font-semibold"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="nights" className="text-sm font-medium flex items-center gap-2">
                          <Hotel className="h-4 w-4" />
                          Nights
                        </Label>
                        <Input
                          id="nights"
                          type="number"
                          min="0"
                          max="29"
                          placeholder="0"
                          value={formData.nights}
                          onChange={(e) => updateFormData("nights", e.target.value)}
                          className="h-12 border-2 focus:border-blue-500 text-center text-lg font-semibold"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="people" className="text-sm font-medium flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          People
                        </Label>
                        <Input
                          id="people"
                          type="number"
                          min="1"
                          max="50"
                          placeholder="0"
                          value={formData.people}
                          onChange={(e) => updateFormData("people", e.target.value)}
                          className="h-12 border-2 focus:border-blue-500 text-center text-lg font-semibold"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Transportation */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <Label className="text-lg font-medium">Choose Your Travel Mode</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {travelModes.map((mode, index) => {
                          const Icon = mode.icon
                          const isSelected = formData.travelMode === mode.id

                          return (
                            <div
                              key={mode.id}
                              className="animate-in slide-in-from-bottom duration-300"
                              style={{ animationDelay: `${index * 100}ms` }}
                            >
                              <input
                                type="radio"
                                id={mode.id}
                                name="travelMode"
                                value={mode.id}
                                checked={isSelected}
                                onChange={(e) => updateFormData("travelMode", e.target.value)}
                                className="peer sr-only"
                              />
                              <Label
                                htmlFor={mode.id}
                                className={`flex flex-col items-center justify-center rounded-xl border-2 p-6 cursor-pointer transition-all duration-300 hover:scale-102 ${
                                  isSelected
                                    ? "border-blue-500 bg-blue-50 shadow-lg shadow-blue-200"
                                    : "border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-25"
                                }`}
                              >
                                <Icon className={`h-8 w-8 mb-3 ${isSelected ? "text-blue-600" : "text-gray-400"}`} />
                                <span
                                  className={`font-semibold mb-1 ${isSelected ? "text-blue-900" : "text-gray-700"}`}
                                >
                                  {mode.name}
                                </span>
                                <span className="text-xs text-gray-500 text-center mb-2">{mode.description}</span>
                                <Badge variant={isSelected ? "default" : "secondary"} className="text-xs">
                                  {mode.price}
                                </Badge>
                              </Label>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg animate-in slide-in-from-bottom duration-500">
                      <Checkbox
                        id="selfDriver"
                        checked={formData.selfDriver}
                        onCheckedChange={(checked) => updateFormData("selfDriver", checked)}
                        className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                      />
                      <Label htmlFor="selfDriver" className="font-medium cursor-pointer">
                        Self-driver (otherwise with professional driver)
                      </Label>
                    </div>
                  </div>
                )}

                {/* Step 3: Stay & Dining */}
                {currentStep === 3 && (
                  <div className="space-y-8">
                    {/* Hotel Rating */}
                    <div className="space-y-4">
                      <Label className="text-lg font-medium">Hotel Star Rating</Label>
                      <div className="flex gap-3 justify-center">
                        {[1, 2, 3, 4, 5].map((rating) => {
                          const isSelected = formData.hotelRating === rating.toString()

                          return (
                            <div key={rating} className="hover:scale-105 transition-transform duration-200">
                              <input
                                type="radio"
                                id={`rating-${rating}`}
                                name="hotelRating"
                                value={rating.toString()}
                                checked={isSelected}
                                onChange={(e) => updateFormData("hotelRating", e.target.value)}
                                className="peer sr-only"
                              />
                              <Label
                                htmlFor={`rating-${rating}`}
                                className={`flex items-center justify-center rounded-full w-16 h-16 border-2 cursor-pointer transition-all duration-300 ${
                                  isSelected
                                    ? "border-yellow-500 bg-yellow-50 shadow-lg shadow-yellow-200"
                                    : "border-gray-200 bg-white hover:border-yellow-300"
                                }`}
                              >
                                <span className={`text-2xl ${isSelected ? "text-yellow-600" : "text-gray-400"}`}>
                                  {rating}★
                                </span>
                              </Label>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Hotel Facilities */}
                    <div className="space-y-4">
                      <Label className="text-lg font-medium">Hotel Facilities</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {hotelFacilities.map((facility, index) => {
                          const Icon = facility.icon
                          const isSelected = formData.hotelFacilities.includes(facility.id)

                          return (
                            <div
                              key={facility.id}
                              className="animate-in slide-in-from-bottom duration-300 hover:scale-102 transition-transform"
                              style={{ animationDelay: `${index * 50}ms` }}
                            >
                              <div
                                onClick={() => toggleArrayField("hotelFacilities", facility.id)}
                                className={`relative flex flex-col items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                                  isSelected
                                    ? "border-green-500 bg-green-50 shadow-md"
                                    : "border-gray-200 bg-white hover:border-green-300"
                                }`}
                              >
                                <Icon className={`h-6 w-6 mb-2 ${isSelected ? "text-green-600" : "text-gray-400"}`} />
                                <span
                                  className={`text-xs font-medium text-center ${isSelected ? "text-green-900" : "text-gray-600"}`}
                                >
                                  {facility.name}
                                </span>
                                {facility.popular && (
                                  <Badge variant="secondary" className="mt-1 text-xs">
                                    Popular
                                  </Badge>
                                )}
                                {isSelected && (
                                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center animate-in zoom-in duration-200">
                                    <Check className="h-3 w-3 text-white" />
                                  </div>
                                )}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Meal Preference */}
                    <div className="space-y-4">
                      <Label className="text-lg font-medium">Meal Preference</Label>
                      <RadioGroup
                        value={formData.mealPreference}
                        onValueChange={(value) => updateFormData("mealPreference", value)}
                        className="flex gap-6 justify-center"
                      >
                        {[
                          { value: "veg", label: "Vegetarian", emoji: "🥗" },
                          { value: "non-veg", label: "Non-Vegetarian", emoji: "🍖" },
                          { value: "both", label: "Both", emoji: "🍽️" },
                        ].map((option) => (
                          <div
                            key={option.value}
                            className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200"
                          >
                            <RadioGroupItem
                              value={option.value}
                              id={option.value}
                              className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                            />
                            <Label htmlFor={option.value} className="cursor-pointer flex items-center gap-2">
                              <span className="text-xl">{option.emoji}</span>
                              <span className="font-medium">{option.label}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>
                )}

                {/* Step 4: Add-ons */}
                {currentStep === 4 && (
                  <div className="space-y-8">
                    {/* Kitchen Utensils */}
                    <div className="space-y-4">
                      <Label className="text-lg font-medium flex items-center gap-2">
                        <Utensils className="h-5 w-5" />
                        Kitchen Utensils (Optional)
                      </Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {kitchenItems.map((item, index) => {
                          const isSelected = formData.kitchenUtensils.includes(item.id)

                          return (
                            <div
                              key={item.id}
                              className="animate-in slide-in-from-left duration-300 hover:scale-102 transition-transform"
                              style={{ animationDelay: `${index * 50}ms` }}
                              onClick={() => toggleArrayField("kitchenUtensils", item.id)}
                            >
                              <div
                                className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                                  isSelected
                                    ? "border-orange-500 bg-orange-50"
                                    : "border-gray-200 bg-white hover:border-orange-300"
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span className={`font-medium ${isSelected ? "text-orange-900" : "text-gray-700"}`}>
                                    {item.name}
                                  </span>
                                  {isSelected && <Check className="h-4 w-4 text-orange-600" />}
                                </div>
                                <span className="text-xs text-gray-500">{item.price}</span>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Gadgets */}
                    <div className="space-y-4">
                      <Label className="text-lg font-medium flex items-center gap-2">
                        <Camera className="h-5 w-5" />
                        Gadgets (Optional)
                      </Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {gadgets.map((gadget, index) => {
                          const Icon = gadget.icon
                          const isSelected = formData.gadgets.includes(gadget.id)

                          return (
                            <div
                              key={gadget.id}
                              className="animate-in slide-in-from-right duration-300 hover:scale-102 transition-transform"
                              style={{ animationDelay: `${index * 100}ms` }}
                              onClick={() => toggleArrayField("gadgets", gadget.id)}
                            >
                              <div
                                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                                  isSelected
                                    ? "border-purple-500 bg-purple-50"
                                    : "border-gray-200 bg-white hover:border-purple-300"
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <Icon className={`h-6 w-6 ${isSelected ? "text-purple-600" : "text-gray-400"}`} />
                                  <div className="flex-1">
                                    <span
                                      className={`font-medium block ${isSelected ? "text-purple-900" : "text-gray-700"}`}
                                    >
                                      {gadget.name}
                                    </span>
                                    <span className="text-sm text-gray-500">{gadget.price}</span>
                                  </div>
                                  {isSelected && <Check className="h-5 w-5 text-purple-600" />}
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Helper Services */}
                    <div className="space-y-4">
                      <Label className="text-lg font-medium flex items-center gap-2">
                        <UserCheck className="h-5 w-5" />
                        Helper Services (Optional)
                      </Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {helperServices.map((service, index) => {
                          const Icon = service.icon
                          const isSelected = formData.helper.includes(service.id)

                          return (
                            <div
                              key={service.id}
                              className="animate-in slide-in-from-bottom duration-300 hover:scale-102 transition-transform"
                              style={{ animationDelay: `${index * 100}ms` }}
                              onClick={() => toggleArrayField("helper", service.id)}
                            >
                              <div
                                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                                  isSelected
                                    ? "border-indigo-500 bg-indigo-50"
                                    : "border-gray-200 bg-white hover:border-indigo-300"
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <Icon className={`h-6 w-6 ${isSelected ? "text-indigo-600" : "text-gray-400"}`} />
                                  <div className="flex-1">
                                    <span
                                      className={`font-medium block ${isSelected ? "text-indigo-900" : "text-gray-700"}`}
                                    >
                                      {service.name}
                                    </span>
                                    <span className="text-sm text-gray-500">{service.price}</span>
                                  </div>
                                  {isSelected && <Check className="h-5 w-5 text-indigo-600" />}
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div className="space-y-2">
                      <Label htmlFor="specialRequests" className="text-lg font-medium">
                        Special Requests
                      </Label>
                      <Textarea
                        id="specialRequests"
                        placeholder="Any special requirements, dietary restrictions, accessibility needs, or other preferences..."
                        value={formData.specialRequests}
                        onChange={(e) => updateFormData("specialRequests", e.target.value)}
                        className="min-h-[100px] border-2 focus:border-blue-500"
                      />
                    </div>
                  </div>
                )}

                {/* Step 5: Confirmation */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div className="text-center animate-in slide-in-from-bottom duration-500">
                      <h3 className="text-2xl font-bold mb-4 text-green-600">🎉 Almost Done!</h3>
                      <p className="text-muted-foreground">Review your trip details and submit your request</p>
                    </div>

                    {/* Trip Summary */}
                    <div className="p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border animate-in slide-in-from-bottom duration-700">
                      <h4 className="text-lg font-semibold mb-4">Trip Summary</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-medium">From:</span>
                            <span>{formData.userLocation || "Not specified"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">To:</span>
                            <span>{formData.destination || "Not specified"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Duration:</span>
                            <span>
                              {formData.days} days, {formData.nights} nights
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Travelers:</span>
                            <span>{formData.people} people</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-medium">Transport:</span>
                            <span>
                              {formData.travelMode} {formData.selfDriver ? "(Self-drive)" : "(With driver)"}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Hotel:</span>
                            <span>{formData.hotelRating}★ rating</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Meals:</span>
                            <span>{formData.mealPreference || "Not specified"}</span>
                          </div>
                        </div>
                      </div>

                      {/* Selected Add-ons */}
                      {(formData.hotelFacilities.length > 0 ||
                        formData.kitchenUtensils.length > 0 ||
                        formData.gadgets.length > 0 ||
                        formData.helper.length > 0) && (
                        <div className="mt-4 pt-4 border-t">
                          <h5 className="font-medium mb-2">Selected Add-ons:</h5>
                          <div className="flex flex-wrap gap-1">
                            {[
                              ...formData.hotelFacilities,
                              ...formData.kitchenUtensils,
                              ...formData.gadgets,
                              ...formData.helper,
                            ].map((item) => (
                              <Badge key={item} variant="secondary" className="text-xs">
                                {item.replace("-", " ")}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Terms & Conditions */}
                    <div className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200 animate-in slide-in-from-bottom duration-900">
                      <Checkbox
                        id="terms"
                        checked={formData.termsAccepted}
                        onCheckedChange={(checked) => updateFormData("termsAccepted", checked)}
                        className="mt-1 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                      />
                      <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                        I accept the{" "}
                        <Link href="#" className="text-blue-600 hover:underline font-medium">
                          Terms & Conditions
                        </Link>{" "}
                        and{" "}
                        <Link href="#" className="text-blue-600 hover:underline font-medium">
                          Privacy Policy
                        </Link>
                        . I understand that this is a trip planning request and final booking will be confirmed
                        separately.
                      </Label>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-8 border-t">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className="gap-2 px-6 py-3 hover:scale-105 transition-transform"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Previous
                  </Button>

                  {currentStep < steps.length ? (
                    <Button
                      onClick={handleNext}
                      disabled={!isStepValid()}
                      className="gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 hover:scale-105 transition-all duration-200"
                    >
                      Next
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <div className="hover:scale-105 transition-transform duration-200">
                      <Button
                        onClick={handleSubmit}
                        disabled={!formData.termsAccepted}
                        className="gap-2 px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg font-semibold"
                      >
                        Submit Trip Request
                        <CheckCircle className="h-5 w-5" />
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 text-center animate-in slide-in-from-bottom duration-1000">
          <Card className="max-w-md mx-auto bg-gradient-to-r from-blue-50 to-green-50 border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Need Help? 🤝</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Our travel experts are here to assist you with planning your perfect trip.
              </p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center justify-center gap-2">
                  <span className="font-semibold">📞 Phone:</span> +91 771 242 2788
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="font-semibold">✉️ Email:</span> info@chhattisgarhtourism.in
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
