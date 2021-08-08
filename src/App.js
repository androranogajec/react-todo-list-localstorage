import "./App.css";
import React, { useState } from "react";
import Todo from "./todos/components/Todo";

function App(props) {
  const [todoList, setTodoList] = useState([]);

  const handleTodoList = () => {
    setTodoList([...todoList, <Todo />]);
  };
 
  return (
    <div className="container">
      <div className="a">
        <button className="m">dark/light mode</button>
        <div className="b">urban-octo-todolist</div>
        <div className="s">
          <button className="sIn">signIn</button>
          <button className="sUp">signUp</button>
        </div>
      </div>
      <div className="b">
        <button onClick={handleTodoList}>add</button>
      </div>
      <div className="c">
        {todoList.map((todo, index) => (
          <div key={index}>{todo}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
