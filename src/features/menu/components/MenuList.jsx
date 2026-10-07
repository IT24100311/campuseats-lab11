import DishCard from "./DishCard";

function MenuList({ dishes }) {
  if (!dishes || dishes.length === 0) {
    return <p>No dishes match your search.</p>;
  }

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: "20px",
      padding: "20px 0"
    }}>
      {dishes.map((dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  );
}

export default MenuList;