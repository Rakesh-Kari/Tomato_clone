import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import { TotalKey } from "./TotalsKey";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, food_list, removeFromcart, getTotal } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="mt-10">
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <p className="w-1/6 ml-6">Items name</p>
          <p className="w-1/6">Title</p>
          <p className="w-1/6">Price</p>
          <p className="w-1/6 ml-5">Quantity</p>
          <p className="w-1/6 pl-20">Total</p>
          <p className="w-1/6 pl-20">Remove</p>
        </div>
        <hr className="border-2 border-slate-300" />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div
                  key={index}
                  className="flex justify-between items-center m-1 font-medium "
                >
                  <img
                    className="w-12 h-12 mx-10 my-1"
                    src={item.image}
                    alt=""
                  />
                  <p className="w-1/6 ml-10">{item.name}</p>
                  <p className="w-1/6 mx-5">${item.price}</p>
                  <p className="w-1/6 m-">{cartItems[item._id]}</p>
                  <p className="w-1/6">${item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromcart(item._id)}
                    className="pr-20 cursor-pointer"
                  >
                    X
                  </p>
                </div>
                <hr className="border-2 border-gray-300" />
              </div>
            );
          }
          return null; // Don't forget to handle the case when cartItems[item._id] is 0 or less
        })}
      </div>
      <div className="mt-10 flex justify-between gap-10">
        <div className="flex-grow flex flex-col gap-10">
          <h2 className="font-bold">Cart Total</h2>
          <div className="">
            <TotalKey label="Sub Total" value={"$" + getTotal()} />
            <hr />
            <TotalKey
              label="Delivery fee"
              value={"$" + (getTotal() === 0 ? 0 : 2)}
            />

            <p></p>
            <hr />
            <div className="flex justify-between">
              <b>Total</b>
              <b> {"$" + (getTotal() === 0 ? 0 : getTotal() + 2)}</b>
            </div>
            <button
              onClick={() => navigate("/order")}
              className="w-60 h-10 border-2 text-white bg-orange-600 rounded-md mt-6 "
            >
              Proceed to checkout
            </button>
          </div>
        </div>
        <div className="flex-grow ">
          <div className="">
            <b className="text-slate-900">
              If you have a promocard please enter here
            </b>
            <div className="mt-5 h-10 flex justify-between items-center border-2 bg-slate-300 rounded-xl">
              <input
                type="text"
                placeholder="promo code"
                className="bg-transparent border-none outline-none pl-10"
              />
              <button className="w-40 border-none border-slate-400 bg-black text-white px-12 py-2 rounded-xl">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
