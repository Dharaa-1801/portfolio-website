import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 lg:px-12 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="#home" className="font-serif text-2xl font-semibold text-foreground">
              Dhara
            </Link>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed max-w-xs">
              B.Tech CSE Student passionate about building innovative solutions 
              and continuous learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Connect</h4>
            <div className="flex gap-3">
              <Link
                href="https://github.com/25cs093Dhara"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/dhara-sarvaiya-63a72a376"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link
                href="mailto:25cs093@charusat.edu.in"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {currentYear} Dhara Sarvaiya. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary fill-primary" /> in India
          </p>
        </div>
      </div>
    </footer>
  )
}
