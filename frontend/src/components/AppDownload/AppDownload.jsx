import { assets } from "../../assets/assets";

export const AppDownload = () => {
  return (
    <div className="m-auto mt-10 text-xl text-center font-medium">
      <p>
        For Better experience Download <br /> Tomato
      </p>
      <div className="flex justify-center mt-5 gap-5">
        <div className="flex justify-center m-2 ">
          <img
            className="cursor-pointer overflow-hidden transition-transform transform-gpu hover:scale-105"
            src={assets.play_store}
          />
          <img
            className="cursor-pointer overflow-hidden transition-transform transform-gpu hover:scale-105"
            src={assets.app_store}
          />
        </div>
      </div>
    </div>
  );
};
