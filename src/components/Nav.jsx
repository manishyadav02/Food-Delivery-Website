import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RiShoppingBag4Line } from "react-icons/ri";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";
function Nav() {
  let { input, setInput, categ, setCateg , showCart,setShowCart} = useContext(dataContext);
  let cartItems = useSelector(state=>state.cart)
  useEffect(() => {
   let newList= food_items.filter((i) => i.food_name.toLowerCase().includes(input.toLowerCase()));
   setCateg(newList)
  }, [input,setCateg]);
  return (
    <div className="w-full h-25 flex justify-between items-center py-5 px-8">
      <div className="w-15 h-15 bg-amber-50 flex justify-center items-center rounded-md shadow-2xl">
        <MdFastfood className="w-7.5 h-7.5 text-green-500" />
      </div>
      <div className=" h-15 w-[70%] bg-white flex items-center shadow-md rounded-2xl ">
        <form className="flex px-3 " onSubmit={(e) => e.preventDefault()}>
          <IoSearch className="w-7.5 h-7.5 text-green-500 mr-3" />
          <input
            type="text"
            placeholder="Search items..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className=" rounded-md outline-none w-full  text-xl bg-transparent"
          />
        </form>
      </div>
      <div className="w-15 h-15 bg-amber-50 flex justify-center items-center rounded-md shadow-2xl relative" onClick={()=>setShowCart(true)}>
        <span className="absolute top-0 right-1.5 text-green-600 text-bold">
          {cartItems.length}
        </span>
        <RiShoppingBag4Line className="w-7.5 h-7.5 text-green-500 cursor-pointer" />
      </div>
    </div>
  );
}

export default Nav;
