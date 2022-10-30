import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  Heading,
} from "@chakra-ui/react";

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
      alert("successful");
    } else {
      alert("Wrong credentials.");
    }
  };

  return (
    <div>
      <Heading style={{marginTop:"50px"}}>Login</Heading>
      <FormControl style={{ width: "50%", margin: "auto",marginTop:"20px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",padding:"40px" }}>
        <Box>
        <FormLabel>Email</FormLabel>
          <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input  style={{
              backgroundColor: "green",
              fontWeight: "bold",
              color: "white",
              marginTop: "30px",
            }} type="submit" onClick={handleClick} />
        </Box>
        <FormHelperText>
        We'll never share your Credential.{" "}
          <Link
            to={"/signup"}
            style={{
              textDecoration: "underline",
              color: "blue",
            }}
          >
            Singup Here
          </Link>
        </FormHelperText>
      </FormControl>
    </div>
  );
}

export default Login;
