import { useState } from "react";
import { ShoppingCart, Heart, Menu, X, Search } from "lucide-react";

const Header = ({ cartCount, wishlistCount, onNavChange, searchQuery, setSearchQuery }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side: Logo + Nav */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => onNavChange("home")}
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              ShopHub
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6">
              {["Home", "Shop", "About", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => onNavChange(item.toLowerCase())}
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-2 w-1/3">
            <Search size={18} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none w-full text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Right side: Wishlist + Cart + Menu */}
          <div className="flex items-center gap-4">
            {/* Wishlist */}
            <button
              onClick={() => onNavChange("wishlist")}
              className="p-2 hover:bg-gray-100 rounded-full relative"
            >
              <Heart size={24} className="text-gray-700" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart */}
            <button
              onClick={() => onNavChange("cart")}
              className="p-2 hover:bg-gray-100 rounded-full relative"
            >
              <ShoppingCart size={24} className="text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-4 space-y-4">
          {["Home", "Shop", "About", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => {
                onNavChange(item.toLowerCase());
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-gray-700 hover:text-purple-600 font-medium"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
