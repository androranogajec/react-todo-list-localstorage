import React from "react";
import s from "./Homescreen.module.css";

function Homescreen() {
  return (
    <div className={s.container}>
      <div>
        <h1>Simple-yet-effective-todolist</h1>
        <div className={s.enticeUser}>
          <p style={{ padding: "0px" }}>dont have an account yet ?</p>
          <span>
            <button style={{ cursor: "pointer" }}>join</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Homescreen;
