import React, { useContext, useEffect, useState } from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RiShoppingBag4Line } from "react-icons/ri";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";

function Nav() {
  let { input, setInput, setCateg, setShowCart } = useContext(dataContext);
  let cartItems = useSelector((state) => state.cart);

  // State to track scroll
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let newList = food_items.filter((i) =>
      i.food_name.toLowerCase().includes(input.toLowerCase()),
    );
    setCateg(newList);
  }, [input, setCateg]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-20 flex justify-between items-center py-5 px-4 md:px-8 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md h-16" // Scrolled state
          : "bg-transparent h-20" // Top state
      }`}>
      {/* Logo */}
      <div className="w-12 h-12 bg-amber-50 flex justify-center items-center rounded-xl shadow-sm">
        <MdFastfood className="w-6 h-6 text-green-500" />
      </div>

      {/* Search Bar */}
      <div
        className={`h-12 w-[65%] md:w-[50%] flex items-center rounded-2xl transition-all ${
          isScrolled ? "bg-gray-100" : "bg-white shadow-md"
        }`}>
        <form className="flex px-3 w-full" onSubmit={(e) => e.preventDefault()}>
          <IoSearch className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search items..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="outline-none w-full text-sm md:text-base bg-transparent"
          />
        </form>
      </div>

      {/* Cart Icon */}
      <div
        className="w-12 h-12 bg-amber-50 flex justify-center items-center rounded-xl shadow-sm relative cursor-pointer hover:scale-105 transition-transform"
        onClick={() => setShowCart(true)}>
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
            {cartItems.length}
          </span>
        )}
        <RiShoppingBag4Line className="w-6 h-6 text-green-500" />
      </div>
    </div>
  );
}

export default Nav;
