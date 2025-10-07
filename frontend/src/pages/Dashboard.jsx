import React from "react";

const Dashboard = () => (
  <div>
    <h1 style={{ marginBottom: "1rem" }}>Панель управления</h1>
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "1rem"
    }}>
      <div style={{
        background: "#e3f2fd",
        borderRadius: "8px",
        padding: "1.5rem",
        textAlign: "center"
      }}>
        <h2>📁 Проекты</h2>
        <p>Активных: 12</p>
      </div>
      <div style={{
        background: "#e3f2fd",
        borderRadius: "8px",
        padding: "1.5rem",
        textAlign: "center"
      }}>
        <h2>🧱 Дефекты</h2>
        <p>В работе: 37</p>
      </div>
      <div style={{
        background: "#e3f2fd",
        borderRadius: "8px",
        padding: "1.5rem",
        textAlign: "center"
      }}>
        <h2>👷 Исполнители</h2>
        <p>Активных: 8</p>
      </div>
    </div>
  </div>
);

export default Dashboard;
