"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import StateSelector from "@/components/state-selector"
import { useStateContext } from "@/contexts/state-context"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { selectedState } = useStateContext()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/destination", label: "Destinations" },
    { href: "/experience", label: "Experiences" },
    { href: "/culture", label: "Culture" },
    { href: "/plan", label: "Plan Your Trip" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32&text=Logo"
              alt={`${selectedState.name} Tourism Logo`}
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="text-lg font-bold hidden sm:inline">{selectedState.displayName}</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium hover:underline underline-offset-4">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <StateSelector />

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium hover:underline underline-offset-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
