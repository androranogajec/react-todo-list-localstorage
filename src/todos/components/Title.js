import React, { useState } from "react";
import "./Title.css";
function Title(props) {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState([]);
  const [isTitle, setIsTitle] = useState(false);

  function handleInput(event) {
    setInput(event.target.value);
  }
  function handleTitle(event) {
    event.preventDefault();
    setTitle([{ text: input }]);
    handleIsTitle();
  }
  function handleIsTitle() {
    setIsTitle(previousValue => !previousValue)
  }
  return (
    <div className="titleContent">
      {isTitle ? (
        title.map((title, key) => <span key={key}>{title.text}</span>)
      ) : (
        <input
          value={input}
          onChange={handleInput}
          style={{ border: "none", outline: "none", fontSize: "14px" }}
        />
      )}
      <button  className="titleButton" onClick={handleTitle}>
        {isTitle ? "rename" : "save"}
      </button>
    </div>
  );
}

export default Title;
