const ProductsPage = () => {
  return (
    <div>
      <header>
        <h1>Products</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
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
        <h2>Our Product Collection</h2>
        <p>Browse our selection of amazing products.</p>
        {/* Product listings will go here */}
      </main>

      <footer>
        <p>&copy; 2024 E-Commerce Store</p>
      </footer>
    </div>
  );
};

export default ProductsPage;
