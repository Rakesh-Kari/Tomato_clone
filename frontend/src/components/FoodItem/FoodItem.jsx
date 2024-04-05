import { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

export const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addTocart, removeFromcart } = useContext(StoreContext);

  return (
    <div className="border border-gray-300 rounded-lg">
      <div className="relative">
        <img className="rounded-lg" src={image} />
        {!cartItems[id] ? (
          <img
            className="absolute top-1/2 right-6 cursor-pointer h-10 w-10"
            onClick={() => addTocart(id)}
            src={assets.add_icon_white}
            alt="Add Icon"
          />
        ) : (
          <div className="absolute top-1/2 right-6 flex items-center gap-2 p-1 bg-white rounded-full ">
            <img
              onClick={() => removeFromcart(id)}
              src={assets.remove_icon_red}
              alt="Remove Icon"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addTocart(id)}
              src={assets.add_icon_green}
              alt="Remove Icon"
            />
          </div>
        )}
        <div className="p-3">
          <div className="flex justify-between items-center mb-2">
            <p className="text-lg font-medium">{name}</p>
            <img className="w-35" src={assets.rating_starts} />
          </div>
          <p className="text-base">{description}</p>
          <p className="font-bold text-red-500">${price}</p>
        </div>
      </div>
    </div>
  );
};
