import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./Todo.module.css";
import Title from "./Title";
import TodoRow from "./TodoRow";

function Todo(props) {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

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
  console.log(todo)
  return (
    <div className={s.container}>
      <form>
        <Title />
      </form>
      <form>
        <input className={s.input} onChange={handleInput} value={input} />
        <button
          style={{ cursor: "pointer" }}
          className={s.todoButton}
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
    </div>
  );
}

export default Todo;
