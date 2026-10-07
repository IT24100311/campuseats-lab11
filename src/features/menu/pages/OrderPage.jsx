import { useState } from "react";
import { Link } from "react-router-dom";

function OrderPage() {
  const [form, setForm] = useState({ name: "", email: "", qty: 1 });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  function validate(v) {
    const e = {};
    if (v.name.trim().length < 2) e.name = "Name too short (min 2 characters)";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email)) e.email = "Enter a valid email";
    if (Number(v.qty) < 1) e.qty = "Qty must be at least 1";
    return e;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length === 0) setDone(true);
  }

  if (done) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>✅ Order Placed Successfully!</h2>
        <p>Thanks, <strong>{form.name}</strong>! Your order has been received.</p>
        <p>Email: {form.email}</p>
        <p>Quantity: {form.qty}</p>
        <Link to="/">← Back to menu</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>📝 Place Order</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Name:</label><br />
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.name && <span style={{ color: "red", fontSize: "14px" }}>{errors.name}</span>}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label><br />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.email && <span style={{ color: "red", fontSize: "14px" }}>{errors.email}</span>}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Quantity:</label><br />
          <input
            name="qty"
            type="number"
            value={form.qty}
            onChange={handleChange}
            min="1"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.qty && <span style={{ color: "red", fontSize: "14px" }}>{errors.qty}</span>}
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default OrderPage;