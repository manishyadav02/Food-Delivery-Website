import React from "react";

import { GiChickenOven } from "react-icons/gi";
import { Leaf } from "lucide-react";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";
import { toast } from "react-toastify";
function Card({ name, image, id, price, type }) {
  const dispatch = useDispatch();

  const addItems = () => {
    dispatch(
      AddItem({
        id: id,
        name: name,
        price: price,
        image: image,
        qty: 1,
        type: type,
      }),
      
    );
    //  toast.success(`Item is added to cart`);
  };
  return (
    <div
      key={id}
      className="w-60 h-80 bg-white mt-10 p-4 rounded-lg flex flex-col gap-3 border-0 hover:border-green-600 hover:border-4 transition-all duration-200 ml-4 shadow-xl">
      <div className="w-full h-[65%] bg-white rounded-lg overflow-hidden">
        <img src={image} alt="img" className="object-cover" />
      </div>
      <div>
        <span className="font-semibold">{name}</span>
      </div>
      <div className="flex w-full relative text-green-500 font-semibold">
        <span>RS. {price}/-</span>
        <div className="flex absolute right-0 text-green-500 gap-2 items-center">
          {type === "veg" ? <Leaf /> : <GiChickenOven />}

          <span>{type}</span>
        </div>
      </div>
      <div>
        <button
          className="w-full bg-green-600 h-8 rounded-lg font-semibold hover:cursor-pointer hover:bg-green-300 transition text-white"
          onClick={addItems}>
          Add to Dish
        </button>
      </div>
    </div>
  );
}

export default Card;
