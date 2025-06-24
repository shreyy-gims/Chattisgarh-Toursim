"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    name: "Uday Shankar",
    location: "Delhi, India",
    image: "/uday.png",
    rating: 5,
    text: "My trip to Chhattisgarh was an incredible journey into India's hidden gem. The tribal villages, waterfalls, and ancient temples were breathtaking. The local guides were knowledgeable and friendly, making the experience even more memorable.",
  },
  {
    id: 2,
    name: "Shivam Singh",
    location: "Uttrakhand , India",
    image: "/shivam.png",
    rating: 5,
    text: "Chhattisgarh surprised me with its untouched natural beauty and rich cultural heritage. The virtual tour planning tool helped me create the perfect itinerary, and the personalized recommendations were spot on. I'll definitely be back!",
  },
  {
    id: 3,
    name: "Satyendra Prajapati",
    location: "Kerala , India",
    image: "/satya.jpg",
    rating: 4,
    text: "The tribal art workshops in Bastar were the highlight of my trip. Learning Dhokra craft from local artisans was an unforgettable experience. Chhattisgarh offers authentic cultural immersion that's hard to find elsewhere.",
  },
  {
    id: 4,
    name: "Maria Rodriguez",
    location: "Barcelona, Spain",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Chitrakote Falls took my breath away! The local cuisine was delicious, and the people were so welcoming. The trip planner on the website made it easy to discover places I wouldn't have found otherwise.",
  },
  {
    id: 5,
    name: "Rahul Desai",
    location: "Mumbai, India",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "As an Indian, I'm ashamed I hadn't visited Chhattisgarh earlier. The state is a treasure trove of natural beauty, tribal culture, and amazing food. The virtual tours helped me plan my trip perfectly.",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.ceil(testimonials.length / 3) - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === Math.ceil(testimonials.length / 3) - 1 ? 0 : prevIndex + 1))
  }

  const visibleTestimonials = testimonials.slice(
    currentIndex * 3,
    Math.min((currentIndex + 1) * 3, testimonials.length),
  )

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleTestimonials.map((testimonial) => (
          <Card key={testimonial.id} className="h-full">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-12 w-12 border overflow-hidden">"
                  <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} 
                   className="transition-transform duration-300 ease-in-out hover:scale-110"/>
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted"}`}
                  />
                ))}
              </div>

              <p className="text-muted-foreground flex-grow">"{testimonial.text}"</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-2">
        <Button variant="outline" size="icon" className="rounded-full" onClick={handlePrevious}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous testimonials</span>
        </Button>

        <Button variant="outline" size="icon" className="rounded-full" onClick={handleNext}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next testimonials</span>
        </Button>
      </div>
    </div>
  )
}
