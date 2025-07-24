"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useStateContext } from "@/contexts/state-context"

interface Testimonial {
  id: string
  name: string
  location: string
  avatar: string
  rating: number
  comment: string
  experience: string
  date: string
}

export default function TestimonialCarousel() {
  const { selectedState } = useStateContext()
  const [currentIndex, setCurrentIndex] = useState(0)

  /* ----------  DATA ---------- */
  const testimonialsByState: Record<string, Testimonial[]> = {
    chhattisgarh: [
      {
        id: "1",
        name: "Shivam singh",
        location: "Mumbai, Maharashtra",
        avatar: "/shivam.png",
        rating: 5,
        comment: "Chitrakote Falls was absolutely breathtaking! The tribal experience felt so authentic and welcoming.",
        experience: "Chitrakote Falls & Tribal Village Tour",
        date: "March 2024",
      },
      {
        id: "2",
        name: "Rajesh Kumar",
        location: "Delhi, India",
        avatar: "/placeholder.svg?height=80&width=80&text=RK",
        rating: 5,
        comment: "Sirpur's ancient temples are a hidden gem. A perfect place for history lovers and peace seekers.",
        experience: "Sirpur Heritage Tour",
        date: "January 2024",
      },
      {
        id: "3",
        name: "Sarah Johnson",
        location: "London, UK",
        avatar: "/placeholder.svg?height=80&width=80&text=SJ",
        rating: 4,
        comment: "Kanger Valley National Park exceeded my expectations. Rich biodiversity and gorgeous caves!",
        experience: "Kanger Valley Safari",
        date: "November 2023",
      },
    ],

    rajasthan: [
      {
        id: "1",
        name: "Amit Patel",
        location: "Ahmedabad, Gujarat",
        avatar: "/placeholder.svg?height=80&width=80&text=AP",
        rating: 5,
        comment: "Jaipur's City Palace is magnificent! Felt like stepping back into royal history.",
        experience: "Jaipur Royal Heritage Tour",
        date: "February 2024",
      },
      {
        id: "2",
        name: "Emma Wilson",
        location: "Sydney, Australia",
        avatar: "/placeholder.svg?height=80&width=80&text=EW",
        rating: 5,
        comment: "Sleeping under the stars on a Thar Desert safari was magical—unforgettable!",
        experience: "Jaisalmer Desert Safari",
        date: "December 2023",
      },
      {
        id: "3",
        name: "Vikram Singh",
        location: "Bengaluru, Karnataka",
        avatar: "/placeholder.svg?height=80&width=80&text=VS",
        rating: 4,
        comment: "Udaipur's Lake Palace at sunset is something everyone should see once in their life.",
        experience: "Udaipur Lake Cruise",
        date: "October 2023",
      },
    ],

    kerala: [
      {
        id: "1",
        name: "Meera Nair",
        location: "Chennai, Tamil Nadu",
        avatar: "/placeholder.svg?height=80&width=80&text=MN",
        rating: 5,
        comment: "Alleppey houseboat cruise was pure bliss. Amazing food and serene landscapes.",
        experience: "Alleppey Backwater Cruise",
        date: "January 2024",
      },
      {
        id: "2",
        name: "David Miller",
        location: "New York, USA",
        avatar: "/placeholder.svg?height=80&width=80&text=DM",
        rating: 5,
        comment: "Munnar's tea gardens were like green carpets rolled over hills—spectacular!",
        experience: "Munnar Tea Trail",
        date: "December 2023",
      },
      {
        id: "3",
        name: "Anita Reddy",
        location: "Hyderabad, Telangana",
        avatar: "/placeholder.svg?height=80&width=80&text=AR",
        rating: 4,
        comment: "Fort Kochi's colonial charm and cafés made for the perfect leisurely day.",
        experience: "Fort Kochi Heritage Walk",
        date: "November 2023",
      },
    ],

    himachal: [
      {
        id: "1",
        name: "Rohit Gupta",
        location: "Pune, Maharashtra",
        avatar: "/placeholder.svg?height=80&width=80&text=RG",
        rating: 5,
        comment: "Snow adventure in Manali and the view from Rohtang Pass—simply exhilarating!",
        experience: "Manali Adventure Package",
        date: "May 2023",
      },
      {
        id: "2",
        name: "Lisa Chen",
        location: "Singapore",
        avatar: "/placeholder.svg?height=80&width=80&text=LC",
        rating: 5,
        comment: "Meditation sessions with Tibetan monks in Dharamshala were life changing.",
        experience: "Dharamshala Spiritual Retreat",
        date: "June 2023",
      },
      {
        id: "3",
        name: "Karan Malhotra",
        location: "Chandigarh, India",
        avatar: "/placeholder.svg?height=80&width=80&text=KM",
        rating: 4,
        comment: "Spiti Valley's barren beauty felt like another planet. Highly recommended!",
        experience: "Spiti Valley Expedition",
        date: "October 2023",
      },
    ],

    goa: [
      {
        id: "1",
        name: "Neha Joshi",
        location: "Mumbai, Maharashtra",
        avatar: "/placeholder.svg?height=80&width=80&text=NJ",
        rating: 5,
        comment: "Old Goa churches are architectural masterpieces; history comes alive here.",
        experience: "Old Goa Heritage Walk",
        date: "January 2024",
      },
      {
        id: "2",
        name: "Michael Brown",
        location: "London, UK",
        avatar: "/placeholder.svg?height=80&width=80&text=MB",
        rating: 4,
        comment: "Trek to Dudhsagar Falls was tough but the roaring waterfall made it worth it!",
        experience: "Dudhsagar Falls Trek",
        date: "December 2023",
      },
      {
        id: "3",
        name: "Ravi Menon",
        location: "Kochi, Kerala",
        avatar: "/placeholder.svg?height=80&width=80&text=RM",
        rating: 5,
        comment: "Lazy days on Goan beaches followed by vibrant nightlife—perfect holiday mix.",
        experience: "Goa Beach Circuit",
        date: "November 2023",
      },
    ],

    maharashtra: [
      {
        id: "1",
        name: "Arjun Desai",
        location: "Surat, Gujarat",
        avatar: "/placeholder.svg?height=80&width=80&text=AD",
        rating: 5,
        comment: "Ajanta and Ellora caves are mind-blowing! The ancient artistry is absolutely incredible.",
        experience: "Ajanta Ellora Heritage Tour",
        date: "February 2024",
      },
      {
        id: "2",
        name: "Jennifer Lee",
        location: "San Francisco, USA",
        avatar: "/placeholder.svg?height=80&width=80&text=JL",
        rating: 5,
        comment: "Bollywood studio tour in Mumbai was fantastic! Got to see how movies are made.",
        experience: "Mumbai Bollywood Experience",
        date: "January 2024",
      },
      {
        id: "3",
        name: "Sanjay Patil",
        location: "Nashik, Maharashtra",
        avatar: "/placeholder.svg?height=80&width=80&text=SP",
        rating: 4,
        comment: "Lonavala's monsoon beauty and street food made for a perfect weekend getaway.",
        experience: "Lonavala Hill Station Tour",
        date: "August 2023",
      },
    ],

    madhyapradesh: [
      {
        id: "1",
        name: "Kavita Agarwal",
        location: "Indore, Madhya Pradesh",
        avatar: "/placeholder.svg?height=80&width=80&text=KA",
        rating: 5,
        comment: "Khajuraho temples are architectural marvels! The intricate carvings tell amazing stories.",
        experience: "Khajuraho Temple Circuit",
        date: "March 2024",
      },
      {
        id: "2",
        name: "Robert Taylor",
        location: "Toronto, Canada",
        avatar: "/placeholder.svg?height=80&width=80&text=RT",
        rating: 5,
        comment: "Tiger safari at Kanha was thrilling! Saw a magnificent tiger family in their natural habitat.",
        experience: "Kanha Tiger Safari",
        date: "November 2023",
      },
      {
        id: "3",
        name: "Deepak Sharma",
        location: "Bhopal, Madhya Pradesh",
        avatar: "/placeholder.svg?height=80&width=80&text=DS",
        rating: 4,
        comment: "Sanchi Stupa's peaceful atmosphere and Buddhist heritage was deeply moving.",
        experience: "Sanchi Buddhist Heritage Tour",
        date: "December 2023",
      },
    ],

    odisha: [
      {
        id: "1",
        name: "Sunita Das",
        location: "Kolkata, West Bengal",
        avatar: "/placeholder.svg?height=80&width=80&text=SD",
        rating: 5,
        comment: "Jagannath Temple in Puri is divine! The spiritual energy and architecture are overwhelming.",
        experience: "Puri Jagannath Darshan",
        date: "July 2023",
      },
      {
        id: "2",
        name: "Mark Anderson",
        location: "Melbourne, Australia",
        avatar: "/placeholder.svg?height=80&width=80&text=MA",
        rating: 5,
        comment: "Konark Sun Temple at sunrise was magical! The stone chariot design is breathtaking.",
        experience: "Konark Sun Temple Tour",
        date: "February 2024",
      },
      {
        id: "3",
        name: "Pradeep Mohanty",
        location: "Bhubaneswar, Odisha",
        avatar: "/placeholder.svg?height=80&width=80&text=PM",
        rating: 4,
        comment: "Odissi dance performance at Mukteshwar Temple was mesmerizing—pure art in motion.",
        experience: "Classical Dance & Temple Tour",
        date: "January 2024",
      },
    ],

    jharkhand: [
      {
        id: "1",
        name: "Ravi Oraon",
        location: "Ranchi, Jharkhand",
        avatar: "/placeholder.svg?height=80&width=80&text=RO",
        rating: 5,
        comment: "Hundru Falls during monsoon was spectacular! The power and beauty of nature at its best.",
        experience: "Hundru Falls Adventure",
        date: "August 2023",
      },
      {
        id: "2",
        name: "Sophie Martin",
        location: "Paris, France",
        avatar: "/placeholder.svg?height=80&width=80&text=SM",
        rating: 5,
        comment: "Tribal village stay was authentic and eye-opening. Learned so much about indigenous culture.",
        experience: "Tribal Heritage Experience",
        date: "November 2023",
      },
      {
        id: "3",
        name: "Anil Kumar",
        location: "Jamshedpur, Jharkhand",
        avatar: "/placeholder.svg?height=80&width=80&text=AK",
        rating: 4,
        comment: "Betla National Park safari was amazing! Spotted elephants and various bird species.",
        experience: "Betla Wildlife Safari",
        date: "March 2024",
      },
    ],

    andhrapradesh: [
      {
        id: "1",
        name: "Lakshmi Reddy",
        location: "Hyderabad, Telangana",
        avatar: "/placeholder.svg?height=80&width=80&text=LR",
        rating: 5,
        comment: "Tirupati darshan was spiritually fulfilling! The temple's grandeur and devotion are unmatched.",
        experience: "Tirupati Temple Pilgrimage",
        date: "April 2024",
      },
      {
        id: "2",
        name: "James Wilson",
        location: "London, UK",
        avatar: "/placeholder.svg?height=80&width=80&text=JW",
        rating: 5,
        comment: "Amaravati Buddhist sites were fascinating! Rich history and peaceful meditation spots.",
        experience: "Buddhist Heritage Circuit",
        date: "February 2024",
      },
      {
        id: "3",
        name: "Venkat Rao",
        location: "Visakhapatnam, Andhra Pradesh",
        avatar: "/placeholder.svg?height=80&width=80&text=VR",
        rating: 4,
        comment: "Araku Valley's coffee plantations and tribal culture made for a perfect hill station experience.",
        experience: "Araku Valley Coffee Tour",
        date: "December 2023",
      },
    ],
  }

  const testimonials = testimonialsByState[selectedState.id] || testimonialsByState.chhattisgarh

  /* ----------  AUTO-PLAY ---------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)

  const t = testimonials[currentIndex]

  /* ----------  UI ---------- */
  return (
    <div className="relative max-w-4xl mx-auto">
      <Card>
        <CardContent className="p-6 sm:p-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar & Rating */}
            <div className="flex-shrink-0 text-center md:text-left">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto md:mx-0 mb-4">
                <Image src={t.avatar || "/placeholder.svg"} alt={t.name} fill className="rounded-full object-cover" />
              </div>
              <div className="flex justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < t.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
            </div>

            {/* Comment */}
            <div className="flex-1">
              <Quote className="h-8 w-8 text-primary mb-4 mx-auto md:mx-0" />
              <blockquote className="italic mb-4 leading-relaxed">"{t.comment}"</blockquote>
              <p className="font-semibold">{t.name}</p>
              <p className="text-muted-foreground text-sm">{t.location}</p>
              <p className="text-primary text-xs mt-1">{t.experience}</p>
              <p className="text-muted-foreground text-xs">{t.date}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Controls */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur"
        onClick={prev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur"
        onClick={next}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full ${idx === currentIndex ? "bg-primary" : "bg-muted-foreground/30"}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  )
}
