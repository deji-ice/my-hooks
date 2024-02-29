import { useEffect, useState } from "react";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const initialArray = [{ id: 1, text: "hello world" }];
  const [list, setList] = useState(initialArray);
  const [input, setInput] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("todoList");
    const parsedData = JSON.parse(data);
    setList(parsedData);
    console.log(data);
    console.log(JSON.parse(data));
  }, []);

  // useEffect(() => {
  //   if (list) {
  //     // console.log("Storing list in localStorage:", list);
  //   }
  // }, [list]);

  const deleteTodo = (idToDelete) => {
    setList(list.filter((todo) => todo.id !== idToDelete));
    localStorage.setItem("todoList", JSON.stringify(list));
  };

  function handleSubmit(e) {
    e.preventDefault();
    setList((prev) => [...prev, { id: uuidv4(), text: input }]);
    localStorage.setItem("todoList", JSON.stringify(list));
    console.log("form submitted");
  }

  function handleInput(e) {
    setInput(e.target.value);
  }

  return (
    <div className={`flex flex-col ${darkMode && "dark"}`}>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <Input handleInput={handleInput} handleSubmit={handleSubmit} />
      <TodoList list={list} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
