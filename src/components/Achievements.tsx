import { Card } from "@/components/ui/card";
import { Trophy, Target, Zap, Award } from "lucide-react";

const Achievements = () => {
  const platforms = [
    {
      name: "HackTheBox",
      icon: Target,
      stats: [
        { label: "Rank", value: "Pro Hacker" },
        { label: "Points", value: "1,250" },
        { label: "Boxes Owned", value: "45" },
      ],
      color: "text-terminal-green",
    },
    {
      name: "TryHackMe",
      icon: Zap,
      stats: [
        { label: "Rank", value: "#1,234" },
        { label: "Rooms", value: "89" },
        { label: "Streak", value: "30 days" },
      ],
      color: "text-terminal-cyan",
    },
    {
      name: "CTF Time",
      icon: Trophy,
      stats: [
        { label: "Team Rank", value: "Top 500" },
        { label: "Events", value: "23" },
        { label: "Points", value: "3,450" },
      ],
      color: "text-terminal-purple",
    },
    {
      name: "Vulnhub",
      icon: Award,
      stats: [
        { label: "VMs Solved", value: "34" },
        { label: "Write-ups", value: "12" },
        { label: "Rating", value: "4.8/5" },
      ],
      color: "text-primary",
    },
  ];

  return (
    <section id="achievements" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="terminal text-4xl md:text-5xl font-bold text-foreground">
              <span className="text-primary">$</span> achievements.sh
            </h2>
            <p className="text-muted-foreground text-lg">Community stats & achievements</p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Platform Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className={`w-8 h-8 ${platform.color}`} />
                    <h3 className="terminal text-2xl font-semibold text-foreground">{platform.name}</h3>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {platform.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="terminal text-2xl font-bold text-primary mb-1">{stat.value}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
