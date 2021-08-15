import React, { useState, useEffect } from "react";
import s from "./Todo.module.css";

function TodoRow(props) {
  const { text, id, todo, setTodo, completed } = props;
  const [isTodoRow, setIsTodoRow] = useState(false);
  const [input, setInput] = useState(text);
  const [isCompleted, setIsCompleted] = useState(completed);

 

  function handleInput(event) {
    setInput(event.target.value);
  }
  function handleIsTodoRow() {
    setIsTodoRow((previousValue) => !previousValue);
  }
  function findTodoId(state) {
    return state.find((todo) => todo.id === id);
  }
  function findTodoIndexById(state, id) {
    return state.indexOf(id);
  }
 
  

  function handleRename(event) {
    event.preventDefault();
    handleIsTodoRow();
    let todoCopy = [...todo];
    let todoId = findTodoId(todo);
    let todoIndex = findTodoIndexById(todo, todoId);
    todoCopy[todoIndex] = {
      ...todoCopy[todoIndex],
      text: input,
    };
    setTodo(todoCopy);
  }
  function handleIsCompleted(){
    setIsCompleted((previousValue) => !previousValue);
  }
  function handleCompleted(event) {
    event.preventDefault();
    handleIsCompleted()
    let todoCopy = todo.map((todo) => todo);
    let todoId = findTodoId(todo);
    let todoIndex = findTodoIndexById(todo, todoId);
    todoCopy[todoIndex] = Object.assign(todoCopy[todoIndex], {
      completed: isCompleted,
    });
    setTodo(todoCopy);
  }
  function handleDelete(event){
    event.preventDefault()
    let todoCopy = todo.map((todo) => todo);
    let todoId = findTodoId(todo);
    let todoIndex = findTodoIndexById(todo, todoId);
    todoCopy.splice(todoIndex,1)
    setTodo(todoCopy)

  }
 
  return (
    <div className={s.container} key={id}>
      <div style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
        {isTodoRow ? (
          <input 
            style={{ border: "none", outline: "none"}}
            value={input}
            onChange={handleInput}
          />
        ) : (
          <span>{text}</span>
        )}
      </div>
      <div>
        <button style={{cursor: 'pointer'}} onClick={handleRename}>r</button>
        <button style={{cursor: 'pointer'}} onClick={handleCompleted}>c</button>
        <button style={{cursor: 'pointer'}} onClick={handleDelete}>d</button>
      </div>
    </div>
  );
}

export default TodoRow;
