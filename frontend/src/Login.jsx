import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import axios from "axios";

function Login() {
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailInput = (e) => {
    setUserEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async() => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password)
    
   const response = await axios.post("http://127.0.0.1:8000/token", formData, {
    headers: {
      "Content-Type": "application/json",
    }
   });
    
    localStorage.setItem("token", response.data.access_token)
   if(response.status === 200) {
     navigate("/dashboard");
   }
  };
 
  return (
    <>
      <h1>Fast API</h1>
      <div className="card">
        <label>Email</label> <br />
        <input type="email" value={email} onChange={handleEmailInput} />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={handlePasswordInput}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
}

export default Login;
