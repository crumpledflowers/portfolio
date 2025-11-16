const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="text-muted-foreground text-sm font-mono">
            © {new Date().getFullYear()} Crumpledflowers. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Built with love <span className="text-primary">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
