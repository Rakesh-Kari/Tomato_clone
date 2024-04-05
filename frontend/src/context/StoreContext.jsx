import { createContext } from "react";
import { food_list } from "../assets/assets";
import { useState } from "react";
import { useEffect } from "react";

export const StoreContext = createContext(null);

export const StoreProvider = (props) => {
  const [cartItems, setcarItems] = useState({});

  const addTocart = (itemId) => {
    if (!cartItems[itemId]) {
      setcarItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setcarItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromcart = (itemId) => {
    setcarItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotal = () => {
    let TotalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        TotalAmount += itemInfo.price * cartItems[item];
      }
    }
    return TotalAmount;
  };

  const contextValue = {
    food_list,
    cartItems,
    setcarItems,
    addTocart,
    removeFromcart,
    getTotal,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
