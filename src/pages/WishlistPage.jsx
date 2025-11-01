import ProductGrid from "./ProductGrid";

const WishlistPage = ({ wishlist, addToCart, toggleWishlist }) => (
  <div className="max-w-6xl mx-auto mt-10 p-4">
    <h2 className="text-2xl font-bold mb-6">Your Wishlist</h2>
    {wishlist.length === 0 ? (
      <p className="text-gray-500">No items in your wishlist yet.</p>
    ) : (
      <ProductGrid
        products={wishlist}
        addToCart={addToCart}
        toggleWishlist={toggleWishlist}
        wishlist={wishlist}
      />
    )}
  </div>
);

export default WishlistPage;
