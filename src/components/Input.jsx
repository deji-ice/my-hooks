/* eslint-disable react/prop-types */
import { RiCircleLine } from "react-icons/ri";

const Input = ({handleInput, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} className=" ">
      <RiCircleLine className="absolute top-[14%] left-12 text-gray-600 z-30 text-3xl" />
      <input
        placeholder="Create a new todo.."
        type="text"
        onChange={(e) => handleInput(e)}
        className=" bg-white dark:bg-slate  pl-14 font-JosefinSans absolute top-[13%]  text-left p-3 rounded w-[80%] left-[9.5%]"
      />
    </form>
  );
};

export default Input;
