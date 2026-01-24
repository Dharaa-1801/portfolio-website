import { MapPin, GraduationCap, Target, Sparkles } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Title and Image */}
          <div>
            <p className="text-sm font-medium tracking-premium uppercase text-muted-foreground mb-4">
              Get To Know Me
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-foreground mb-8">
              About<br /><span className="italic">Me</span>
            </h2>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-muted overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <Sparkles className="w-16 h-16 text-muted-foreground/30" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background rounded-2xl p-6 border border-border card-shadow">
                <p className="font-serif text-3xl font-medium text-foreground">2+</p>
                <p className="text-sm text-muted-foreground">Years of<br />Learning</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:pt-16">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              I am a Bachelor of Technology student in Computer Science Engineering at Charusat University. 
              With a strong interest in learning and applying core computing concepts, I am constantly 
              seeking opportunities to expand my knowledge and skills.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              My academic journey has provided me with a solid foundation in computer science fundamentals, 
              problem-solving, and hands-on project work. I believe in continuous learning and am always 
              ready to take on new challenges that help me grow both personally and professionally.
            </p>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-5 p-5 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">Navsari, Gujarat, India</p>
                </div>
              </div>

              <div className="flex items-center gap-5 p-5 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Education</p>
                  <p className="font-medium text-foreground">B.Tech in Computer Science Engineering</p>
                </div>
              </div>

              <div className="flex items-center gap-5 p-5 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Goal</p>
                  <p className="font-medium text-foreground">Aspiring Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
