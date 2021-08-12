import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Auth.css";

const DUMMY_USERS = [
  
];

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState([]);
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }
  function handleIsSignedIn() {
    setIsSignedIn();
  }
  function pushUserToDatabase(){

  }
  function createUser(event) {
    event.preventDefault();
    setUser([...user, { userId: uuidv4(), email: email, password: password }]);

  }
  console.log(user);

  return (
    <div className="authContainer">
      <form className="auth" onSubmit={createUser}>
        <h1>Sign Up</h1>
        <div>
          {" "}
          email
          <input type="email" value={email} onInput={handleEmail} />
        </div>
        <div style={{ marginBottom: "5px" }}>
          {" "}
          password
          <input type="password" value={password} onInput={handlePassword} />
        </div>
        <button style={{ cursor: "pointer" }}>to-do-in</button>
      </form>
    </div>
  );
}

export default Auth;
