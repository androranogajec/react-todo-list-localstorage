import React, { useState } from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import s from "./Todolist.module.css";
function Todolist() {
  const [todoList, setTodoList] = useState([]);
  const handleTodoList = () => {
    setTodoList([...todoList, {id: uuidv4()} ]);
  };
  
  return (
    <div className={s}>
    {/*   <button
        className={s.button}
        onClick={handleTodoList}
        style={{ cursor: "pointer" }}
      >
        Add
      </button> */}
      <div style={{marginTop: '20px'}} className={s.content}>
      <Todo/>
      </div>
    </div>
  );
}

export default Todolist;
