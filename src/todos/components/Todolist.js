import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./Todolist.module.css";
import Title from "./Title";
import Todo from "./Todo";

let myStorage = window.localStorage;

function Todolist(props) {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    let todoListCopy = [...todoList];
    if(myStorage.getItem('array') === null){
      return []
    }
    let storedArray = JSON.parse(myStorage.array);
    for (let i = 0; i < storedArray.length; i++) {
      todoListCopy[i] = {
        ...todoListCopy[i],
        text: storedArray[i],
      };
      setTodoList(todoListCopy);
    }
  }, []);
  useEffect(() => {
    function isSetLocalStorageInitStateTodoList(){
      if(todoList === null){
        setTodoList([])
      }
    }
    isSetLocalStorageInitStateTodoList()
    let array = todoList.map((element, index) => element.text);
    myStorage.setItem("array", JSON.stringify(array));
  }, [todoList]);

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
    </div>
  );
}

export default Todolist;
