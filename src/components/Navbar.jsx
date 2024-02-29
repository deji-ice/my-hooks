import image from "../assets/bg-mobile-light.jpg";
import imageDark from "../assets/bg-mobile-dark.jpg";

import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";

function Navbar({ setDarkMode, darkMode }) {
  return (
    <nav className=" fixed w-screen flex top-0">
      <div>
        {darkMode ? (
          <img src={imageDark} alt="" className="absolute -z-10" />
        ) : (
          <img src={image} alt="" className="absolute -z-10" />
        )}
      </div>

      <div className="flex justify-between w-full p-5 items-center mt-[1rem] ">
        <p className="text-white font-JosefinSans text-3xl font-bold mt-0 tracking-[0.5rem]">
          TODO
        </p>
        <div onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? <img src={sun} alt="" /> : <img src={moon} alt="" />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
