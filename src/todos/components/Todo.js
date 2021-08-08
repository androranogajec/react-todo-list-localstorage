import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Todo.css";
import Title from "./Title";

function TodoRow(props) {
  const [isTodoRow, setIsTodoRow] = useState(true);
  const { text, id } = props;
  console.log(text, id);
  return (
    <>
      {text}
      {/*  <input /> */}
      <button>r</button>
      <button>c</button>
      <button>d</button>
    </>
  );
}

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
  function handleTodo(event) {
    event.preventDefault();
    setTodo([...todo, { text: input, completed: false, id: uuidv4() }]);
  }
  console.log(todo)
  return (
    <div className="a">
      <form className="todo">
        <div onClick={handleIsTitle}>
          {isTitle ? <Title /> : "click-to-set-a-title"}
        </div>
        <input onChange={handleInput} />
        <button className="todoButton" onClick={handleTodo}>
          todo
        </button>
        {todo.map((todo) => (
          <div key={todo.id}>
            {" "}
            <TodoRow id={todo.id} text={todo.text} />
          </div>
        ))}
      </form>
    </div>
  );
}

export default Todo;
