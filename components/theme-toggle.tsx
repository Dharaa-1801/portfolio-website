"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="relative overflow-hidden">
        <Sun className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={resolvedTheme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      aria-pressed={resolvedTheme === "dark"}
      className="relative overflow-hidden"
    >
      <Sun 
        className={`h-5 w-5 transition-all duration-300 ${
          resolvedTheme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
        }`} 
      />
      <Moon 
        className={`absolute h-5 w-5 transition-all duration-300 ${
          resolvedTheme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        }`} 
      />
    </Button>
  )
}
