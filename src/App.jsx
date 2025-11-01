import { useState } from "react";
import { ShoppingCart, Heart, Menu, X, Search, Star, Flame, Tag, TrendingUp, Mail, Phone, MapPin, Users, Award, Shield, Send } from "lucide-react";

// Sample product data with placeholder images
const allProducts = [
  { 
    id: 1, 
    name: "Wireless Headphones", 
    price: 6999, 
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop", 
    category: "Electronics", 
    rating: 4.5, 
    reviews: 128,
    description: "Premium noise-cancelling wireless headphones"
  },
  { 
    id: 2, 
    name: "Smart Watch", 
    price: 15999, 
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop", 
    category: "Electronics", 
    rating: 4.8, 
    reviews: 245,
    description: "Fitness tracking smartwatch with AMOLED display"
  },
  { 
    id: 3, 
    name: "Laptop Backpack", 
    price: 3999, 
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop", 
    category: "Accessories", 
    rating: 4.3, 
    reviews: 89,
    description: "Durable laptop backpack with USB charging port"
  },
  { 
    id: 4, 
    name: "Coffee Maker", 
    price: 6399, 
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop", 
    category: "Home", 
    rating: 4.6, 
    reviews: 167,
    description: "Programmable coffee maker with thermal carafe"
  },
  { 
    id: 5, 
    name: "Yoga Mat", 
    price: 2399, 
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop", 
    category: "Sports", 
    rating: 4.4, 
    reviews: 203,
    description: "Extra thick non-slip yoga mat"
  },
  { 
    id: 6, 
    name: "Bluetooth Speaker", 
    price: 4799, 
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop", 
    category: "Electronics", 
    rating: 4.7, 
    reviews: 312,
    description: "Portable waterproof Bluetooth speaker"
  },
  { 
    id: 7, 
    name: "Running Shoes", 
    price: 9599, 
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop", 
    category: "Sports", 
    rating: 4.6, 
    reviews: 421,
    description: "Lightweight running shoes with cushioned sole"
  },
  { 
    id: 8, 
    name: "Desk Lamp", 
    price: 3199, 
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop", 
    category: "Home", 
    rating: 4.5, 
    reviews: 156,
    description: "LED desk lamp with adjustable brightness"
  },
];

const dealProducts = [
  { ...allProducts[0], originalPrice: 10399, discount: 30 },
  { ...allProducts[1], originalPrice: 19999, discount: 20 },
  { ...allProducts[5], originalPrice: 7199, discount: 33 },
  { ...allProducts[6], originalPrice: 12799, discount: 25 },
];

// Header Component
const Header = ({ cartCount, wishlistCount, onNavChange, searchQuery, setSearchQuery }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-8">
            <button
              onClick={() => onNavChange("home")}
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              ShopHub
            </button>

            <nav className="hidden md:flex gap-1">
              {["Home", "Shop", "Deals", "About", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => onNavChange(item.toLowerCase())}
                  className="px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all duration-200 rounded-lg"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div className="hidden md:flex items-center bg-gray-50 hover:bg-gray-100 border border-gray-200 focus-within:border-purple-300 focus-within:ring-2 focus-within:ring-purple-100 rounded-lg px-4 py-2.5 w-1/3 transition-all duration-200">
            <Search size={18} className="text-gray-400 mr-2 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavChange("wishlist")}
              className="p-2.5 hover:bg-gray-100 rounded-lg relative transition-colors duration-200"
              aria-label="Wishlist"
            >
              <Heart size={22} className="text-gray-700" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={() => onNavChange("cart")}
              className="p-2.5 hover:bg-gray-100 rounded-lg relative transition-colors duration-200"
              aria-label="Cart"
            >
              <ShoppingCart size={22} className="text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            {["Home", "Shop", "Deals", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  onNavChange(item.toLowerCase());
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium rounded-lg transition-all duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

// Product Card Component
const ProductCard = ({ product, onAddToCart, onToggleWishlist, isInWishlist, showDiscount = false }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-purple-200 transition-all duration-300 group relative">
      {showDiscount && product.discount && (
        <div className="absolute top-3 left-3 z-10">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
            <Flame size={14} />
            {product.discount}% OFF
          </div>
        </div>
      )}
      
      <div className="relative bg-white overflow-hidden h-56">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <button
          onClick={() => onToggleWishlist(product.id)}
          className="absolute top-3 right-3 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
        >
          <Heart
            size={18}
            className={isInWishlist ? "fill-red-500 text-red-500" : "text-gray-600"}
          />
        </button>
      </div>
      
      <div className="p-5">
        <p className="text-xs text-purple-600 font-semibold mb-1 uppercase tracking-wide">{product.category}</p>
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1 text-lg">{product.name}</h3>
        
        <div className="flex items-center gap-1 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div>
            {showDiscount && product.originalPrice ? (
              <div className="flex flex-col">
                <span className="text-sm text-gray-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">₹{product.price.toLocaleString('en-IN')}</span>
              </div>
            ) : (
              <span className="text-2xl font-bold text-gray-900">₹{product.price.toLocaleString('en-IN')}</span>
            )}
          </div>
          
          <button
            onClick={() => onAddToCart(product)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg"
          >
            <ShoppingCart size={16} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

// Home Page
const HomePage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">ShopHub</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">Discover amazing products at unbeatable prices. Shop smart, save more!</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onNavigate("shop")}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
            >
              Shop Now
            </button>
            <button
              onClick={() => onNavigate("deals")}
              className="bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-10 py-4 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg text-lg"
            >
              View Deals
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center hover:shadow-xl hover:border-purple-200 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="text-purple-600" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Trending Products</h3>
            <p className="text-gray-600 text-lg">Discover what's hot right now in the market</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center hover:shadow-xl hover:border-red-200 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-red-100 to-orange-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Flame className="text-red-600" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Hot Deals</h3>
            <p className="text-gray-600 text-lg">Save big on limited time exclusive offers</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center hover:shadow-xl hover:border-pink-200 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Tag className="text-pink-600" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Best Prices</h3>
            <p className="text-gray-600 text-lg">Quality products at unbeatable prices</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Shop Page
const ShopPage = ({ onAddToCart, onToggleWishlist, wishlist, searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Electronics", "Accessories", "Home", "Sports"];

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Shop All Products</h1>
          <p className="text-xl text-gray-600">Browse our complete collection of premium products</p>
        </div>

        <div className="flex gap-3 mb-10 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200 hover:border-purple-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              isInWishlist={wishlist.includes(product.id)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <Search size={64} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 text-xl">No products found</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Deals Page
const DealsPage = ({ onAddToCart, onToggleWishlist, wishlist }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold mb-6 shadow-lg text-lg">
            <Flame size={24} />
            HOT DEALS
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Limited Time Offers</h1>
          <p className="text-xl text-gray-600">Grab these amazing deals before they're gone forever!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dealProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              isInWishlist={wishlist.includes(product.id)}
              showDiscount={true}
            />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">Want More Exclusive Deals?</h2>
          <p className="text-xl mb-8 opacity-90">Subscribe to our newsletter and never miss a sale!</p>
          <div className="flex gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 outline-none text-lg"
            />
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2">
              <Send size={20} />
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// About Page
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">ShopHub</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted destination for quality products, exceptional service, and unbeatable prices since 2020.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-12 mb-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            At ShopHub, we're committed to providing our customers with the best shopping experience possible. 
            We carefully curate our product selection to ensure quality, affordability, and variety. Our mission 
            is to make online shopping simple, secure, and enjoyable for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl text-center border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="text-purple-600" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Customer First</h3>
            <p className="text-gray-600 text-lg">
              Your satisfaction is our top priority. We go above and beyond to ensure you have an amazing experience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl text-center border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="text-pink-600" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Quality Products</h3>
            <p className="text-gray-600 text-lg">
              We partner with trusted brands and suppliers to bring you only the best quality products.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl text-center border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="text-blue-600" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Secure Shopping</h3>
            <p className="text-gray-600 text-lg">
              Your privacy and security matter. We use advanced encryption to protect your information.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-lg opacity-90">Happy Customers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Products</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.8</div>
              <div className="text-lg opacity-90">Average Rating</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Page
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question or need assistance? We're here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-lg">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-lg"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-lg">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-lg"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-lg">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-lg"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-lg">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none text-lg"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl text-lg flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-purple-600" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600 text-lg mb-2">We'll respond within 24 hours</p>
                  <a href="mailto:support@shophub.com" className="text-purple-600 hover:text-purple-700 font-semibold text-lg">
                    support@shophub.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-pink-100 to-pink-200 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-pink-600" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600 text-lg mb-2">Mon-Fri from 9am to 6pm</p>
                  <a href="tel:+911234567890" className="text-purple-600 hover:text-purple-700 font-semibold text-lg">
                    +91 123 456 7890
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-blue-600" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Visit Us</h3>
                  <p className="text-gray-600 text-lg mb-2">Come say hello at our office</p>
                  <address className="text-gray-700 not-italic text-lg">
                    123 Shopping Street<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </address>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl shadow-xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
              <div className="space-y-3 text-lg">
                <div className="flex justify-between">
                  <span className="opacity-90">Monday - Friday:</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-90">Saturday:</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-90">Sunday:</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Cart Page
const CartPage = ({ cart, onUpdateQuantity, onRemove }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-10">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 shadow-lg">
            <ShoppingCart size={80} className="mx-auto text-gray-300 mb-6" />
            <p className="text-gray-500 text-2xl font-medium mb-2">Your cart is empty</p>
            <p className="text-gray-400 text-lg">Add some products to get started!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {cart.map(item => (
              <div key={item.id} className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col sm:flex-row items-center gap-6 hover:shadow-lg transition-all duration-300">
                <div className="bg-white rounded-xl overflow-hidden w-32 h-32 flex-shrink-0 border border-gray-200">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-bold text-gray-900 mb-2 text-xl">{item.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{item.category}</p>
                  <p className="text-purple-600 font-bold text-2xl">₹{item.price.toLocaleString('en-IN')}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3 bg-gray-100 rounded-xl p-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="w-10 h-10 rounded-lg bg-white hover:bg-gray-200 font-bold text-xl shadow-sm transition-colors"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-bold text-lg">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="w-10 h-10 rounded-lg bg-white hover:bg-gray-200 font-bold text-xl shadow-sm transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-red-500 hover:text-red-700 font-semibold px-4 py-2 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 mt-8 text-white shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-semibold">Subtotal:</span>
                <span className="text-4xl font-bold">₹{total.toLocaleString('en-IN')}</span>
              </div>
              <button className="w-full bg-white text-purple-600 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Wishlist Page
const WishlistPage = ({ wishlist, products, onAddToCart, onToggleWishlist }) => {
  const wishlistProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-pink-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-10">My Wishlist</h1>

        {wishlistProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 shadow-lg">
            <Heart size={80} className="mx-auto text-gray-300 mb-6" />
            <p className="text-gray-500 text-2xl font-medium mb-2">Your wishlist is empty</p>
            <p className="text-gray-400 text-lg">Start adding products you love!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlistProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                isInWishlist={true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Main App
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      setCart(cart.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const handleToggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(item => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        onNavChange={setCurrentPage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {currentPage === "home" && <HomePage onNavigate={setCurrentPage} />}
      {currentPage === "shop" && (
        <ShopPage
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlist={wishlist}
          searchQuery={searchQuery}
        />
      )}
      {currentPage === "deals" && (
        <DealsPage
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlist={wishlist}
        />
      )}
      {currentPage === "cart" && (
        <CartPage
          cart={cart}
          onUpdateQuantity={handleUpdateQuantity}
          onRemove={(id) => handleUpdateQuantity(id, 0)}
        />
      )}
      {currentPage === "wishlist" && (
        <WishlistPage
          wishlist={wishlist}
          products={allProducts}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
        />
      )}
      {currentPage === "about" && <AboutPage />}
      {currentPage === "contact" && <ContactPage />}
    </div>
  );
}