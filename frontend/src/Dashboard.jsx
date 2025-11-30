import { useNavigate } from "react-router-dom";
import "./App.css";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const token = localStorage.getItem("token");

  return (
    <>
      <h1>Dashboard</h1>
      <div className="card">
        <h2>Welcome!</h2>
        <p>You are successfully logged in!</p>

        <button 
          onClick={handleLogout} 
          style={{ marginTop: "20px", backgroundColor: "#ff4444" }}
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Dashboard;

