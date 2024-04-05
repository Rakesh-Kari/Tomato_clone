import { assets } from "../../assets/assets";

export const Header = () => {
  return (
    <div>
      <div className="bg-slate-200 h-[34vw] w-full relative">
        <img
          src={assets.header_img}
          alt="Random image"
          className="h-full w-full object-cover absolute top-0 left-0"
        />
        <div className="absolute bottom-0 left-0 p-4">
          <div className="text-black text-3xl font-bold ml-8 my-8">
            Order your favourite food here
          </div>
          <div className="text-black text-lg ml-8 my-6">
            Choose from a diverse menu
          </div>
          <button className="bg-blue-500 text-black px-4 py-2 ml-8 mb-10 rounded hover:bg-blue-600">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};
