import type React from "react"
import type { Metadata } from "next"
import { Montserrat, EB_Garamond, Figtree } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })
const ebGaramond = EB_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })
const figtree = Figtree({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
  title: "Fresh Entertainment - Where Vision Meets Experience",
  description: "Saudi Arabia's premier event innovation house",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Figtree:ital,wght@0,300..900;1,300..900&family=Jersey+15&display=swap" rel="stylesheet" />
      </head>
      <body className={`${montserrat.className} ${ebGaramond.className} ${figtree.className}`}>
        {children}
      </body>
    </html>
  )
}
