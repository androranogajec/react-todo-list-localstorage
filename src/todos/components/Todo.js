import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Todo.css";
import Title from "./Title";
import TodoRow from "./TodoRow";



function Todo(props) {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [isTitle, setIsTitle] = useState(false);

  function handleIsTitle() {
    setIsTitle(true);
  }
  function handleInput(event) {
    setInput(event.target.value);
  }

  function resetInputValue() {
    setInput("");
  }
  function handleTodo(event) {
    event.preventDefault();
    setTodo([
      ...todo,
      { text: input, completed: false, id: uuidv4(), creator: "u1" },
    ]);
    resetInputValue();
  }

  console.log(todo);
  return (
    <>
      <form>
        <div onClick={handleIsTitle}>
          {isTitle ? <Title /> : "double-click-to-set-a-title"}
        </div>
      </form>
      <form>
        <input onChange={handleInput} value={input} />
        <button
          style={{ cursor: "pointer" }}
          className="todoButton"
          onClick={handleTodo}
        >
          todo
        </button>
        {todo.map((todoRow) => (
          <div key={todoRow.id}>
            {" "}
            <TodoRow
              todo={todo}
              setTodo={setTodo}
              id={todoRow.id}
              text={todoRow.text}
            />
          </div>
        ))}
      </form>
    </>
  );
}

export default Todo;
