import { Route, Routes } from "react-router-dom";
import "./App.css";
import Currency from "./components/Currency";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/currency" element={<Currency/>} />
      </Routes>
    </div>
  );
}

export default App;
