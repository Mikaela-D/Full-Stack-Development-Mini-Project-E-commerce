const AdminPage = () => {
    return (
      <div>
        <h1>Admin Dashboard</h1>
        <p>Manage your e-commerce application here.</p>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
          </li>
          <li>
            <a href="/admin/manage-products">Manage Products</a>
          </li>
          <li>
            <a href="/admin/view-orders">View Orders</a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default AdminPage;
  