"use client"
import { ModalProvider } from "@/contexts/modal-context"
import ThemeProvider from "@/contexts/theme-context"
import { UserProvider } from "@/contexts/user-context"

export default function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <UserProvider>
        <ModalProvider>{children}</ModalProvider>
      </UserProvider>
    </ThemeProvider>
  )
}
