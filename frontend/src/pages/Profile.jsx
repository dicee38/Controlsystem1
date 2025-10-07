import React from "react";

export default function Profile() {
  const user = {
    name: "Инженер Иванов",
    email: "ivanov@example.com",
    role: "Engineer",
    joined: "01.01.2023"
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ fontSize: "1.8rem", color: "#2196f3", marginBottom: "1.5rem" }}>
        👤 Профиль пользователя
      </h2>

      <div style={{
        background: "white",
        padding: "2rem",
        borderRadius: "16px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
        maxWidth: "500px"
      }}>
        <p><strong>Имя:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Роль:</strong> {user.role}</p>
        <p><strong>Дата регистрации:</strong> {user.joined}</p>

        <button style={{
          marginTop: "1.5rem",
          padding: "0.75rem 1.5rem",
          background: "#2196f3",
          color: "white",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "0.3s"
        }}
        onMouseOver={(e) => e.currentTarget.style.background = "#1976d2"}
        onMouseOut={(e) => e.currentTarget.style.background = "#2196f3"}
        >
          Редактировать профиль
        </button>
      </div>
    </div>
  );
}
