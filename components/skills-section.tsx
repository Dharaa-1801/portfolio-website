import { 
  Brain, 
  Lightbulb, 
  Cpu, 
  Wrench, 
  Users, 
  BookOpen 
} from "lucide-react"

const skills = [
  {
    icon: Brain,
    title: "CS Fundamentals",
    description: "Strong understanding of data structures, algorithms, and programming paradigms.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Analytical thinking to tackle complex technical challenges effectively.",
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    description: "Knowledge of microcontrollers and hardware-software integration.",
  },
  {
    icon: Wrench,
    title: "Hardware Interfacing",
    description: "Experience with sensor integration and Arduino programming.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Effective communication and teamwork for project development.",
  },
  {
    icon: BookOpen,
    title: "Quick Learner",
    description: "Ability to adapt and learn new technologies efficiently.",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-premium uppercase text-muted-foreground mb-4">
            Skills & Expertise
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium text-foreground mb-4">
            Why <span className="italic">Work</span><br />With Me
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A combination of technical expertise and soft skills that I bring to every project
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.title} 
              className="group p-8 rounded-3xl bg-card border border-border card-shadow hover-lift"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <skill.icon className="w-6 h-6" />
                </div>
                <span className="text-4xl font-serif text-muted-foreground/30">0{index + 1}</span>
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">{skill.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
