"use client"

import { useState } from "react"
import { Calculator, Users, Calendar, IndianRupee, Hotel, Car, UtensilsCrossed, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export default function BudgetCalculator() {
  const [people, setPeople] = useState(2)
  const [days, setDays] = useState(3)
  const [hotelCategory, setHotelCategory] = useState("3-star")
  const [transportMode, setTransportMode] = useState("car")
  const [foodPreference, setFoodPreference] = useState("local")

  // Budget calculation logic
  const calculateBudget = () => {
    let hotelCost = 0
    let transportCost = 0
    let foodCost = 0
    let activityCost = 0

    // Hotel costs per night per room
    switch (hotelCategory) {
      case "budget":
        hotelCost = 1500
        break
      case "3-star":
        hotelCost = 3500
        break
      case "4-star":
        hotelCost = 6000
        break
      case "luxury":
        hotelCost = 12000
        break
    }

    // Transport costs per day
    switch (transportMode) {
      case "bus":
        transportCost = 500
        break
      case "car":
        transportCost = 2000
        break
      case "suv":
        transportCost = 3000
        break
      case "tempo":
        transportCost = 4000
        break
    }

    // Food costs per person per day
    switch (foodPreference) {
      case "budget":
        foodCost = 300
        break
      case "local":
        foodCost = 600
        break
      case "restaurant":
        foodCost = 1200
        break
      case "premium":
        foodCost = 2000
        break
    }

    // Activity costs per person per day
    activityCost = 800

    const totalHotelCost = hotelCost * days
    const totalTransportCost = transportCost * days
    const totalFoodCost = foodCost * people * days
    const totalActivityCost = activityCost * people * days

    const grandTotal = totalHotelCost + totalTransportCost + totalFoodCost + totalActivityCost

    return {
      hotel: totalHotelCost,
      transport: totalTransportCost,
      food: totalFoodCost,
      activities: totalActivityCost,
      total: grandTotal,
      perPerson: Math.round(grandTotal / people),
    }
  }

  const budget = calculateBudget()

  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Calculator className="h-6 w-6 text-blue-600" />
          Trip Budget Calculator
        </CardTitle>
        <p className="text-sm text-muted-foreground">Get instant cost estimates for your Chhattisgarh trip</p>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        {/* Trip Details Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Trip Details</h3>

          {/* Number of People */}
          <div className="space-y-3">
            <Label className="flex items-center gap-2 text-sm font-medium">
              <Users className="h-4 w-4 text-blue-600" />
              Travelers:{" "}
              <span className="font-bold text-blue-600">
                {people} {people === 1 ? "person" : "people"}
              </span>
            </Label>
            <Slider
              value={[people]}
              onValueChange={(value) => setPeople(value[0])}
              max={10}
              min={1}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1 person</span>
              <span>10 people</span>
            </div>
          </div>

          {/* Number of Days */}
          <div className="space-y-3">
            <Label className="flex items-center gap-2 text-sm font-medium">
              <Calendar className="h-4 w-4 text-green-600" />
              Duration:{" "}
              <span className="font-bold text-green-600">
                {days} {days === 1 ? "day" : "days"}
              </span>
            </Label>
            <Slider
              value={[days]}
              onValueChange={(value) => setDays(value[0])}
              max={15}
              min={1}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1 day</span>
              <span>15 days</span>
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Travel Preferences</h3>

          {/* Hotel Category */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2 text-sm font-medium">
              <Hotel className="h-4 w-4 text-purple-600" />
              Accommodation Type
            </Label>
            <Select value={hotelCategory} onValueChange={setHotelCategory}>
              <SelectTrigger className="h-11">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="budget">
                  <div className="flex flex-col">
                    <span className="font-medium">Budget Hotels</span>
                    <span className="text-xs text-muted-foreground">₹1,500 per night</span>
                  </div>
                </SelectItem>
                <SelectItem value="3-star">
                  <div className="flex flex-col">
                    <span className="font-medium">3-Star Hotels</span>
                    <span className="text-xs text-muted-foreground">₹3,500 per night</span>
                  </div>
                </SelectItem>
                <SelectItem value="4-star">
                  <div className="flex flex-col">
                    <span className="font-medium">4-Star Hotels</span>
                    <span className="text-xs text-muted-foreground">₹6,000 per night</span>
                  </div>
                </SelectItem>
                <SelectItem value="luxury">
                  <div className="flex flex-col">
                    <span className="font-medium">Luxury Hotels</span>
                    <span className="text-xs text-muted-foreground">₹12,000 per night</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Transport Mode */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2 text-sm font-medium">
              <Car className="h-4 w-4 text-orange-600" />
              Transportation
            </Label>
            <Select value={transportMode} onValueChange={setTransportMode}>
              <SelectTrigger className="h-11">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bus">
                  <div className="flex flex-col">
                    <span className="font-medium">Bus/Public Transport</span>
                    <span className="text-xs text-muted-foreground">₹500 per day</span>
                  </div>
                </SelectItem>
                <SelectItem value="car">
                  <div className="flex flex-col">
                    <span className="font-medium">Private Car</span>
                    <span className="text-xs text-muted-foreground">₹2,000 per day</span>
                  </div>
                </SelectItem>
                <SelectItem value="suv">
                  <div className="flex flex-col">
                    <span className="font-medium">SUV</span>
                    <span className="text-xs text-muted-foreground">₹3,000 per day</span>
                  </div>
                </SelectItem>
                <SelectItem value="tempo">
                  <div className="flex flex-col">
                    <span className="font-medium">Tempo Traveller</span>
                    <span className="text-xs text-muted-foreground">₹4,000 per day</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Food Preference */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2 text-sm font-medium">
              <UtensilsCrossed className="h-4 w-4 text-red-600" />
              Dining Preference
            </Label>
            <Select value={foodPreference} onValueChange={setFoodPreference}>
              <SelectTrigger className="h-11">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="budget">
                  <div className="flex flex-col">
                    <span className="font-medium">Street Food & Local</span>
                    <span className="text-xs text-muted-foreground">₹300 per person/day</span>
                  </div>
                </SelectItem>
                <SelectItem value="local">
                  <div className="flex flex-col">
                    <span className="font-medium">Local Restaurants</span>
                    <span className="text-xs text-muted-foreground">₹600 per person/day</span>
                  </div>
                </SelectItem>
                <SelectItem value="restaurant">
                  <div className="flex flex-col">
                    <span className="font-medium">Good Restaurants</span>
                    <span className="text-xs text-muted-foreground">₹1,200 per person/day</span>
                  </div>
                </SelectItem>
                <SelectItem value="premium">
                  <div className="flex flex-col">
                    <span className="font-medium">Premium Dining</span>
                    <span className="text-xs text-muted-foreground">₹2,000 per person/day</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Budget Breakdown */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-5 rounded-xl border">
          <h4 className="font-semibold flex items-center gap-2 mb-4 text-gray-800">
            <IndianRupee className="h-5 w-5 text-green-600" />
            Budget Breakdown
          </h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Hotel className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium">Accommodation</span>
                <span className="text-xs text-muted-foreground">({days} nights)</span>
              </div>
              <span className="font-semibold">₹{budget.hotel.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Car className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-medium">Transportation</span>
                <span className="text-xs text-muted-foreground">({days} days)</span>
              </div>
              <span className="font-semibold">₹{budget.transport.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="h-4 w-4 text-red-600" />
                <span className="text-sm font-medium">Food & Dining</span>
                <span className="text-xs text-muted-foreground">
                  ({people} × {days} days)
                </span>
              </div>
              <span className="font-semibold">₹{budget.food.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium">Activities & Sightseeing</span>
                <span className="text-xs text-muted-foreground">
                  ({people} × {days} days)
                </span>
              </div>
              <span className="font-semibold">₹{budget.activities.toLocaleString()}</span>
            </div>

            {/* Total Section */}
            <div className="bg-white p-4 rounded-lg mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-bold text-gray-800">Total Budget</span>
                <span className="text-2xl font-bold text-green-600">₹{budget.total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Cost per person</span>
                <span className="font-semibold text-blue-600">₹{budget.perPerson.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50">
        <Button className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
          Plan Trip with This Budget
        </Button>
      </CardFooter>
    </Card>
  )
}
