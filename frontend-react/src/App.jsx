import { Link } from "react-router-dom";
import Register from './components/Register';
import {NavLink, Routes, Route} from "react-router-dom";
import "./App.css";
import Login from './components/Login';
import HomeMan from "./components/HomeMan";
import Demo from "./components/Demo";


function App() {    
  return (
    <div>
      <Link to="/register">Register</Link> |{" "}
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/tasks">Tasks</NavLink>
      <NavLink to="./demo">Demo</NavLink>
      

      <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/homeman" element={<HomeMan />} />
      <Route path="/demo" element={<Demo />} />

      </Routes>
      </div>
      
  );
}

export default App;


