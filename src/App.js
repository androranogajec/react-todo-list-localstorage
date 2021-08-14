import s from "./App.module.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from "react-router-dom";

import Homescreen from "./shared/Components/Homescreen";
import Header from "./shared/Components/Header";
import Auth from "./user/pages/Auth";
import Todolist from "./todos/components/Todolist";

function App(props) {
  return (
    <Router>
      <div className={s.container}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Todolist />
          </Route>
          <Route path="/auth" exact>
            <Auth />
          </Route>
          <Route path="/:userId" exact>
            <Homescreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
