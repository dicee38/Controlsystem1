import { useState } from "react";
import { api } from "../utils/api.js";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("engineer");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await api.register(email, password, role);
    if (res.message === "User registered successfully") {
      navigate("/login");
    } else {
      alert(res.message || "Ошибка регистрации");
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
      <form onSubmit={handleRegister} style={{
        background: "white",
        padding: "2rem",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        maxWidth: "400px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }}>
        <h2 style={{
          fontSize: "1.8rem",
          color: "#2196f3",
          textAlign: "center",
          marginBottom: "1rem",
          fontWeight: "bold"
        }}>
          Регистрация
        </h2>

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
            transition: "0.2s"
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
            transition: "0.2s"
          }}
          onFocus={(e) => e.currentTarget.style.borderColor = "#2196f3"}
          onBlur={(e) => e.currentTarget.style.borderColor = "#ccc"}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{
            padding: "0.75rem 1rem",
            borderRadius: "12px",
            border: "1px solid #ccc",
            outline: "none",
            transition: "0.2s",
            background: "white"
          }}
          onFocus={(e) => e.currentTarget.style.borderColor = "#2196f3"}
          onBlur={(e) => e.currentTarget.style.borderColor = "#ccc"}
        >
          <option value="engineer">Engineer</option>
          <option value="manager">Manager</option>
          <option value="observer">Observer</option>
        </select>

        <button
          type="submit"
          style={{
            padding: "0.75rem",
            borderRadius: "12px",
            background: "#2196f3",
            color: "white",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s"
          }}
          onMouseOver={(e) => e.currentTarget.style.background = "#1976d2"}
          onMouseOut={(e) => e.currentTarget.style.background = "#2196f3"}
        >
          Зарегистрироваться
        </button>

        <p style={{ textAlign: "center", fontSize: "0.9rem", color: "#555" }}>
          Уже есть аккаунт?{" "}
          <Link to="/login" style={{ color: "#2196f3", textDecoration: "underline" }}>
            Войти
          </Link>
        </p>
      </form>
    </div>
  );
}
