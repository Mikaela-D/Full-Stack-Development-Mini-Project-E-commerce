import React from "react";

const AdminPage = () => {
  return (
    <div>
      <header>
        <h1>Admin Dashboard</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/orders">Orders</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h2>Admin Actions</h2>
        <ul>
          <li>
            <a href="/admin/manage-products">Manage Products</a>
          </li>
          <li>
            <a href="/admin/view-orders">View Orders</a>
          </li>
          {/* Other admin options could go here */}
        </ul>
      </main>

      <footer>
        <p>&copy; 2024 E-Commerce Store</p>
      </footer>
    </div>
  );
};

export default AdminPage;
