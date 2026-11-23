import { useState } from "react";
import ProductCard from "./components/ProductCard";

const products = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    price: "79.99",
    category: "Electronics",
    description:
      "Experience crystal-clear audio with industry-leading noise cancellation. Up to 30 hours battery life, premium comfort, and USB-C fast charging.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Leather Running Sneakers",
    price: "54.99",
    category: "Footwear",
    description:
      "Lightweight and breathable leather sneakers built for performance. Responsive cushioning and durable outsole for everyday runs.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Minimalist Desk Lamp",
    price: "34.99",
    category: "Home",
    description:
      "Elegant touch-control desk lamp with 3 brightness levels and warm/cool modes. USB charging port built-in. Perfect for study or work.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Smart Watch Pro",
    price: "129.99",
    category: "Electronics",
    description:
      "Track fitness, heart rate, sleep, and notifications with this sleek smartwatch. Water-resistant up to 50m, 7-day battery life.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Ceramic Coffee Mug Set",
    price: "24.99",
    category: "Kitchen",
    description:
      "Set of 4 handcrafted ceramic mugs in earth tones. Microwave and dishwasher safe. Perfect gift for coffee and tea lovers.",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Portable Bluetooth Speaker",
    price: "49.99",
    category: "Electronics",
    description:
      "360° surround sound with deep bass. IPX7 waterproof, 20-hour playtime, and a compact design that fits in any bag.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    name: "Yoga Mat Premium",
    price: "39.99",
    category: "Fitness",
    description:
      "Eco-friendly non-slip yoga mat, 6mm thick for superior joint support. Includes carrying strap. Ideal for yoga, pilates, and stretching.",
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    name: "Stainless Steel Water Bottle",
    price: "19.99",
    category: "Kitchen",
    description:
      "Double-wall vacuum insulated bottle keeps drinks cold 24hr or hot 12hr. BPA-free, leak-proof lid, and sleek matte finish.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop",
  },
];

const categories = ["All", ...new Set(products.map((p) => p.category))];

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-indigo-700 text-white py-10 px-6 text-center shadow-lg">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">
          🛍️ Interactive Product Catalog
        </h1>
        <p className="text-indigo-200 text-sm">
          Browse our curated collection — click wishlist ♥ or add to cart!
        </p>

        {/* Search */}
        <div className="mt-6 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search products..."
            aria-label="Search products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 shadow"
          />
        </div>
      </header>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center py-6 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            aria-pressed={activeCategory === cat}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
              activeCategory === cat
                ? "bg-indigo-600 text-white border-indigo-600 shadow"
                : "bg-white text-gray-600 border-gray-300 hover:border-indigo-400 hover:text-indigo-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <main className="max-w-6xl mx-auto px-6 pb-16">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-xl font-semibold">No products found.</p>
            <p className="text-sm mt-1">Try a different search or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
                category={product.category}
              />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400 text-sm border-t bg-white">
        Built with ⚛️ React &amp; 🎨 Tailwind CSS — Interactive Product Catalog Assignment
      </footer>
    </div>
  );
}

export default App;
