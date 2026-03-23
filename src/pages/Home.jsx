import React, { useContext } from "react";
import Nav from "../components/Nav";
import { categories } from "../category";
import Card from "../components/Card";
import Card2 from "../components/Card2.jsx";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import { X } from "lucide-react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Home() {
  const { categ, setCateg, input, showCart, setShowCart } =
    useContext(dataContext);
  let items = useSelector((state) => state.cart) || [];

  const subtotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0,
  );
  const deliveryFee = items.length > 0 ? 20 : 0;
  const taxes = (subtotal * 0.5) / 100;
  const total = subtotal ? subtotal + deliveryFee + taxes : 0;

  function filterCategory(category) {
    if (category === "All") {
      setCateg(food_items);
    } else {
      let newList = food_items.filter((i) => i.food_category === category);
      setCateg(newList);
    }
  }

  return (
    <div className="bg-slate-100 min-h-screen w-full pb-8">
      <Nav />
      {/* Category Section */}
     
      {!input && (
        <div className="flex overflow-x-auto md:flex-wrap justify-start md:justify-center gap-3 px-4 py-6 scrollbar-hide pt-30">
          {categories.map((i) => (
            <div
              key={i.id}
              className="min-w-[100px] md:w-32 flex flex-col-reverse items-center bg-white p-4 rounded-2xl shadow-sm hover:bg-green-50 transition-all cursor-pointer shrink-0"
              onClick={() => filterCategory(i.name)}>
              <div className="font-semibold text-xs md:text-sm text-center mt-2">
                {i.name}
              </div>
              <div className="text-2xl">{i.icon}</div>
            </div>
          ))}
        </div>
      )}

      
      <div className="max-w-7xl mx-auto px-4 mt-4">
        {categ.length > 0 ? (
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {categ.map((i) => (
              <Card
                key={i.id}
                {...i}
                name={i.food_name}
                image={i.food_image}
                type={i.food_type}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[50vh] text-center">
            <h2 className="text-xl font-bold text-gray-600">
              No dish found 😔
            </h2>
          </div>
        )}
      </div>

    
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-[400px] bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}>
        <header className="p-5 border-b flex justify-between items-center">
          <span className="text-green-600 text-xl font-bold">Your Basket</span>
          <X
            onClick={() => setShowCart(false)}
            className="w-7 h-7 cursor-pointer text-gray-400 hover:text-black"
          />
        </header>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length > 0 ? (
            items.map((item) => <Card2 key={item.id} {...item} />)
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-gray-400">
              <p>Your cart is empty 🛒</p>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-5 border-t bg-gray-50 space-y-3">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between text-gray-600 text-sm">
              <span>Delivery</span>
              <span>₹{deliveryFee}</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <button
              className="w-full bg-green-500 text-white py-3 rounded-xl font-bold hover:bg-green-600 shadow-lg"
              onClick={() => toast.success("Order placed successfully! 🚀")}>
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Home;
