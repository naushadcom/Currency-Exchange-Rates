import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {

  let cridential = JSON.parse(localStorage.getItem("cridentialData")) || [];

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    var flag = false;
    for (var i = 0; i < cridential.length; i++) {
      if (
        cridential[i].email === email &&
        cridential[i].password === password
      ) {
        flag = true;

        break;
      } else {
        flag = false;
      }
    }
    if (flag) {
      navigate("/currency");
    } else {
      alert("Wrong credentials.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form className="form2">
        <div className="logDiv">
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" onClick={handleClick} />
        </div>
      </form>
    </div>
  );
}

export default Login;
