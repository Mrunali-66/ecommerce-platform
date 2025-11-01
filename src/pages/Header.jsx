import { useState } from "react";
import { ShoppingCart, Heart, Menu, X, Search } from "lucide-react";

const Header = ({ cartCount, wishlistCount, onNavChange, searchQuery, setSearchQuery }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left side: Logo + Nav */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => onNavChange("home")}
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              ShopHub
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-1">
              {["Home", "Shop", "About", "Contact"].map((item) => (
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

          {/* Search bar */}
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

          {/* Right side: Wishlist + Cart + Menu */}
          <div className="flex items-center gap-2">
            {/* Wishlist */}
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

            {/* Cart */}
            <button
              onClick={() => onNavChange("cart")}
              className="p-2.5 hover:bg-gray-100 rounded-lg relative transition-colors duration-200"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={22} className="text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            {["Home", "Shop", "About", "Contact"].map((item) => (
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

export default Header;