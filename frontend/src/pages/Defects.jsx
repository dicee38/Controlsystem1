import { useEffect, useState } from "react";
import { api } from "../utils/api.js";

export default function Defects() {
  const [defects, setDefects] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    api.getDefects().then(setDefects);
  }, []);

  const create = async () => {
    if (!title || !desc) return;
    const d = await api.createDefect({ title, description: desc });
    setDefects([...defects, d]);
    setTitle("");
    setDesc("");
  };

  return (
    <div style={{ padding: "2rem" }}>
      {/* Заголовок */}
      <h2 style={{ fontSize: "1.8rem", marginBottom: "1.5rem", color: "#2196f3" }}>
        Список дефектов
      </h2>

      {/* Форма добавления */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Название дефекта"
          style={{
            flex: "1 1 200px",
            padding: "0.5rem 1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
            outline: "none",
          }}
        />
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Описание"
          style={{
            flex: "2 1 300px",
            padding: "0.5rem 1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
            outline: "none",
          }}
        />
        <button
          onClick={create}
          style={{
            background: "#2196f3",
            color: "white",
            padding: "0.5rem 1.5rem",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => e.currentTarget.style.background = "#1976d2"}
          onMouseOut={(e) => e.currentTarget.style.background = "#2196f3"}
        >
          Добавить
        </button>
      </div>

      {/* Список дефектов */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "1rem"
      }}>
        {defects.map(d => (
          <div key={d.id} style={{
            background: "white",
            padding: "1rem",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.03)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <h3 style={{ margin: "0 0 0.5rem 0", color: "#2196f3" }}>{d.title}</h3>
            <p style={{ margin: 0, color: "#555" }}>{d.description}</p>
            <p style={{ marginTop: "0.5rem", fontSize: "0.85rem", color: d.status === "open" ? "green" : "red" }}>
              Статус: {d.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
