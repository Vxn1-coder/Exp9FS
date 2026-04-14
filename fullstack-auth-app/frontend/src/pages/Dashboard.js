import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { logout } = useContext(AuthContext);

  const role = localStorage.getItem("role");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Dashboard</h1>

      <h3>Role: {role}</h3>

      <br />

      <a href="/admin">Go to Admin Page</a>

      <br /><br />

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;