import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { MenuItem } from "./MenuItem";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

export const Navbar = ({ setShowlogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotal } = useContext(StoreContext);

  return (
    <div className="flex justify-between items-center py-10 px-0">
      <img className="w-100" src={assets.logo} alt="logo" />
      <ul className="flex gap-5 text-gray-500 text-lg">
        <MenuItem isActive={menu === "home"} onClick={() => setMenu("home")}>
          <a href="/">home</a>
        </MenuItem>
        <MenuItem isActive={menu === "menu"} onClick={() => setMenu("menu")}>
          menu
        </MenuItem>
        <MenuItem
          isActive={menu === "mobile app"}
          onClick={() => setMenu("mobile app")}
        >
          mobile app
        </MenuItem>
        <MenuItem
          isActive={menu === "contact us"}
          onClick={() => setMenu("contact us")}
        >
          contact us
        </MenuItem>
      </ul>
      <div className="flex items-center gap-7">
        <img src={assets.search_icon} alt="search" />
        <div className="relative">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="search" />
          </Link>
        </div>
        <div className="bg-transparent text-lg border border-slate-400 px-8 rounded-3xl cursor-pointer hover:bg-slate-700 transition duration-1000">
          <button onClick={() => setShowlogin(true)}>Sign in</button>
        </div>
      </div>
    </div>
  );
};
