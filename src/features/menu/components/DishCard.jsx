import { Link } from "react-router-dom";

function DishCard({ dish }) {
  return (
    <Link
      to={`/dish/${dish.id}`}
      style={{ textDecoration: "none", color: "inherit", display: "block" }}
    >
      <div style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        backgroundColor: "white",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        transition: "transform 0.2s",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
        <h3 style={{ margin: "0 0 10px 0" }}>{dish.name}</h3>
        <p style={{ margin: "5px 0", color: "#4CAF50", fontWeight: "bold" }}>
          Rs.{dish.price.toFixed(2)}
        </p>
        <small style={{ color: "#666" }}>{dish.category}</small>
        {!dish.available && (
          <span style={{
            display: "inline-block",
            marginLeft: "10px",
            padding: "2px 8px",
            backgroundColor: "#ff4444",
            color: "white",
            borderRadius: "4px",
            fontSize: "12px",
            fontWeight: "bold"
          }}>
            Sold out
          </span>
        )}
      </div>
    </Link>
  );
}

export default DishCard;