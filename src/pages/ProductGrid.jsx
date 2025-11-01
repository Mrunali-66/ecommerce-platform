import ProductCard from "./ProductCard";

const ProductGrid = ({ products, addToCart, toggleWishlist, wishlist }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          toggleWishlist={toggleWishlist}
          inWishlist={wishlist.some((p) => p.id === product.id)}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
