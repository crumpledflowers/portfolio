import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Twitter, Instagram, Send, Mail } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/crumpledflowers", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/r0se_r0sen", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/itzzuk0", label: "Instagram" },
    { icon: Send, href: "https://t.me/crumpledflowers", label: "Telegram" },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="terminal text-4xl md:text-5xl font-bold text-foreground">
              <span className="text-primary">$</span> contact.init()
            </h2>
            <p className="text-muted-foreground text-lg">Let's connect and build something together</p>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Terminal Prompt Header */}
              <div className="font-mono text-sm text-muted-foreground mb-6">
                <span className="text-terminal-green">visitor@portfolio</span>
                <span className="text-foreground">:</span>
                <span className="text-terminal-cyan">~/contact</span>
                <span className="text-foreground">$ send_message</span>
              </div>

              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="terminal text-sm text-primary">
                  name:
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-primary/30 focus:border-primary font-mono"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="terminal text-sm text-primary">
                  email:
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50 border-primary/30 focus:border-primary font-mono"
                  placeholder="john@example.com"
                  required
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label htmlFor="message" className="terminal text-sm text-primary">
                  message:
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 border-primary/30 focus:border-primary font-mono min-h-[150px]"
                  placeholder="Your message here..."
                  required
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="terminal" size="lg" className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </Button>

              {/* Response Time Note */}
              <p className="text-xs text-muted-foreground text-center font-mono">
                // Usually responds within 24-48 hours
              </p>
            </form>
          </Card>

          {/* Social Links */}
          <div className="text-center space-y-6 animate-fade-in">
            <p className="text-muted-foreground">Or connect with me on social media</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    asChild
                    className="hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
