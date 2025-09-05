import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
// import "./App.css";

function Register() {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg,setMsg]=useState("");
  const navigate = useNavigate(); 

  const handleSubmit=async (e)=>{
      e.preventDefault();
      try{
        const res=await axios.post("http://localhost:5000/auth/register",{
          email,
          password,
        });
        setMsg(res.data.message);
      }catch(err){
        setMsg(err.message);
      }
    };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {/* <input type="text"  placeholder="Enter Name"  value={name} onChange={(e) => setName(e.target.value)} required /> */}
        <input type="email" placeholder="Enter Email"  value={email}  onChange={(e) => setEmail(e.target.value)}  required/> <br /><br />
        <input type="password" placeholder="Enter Password"value={password} onChange={(e) => setPassword(e.target.value)} required/> <br /><br />
        <button type="submit">Register</button>
      </form>
      {msg && <p className="ghg">{msg}</p>}
    </div>
  );
}

export default Register;
