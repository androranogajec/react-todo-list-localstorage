import React, { useState, useEffect } from "react";
import s from "./Title.module.css";
function Title(props) {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  const [isTitle, setIsTitle] = useState(false);

  let myStorage = window.localStorage;
  useEffect(() => {
    let storedIsTitle = myStorage.getItem("title-istitle");
    let storedTitle = myStorage.getItem("title-title");
    let storedInput = myStorage.getItem("title-input");
    setInput(storedInput);
    setTitle(storedTitle);
  }, []);
  useEffect(() => {
    function isSetLocalStorageInitStateTitle(){
      if(input === null && title === null){
        setTitle('')
        setInput('')
      }
    }
    isSetLocalStorageInitStateTitle()
    myStorage.setItem("title-title", title);
    myStorage.setItem("title-input", input);
    myStorage.setItem("title-istitle", isTitle);
  },[title,input,isTitle]);

  function handleIsTitle() {
    setIsTitle((previousValue) => !previousValue);
  }

  function handleInput(event) {
    setInput(event.target.value);
  }
  
  function handleTitle(event) {
    event.preventDefault();
    setTitle(input);
    if (!isTitle && input.length === 0) {
      return;
    }
    handleIsTitle();
  }

  return (
    <div className={s.container}>
      {isTitle ? (
        <span>{title}</span>
      ) : (
        <input
          placeholder={"you can set a title here"}
          value={input}
          onChange={handleInput}
          style={{ border: "none", outline: "none", fontSize: "14px" }}
        />
      )}
      <button
        style={{ cursor: "pointer" }}
        className={s.button}
        onClick={handleTitle}
      >
        {isTitle ? "rename" : "save"}
      </button>
    </div>
  );
}

export default Title;
