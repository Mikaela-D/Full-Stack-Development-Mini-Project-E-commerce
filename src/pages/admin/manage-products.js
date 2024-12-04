import React, { useState, useEffect } from "react";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    stock: "",
  });

  // Fetch products from the database
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add a product
  const handleAddProduct = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/admin/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      setProducts([...products, data.product]);
      setFormData({ name: "", price: "", description: "", stock: "" });
    } else {
      alert(data.message);
    }
  };

  // Delete a product
  const handleDeleteProduct = async (id) => {
    const res = await fetch(`/api/admin/products?id=${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    if (res.ok) {
      setProducts(products.filter((product) => product._id !== id));
    } else {
      alert(data.message);
    }
  };

  return (
    <div>
      <h1>Manage Products</h1>

      {/* Add Product Form */}
      <form onSubmit={handleAddProduct}>
        <h2>Add Product</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Product</button>
      </form>

      {/* Product List */}
      <h2>Current Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <p>{product.name}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <p>Stock: {product.stock}</p>
            <button onClick={() => handleDeleteProduct(product._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageProducts;
