"use client"
import ThemeProvider from "@/contexts/theme-provider"
import { UserProvider } from "@/contexts/user-provider"

export default function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <UserProvider>{children}</UserProvider>
    </ThemeProvider>
  )
}
