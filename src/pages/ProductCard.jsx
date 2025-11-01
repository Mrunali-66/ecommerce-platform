import { Heart, ShoppingCart, Star } from "lucide-react";

const ProductCard = ({ product, addToCart, toggleWishlist, inWishlist }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg p-4 transition-all duration-200">
      <img src={product.image} alt={product.name} className="rounded-lg h-48 w-full object-cover" />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <div className="flex items-center text-yellow-400 mt-1">
        <Star size={16} />
        <span className="text-gray-600 ml-2">{product.rating}</span>
      </div>
      <p className="text-purple-600 font-bold mt-2">₹{product.price}</p>
      <div className="flex justify-between mt-3">
        <button
          onClick={() => addToCart(product)}
          className="bg-purple-600 text-white px-3 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-700"
        >
          <ShoppingCart size={16} /> Add
        </button>
        <button
          onClick={() => toggleWishlist(product)}
          className={`p-2 rounded-full ${
            inWishlist ? "bg-red-100 text-red-500" : "bg-gray-100 text-gray-600"
          }`}
        >
          <Heart size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
