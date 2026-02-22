import "./globals.css"
import { ReactNode } from "react"

export const metadata = {
  title: "XT4 Store",
  description: "Ecommerce sofisticado con estética neon",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body className="min-h-screen bg-background antialiased">
        {children}
      </body>
    </html>
  )
}