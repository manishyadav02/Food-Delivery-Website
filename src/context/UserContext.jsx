import React, { createContext, useState } from "react";
import { food_items } from "../food";
export const dataContext = createContext(null);

function UserContext({ children }) {
  let [input, setInput] = useState("");
  const [categ, setCateg] = useState(food_items);
  const [showCart, setShowCart] = useState(false);
  let data = {
    input,
    setInput,
    categ,
    setCateg,
    showCart,
    setShowCart,
  };
  return (
    <div>
      <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </div>
  );
}

export default UserContext;
