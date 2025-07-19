import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface DestinationTypeCardProps {
  title: string
  description: string
  image: string
  icon: string
  count: string
  href: string
}

export default function DestinationTypeCard({
  title,
  description,
  image,
  icon,
  count,
  href,
}: DestinationTypeCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden p-0">
  <div className="relative h-40 sm:h-48">
    <Image
      src={image || "/placeholder.svg"}
      alt={title}
      fill
      className="object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 text-xl sm:text-2xl bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
      {icon}
    </div>
    <Badge className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-black/70 text-white text-xs">
      {count}
    </Badge>
  </div>

      <CardContent className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">{description}</p>
      </CardContent>
      <CardFooter className="p-4 sm:p-6 pt-0">
        <Link href="/plan" className="w-full">
          <Button className="w-full gap-2 group-hover:bg-primary/90 transition-colors text-sm sm:text-base">
            Plan Your Trip <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
