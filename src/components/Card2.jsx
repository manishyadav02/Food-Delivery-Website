import React from "react";

import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { DecrementQty, IncrementQty, RemoveItem } from "../redux/cartSlice";

function Card2({ name, id, price, image, qty }) {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
      <div className="w-20 h-20 flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div>
          <h4 className="font-bold text-gray-800 text-sm line-clamp-1">
            {name}
          </h4>
          <p className="text-green-600 font-semibold text-sm">₹{price}</p>
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden h-8">
            <button
              onClick={() => dispatch(DecrementQty(id))}
              className="px-3 hover:bg-gray-100 text-lg">
              -
            </button>
            <span className="px-3 font-semibold text-sm">{qty}</span>
            <button
              onClick={() => dispatch(IncrementQty(id))}
              className="px-3 hover:bg-gray-100 text-lg">
              +
            </button>
          </div>

          <button
            onClick={() => dispatch(RemoveItem(id))}
            className="text-gray-400 hover:text-red-500 transition">
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card2;
