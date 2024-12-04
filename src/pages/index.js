import React from "react";

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to the E-Commerce Store</h1>
        <nav>
          <ul>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/orders">Orders</a>
            </li>
            <li>
              <a href="/admin">Admin</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h2>Featured Products</h2>
        <p>The products will be displayed here</p>
        {/* Products will go here */}
      </main>

      <footer>
        <p>&copy; 2024 E-Commerce Store</p>
      </footer>
    </div>
  );
};

export default HomePage;
