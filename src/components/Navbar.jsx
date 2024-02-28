import image from "../assets/bg-mobile-light.jpg";

import moon from "../assets/icon-moon.svg"

function Navbar() {
  return (
    <nav className="fixed w-screen flex">
      <img src={image} alt="" className="absolute -z-10" />

      <div className="flex justify-between w-full p-5 items-center mt-[1rem] ">
        <p className="text-white font-JosefinSans text-3xl font-bold mt-0 tracking-[0.5rem]">TODO</p>
        <img src={moon} alt="" />
      </div>
      <div className="h-6 w-6 rounded-full absolute border-2 border-black top-[128%] left-4 z-20"></div>
    </nav>
  );
}

export default Navbar;
