import React, { useState } from "react";

const TodoList = () => {
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

  console.log(todoList);

  return (
    <>
      <input
        value={input}
        placeholder="Todo List"
        // onChange={() => setInput(event.target.value)} // event le what targetting
        onChange={(event) => setInput(event.target.value)}
      />

      <button onClick={handleAdd}>Add</button>
      <ul>
        {todoList.map((todoItem, index) => (
          <li key={index}>{todoItem}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
