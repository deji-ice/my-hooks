/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";

const TodoList = ({list, deleteTodo}) => {

  return (
    <div
      className="rounded-md absolute top-[-25px]  , 
        mx-8 left-0 right-0 bg-white mt-52 flex-col flex 
        items-center justify-center w-80 drop-shadow-lg"
    >
      <ul className="flex flex-col w-full ">
        {list?.map((item) => (
          <li
            key={item.id}
            className="flex ju
            
            stify-between w-full p-5 items-center border-b border-b-slate-400"
          >
            <span className="flex items-center gap-2">
              <input type="checkbox" name="check" id="check" className="" />
              <p className="mb-1">{item.text}</p>
            </span>
            <IoMdClose onClick={() => {deleteTodo(item.id)}} className="text-xl" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
