import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hey, I'm crumpledflowers";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Terminal Icon */}
          <div className="flex justify-center mb-6">
            <Terminal className="w-16 h-16 text-primary animate-glow" />
          </div>

          {/* Typing animation heading */}
          <h1 className="terminal text-5xl md:text-7xl font-bold text-foreground">
            {displayText}
            <span className="animate-blink text-primary">▋</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground">
            Cybersecurity Enthusiast | Developer | Music Producer
          </p>

          {/* Terminal prompt */}
          <div className="inline-block bg-card border border-border rounded-lg px-6 py-3 font-mono text-sm text-muted-foreground">
            <span className="text-terminal-green">visitor@portfolio</span>
            <span className="text-foreground">:</span>
            <span className="text-terminal-cyan">~</span>
            <span className="text-foreground">$</span>
            <span className="ml-2 animate-blink">▋</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              variant="terminal"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="text-base"
            >
              Get in Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="text-base"
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
