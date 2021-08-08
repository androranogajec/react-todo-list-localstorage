import React, { useState } from "react";
import "./TodoRow.css";
function TodoRow(props) {
  const [isTodoRow, setIsTodoRow] = useState(true);
  const { text, id } = props;

  return (
    <div className="todoRow" key={id}>
      <div>
        {text}
        {/*  <input /> */}
      </div>
      <div>
        <button>r</button>
        <button>c</button>
        <button>d</button>
      </div>
    </div>
  );
}

export default TodoRow;
