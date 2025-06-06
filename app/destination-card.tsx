import Image from "next/image"
import Link from "next/link"
import { MapPin, Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface DestinationCardProps {
  title: string
  description: string
  image: string
  location: string
  rating: number
  category: string
}

export default function DestinationCard({
  title,
  description,
  image,
  location,
  rating,
  category,
}: DestinationCardProps) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative h-60 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute top-3 right-3 z-10">{category}</Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{description}</p>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          {location}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="flex items-center">
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
          <span className="font-medium">{rating}</span>
          <span className="text-muted-foreground text-sm ml-1">({Math.floor(Math.random() * 200) + 50} reviews)</span>
        </div>
        <Link href="#" className="text-sm font-medium text-primary hover:underline">
          View Details
        </Link>
      </CardFooter>
    </Card>
  )
}
