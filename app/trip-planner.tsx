"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export default function TripPlanner() {
  const [step, setStep] = useState(1)
  const [tripType, setTripType] = useState("adventure")
  const [budget, setBudget] = useState([5000])

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Create Your Perfect Itinerary</CardTitle>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="trip-type">What type of trip are you planning?</Label>
              <RadioGroup
                value={tripType}
                onValueChange={setTripType}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2"
              >
                <div>
                  <RadioGroupItem value="adventure" id="adventure" className="peer sr-only" />
                  <Label
                    htmlFor="adventure"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mountain"
                    >
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                    </svg>
                    <div className="mt-2 font-normal">Adventure</div>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="cultural" id="cultural" className="peer sr-only" />
                  <Label
                    htmlFor="cultural"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-landmark"
                    >
                      <line x1="3" x2="21" y1="22" y2="22" />
                      <line x1="6" x2="6" y1="18" y2="11" />
                      <line x1="10" x2="10" y1="18" y2="11" />
                      <line x1="14" x2="14" y1="18" y2="11" />
                      <line x1="18" x2="18" y1="18" y2="11" />
                      <polygon points="12 2 20 7 4 7" />
                    </svg>
                    <div className="mt-2 font-normal">Cultural</div>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="wildlife" id="wildlife" className="peer sr-only" />
                  <Label
                    htmlFor="wildlife"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-paw-print"
                    >
                      <circle cx="11" cy="4" r="2" />
                      <circle cx="18" cy="8" r="2" />
                      <circle cx="20" cy="16" r="2" />
                      <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
                    </svg>
                    <div className="mt-2 font-normal">Wildlife</div>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="relaxation" id="relaxation" className="peer sr-only" />
                  <Label
                    htmlFor="relaxation"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-palm-tree"
                    >
                      <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" />
                      <path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3" />
                      <path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z" />
                      <path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" />
                    </svg>
                    <div className="mt-2 font-normal">Relaxation</div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Budget Range (₹)</Label>
                <span className="text-sm">₹{budget[0].toLocaleString()}</span>
              </div>
              <Slider defaultValue={[5000]} max={50000} step={1000} value={budget} onValueChange={setBudget} />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>₹1,000</span>
                <span>₹50,000</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Select defaultValue="3">
                  <SelectTrigger id="duration">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">2 Days</SelectItem>
                    <SelectItem value="3">3 Days</SelectItem>
                    <SelectItem value="5">5 Days</SelectItem>
                    <SelectItem value="7">7 Days</SelectItem>
                    <SelectItem value="10">10+ Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="travelers">Travelers</Label>
                <Select defaultValue="2">
                  <SelectTrigger id="travelers">
                    <SelectValue placeholder="Select number of travelers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Person</SelectItem>
                    <SelectItem value="2">2 People</SelectItem>
                    <SelectItem value="3">3 People</SelectItem>
                    <SelectItem value="4">4 People</SelectItem>
                    <SelectItem value="5">5+ People</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="start-date">When are you planning to visit?</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="start-date" type="date" className="pl-9" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Preferred Destinations</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="bastar" className="rounded border-muted-foreground" />
                  <Label htmlFor="bastar" className="font-normal">
                    Bastar Region
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="raipur" className="rounded border-muted-foreground" />
                  <Label htmlFor="raipur" className="font-normal">
                    Raipur
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="sirpur" className="rounded border-muted-foreground" />
                  <Label htmlFor="sirpur" className="font-normal">
                    Sirpur
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="kawardha" className="rounded border-muted-foreground" />
                  <Label htmlFor="kawardha" className="font-normal">
                    Kawardha
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="barnawapara" className="rounded border-muted-foreground" />
                  <Label htmlFor="barnawapara" className="font-normal">
                    Barnawapara
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="mainpat" className="rounded border-muted-foreground" />
                  <Label htmlFor="mainpat" className="font-normal">
                    Mainpat
                  </Label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Interests</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="waterfalls" className="rounded border-muted-foreground" />
                  <Label htmlFor="waterfalls" className="font-normal">
                    Waterfalls
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="temples" className="rounded border-muted-foreground" />
                  <Label htmlFor="temples" className="font-normal">
                    Temples & Heritage
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="wildlife" className="rounded border-muted-foreground" />
                  <Label htmlFor="wildlife" className="font-normal">
                    Wildlife
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="tribal" className="rounded border-muted-foreground" />
                  <Label htmlFor="tribal" className="font-normal">
                    Tribal Culture
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="food" className="rounded border-muted-foreground" />
                  <Label htmlFor="food" className="font-normal">
                    Local Cuisine
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="crafts" className="rounded border-muted-foreground" />
                  <Label htmlFor="crafts" className="font-normal">
                    Arts & Crafts
                  </Label>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="Enter your phone number" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="special-requests">Special Requests (Optional)</Label>
              <textarea
                id="special-requests"
                className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="Any special requirements or preferences?"
              ></textarea>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {step > 1 ? (
          <Button variant="outline" onClick={handleBack}>
            Back
          </Button>
        ) : (
          <div></div>
        )}

        {step < 3 ? <Button onClick={handleNext}>Next</Button> : <Button>Generate Itinerary</Button>}
      </CardFooter>
    </Card>
  )
}
