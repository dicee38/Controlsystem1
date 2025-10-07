export default function Reports() {
  return (
    <div style={{ padding: "2rem" }}>
      {/* Заголовок */}
      <h1 style={{ fontSize: "1.8rem", color: "#2196f3", marginBottom: "1.5rem" }}>
        📑 Отчёты
      </h1>

      {/* Информационный блок */}
      <div style={{
        background: "white",
        padding: "1.5rem",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        maxWidth: "800px"
      }}>
        <p style={{ color: "#555", lineHeight: "1.6" }}>
          Здесь будет отображаться аналитика проектов и дефектов. 
          Вы сможете экспортировать данные в Excel или CSV, а также просматривать ключевые показатели и статистику по статусам.
        </p>
      </div>

      {/* Пример карточек с отчетами */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "1rem",
        marginTop: "2rem"
      }}>
        <div style={{
          background: "#e3f2fd",
          padding: "1rem",
          borderRadius: "12px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          textAlign: "center",
          cursor: "pointer",
          transition: "transform 0.2s"
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.03)"}
        onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          📊 Проекты по статусам
        </div>

        <div style={{
          background: "#e3f2fd",
          padding: "1rem",
          borderRadius: "12px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          textAlign: "center",
          cursor: "pointer",
          transition: "transform 0.2s"
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.03)"}
        onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          🐞 Дефекты по приоритету
        </div>

        <div style={{
          background: "#e3f2fd",
          padding: "1rem",
          borderRadius: "12px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          textAlign: "center",
          cursor: "pointer",
          transition: "transform 0.2s"
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.03)"}
        onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          📥 Экспорт данных
        </div>
      </div>
    </div>
  );
}
