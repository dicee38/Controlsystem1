import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const linkStyle = ({ isActive }) => ({
    color: "#2196f3",
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: "none",
    padding: "0.5rem 0",
    display: "block",
  });

  const handleLogout = () => {
    localStorage.removeItem("token"); // удаляем токен
    navigate("/login"); // перенаправляем на логин
  };

  return (
    <aside style={{
      width: "220px",
      background: "#e3f2fd",
      padding: "2rem 1rem",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      minHeight: "100vh"
    }}>
      {/* Ссылка на профиль */}
      <NavLink to="/profile" style={linkStyle}>👤 Профиль</NavLink>

      <NavLink to="/dashboard" style={linkStyle}>🏠 Главная</NavLink>
      <NavLink to="/projects" style={linkStyle}>📋 Проекты</NavLink>
      <NavLink to="/defects" style={linkStyle}>⚙️ Дефекты</NavLink>
      <NavLink to="/reports" style={linkStyle}>📊 Отчёты</NavLink>

      {/* Кнопка выхода */}
      <button
        onClick={handleLogout}
        style={{
          marginTop: "auto",
          padding: "0.5rem",
          borderRadius: "8px",
          border: "none",
          background: "#f44336",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "0.3s"
        }}
        onMouseOver={(e) => e.currentTarget.style.background = "#d32f2f"}
        onMouseOut={(e) => e.currentTarget.style.background = "#f44336"}
      >
        🚪 Выйти
      </button>
    </aside>
  );
};

export default Sidebar;
