import { ArrowRight, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function NewsletterSignup() {
  return (
    <Card className="border-none shadow-none">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Stay Updated</CardTitle>
        <CardDescription className="text-lg max-w-2xl mx-auto">
          Subscribe to our newsletter for travel inspiration, special offers, and updates on new destinations and
          experiences in Chhattisgarh.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input type="email" placeholder="Enter your email" className="pl-9" />
          </div>
          <Button type="submit" className="gap-2">
            Subscribe <ArrowRight className="h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
