import React from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.css";
function Header(props) {
  return (
    <div className={s.container}>
      <div>
        <button style={{ cursor: "pointer" }} className="m">
          dark/light mode
        </button>
        
      </div>
      <div>urban-octo-todolist</div>
      <div>
        <button style={{ cursor: "pointer" }} className="sIn">
          <Link to="/">Dashboard</Link>
        </button>
        <button onClick={(e)=>{e.preventDefault()}} style={{ cursor: "pointer" }} className="sIn">
          <Link to="/auth">SingUp</Link>
        </button>
        <button style={{ cursor: "pointer" }} className="sUp">
          <Link to="/auth">SingIn</Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
