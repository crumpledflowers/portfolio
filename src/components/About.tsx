import { Card } from "@/components/ui/card";
import { Code2, Shield, Music } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Cybersecurity", percentage: 85, color: "bg-terminal-cyan" },
    { name: "Programming", percentage: 90, color: "bg-terminal-green" },
    { name: "Music Production", percentage: 75, color: "bg-terminal-purple" },
  ];

  const journey = [
    { year: "2020", event: "Started coding journey" },
    { year: "2021", event: "First CTF competition" },
    { year: "2022", event: "Began music production" },
    { year: "2023", event: "Professional cybersecurity work" },
  ];

  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="terminal text-4xl md:text-5xl font-bold text-foreground">
              <span className="text-primary">$</span> whoami
            </h2>
            <p className="text-muted-foreground text-lg">Get to know me better</p>
          </div>

          {/* Overview */}
          <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 animate-fade-in">
            <h3 className="terminal text-2xl font-semibold mb-4 text-primary">Overview</h3>
            <p className="text-foreground/90 leading-relaxed">
              I'm a passionate cybersecurity enthusiast with a strong foundation in programming and a creative side in music production. 
              My journey combines technical expertise with creative expression, allowing me to approach problems from unique angles. 
              I love participating in CTF competitions, building secure applications, and creating music in my free time.
            </p>
          </Card>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-300">
              <Shield className="w-12 h-12 text-terminal-cyan mb-4" />
              <h4 className="terminal text-xl font-semibold mb-2 text-foreground">Cybersecurity</h4>
              <p className="text-muted-foreground text-sm">
                Penetration testing, vulnerability assessment, network security, and CTF competitions.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-300">
              <Code2 className="w-12 h-12 text-terminal-green mb-4" />
              <h4 className="terminal text-xl font-semibold mb-2 text-foreground">Programming</h4>
              <p className="text-muted-foreground text-sm">
                Full-stack development, automation scripts, and building secure applications.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-300">
              <Music className="w-12 h-12 text-terminal-purple mb-4" />
              <h4 className="terminal text-xl font-semibold mb-2 text-foreground">Music Production</h4>
              <p className="text-muted-foreground text-sm">
                Electronic music production, sound design, and creative audio engineering.
              </p>
            </Card>
          </div>

          {/* Skills Bars */}
          <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 animate-fade-in">
            <h3 className="terminal text-2xl font-semibold mb-6 text-primary">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-primary font-mono">{skill.percentage}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Journey Timeline */}
          <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 animate-fade-in">
            <h3 className="terminal text-2xl font-semibold mb-6 text-primary">Journey</h3>
            <div className="space-y-4">
              {journey.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-20 shrink-0 terminal text-primary font-semibold">{item.year}</div>
                  <div className="flex-1 flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-primary shrink-0" />
                    <div className="h-px bg-border flex-1" />
                    <span className="text-foreground">{item.event}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
