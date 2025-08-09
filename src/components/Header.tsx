import { useState } from "react";
import { ShoppingCart, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItemCount = 0; // Will be connected to cart state later

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">D</span>
          </div>
          <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
            Discord Drop Shop
          </span>
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search for digital products..."
              className="pl-10 bg-background/50 border-border"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Products
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Categories
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Support
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          {/* Cart Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            onClick={() => console.log('Cart clicked')}
          >
            <ShoppingCart className="w-5 h-5" />
            {cartItemCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs"
              >
                {cartItemCount}
              </Badge>
            )}
          </Button>

          {/* User Account */}
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => console.log('User account clicked')}
          >
            <User className="w-5 h-5" />
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Search & Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search products..."
                className="pl-10 bg-background/50 border-border"
              />
            </div>

            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-2">
              <a href="#" className="px-3 py-2 text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-colors">
                Products
              </a>
              <a href="#" className="px-3 py-2 text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-colors">
                Categories
              </a>
              <a href="#" className="px-3 py-2 text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-colors">
                Support
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};