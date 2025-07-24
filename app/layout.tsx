import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { StateProvider } from "@/contexts/state-context"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Indian Tourism - Discover Incredible India",
  description: "Explore the diverse beauty and rich culture of Indian states",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <StateProvider>{children}</StateProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
