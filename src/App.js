import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from "react-router-dom";
import Todo from "./todos/components/Todo";
import Homescreen from "./shared/Components/Homescreen";
import Header from "./shared/Components/Header";
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
        <Header />
        <Switch>
          <Route path="/" exact>
            <Homescreen />
          </Route>
          <Route path="/auth" exact>
            <Auth />
          </Route>
          <Route path="/:userId" exact>
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
