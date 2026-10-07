import { Routes, Route, NavLink } from "react-router-dom";
import MenuPage from "./features/menu/pages/MenuPage";
import DishDetailPage from "./features/menu/pages/DishDetailPage";
import OrderPage from "./features/menu/pages/OrderPage";

function App() {
  return (
    <div>
      <nav style={{
        padding: "15px 20px",
        borderBottom: "2px solid #eee",
        backgroundColor: "#f8f9fa",
        marginBottom: "20px"
      }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            marginRight: "20px",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "#4CAF50" : "#333"
          })}
        >
          🏠 Menu
        </NavLink>
        <NavLink
          to="/order"
          style={({ isActive }) => ({
            marginRight: "20px",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "#4CAF50" : "#333"
          })}
        >
          📝 Place Order
        </NavLink>
      </nav>

      <div style={{ padding: "0 20px" }}>
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/dish/:id" element={<DishDetailPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="*" element={<p>404 - Page not found</p>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;