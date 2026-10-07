import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function DishDetailPage() {
  const { id } = useParams();
  const { data: dishes, isLoading, error } = useFetch("/menu.json");

  if (isLoading) return <p>⏳ Loading dish details...</p>;
  if (error) return <p>❌ Error loading dish: {error}</p>;

  const dish = dishes?.find((d) => d.id === parseInt(id));
  if (!dish) return <p>🍽️ Dish not found</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{dish.name}</h2>
      <p><strong>Price:</strong> Rs.{dish.price.toFixed(2)}</p>
      <p><strong>Category:</strong> {dish.category}</p>
      <p><strong>Status:</strong> {dish.available ? "✅ Available" : "❌ Sold out"}</p>
      <Link to="/" style={{ display: "inline-block", marginTop: "20px" }}>← Back to menu</Link>
    </div>
  );
}

export default DishDetailPage;