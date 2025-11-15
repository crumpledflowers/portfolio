import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "CTF Challenge Platform",
      description: "A web-based platform for hosting and solving Capture The Flag challenges with real-time scoring.",
      tags: ["React", "Node.js", "MongoDB", "Docker"],
      github: "#",
      live: "#",
      status: "Ongoing",
    },
    {
      title: "Network Scanner Tool",
      description: "Advanced network scanning tool with vulnerability detection and automated reporting features.",
      tags: ["Python", "Nmap", "Scapy"],
      github: "#",
      status: "Completed",
    },
    {
      title: "Music Visualizer",
      description: "Real-time audio visualizer with customizable effects and recording capabilities.",
      tags: ["JavaScript", "Web Audio API", "Canvas"],
      github: "#",
      live: "#",
      status: "Ongoing",
    },
    {
      title: "Secure Chat Application",
      description: "End-to-end encrypted chat application with self-destructing messages.",
      tags: ["TypeScript", "WebRTC", "Cryptography"],
      github: "#",
      status: "Contribution",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="terminal text-4xl md:text-5xl font-bold text-foreground">
              <span className="text-primary">$</span> ls projects/
            </h2>
            <p className="text-muted-foreground text-lg">Things I've built and contributed to</p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  {/* Project Header */}
                  <div className="flex items-start justify-between">
                    <h3 className="terminal text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <Badge
                      variant="secondary"
                      className="bg-secondary/50 text-primary border border-primary/30"
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2">
                    {project.github && (
                      <Button variant="terminal" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.live && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
