import React, { useState, useEffect } from "react";
import "./TodoRow.css";

function TodoRow(props) {
  const { text, id, todo, setTodo } = props;
  const [isTodoRow, setIsTodoRow] = useState(false);
  const [input, setInput] = useState(text);
  const [isCompleted, setIsCompleted] = useState();

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
  function handleCompleted(event) {
    event.preventDefault();
    setIsCompleted((previousValue) => !previousValue);
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
  console.log(todo)
  return (
    <div className="todoRow" key={id}>
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
        <button onClick={handleRename}>r</button>
        <button onClick={handleCompleted}>c</button>
        <button onClick={handleDelete}>d</button>
      </div>
    </div>
  );
}

export default TodoRow;
