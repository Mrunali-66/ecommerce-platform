import { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Star, Search, Menu, X, ChevronRight, Filter, TrendingUp, Zap, Package, Truck, Shield, ArrowRight, Plus, Minus, Trash2, User, CreditCard, MapPin, Check } from 'lucide-react';

const EcommercePlatform = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [checkoutStep, setCheckoutStep] = useState(1);

  const categories = ['All', 'Electronics', 'Fashion', 'Home & Living', 'Sports', 'Beauty'];

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 2999,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop",
      rating: 4.8,
      reviews: 1250,
      description: "High-fidelity sound with active noise cancellation.",
      features: ["ANC Technology", "40Hr Battery", "Premium Build"],
      trending: true,
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 1999,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
      rating: 4.6,
      reviews: 890,
      description: "Track your fitness goals with precision and style.",
      features: ["Heart Rate", "GPS", "Water Resistant"],
      sale: true,
      oldPrice: 2499,
    },
    {
      id: 3,
      name: "Denim Jacket",
      price: 1499,
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=600&fit=crop",
      rating: 4.5,
      reviews: 420,
      description: "Classic denim jacket for all seasons.",
      features: ["Unisex Fit", "Durable Fabric", "Machine Washable"],
    },
    {
      id: 4,
      name: "Luxury Lipstick Set",
      price: 999,
      category: "Beauty",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&h=600&fit=crop",
      rating: 4.9,
      reviews: 650,
      description: "Matte finish lipstick set with 5 bold shades.",
      features: ["Long-lasting", "Cruelty Free", "Hydrating Formula"],
      trending: true,
    },
    {
      id: 5,
      name: "Home Decorative Vase",
      price: 799,
      category: "Home & Living",
      image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&h=600&fit=crop",
      rating: 4.4,
      reviews: 310,
      description: "Elegant ceramic vase perfect for modern interiors.",
      features: ["Minimalist Design", "Eco Friendly", "Durable"],
    },
    {
      id: 6,
      name: "Running Shoes",
      price: 2499,
      category: "Sports",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop",
      rating: 4.7,
      reviews: 980,
      description: "Lightweight running shoes with superior cushioning.",
      features: ["Breathable", "Anti-Slip", "Shock Absorption"],
    },
  ];
  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    showNotif('Added to cart!');
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    showNotif('Removed from cart');
  };

  const updateQuantity = (productId, change) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        const newQty = item.quantity + change;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const toggleWishlist = (product) => {
    if (wishlist.find(item => item.id === product.id)) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
      showNotif('Removed from wishlist');
    } else {
      setWishlist([...wishlist, product]);
      showNotif('Added to wishlist!');
    }
  };

  const showNotif = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const filteredProducts = products.filter(p => 
    (selectedCategory === 'all' || p.category === selectedCategory) &&
    (searchQuery === '' || p.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Hero Section
  const Hero = () => (
    <div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
      }}></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              🎉 Summer Sale - Up to 50% OFF
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Discover Your
              <span className="block text-yellow-300">Perfect Style</span>
            </h1>
            <p className="text-xl text-white/90">
              Premium products curated just for you. Experience shopping like never before.
            </p>
            <div className="flex gap-4">
              <button onClick={() => setCurrentPage('shop')} className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold hover:bg-yellow-300 hover:text-purple-700 transition-all transform hover:scale-105 flex items-center gap-2">
                Shop Now <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 border-2 border-white rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="text-9xl animate-float">🛍️</div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );

  // Features Section
  const Features = () => (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: Truck, title: 'Free Shipping', desc: 'On orders over $50' },
            { icon: Shield, title: 'Secure Payment', desc: '100% protected' },
            { icon: Package, title: 'Easy Returns', desc: '30-day guarantee' },
            { icon: Zap, title: 'Fast Delivery', desc: '2-3 business days' }
          ].map((feature, i) => (
            <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
              <div className="inline-flex p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4">
                <feature.icon className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Product Card
  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
      <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 p-8 h-64 flex items-center justify-center">
        <div className="text-8xl group-hover:scale-110 transition-transform duration-300">{product.image}</div>
        {product.trending && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
            <TrendingUp size={12} /> Trending
          </div>
        )}
        {product.sale && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
            SALE
          </div>
        )}
        <button 
          onClick={() => toggleWishlist(product)}
          className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-all ${
            wishlist.find(item => item.id === product.id) 
              ? 'bg-red-500 text-white' 
              : 'bg-white/80 text-gray-700 hover:bg-red-500 hover:text-white'
          }`}
        >
          <Heart size={20} fill={wishlist.find(item => item.id === product.id) ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="font-semibold">{product.rating}</span>
          </div>
          <span className="text-gray-500 text-sm">({product.reviews} reviews)</span>
        </div>
        <h3 className="font-bold text-lg mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <div>
            {product.sale ? (
              <div>
                <span className="text-2xl font-bold text-green-600">${product.price}</span>
                <span className="text-gray-400 line-through ml-2">${product.oldPrice}</span>
              </div>
            ) : (
              <span className="text-2xl font-bold">${product.price}</span>
            )}
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setSelectedProduct(product)}
              className="p-2 border-2 border-purple-500 text-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition-all"
            >
              <ChevronRight size={20} />
            </button>
            <button 
              onClick={() => addToCart(product)}
              className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Shop Page
  const Shop = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop All Products</h1>
          <p className="text-xl text-white/90">Find exactly what you're looking for</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat.toLowerCase())}
                className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.toLowerCase()
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );

  // Cart Page
  const Cart = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="bg-white rounded-2xl p-20 text-center">
            <div className="text-8xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some items to get started!</p>
            <button 
              onClick={() => setCurrentPage('shop')}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.map(item => (
                <div key={item.id} className="bg-white rounded-2xl p-6 flex gap-6 items-center">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-6 text-6xl">
                    {item.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-2 hover:bg-white rounded transition-all"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 font-semibold">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-2 hover:bg-white rounded transition-all"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">${item.price * item.quantity}</div>
                    <div className="text-sm text-gray-500">${item.price} each</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 sticky top-4">
                <h3 className="font-bold text-xl mb-6">Order Summary</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal ({cartCount} items)</span>
                    <span className="font-semibold">${cartTotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold text-green-600">FREE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold">${(cartTotal * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between text-xl">
                    <span className="font-bold">Total</span>
                    <span className="font-bold">${(cartTotal * 1.1).toFixed(2)}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setCurrentPage('checkout')}
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center gap-2"
                >
                  Proceed to Checkout <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Checkout Page
  const Checkout = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Checkout</h1>
        
        <div className="flex gap-4 mb-8">
          {[1, 2, 3].map(step => (
            <div key={step} className="flex-1">
              <div className={`h-2 rounded-full ${checkoutStep >= step ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gray-200'}`}></div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-2xl p-8">
            {checkoutStep === 1 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <User size={24} /> Shipping Information
                </h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 outline-none" />
                    <input type="text" placeholder="Last Name" className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 outline-none" />
                  </div>
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 outline-none" />
                  <input type="text" placeholder="Street Address" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 outline-none" />
                  <div className="grid md:grid-cols-3 gap-4">
                    <input type="text" placeholder="City" className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 outline-none" />
                    <input type="text" placeholder="State" className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 outline-none" />
                    <input type="text" placeholder="ZIP Code" className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 outline-none" />
                  </div>
                </div>
                <button onClick={() => setCheckoutStep(2)} className="w-full mt-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:from-purple-600 hover:to-pink-600">
                  Continue to Payment
                </button>
              </div>
            )}

            {checkoutStep === 2 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <CreditCard size={24} /> Payment Method
                </h2>
                <div className="space-y-4">
                  <input type="text" placeholder="Card Number" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 outline-none" />
                  <input type="text" placeholder="Cardholder Name" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 outline-none" />
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Expiry Date (MM/YY)" className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 outline-none" />
                    <input type="text" placeholder="CVV" className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 outline-none" />
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <button onClick={() => setCheckoutStep(1)} className="flex-1 py-4 border-2 border-gray-300 rounded-xl font-bold hover:bg-gray-50">
                    Back
                  </button>
                  <button onClick={() => setCheckoutStep(3)} className="flex-1 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:from-purple-600 hover:to-pink-600">
                    Review Order
                  </button>
                </div>
              </div>
            )}

            {checkoutStep === 3 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Check size={24} /> Order Confirmation
                </h2>
                <div className="text-center py-12">
                  <div className="text-8xl mb-4">✅</div>
                  <h3 className="text-3xl font-bold mb-4">Order Placed Successfully!</h3>
                  <p className="text-gray-600 mb-8">Your order #ORD-{Math.floor(Math.random() * 10000)} has been confirmed.</p>
                  <button onClick={() => { setCurrentPage('home'); setCart([]); setCheckoutStep(1); }} className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:from-purple-600 hover:to-pink-600">
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 sticky top-4">
              <h3 className="font-bold text-xl mb-4">Order Summary</h3>
              <div className="space-y-3 mb-6">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">{item.name} x{item.quantity}</span>
                    <span className="font-semibold">${item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${cartTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                <div className="flex justify-between text-xl font-bold pt-2">
                  <span>Total</span>
                  <span>${(cartTotal * 1.1).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Product Detail Modal
  const ProductDetail = () => {
    if (!selectedProduct) return null;
    
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
        <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-12 flex items-center justify-center">
              <div className="text-9xl">{selectedProduct.image}</div>
            </div>
            <div>
              <button onClick={() => setSelectedProduct(null)} className="float-right p-2 hover:bg-gray-100 rounded-full">
                <X size={24} />
              </button>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                  <span className="font-bold">{selectedProduct.rating}</span>
                </div>
                <span className="text-gray-500">({selectedProduct.reviews} reviews)</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">{selectedProduct.name}</h2>
              <p className="text-gray-600 mb-6">{selectedProduct.description}</p>
              
              <div className="mb-6">
                <h3 className="font-bold mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {selectedProduct.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check size={20} className="text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                {selectedProduct.sale ? (
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold text-green-600">${selectedProduct.price}</span>
                    <span className="text-2xl text-gray-400 line-through">${selectedProduct.oldPrice}</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">
                      SAVE ${selectedProduct.oldPrice - selectedProduct.price}
                    </span>
                  </div>
                ) : (
                  <span className="text-4xl font-bold">${selectedProduct.price}</span>
                )}
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); }}
                  className="flex-1 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={20} /> Add to Cart
                </button>
                <button 
                  onClick={() => toggleWishlist(selectedProduct)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    wishlist.find(item => item.id === selectedProduct.id)
                      ? 'bg-red-500 border-red-500 text-white'
                      : 'border-gray-300 hover:border-red-500 hover:text-red-500'
                  }`}
                >
                  <Heart size={24} fill={wishlist.find(item => item.id === selectedProduct.id) ? 'currentColor' : 'none'} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Header/Navigation
  const Header = () => (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ShopHub
            </button>
            <nav className="hidden md:flex gap-6">
              {['Home', 'Shop', 'About', 'Contact'].map(item => (
                <button 
                  key={item}
                  onClick={() => setCurrentPage(item.toLowerCase())}
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <Heart size={24} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {wishlist.length}
                </span>
              )}
            </button>
            <button onClick={() => setCurrentPage('cart')} className="p-2 hover:bg-gray-100 rounded-full relative">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col p-4 space-y-2">
            {['Home', 'Shop', 'About', 'Contact'].map(item => (
              <button 
                key={item}
                onClick={() => { setCurrentPage(item.toLowerCase()); setMobileMenuOpen(false); }}
                className="text-left px-4 py-2 hover:bg-gray-100 rounded-lg"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );

  // Footer
  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ShopHub</h3>
            <p className="text-gray-400">Your one-stop destination for premium products and amazing deals.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe for exclusive offers!</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email" className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500" />
              <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ShopHub. All rights reserved. Made with ❤️</p>
        </div>
      </div>
    </footer>
  );

  // Notification Toast
  const Notification = () => {
    if (!showNotification) return null;
    
    return (
      <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 animate-slide-up z-50">
        <Check size={24} />
        <span className="font-semibold">{notificationMessage}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      `}</style>
      
      <Header />
      
      {currentPage === 'home' && (
        <>
          <Hero />
          <Features />
          <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Trending Products</h2>
                <p className="text-xl text-gray-600">Discover what's hot right now</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.filter(p => p.trending).map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="text-center mt-12">
                <button onClick={() => setCurrentPage('shop')} className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
                  View All Products
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      
      {currentPage === 'shop' && <Shop />}
      {currentPage === 'cart' && <Cart />}
      {currentPage === 'checkout' && <Checkout />}
      
      {(currentPage === 'about' || currentPage === 'contact') && (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="text-8xl mb-4">🚧</div>
            <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
            <p className="text-gray-600 mb-8">This page is under construction</p>
            <button onClick={() => setCurrentPage('home')} className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold">
              Back to Home
            </button>
          </div>
        </div>
      )}
      
      <Footer />
      <ProductDetail />
      <Notification />
    </div>
  );
};

export default EcommercePlatform;