import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";
import { FoodItem } from "../FoodItem/FoodItem";

export const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="mt-12">
      <h2 className="text-xl font-medium">Top dishes near you</h2>
      <div className="mt-12 grid grid-cols-4 gap-4 h-full">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
