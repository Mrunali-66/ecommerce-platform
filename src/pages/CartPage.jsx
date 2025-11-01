import { Trash2, Plus, Minus } from "lucide-react";

const CartPage = ({ cart, increaseQty, decreaseQty, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="max-w-5xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
            >
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
              <p className="w-1/3">{item.name}</p>
              <p className="text-purple-600 font-bold">₹{item.price}</p>
              <div className="flex items-center gap-2">
                <button onClick={() => decreaseQty(item.id)} className="p-1">
                  <Minus size={16} />
                </button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(item.id)} className="p-1">
                  <Plus size={16} />
                </button>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
          <div className="text-right font-bold text-lg mt-4">
            Total: ₹{total.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
