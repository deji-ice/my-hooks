/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";

const TodoList = ({list}) => {

  return (
    <div
      className="rounded-md absolute top-[-25px]  
        mx-8 left-0 right-0 bg-white mt-52 flex-col flex 
        items-center justify-center w-80"
    >
      <ul className="flex flex-col w-full ">
        {list?.map((item) => (
          <li
            key={item.id}
            className="flex justify-between w-full p-5 items-center"
          >
            <span className="flex items-center gap-2">
              <input type="checkbox" name="check" id="check" className="" />
              <p className="mb-1">{item.text}</p>
            </span>
            <IoMdClose className="text-xl" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
