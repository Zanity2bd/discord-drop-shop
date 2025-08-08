import { ProductCard } from "./ProductCard";
import productGaming from "@/assets/product-gaming.jpg";
import productSoftware from "@/assets/product-software.jpg";
import productDesign from "@/assets/product-design.jpg";

// Mock product data - will be replaced with real data later
const mockProducts = [
  {
    id: "1",
    title: "Epic Gaming Bundle",
    description: "Complete collection of rare weapons, armor sets, and exclusive skins for popular games.",
    price: 29.99,
    originalPrice: 49.99,
    image: productGaming,
    category: "Gaming",
    rating: 4.8,
    reviews: 324,
    isPremium: true,
    isNew: false,
  },
  {
    id: "2",
    title: "Developer Tools Suite",
    description: "Professional software development tools, licenses, and premium IDE extensions.",
    price: 89.99,
    originalPrice: 149.99,
    image: productSoftware,
    category: "Software",
    rating: 4.9,
    reviews: 156,
    isPremium: true,
    isNew: true,
  },
  {
    id: "3",
    title: "Digital Art Pack",
    description: "High-quality design assets, brushes, templates, and creative resources for artists.",
    price: 19.99,
    image: productDesign,
    category: "Design",
    rating: 4.7,
    reviews: 89,
    isPremium: false,
    isNew: true,
  },
  {
    id: "4",
    title: "Game Booster Collection",
    description: "Power-ups, experience multipliers, and rare collectibles for multiple game titles.",
    price: 15.99,
    originalPrice: 24.99,
    image: productGaming,
    category: "Gaming",
    rating: 4.6,
    reviews: 203,
    isPremium: false,
    isNew: false,
  },
  {
    id: "5",
    title: "Premium Code Library",
    description: "Ready-to-use code snippets, frameworks, and development resources for modern apps.",
    price: 59.99,
    image: productSoftware,
    category: "Software",
    rating: 4.8,
    reviews: 92,
    isPremium: true,
    isNew: false,
  },
  {
    id: "6",
    title: "Creative Assets Bundle",
    description: "Fonts, icons, illustrations, and graphic elements for professional design projects.",
    price: 39.99,
    originalPrice: 59.99,
    image: productDesign,
    category: "Design",
    rating: 4.9,
    reviews: 167,
    isPremium: false,
    isNew: false,
  },
];

export const ProductGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-foreground">Featured </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium digital products, delivered instantly to your Discord.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors font-medium">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
};