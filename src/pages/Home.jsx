import React, { useContext, useState } from "react";
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
  const deliveryFee = 20;
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
      {!input ? (
        <div className="flex flex-wrap justify-center gap-5 pt-5">
          {categories.map((i) => (
            <div>
              <div
                key={i.id}
                className="flex flex-col-reverse items-center bg-gray-100 p-4 rounded-lg shadow-md h-37.5 w-35 justify-center gap-3 hover:bg-green-200 transition-all duration-200 hover:translate-y-1.5 cursor-pointer"
                onClick={() => filterCategory(i.name)}>
                <div className="font-bold">{i.name}</div>
                <div>{i.icon}</div>
              </div>
            </div>
          ))}
        </div>
      ) : <><h2 className="flex justify-center items-center pt-10 text-green-500 font-bold text-3xl">No dish found with your searching criteria..</h2></>}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5
        justify-center items-center w-full">
        {categ.map((i) => (
          <Card
            key={i.id}
            name={i.food_name}
            price={i.price}
            category={i.food_category}
            image={i.food_image}
            id={i.id}
            type={i.food_type}
          />
        ))}
      </div>
      <div
        className={`w-full md:w-[60vh] h-full fixed top-0 right-0 bg-white shadow-xl p-6 flex flex-col transition-all duration-300 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}>
        {/* Header */}
        <header className="w-full flex justify-between items-center mb-4">
          <span className="text-green-500 text-[18px] font-semibold">
            Order Items
          </span>
          <X
            onClick={() => setShowCart(false)}
            className="w-8 h-8 cursor-pointer hover:text-gray-600"
          />
        </header>

        {/* Items List (Scrollable) */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-2">
          {items.length > 0 ? (
            items.map((item) => (
              <Card2
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                id={item.id}
                qty={item.qty}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center mt-10">
              Your cart is empty 🛒
            </p>
          )}
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between text-gray-700">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between text-gray-500 text-sm">
            <span>Delivery Fee</span>
            <span>₹{deliveryFee}</span>
          </div>

          <div className="flex justify-between text-gray-500 text-sm">
            <span>Taxes (0.5%)</span>
            <span>₹{taxes.toFixed(2)}</span>
          </div>

          <div className="flex justify-between font-bold text-lg mt-2">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>

          {/* Checkout Button */}
          <button className="w-full mt-3 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition" onClick={()=>{ toast.success(`Order is placeed sucessfully...`);}}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
