import { useState } from "react";
import "./App.css";

function App() {
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailInput = (e) => {
    setUserEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Password does not match");
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
        <label>Confirm Password</label>
        <br />
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPassword}
        />
        <br />
        <button onClick={handleSignUp}>SignUp</button>
      </div>
    </>
  );
}

export default App;
