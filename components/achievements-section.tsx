import { Award, Trophy, Star, GraduationCap, Quote } from "lucide-react"

const achievements = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Pursuing B.Tech in Computer Science Engineering at Charusat University with strong academic performance.",
    year: "2025 - Present",
  },
  {
    icon: Trophy,
    title: "Project Completion",
    description: "Successfully completed Arduino Track & Trace system project with hardware integration.",
    year: "2024",
  },
  {
    icon: Star,
    title: "Multilingual Skills",
    description: "Fluent in English, Hindi, and Gujarati enabling effective communication across diverse teams.",
    year: "Skills",
  },
]

const testimonial = {
  quote: "A dedicated and enthusiastic learner who consistently shows initiative in understanding complex concepts. Shows great potential in the field of computer science.",
  author: "Faculty Advisor",
  role: "Charusat University",
}

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 px-6 lg:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-premium uppercase text-muted-foreground mb-4">
            Milestones & Recognition
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium text-foreground">
            Achievements &<br /><span className="italic">Journey</span>
          </h2>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="group p-8 rounded-3xl bg-background border border-border card-shadow hover-lift"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <achievement.icon className="w-6 h-6" />
                </div>
                <span className="text-sm text-muted-foreground font-medium px-3 py-1 rounded-full bg-muted">
                  {achievement.year}
                </span>
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                {achievement.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
            <Quote className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="bg-background rounded-3xl p-10 lg:p-12 border border-border card-shadow">
            <blockquote className="font-serif text-xl lg:text-2xl text-foreground leading-relaxed mb-8 italic">
              "{testimonial.quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                <Award className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <p className="font-medium text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
