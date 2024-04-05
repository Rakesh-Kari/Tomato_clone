import { menu_list } from "../../assets/assets";

export const Exploremenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-5xl text-zinc-900 font-medium pt-5">
        Explore our Menu
      </h1>
      <p className="max-w-60">Choose from a diverse menu</p>
      <div className="flex justify-between items-center text-center mx-5 overflow-x-auto ">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
            >
              <div className="w-[7.5vw] cursor-pointer rounded-fill">
                <img
                  className={
                    category === item.menu_name
                      ? " border-4 rounded-full border-red-500"
                      : " "
                  }
                  src={item.menu_image}
                  alt="Menu"
                />
              </div>
              <p className="mt-3 text-slate-900 cursor-pointer ">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="mx-10 my-0 h-2 bg-slate-300" />
    </div>
  );
};
