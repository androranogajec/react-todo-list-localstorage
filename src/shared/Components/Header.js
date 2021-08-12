import React from "react";
import { Link } from "react-router-dom";
import './Header'
function Header() {
  return (
    <div className="a">
      <button style={{ cursor: "pointer" }} className="m">
        dark/light mode
      </button>
      <div className="b">urban-octo-todolist</div>
      <div>
        <button style={{ cursor: "pointer" }} className="sIn">
          <Link to="/">Dashboard</Link>
        </button>
        <button style={{ cursor: "pointer" }} className="sIn">
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
