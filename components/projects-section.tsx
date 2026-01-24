import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowUpRight, Cpu } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Track and Trace System",
    subtitle: "Arduino Uno Project",
    description:
      "Designed and implemented a basic track and trace system to monitor movement using sensor-based inputs. Worked on hardware integration, control logic, and testing to ensure accurate and reliable tracking.",
    technologies: ["Arduino Uno", "Embedded C", "Sensors", "Hardware Integration"],
    highlights: [
      "Hardware integration with multiple sensors",
      "Control logic implementation",
      "Testing and calibration for accuracy",
      "Real-time movement tracking",
    ],
    github: "https://github.com/25cs093Dhara",
    featured: true,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-foreground mb-4">
              Recent<br /><span className="italic">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-md">
              Hands-on projects that demonstrate my technical skills and practical experience
            </p>
          </div>
          <Link
            href="https://github.com/25cs093Dhara"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors group"
          >
            <span className="text-sm font-medium">View All Projects</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Featured Project */}
        {projects.filter(p => p.featured).map((project) => (
          <div key={project.title} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            {/* Project Preview */}
            <div className="aspect-[4/3] rounded-3xl bg-background border border-border overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Cpu className="w-10 h-10 text-primary" />
                </div>
                <p className="font-serif text-xl text-muted-foreground">{project.subtitle}</p>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <Badge className="mb-4 rounded-full">Featured Project</Badge>
              <h3 className="font-serif text-3xl font-medium text-foreground mb-4">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-4 py-2 rounded-full bg-background border border-border text-sm text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mb-8">
                <h4 className="font-medium text-foreground mb-4">Key Highlights</h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-sm text-muted-foreground flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <Button asChild variant="outline" className="rounded-full px-6 bg-transparent">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </Link>
              </Button>
            </div>
          </div>
        ))}

        {/* Coming Soon */}
        <div className="text-center p-12 rounded-3xl bg-background border border-dashed border-border">
          <p className="text-muted-foreground mb-2">More projects coming soon!</p>
          <p className="text-sm text-muted-foreground/70">Stay tuned as I continue my learning journey</p>
        </div>
      </div>
    </section>
  )
}
