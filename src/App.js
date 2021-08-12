import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from "react-router-dom";
import Todo from "./todos/components/Todo";
import Auth from "./user/pages/Auth";
import { v4 as uuidv4 } from "uuid";
function App(props) {
  const [todoList, setTodoList] = useState([]);

  const handleTodoList = () => {
    setTodoList([...todoList, <Todo key={uuidv4()} />]);
  };
  
  return (
    <Router>
    <div className="container">
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
            <Link to="/auth">SingIn</Link>
          </button>
          <button style={{ cursor: "pointer" }} className="sUp">
            SignUp
          </button>
        </div>
      </div>
     <Switch>
       <Route path="/" exact>
       <div className="b">
        <button style={{ cursor: "pointer" }} onClick={handleTodoList}>
          Add
        </button>
      </div>
      <div className="c">
        {todoList.map((todo, index) => (
          <div key={index}>{todo}</div>
        ))}
      </div>
       </Route>
       <Route path="/auth" exact>
         <Auth/>
       </Route>
     {/*   <Redirect to="/"/> */}
     </Switch>

    </div>
    </Router>
  );
}

export default App;
