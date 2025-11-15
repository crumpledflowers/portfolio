import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cybersecurity",
      skills: ["Penetration Testing", "Network Security", "Web Security", "CTF", "OSINT", "Cryptography"],
    },
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "TypeScript", "React", "Node.js", "Bash", "SQL", "Git"],
    },
    {
      title: "Tools & Frameworks",
      skills: ["Burp Suite", "Metasploit", "Wireshark", "Nmap", "Docker", "Linux", "AWS"],
    },
    {
      title: "Music Production",
      skills: ["FL Studio", "Ableton Live", "Sound Design", "Mixing", "Mastering", "Synthesis"],
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="terminal text-4xl md:text-5xl font-bold text-foreground">
              <span className="text-primary">$</span> skills --list
            </h2>
            <p className="text-muted-foreground text-lg">Technologies & tools I work with</p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="terminal text-xl font-semibold mb-4 text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default border border-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
