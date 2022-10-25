import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
function Signup() {
  let cridential = JSON.parse(localStorage.getItem("cridentialData")) || [];
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    const data = {
      name: name,
      email: email,
      password: password,
    };
    cridential.push(data);
    localStorage.setItem("cridentialData", JSON.stringify(cridential));
    navigate("/login");
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form className="form">
        <div className="signDiv">
          <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
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

export default Signup;
