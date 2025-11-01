import { useState } from "react";
import { ShoppingCart, Heart, Search, Menu, X, Trash2, Plus, Minus, Star, Phone, Mail, MapPin, TrendingUp, Award, Truck, Shield } from "lucide-react";

// Sample products data
const products = [
  { id: 1, name: "Premium Wireless Headphones", price: 24999, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop", category: "Electronics", rating: 4.5, discount: 15 },
  { id: 2, name: "Smart Watch Pro", price: 32999, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop", category: "Electronics", rating: 4.8, discount: 20 },
  { id: 3, name: "Leather Messenger Bag", price: 12499, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop", category: "Fashion", rating: 4.3, discount: 10 },
  { id: 4, name: "Minimalist Desk Lamp", price: 6499, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop", category: "Home", rating: 4.6, discount: 0 },
  { id: 5, name: "Portable Bluetooth Speaker", price: 7499, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop", category: "Electronics", rating: 4.4, discount: 25 },
  { id: 6, name: "Designer Sunglasses", price: 16499, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop", category: "Fashion", rating: 4.7, discount: 30 },
];

const TopBar = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>support@luxeshop.in</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="animate-pulse">🎉 Sale: Up to 50% OFF!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = ({ cartCount, wishlistCount, onNavChange, searchQuery, setSearchQuery }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <TopBar />
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => onNavChange("home")}>
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-br from-orange-500 to-pink-500 p-2 rounded-lg">
                  <ShoppingCart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">LuxeShop</h1>
                  <p className="text-xs text-gray-500">Shop Smart, Save More</p>
                </div>
              </div>
            </div>

            <nav className="hidden md:flex space-x-1">
              {[
                { name: "Home", icon: "🏠" },
                { name: "Shop", icon: "🛍️" },
                { name: "Deals", icon: "🔥" },
                { name: "About", icon: "ℹ️" },
                { name: "Contact", icon: "📞" }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => onNavChange(item.name.toLowerCase())}
                  className="px-4 py-2 text-gray-700 hover:text-orange-500 font-medium transition-all duration-200 hover:bg-orange-50 rounded-lg"
                >
                  <span className="mr-1">{item.icon}</span>
                  {item.name}
                </button>
              ))}
            </nav>

            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products, brands and more..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-50"
                />
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => onNavChange("wishlist")}
                className="relative p-3 text-gray-700 hover:text-pink-500 hover:bg-pink-50 rounded-full transition-all duration-200"
              >
                <Heart className="h-6 w-6" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                    {wishlistCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => onNavChange("cart")}
                className="relative p-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-full transition-all duration-200"
              >
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <nav className="flex flex-col space-y-2">
                {["Home", "Shop", "Deals", "About", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      onNavChange(item.toLowerCase());
                      setMobileMenuOpen(false);
                    }}
                    className="text-left px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors duration-200 font-medium"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

const FeatureBanner = () => {
  const features = [
    { icon: <Truck className="h-6 w-6" />, title: "Free Delivery", desc: "On orders above ₹499" },
    { icon: <Shield className="h-6 w-6" />, title: "Secure Payment", desc: "100% Protected" },
    { icon: <Award className="h-6 w-6" />, title: "Best Quality", desc: "Guaranteed Products" },
    { icon: <TrendingUp className="h-6 w-6" />, title: "Best Prices", desc: "Lowest in Market" },
  ];

  return (
    <div className="bg-gradient-to-r from-orange-50 to-pink-50 py-8 mb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-orange-500">{feature.icon}</div>
              <div>
                <h4 className="font-bold text-sm text-gray-900">{feature.title}</h4>
                <p className="text-xs text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product, addToCart, toggleWishlist, isWishlisted }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const originalPrice = Math.round(product.price / (1 - product.discount / 100));

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100">
      <div className="relative overflow-hidden bg-gray-100 aspect-square">
        {product.discount > 0 && (
          <div className="absolute top-3 left-3 z-10">
            <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              {product.discount}% OFF
            </div>
          </div>
        )}
        <img
          src={product.image}
          alt={product.name}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        <button
          onClick={() => toggleWishlist(product)}
          className="absolute top-3 right-3 p-2.5 bg-white rounded-full shadow-lg hover:scale-110 transition-transform duration-200 z-10"
        >
          <Heart
            className={`h-5 w-5 ${
              isWishlisted ? "fill-pink-500 text-pink-500" : "text-gray-600"
            }`}
          />
        </button>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-5">
        <div className="mb-2">
          <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        <h3 className="font-semibold text-base text-gray-900 mb-2 line-clamp-2 min-h-[48px]">
          {product.name}
        </h3>
        <div className="flex items-center mb-3">
          <div className="flex items-center bg-green-600 px-2 py-0.5 rounded text-white text-xs font-semibold">
            {product.rating}
            <Star className="h-3 w-3 ml-0.5 fill-white" />
          </div>
          <span className="text-xs text-gray-500 ml-2">(256 reviews)</span>
        </div>
        <div className="mb-4">
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.discount > 0 && (
              <>
                <span className="text-sm text-gray-500 line-through">
                  ₹{originalPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-sm text-green-600 font-semibold">
                  Save ₹{(originalPrice - product.price).toLocaleString('en-IN')}
                </span>
              </>
            )}
          </div>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-bold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

const ProductGrid = ({ products, addToCart, toggleWishlist, wishlist }) => {
  return (
    <div className="py-4">
      <FeatureBanner />
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Trending Products 🔥</h2>
        <p className="text-gray-600">Best deals on top products - Limited time offers!</p>
      </div>
      {products.length === 0 ? (
        <div className="text-center py-16 bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl">
          <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 text-lg font-medium">No products found</p>
          <p className="text-gray-400 text-sm">Try searching with different keywords</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isWishlisted={wishlist.some((i) => i.id === product.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const CartPage = ({ cart, increaseQty, decreaseQty, removeFromCart }) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = Math.round(subtotal * 0.1);
  const delivery = subtotal > 499 ? 0 : 40;
  const total = subtotal - discount + delivery;

  return (
    <div className="max-w-7xl mx-auto p-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart 🛒</h2>
      <p className="text-gray-600 mb-8">Review your items before checkout</p>
      {cart.length === 0 ? (
        <div className="text-center py-16 bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl">
          <ShoppingCart className="h-20 w-20 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-700 text-xl font-semibold mb-2">Your cart is empty</p>
          <p className="text-gray-500 mb-6">Start shopping to add items to your cart</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md p-5 flex items-center space-x-4 hover:shadow-lg transition-all duration-200 border border-gray-100"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-xl border-2 border-gray-100"
                />
                <div className="flex-grow">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{item.category}</p>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-xl font-bold text-gray-900">₹{item.price.toLocaleString('en-IN')}</span>
                    <span className="text-sm text-gray-500 line-through">₹{Math.round(item.price * 1.2).toLocaleString('en-IN')}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-3">
                  <div className="flex items-center space-x-2 bg-gray-100 rounded-full p-1">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="p-2 rounded-full hover:bg-white transition-colors duration-200 shadow-sm"
                    >
                      <Minus className="h-4 w-4 text-gray-600" />
                    </button>
                    <span className="font-bold text-lg w-8 text-center">{item.qty}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="p-2 rounded-full hover:bg-white transition-colors duration-200 shadow-sm"
                    >
                      <Plus className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                  <p className="font-bold text-xl text-gray-900">
                    ₹{(item.price * item.qty).toLocaleString('en-IN')}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl p-6 text-white sticky top-24 shadow-2xl">
              <h3 className="text-xl font-bold mb-4">Price Details</h3>
              <div className="space-y-3 mb-4 pb-4 border-b border-white/30">
                <div className="flex justify-between">
                  <span>Subtotal ({cart.length} items)</span>
                  <span className="font-semibold">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-green-200">
                  <span>Discount (10%)</span>
                  <span className="font-semibold">- ₹{discount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="font-semibold">
                    {delivery === 0 ? (
                      <span className="text-green-200">FREE</span>
                    ) : (
                      `₹${delivery}`
                    )}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center mb-6 text-xl">
                <span className="font-bold">Total Amount:</span>
                <span className="font-bold text-3xl">₹{total.toLocaleString('en-IN')}</span>
              </div>
              <button className="w-full bg-white text-orange-600 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                Proceed to Checkout →
              </button>
              <p className="text-xs text-center mt-3 text-white/80">Safe and secure payments</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const WishlistPage = ({ wishlist, addToCart, toggleWishlist }) => {
  return (
    <div className="max-w-7xl mx-auto p-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist ❤️</h2>
      <p className="text-gray-600 mb-8">Your favorite items saved for later</p>
      {wishlist.length === 0 ? (
        <div className="text-center py-16 bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl">
          <Heart className="h-20 w-20 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-700 text-xl font-semibold mb-2">Your wishlist is empty</p>
          <p className="text-gray-500">Add items you love to your wishlist</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isWishlisted={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">About LuxeShop</h2>
      <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to LuxeShop, India's premier online shopping destination. We believe in providing our customers with the best products at unbeatable prices, coupled with exceptional service.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-6 rounded-xl">
            <h3 className="font-bold text-xl text-gray-900 mb-2">Our Mission</h3>
            <p className="text-gray-700">To revolutionize online shopping in India by offering quality products, competitive prices, and exceptional customer service.</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-6 rounded-xl">
            <h3 className="font-bold text-xl text-gray-900 mb-2">Our Vision</h3>
            <p className="text-gray-700">To become the most trusted and loved e-commerce platform across India, making shopping accessible to everyone.</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-6 rounded-xl">
            <h3 className="font-bold text-xl text-gray-900 mb-2">Our Values</h3>
            <p className="text-gray-700">Customer satisfaction, integrity, innovation, and excellence in everything we do.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Address</h4>
                <p className="text-gray-600">123 Shopping Street, Mumbai, Maharashtra 400001, India</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Phone className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Phone</h4>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600">support@luxeshop.in</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
            <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-3 rounded-lg font-bold transition-all duration-200 shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-orange-500 to-pink-500 p-2 rounded-lg">
                <ShoppingCart className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">LuxeShop</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              India's most trusted online shopping destination. Shop smart, save more!
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                f
              </div>
              <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                ⓘ
              </div>
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                𝕏
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Shop by Category</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-orange-400 cursor-pointer transition-colors">Electronics</li>
              <li className="hover:text-orange-400 cursor-pointer transition-colors">Fashion</li>
              <li className="hover:text-orange-400 cursor-pointer transition-colors">Home & Kitchen</li>
              <li className="hover:text-orange-400 cursor-pointer transition-colors">Beauty & Personal Care</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Customer Service</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-orange-400 cursor-pointer transition-colors">Track Order</li>
              <li className="hover:text-orange-400 cursor-pointer transition-colors">Returns & Exchange</li>
              <li className="hover:text-orange-400 cursor-pointer transition-colors">Shipping Info</li>
              <li className="hover:text-orange-400 cursor-pointer transition-colors">FAQs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@luxeshop.in</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2025 LuxeShop. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</span>
              <span className="hover:text-white cursor-pointer transition-colors">Refund Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (product) => {
    const existing = cart.find((i) => i.id === product.id);
    if (existing) {
      setCart(cart.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i)));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => setCart(cart.filter((i) => i.id !== id));
  const increaseQty = (id) =>
    setCart(cart.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  const decreaseQty = (id) =>
    setCart(cart.map((i) => (i.id === id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i)));

  const toggleWishlist = (product) => {
    if (wishlist.find((i) => i.id === product.id)) {
      setWishlist(wishlist.filter((i) => i.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header
        cartCount={cart.length}
        wishlistCount={wishlist.length}
        onNavChange={setCurrentPage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main className="flex-grow">
        {currentPage === "home" || currentPage === "shop" || currentPage === "deals" ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProductGrid
              products={filtered}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              wishlist={wishlist}
            />
          </div>
        ) : currentPage === "cart" ? (
          <CartPage
            cart={cart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
            removeFromCart={removeFromCart}
          />
        ) : currentPage === "wishlist" ? (
          <WishlistPage
            wishlist={wishlist}
            addToCart={addToCart}
            toggleWishlist={toggleWishlist}
          />
        ) : currentPage === "about" ? (
          <AboutPage />
        ) : currentPage === "contact" ? (
          <ContactPage />
        ) : null}
      </main>

      <Footer />
    </div>
  );
};

export default App;