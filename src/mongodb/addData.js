async function createAndInsertData(database) {
    try {
      // Specify the collection you want to use (will be created automatically if it doesn't exist)
      const collection = database.collection("products");
  
      // Data to insert
      const sampleProducts = [
        { name: "Product A", price: 100, description: "A high-quality product", stock: 50 },
        { name: "Product B", price: 200, description: "A premium product", stock: 20 },
        { name: "Product C", price: 300, description: "A luxury product", stock: 30 },
      ];
  
      // Insert data into the collection
      const result = await collection.insertMany(sampleProducts);
  
      console.log(`Inserted ${result.insertedCount} documents into the collection.`);
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  }
  
  // Call the function (assuming `client` is your connected MongoDB client)
  createAndInsertData(client.db("ecommerce")); // Replace "ecommerce" with your desired database name
  