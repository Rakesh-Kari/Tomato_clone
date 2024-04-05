import { useContext } from "react";
import { InputBox } from "./InputBox";
import { StoreContext } from "../../context/StoreContext";
import { TotalKey } from "../Cart/TotalsKey";

export const PlaceOrder = () => {
  const { getTotal } = useContext(StoreContext);

  return (
    <form className="flex items-start justify-between gap-20 mt-10 px-10">
      <div className="w-full">
        <p className="font-bold text-xl mb-10">Delivery Information</p>
        <div className="flex gap-1">
          <InputBox type="text" placeholder="First name" />
          <InputBox type="text" placeholder="Last name" />
        </div>
        <div className="w-6/10 flex flex-col">
          <input
            type="text"
            placeholder="email"
            className="mb-5 w-1/2 border-2 border-slate-300 p-2 rounded-md  "
          />
          <input
            type="text"
            placeholder="Street Name"
            className="mb-5 w-1/2 border-2 border-slate-300 p-2 rounded-md "
          />
        </div>

        <div className="flex gap-1">
          <InputBox type="text" placeholder="City" />
          <InputBox type="text" placeholder="State Name" />
        </div>

        <div className="flex gap-1">
          <InputBox type="text" placeholder="Zip Code" />
          <InputBox type="text" placeholder="Country Name" />
        </div>
        <input
          type="text"
          placeholder="Street Name"
          className="mb-5 w-1/2 border-2 border-slate-300 p-2 rounded-md "
        />
      </div>
      <div>
        <div className="flex-grow flex flex-col gap-10 w-60">
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
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
