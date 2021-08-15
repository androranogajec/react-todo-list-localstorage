import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./Todo.module.css";
import Title from "./Title";
import Todorow from './TodoRow'
//input edi
function Todo(props) {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  
  function handleInput(event) {
    setInput(event.target.value);
  }

  function resetInputValue() {
    setInput("");
  }
  function handleTodo() {
    let newTodo  = { text: input, completed: false, id: uuidv4(), creator: "u1" }
    setTodoList((prevTodos)=>{
      return [
        ...prevTodos,
        newTodo,
      ]
    });
    resetInputValue();
  }

  return (
    <div className={s.container}>
      <form>
        <Title />
      </form>
      <form>
        <input className={s.input} onChange={handleInput} value={input} />
        <button
          type='button'
          style={{ cursor: "pointer" }}
          className={s.todoButton}
          onClick={handleTodo}
        >
          todo
        </button>
        {todoList.map((todo) => (
          <Todorow
              key={todo.id}
              inputParent={input}
              setInputParent={setInput}
              todo={todoList}
              setTodo={setTodoList}
              id={todo.id}
              text={todo.text}
              handleTodo={handleTodo}
              completed={todo.completed}
            />
        ))}
      </form>
    </div>
  );
}

export default Todo;
