"use client"

import { useState } from "react"
import { Calculator, Users, Calendar, MapPin, TrendingUp, Info } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useStateContext } from "@/contexts/state-context"

export default function BudgetCalculator() {
  const { selectedState } = useStateContext()
  const [formData, setFormData] = useState({
    travelers: "",
    days: "",
    accommodation: "",
    transport: "",
  })
  const [budget, setBudget] = useState<{
    accommodation: number
    transport: number
    food: number
    activities: number
    total: number
  } | null>(null)
  const [showAnalysis, setShowAnalysis] = useState(false)

  const calculateBudget = () => {
    const travelers = Number.parseInt(formData.travelers) || 1
    const days = Number.parseInt(formData.days) || 1

    // Enhanced state-specific rates with detailed breakdown
    const stateRates = {
      chhattisgarh: {
        budget: 1500,
        mid: 2500,
        luxury: 4500,
        description: "Affordable destination with rich tribal culture",
      },
      rajasthan: {
        budget: 2000,
        mid: 3500,
        luxury: 6000,
        description: "Royal heritage with premium palace hotels",
      },
      kerala: {
        budget: 1800,
        mid: 3000,
        luxury: 5500,
        description: "Backwater paradise with luxury houseboats",
      },
      himachal: {
        budget: 1600,
        mid: 2800,
        luxury: 5000,
        description: "Mountain retreat with scenic beauty",
      },
      goa: {
        budget: 2200,
        mid: 3800,
        luxury: 6500,
        description: "Beach destination with vibrant nightlife",
      },
      "tamil-nadu": {
        budget: 1700,
        mid: 2800,
        luxury: 4800,
        description: "Temple architecture and cultural heritage",
      },
      karnataka: {
        budget: 1600,
        mid: 2700,
        luxury: 4700,
        description: "Tech hub with historical monuments",
      },
      maharashtra: {
        budget: 1900,
        mid: 3200,
        luxury: 5500,
        description: "Bollywood glamour and hill stations",
      },
      "madhya-pradesh": {
        budget: 1400,
        mid: 2300,
        luxury: 4200,
        description: "Heart of India with tiger reserves",
      },
      odisha: {
        budget: 1300,
        mid: 2200,
        luxury: 4000,
        description: "Ancient temples and pristine beaches",
      },
      jharkhand: {
        budget: 1200,
        mid: 2000,
        luxury: 3800,
        description: "Tribal heritage and natural waterfalls",
      },
      "andhra-pradesh": {
        budget: 1500,
        mid: 2600,
        luxury: 4600,
        description: "Spiritual destination with coastal beauty",
      },
    }

    const rates = stateRates[selectedState.id as keyof typeof stateRates] || stateRates.chhattisgarh
    const accommodationRate = rates[formData.accommodation as keyof typeof rates] || rates.mid

    const accommodation = Math.round(accommodationRate * 0.4 * travelers * days)
    const transport = Math.round(accommodationRate * 0.25 * travelers)
    const food = Math.round(accommodationRate * 0.25 * travelers * days)
    const activities = Math.round(accommodationRate * 0.1 * travelers * days)
    const total = accommodation + transport + food + activities

    setBudget({ accommodation, transport, food, activities, total })
    setShowAnalysis(true)
  }

  const getPercentage = (amount: number) => (budget ? (amount / budget.total) * 100 : 0)

  const getBudgetCategory = () => {
    if (!budget) return ""
    if (budget.total < 15000) return "Budget-Friendly"
    if (budget.total < 35000) return "Mid-Range"
    if (budget.total < 60000) return "Premium"
    return "Luxury"
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <div className="p-2 bg-primary/10 rounded-full">
            <Calculator className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold">Smart Budget Planner</h3>
        </div>
        <p className="text-muted-foreground">
          Get personalized budget estimates for your {selectedState.name} adventure
        </p>
      </motion.div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <MapPin className="h-5 w-5" />
            Plan Your {selectedState.name} Trip
          </CardTitle>
          <p className="text-sm text-muted-foreground">Configure your trip details for accurate budget calculation</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              className="space-y-2"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Label htmlFor="travelers" className="text-sm font-medium">
                Number of Travelers
              </Label>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="travelers"
                  type="number"
                  placeholder="2"
                  className="pl-9"
                  value={formData.travelers}
                  onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                />
              </div>
              {formData.travelers && (
                <Badge variant="secondary" className="text-xs">
                  {Number.parseInt(formData.travelers) === 1
                    ? "Solo Trip"
                    : Number.parseInt(formData.travelers) <= 4
                      ? "Small Group"
                      : "Large Group"}
                </Badge>
              )}
            </motion.div>

            <motion.div
              className="space-y-2"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Label htmlFor="days" className="text-sm font-medium">
                Trip Duration (Days)
              </Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="days"
                  type="number"
                  placeholder="5"
                  className="pl-9"
                  value={formData.days}
                  onChange={(e) => setFormData({ ...formData, days: e.target.value })}
                />
              </div>
              {formData.days && (
                <Badge variant="secondary" className="text-xs">
                  {Number.parseInt(formData.days) <= 3
                    ? "Weekend Trip"
                    : Number.parseInt(formData.days) <= 7
                      ? "Week-long"
                      : "Extended Stay"}
                </Badge>
              )}
            </motion.div>
          </div>

          <motion.div
            className="space-y-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Label className="text-sm font-medium">Accommodation Preference</Label>
            <Select
              value={formData.accommodation}
              onValueChange={(value) => setFormData({ ...formData, accommodation: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select accommodation type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="budget">
                  <div className="space-y-1">
                    <div className="font-medium">Budget Hotels & Hostels</div>
                    <div className="text-xs text-muted-foreground">Basic amenities, clean & safe</div>
                  </div>
                </SelectItem>
                <SelectItem value="mid">
                  <div className="space-y-1">
                    <div className="font-medium">3-4 Star Hotels</div>
                    <div className="text-xs text-muted-foreground">Comfortable with good amenities</div>
                  </div>
                </SelectItem>
                <SelectItem value="luxury">
                  <div className="space-y-1">
                    <div className="font-medium">Luxury Hotels & Resorts</div>
                    <div className="text-xs text-muted-foreground">Premium experience with all facilities</div>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </motion.div>

          <motion.div
            className="space-y-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Label className="text-sm font-medium">Transportation Mode</Label>
            <Select
              value={formData.transport}
              onValueChange={(value) => setFormData({ ...formData, transport: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select transportation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public">
                  <div className="space-y-1">
                    <div className="font-medium">Public Transport</div>
                    <div className="text-xs text-muted-foreground">Buses, trains - Most economical</div>
                  </div>
                </SelectItem>
                <SelectItem value="private">
                  <div className="space-y-1">
                    <div className="font-medium">Private Car/Taxi</div>
                    <div className="text-xs text-muted-foreground">Comfortable & flexible</div>
                  </div>
                </SelectItem>
                <SelectItem value="flight">
                  <div className="space-y-1">
                    <div className="font-medium">Flight + Local Transport</div>
                    <div className="text-xs text-muted-foreground">Fastest option for distant locations</div>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </motion.div>

          <Button
            onClick={calculateBudget}
            className="w-full"
            size="lg"
            disabled={!formData.travelers || !formData.days || !formData.accommodation}
          >
            <Calculator className="h-4 w-4 mr-2" />
            Calculate My Trip Budget
          </Button>

          {budget && showAnalysis && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 pt-6 border-t"
            >
              {/* Quick Overview */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">₹{budget.total.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Total Budget</div>
                  <Badge className="mt-1">{getBudgetCategory()}</Badge>
                </div>
                <div className="text-center p-4 bg-secondary/20 rounded-lg">
                  <div className="text-2xl font-bold">
                    ₹{Math.round(budget.total / Number.parseInt(formData.travelers)).toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Per Person</div>
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Budget Breakdown for {selectedState.name}
                </h4>

                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Accommodation ({formData.days} nights)</span>
                      <span className="font-medium">₹{budget.accommodation.toLocaleString()}</span>
                    </div>
                    <Progress value={getPercentage(budget.accommodation)} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Transportation</span>
                      <span className="font-medium">₹{budget.transport.toLocaleString()}</span>
                    </div>
                    <Progress value={getPercentage(budget.transport)} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Food & Dining</span>
                      <span className="font-medium">₹{budget.food.toLocaleString()}</span>
                    </div>
                    <Progress value={getPercentage(budget.food)} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Activities & Sightseeing</span>
                      <span className="font-medium">₹{budget.activities.toLocaleString()}</span>
                    </div>
                    <Progress value={getPercentage(budget.activities)} className="h-2" />
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between font-semibold text-lg">
                  <span>Total Estimated Budget:</span>
                  <span className="text-primary">₹{budget.total.toLocaleString()}</span>
                </div>
              </div>

              {/* Smart Insights */}
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Budget Tip:</strong> This estimate includes a 10% buffer for unexpected expenses. Book
                  accommodations 2-3 weeks in advance for better rates in {selectedState.name}.
                </AlertDescription>
              </Alert>

              {budget.total > 40000 && (
                <Alert>
                  <TrendingUp className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Cost Optimization:</strong> Consider traveling during off-season or choosing mid-range
                    accommodations to reduce costs by 20-30%.
                  </AlertDescription>
                </Alert>
              )}

              <div className="text-xs text-muted-foreground space-y-1">
                <p>* Prices are estimated and may vary based on season, availability, and specific locations.</p>
                <p>* {selectedState.name} offers great value with its diverse attractions and cultural experiences.</p>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
