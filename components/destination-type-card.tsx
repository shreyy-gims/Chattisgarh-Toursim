import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface DestinationTypeCardProps {
  title: string
  description: string
  image: string
  icon: React.ReactNode
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
    <Link href={href}>
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-3 left-3 text-white text-2xl sm:text-3xl">
            {icon}
          </div>
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <h3 className="text-lg sm:text-xl font-bold mb-1">{title}</h3>
            <p className="text-xs sm:text-sm text-white/80 mb-2">{description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-medium">{count}</span>
              <Button
                size="sm"
                variant="secondary"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}
