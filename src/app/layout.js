import { Zeyada } from "next/font/google"
import "./globals.css"
import Providers from "./providers"
import { cn } from "@/lib/utils"
const zeyada = Zeyada({
  subsets: ["latin"],
  variable: "--font-signature",
  weight: "400",
})

export const metadata = {
  title: "TVA ID Generator",
  description: "Generate your TVA ID Free",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(zeyada.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
