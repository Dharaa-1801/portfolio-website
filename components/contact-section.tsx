"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Send, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "25cs093@charusat.edu.in",
    href: "mailto:25cs093@charusat.edu.in",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8128906866",
    href: "tel:+918128906866",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Navsari, Gujarat",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/25cs093Dhara",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dhara-sarvaiya-63a72a376",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-foreground mb-6">
              Work<br /><span className="italic">With Me</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
              Feel free to reach out for collaborations, opportunities, or just to say hello! 
              I am always open to discussing new projects.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Follow me</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-5 py-3 rounded-full border border-border hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{social.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-card rounded-3xl p-8 lg:p-10 border border-border">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-foreground mb-3">
                  Thank you!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Your message has been sent. I will get back to you soon.
                </p>
                <Button
                  variant="outline"
                  className="rounded-full px-6 bg-transparent"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="rounded-xl h-12 bg-background border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="rounded-xl h-12 bg-background border-border"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="How can I help you?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="rounded-xl h-12 bg-background border-border"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or inquiry..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="rounded-xl bg-background border-border resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full rounded-full h-12 text-base" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
