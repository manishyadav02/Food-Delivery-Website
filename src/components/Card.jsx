import React from "react";

import { GiChickenOven } from "react-icons/gi";
import { Leaf } from "lucide-react";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";

function Card({ name, image, id, price, type }) {
  const dispatch = useDispatch();

  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-4 flex flex-col flex-1 gap-2">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-gray-800 line-clamp-1">{name}</h3>
          <div
            className={`flex items-center gap-1 text-[10px] uppercase font-bold ${type === "veg" ? "text-green-600" : "text-red-600"}`}>
            {type === "veg" ? <Leaf size={14} /> : <GiChickenOven size={14} />}
            <span>{type}</span>
          </div>
        </div>

        <p className="text-green-600 font-bold text-lg">₹{price}</p>

        <button
          className="mt-auto w-full bg-green-600 py-2 rounded-lg font-semibold text-white hover:bg-green-700 active:scale-95 transition-all"
          onClick={() =>
            dispatch(AddItem({ id, name, price, image, qty: 1, type }))
          }>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
