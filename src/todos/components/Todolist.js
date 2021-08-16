import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./Todolist.module.css";
import Title from "./Title";
import Todo from "./Todo";
import useLocalStorageTodolist from "../../data/useLocalStorageTodolist";



function Todolist(props) {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useLocalStorageTodolist([]);

  function handleInput(event) {
    setInput(event.target.value);
  }

  function resetInputValue() {
    setInput("");
  }
  function handleTodo(event) {
    event.preventDefault();
    if (input.length === 0) {
      return;
    }
    let newTodo = {
      text: input,
      completed: false,
      id: uuidv4(),
      creator: "u1",
    };
    setTodoList((prevTodos) => {
      return [...prevTodos, newTodo];
    });
    resetInputValue();
  }

  return (
    <div className={s.container}>
      <div className={s.todolist}>
        <div>
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
            {todoList.map((todo, index) => (
              <Todo
                key={index}
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
        <button
          style={{}}
          onClick={(e) => {
            e.preventDefault();
            setTodoList([]);
          }}
          style={{ cursor: "pointer"}}
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default Todolist;
