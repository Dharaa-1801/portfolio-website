import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-4">
              B.Tech CSE Student
            </p>
            
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-foreground mb-6 leading-tight">
              Dhara
              <br />
              <span className="italic">Sarvaiya</span>
            </h1>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg text-pretty">
              A dedicated Computer Science Engineering student with a strong interest 
              in learning and applying core computing concepts. Passionate about 
              building innovative solutions and continuous skill development.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Button asChild size="lg" className="rounded-full px-8">
                <a href="#contact">Work With Me</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            <div className="flex items-center gap-5">
              <Link
                href="https://github.com/25cs093Dhara"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:bg-card hover:border-foreground/20 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/dhara-sarvaiya-63a72a376"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:bg-card hover:border-foreground/20 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:25cs093@charusat.edu.in"
                className="p-3 rounded-full border border-border hover:bg-card hover:border-foreground/20 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-card border-4 border-border overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-muted to-card flex items-center justify-center">
                  <span className="font-serif text-8xl sm:text-9xl text-muted-foreground/30 font-medium">DS</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-xs font-medium text-center leading-tight px-2">
                  Available<br />for Work
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex justify-center mt-16">
          <Link href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  )
}
