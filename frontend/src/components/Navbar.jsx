import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile"); // переходим на страницу профиля
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      background: "#2196f3",
      color: "white",
      borderRadius: "8px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Система Контроля</h2>
      
      {/* Кликабельный профиль */}
      <button
        onClick={handleProfileClick}
        style={{
          background: "transparent",
          border: "none",
          color: "white",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          fontWeight: "bold",
          fontSize: "1rem",
          padding: "0.25rem 0.5rem",
          borderRadius: "8px",
          transition: "0.3s"
        }}
        onMouseOver={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
        onMouseOut={(e) => e.currentTarget.style.background = "transparent"}
      >
        👷 Инженер Иванов
      </button>
    </div>
  );
};

export default Navbar;
