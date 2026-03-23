import React from "react";
import image1 from "../assets/image1.avif";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { DecrementQty, IncrementQty, RemoveItem } from "../redux/cartSlice";
function Card2({ name, id, price, image, qty }) {
  const dispatch = useDispatch();
  const removeItem = () => {
    dispatch(RemoveItem(id));
  };
  function incrementQty() {
    dispatch(IncrementQty(id));
  }
  function decrementQty() {
    dispatch(DecrementQty(id));
  }
  return (
    <div key={id} className="w-full h-30 shadow-lg p-3 flex justify-between">
      <div className="w-[70%] h-full  rounded-tl-xl rounded-bl-xl flex gap-4">
        <div className="w-[70%] h-full overflow-hidden">
          <img src={image} alt="img" className="h-full w-full rounded-xl" />
        </div>
        <div className="flex flex-col justify-evenly ">
          <span className="font-semibold text-slate-400">{name}</span>
          <div className="bg-blue-200 h-8 w-20 flex justify-center items-center mr-2 shadow-xl text-green-500 border-2 border-green-400 rounded-lg overflow-hidden">
            <button
              className="bg-white w-[30%] h-full cursor-pointer text-2xl font-bold hover:bg-gray-100"
              onClick={decrementQty}>
              -
            </button>
            <div className="bg-gray-200 w-[40%] h-full flex items-center justify-center">
              {qty}
            </div>
            <button
              className="bg-white w-[30%] h-full cursor-pointer  font-bold hover:bg-gray-100"
              onClick={incrementQty}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly items-end flex-col">
        <span className="font-semibold text-green-400">Rs.{price}/-</span>
        <span
          className="text-red-500 hover:cursor-pointer hover:text-red-700 "
          onClick={removeItem}>
          <Trash2 />
        </span>
      </div>
    </div>
  );
}

export default Card2;
