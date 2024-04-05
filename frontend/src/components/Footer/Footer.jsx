import { assets } from "../../assets/assets";

export const Footer = () => {
  return (
    <div className="bg-gray-800 text-white px-20 pt-20 mt-10 gap-y-1.5 ">
      <div className="w-full grid grid-cols-3 gap-20">
        <div className="">
          <img src={assets.logo} alt="logo" />
          <p> Loream Ispur is simply dummy text</p>
          <div className="flex p-2 mx-2 mb-4 cursor-pointer">
            <img className="m-1" src={assets.facebook_icon} />
            <img className="m-1" src={assets.twitter_icon} />
            <img className="m-1" src={assets.linkedin_icon} />
          </div>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-bold">COMPANY</h2>
          <ul className="list-disc cursor-pointer">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="mb-10">
          <h2 className=" text-2xl font-bold">Get in Touch</h2>
          <ul className="list-disc cursor-pointer">
            <li>+91 9063274140</li>
            <li>ramalexx189@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="flex flex-col items-center pt-10">
        Copyright 2024 @ Tomato.com
      </p>
    </div>
  );
};
