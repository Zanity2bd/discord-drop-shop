import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Download } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-glow-pulse">
            <Zap className="w-4 h-4 mr-2" />
            Instant Discord Delivery
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Digital Products
            </span>
            <br />
            <span className="text-foreground">Delivered Instantly</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Premium gaming items, software tools, and digital assets delivered directly to your Discord DMs within seconds of purchase.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Browse Products
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              How It Works
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-success" />
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Zap className="w-5 h-5 text-primary" />
              <span>Instant Delivery</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Download className="w-5 h-5 text-accent" />
              <span>Digital Products</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Orbs Animation */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-40 right-20 w-16 h-16 bg-premium/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};