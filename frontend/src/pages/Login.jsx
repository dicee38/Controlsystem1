import { useState, useEffect } from "react";
import { api } from "../utils/api.js";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // при монтировании компонента подгружаем токен из localStorage
    const token = localStorage.getItem("token");
    if (token) {
      api.setToken(token);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await api.login(email, password);

    if (res.token) {
      // сохраняем токен в localStorage
      localStorage.setItem("token", res.token);
      // устанавливаем токен для всех последующих запросов axios
      api.setToken(res.token);
      navigate("/dashboard"); // или куда нужно после логина
    } else {
      alert(res.message || "Ошибка входа");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#e3f2fd",
      padding: "1rem"
    }}>
      <div style={{
        background: "white",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        padding: "2rem",
        maxWidth: "400px",
        width: "100%"
      }}>
        <h2 style={{
          fontSize: "1.8rem",
          textAlign: "center",
          color: "#2196f3",
          marginBottom: "1.5rem",
          fontWeight: "bold"
        }}>
          Control System Login
        </h2>

        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "0.75rem 1rem",
              borderRadius: "12px",
              border: "1px solid #ccc",
              outline: "none",
              transition: "0.2s",
            }}
            onFocus={(e) => e.currentTarget.style.borderColor = "#2196f3"}
            onBlur={(e) => e.currentTarget.style.borderColor = "#ccc"}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "0.75rem 1rem",
              borderRadius: "12px",
              border: "1px solid #ccc",
              outline: "none",
              transition: "0.2s",
            }}
            onFocus={(e) => e.currentTarget.style.borderColor = "#2196f3"}
            onBlur={(e) => e.currentTarget.style.borderColor = "#ccc"}
          />
          <button
            type="submit"
            style={{
              padding: "0.75rem",
              borderRadius: "12px",
              background: "#2196f3",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "0.3s"
            }}
            onMouseOver={(e) => e.currentTarget.style.background = "#1976d2"}
            onMouseOut={(e) => e.currentTarget.style.background = "#2196f3"}
          >
            Login
          </button>
        </form>

        <p style={{ marginTop: "1rem", textAlign: "center", color: "#555", fontSize: "0.9rem" }}>
          Нет аккаунта?{" "}
          <Link to="/register" style={{ color: "#2196f3", textDecoration: "underline" }}>
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  );
}
