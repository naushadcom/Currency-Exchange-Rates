import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Heading,
} from "@chakra-ui/react";
// import "./signup.css";
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
      <Heading style={{marginTop:"50px"}}>Sign up</Heading>
      <FormControl style={{ width: "50%", margin: "auto",marginTop:"20px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",padding:"40px" }}>
        <Box>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Name" onChange={(e) => setName(e.target.value)} />
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Input
            style={{
              backgroundColor: "green",
              fontWeight: "bold",
              color: "white",
              marginTop: "30px",
            }}
            type="submit"
            onClick={handleClick}
          />
        </Box>
        <FormHelperText>
          Already have an account ?{" "}
          <Link
            to={"/login"}
            style={{
              textDecoration: "underline",
              color: "blue",
            }}
          >
            Login Here
          </Link>
        </FormHelperText>
      </FormControl>
    </div>
  );
}

export default Signup;
