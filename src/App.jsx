import { useState } from "react";
import "./App.css";
import { MdDeleteForever } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") {
      //!input
      return;
    }
    setTodoList([...todoList, input]); // ...todoList : array spread ani gives previous array's elements, input: adds new element in list
    setInput("");
  };

  const handleDelete = (indexToDel) => {
    const newTodoList = todoList.filter((_, index) => index != indexToDel); // like map:  looping, _ means no item passing
    // console.log(newTodoList);
    setTodoList(newTodoList); // newTodo list to display
  };

  console.log(todoList);

  return (
    <>
      <input
        value={input}
        placeholder="Todo List"
        // onChange={() => setInput(event.target.value)} // event le what targetting
        onChange={(event) => setInput(event.target.value)}
      />

      <button onClick={handleAdd}>
        <IoAddCircle />
      </button>
      <ul>
        {todoList.map((todoItem, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              gap: "5px",
              justifyContent: "space-between",
            }}
          >
            {todoItem}
            <button onClick={() => handleDelete(index)}>
              <MdDeleteForever />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

// .filter function => num.filter(n=> n>2) :gives num greater than 2
// icon: lucid, react-icons
// react-router-dom: tailwind
