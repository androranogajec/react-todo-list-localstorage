import React, { useState, useEffect } from "react";
import "./TodoRow.css";

function TodoRow(props) {
  const { text, id, todo, setTodo } = props;
  const [isTodoRow, setIsTodoRow] = useState(false);
  const [input, setInput] = useState(text);

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
  console.log(todo)
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
  return (
    <div className="todoRow" key={id}>
      <div>
        {isTodoRow ? (
          <input
            style={{ border: "none", outline: "none" }}
            value={input}
            onChange={handleInput}
          />
        ) : (
          text
        )}
      </div>
      <div>
        <button onClick={handleRename}>r</button>
        <button>c</button>
        <button>d</button>
      </div>
    </div>
  );
}

export default TodoRow;
