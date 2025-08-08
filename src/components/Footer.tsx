import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Twitter, 
  Github, 
  MessageCircle, 
  Mail,
  Shield,
  CreditCard,
  Headphones
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">D</span>
              </div>
              <span className="font-bold text-lg bg-gradient-primary bg-clip-text text-transparent">
                Discord Drop Shop
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              The premier marketplace for digital products with instant Discord delivery. 
              Secure, fast, and reliable.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <MessageCircle className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Browse Products
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Categories
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                How It Works
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                FAQ
              </a>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center">
                <Headphones className="w-4 h-4 mr-2" />
                Help Center
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Contact Us
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Get notified about new products and exclusive deals.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Your email" 
                className="flex-1 bg-background/50"
              />
              <Button variant="default" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-muted-foreground text-sm">
            © 2024 Discord Drop Shop. All rights reserved.
          </div>

          {/* Trust Badges */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <Shield className="w-4 h-4 text-success" />
              <span>Secure</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <CreditCard className="w-4 h-4 text-primary" />
              <span>Stripe Protected</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <MessageCircle className="w-4 h-4 text-accent" />
              <span>Discord Verified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};