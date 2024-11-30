import React from "react";

const OrdersPage = () => {
  // Mock data for orders
  const orders = [
    { id: 1, customer: "John Doe", total: 99.99, status: "Shipped" },
    { id: 2, customer: "Jane Smith", total: 49.99, status: "Processing" },
    { id: 3, customer: "Alex Johnson", total: 150.0, status: "Delivered" },
  ];

  return (
    <div>
      <header>
        <h1>Orders</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/admin">Admin</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h2>Order List</h2>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>${order.total.toFixed(2)}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <footer>
        <p>&copy; 2024 E-Commerce Store</p>
      </footer>
    </div>
  );
};

export default OrdersPage;
