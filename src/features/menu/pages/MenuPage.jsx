import { useState } from "react";
import MenuList from "../components/MenuList";
import { useDebounce } from "../hooks/useDebounce";
import { useFetch } from "../hooks/useFetch";

function MenuPage() {
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query, 400);
  const API = import.meta.env.VITE_API_URL;
  const menuUrl = API ? `${API}/api/menu` : "/menu.json";
  const API = import.meta.env.VITE_API_URL;
  const menuUrl = API ? `${API}/api/menu` : "/menu.json";
  const { data: dishes, isLoading, error } = useFetch(menuUrl);

  if (isLoading) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <p style={{ fontSize: "20px", color: "#333" }}>
          ⏳ Loading menu...
        </p>
      </div>
    );
  }

  if (error) {
    return <p>❌ Could not load menu: {error}</p>;
  }

  const filtered = dishes?.filter((dish) =>
    dish.name.toLowerCase().includes(debounced.toLowerCase())
  ) || [];

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search dishes..."
        style={{
          padding: "8px 12px",
          width: "300px",
          marginBottom: "20px",
          fontSize: "16px",
          border: "1px solid #f5f0f0",
          borderRadius: "4px"
        }}
      />
      <MenuList dishes={filtered} />
    </div>
  );
}

export default MenuPage;