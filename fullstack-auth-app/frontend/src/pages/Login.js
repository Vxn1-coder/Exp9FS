import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      return setMsg("All fields are required");
    }

    setLoading(true);

    try {
      const res = await axios.post(
        "https://exp9fs.onrender.com/api/auth/login",
        form
      );

      login(res.data);
      setMsg(" Login Successful");

      window.location.href = "/dashboard";
    } catch {
      setMsg(" Invalid Credentials");
    }

    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">
          {loading ? "Loading..." : "Login"}
        </button>
      </form>

      <p>{msg}</p>
    </div>
  );
}

export default Login;