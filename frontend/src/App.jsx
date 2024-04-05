import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { PlaceOrder } from "./pages/PlaceOrder/PlaceOrder";
import { Cart } from "./pages/Cart/Cart";
import { Footer } from "./components/Footer/Footer";
import { useState } from "react";
import { Loginpopup } from "./components/LoginPopUp/Loginpopup";

function App() {
  const [showLogin, setShowlogin] = useState(false);

  return (
    <>
      {showLogin ? <Loginpopup setShowlogin={setShowlogin} /> : <></>}
      <div className="px-20">
        <Navbar setShowlogin={setShowlogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
