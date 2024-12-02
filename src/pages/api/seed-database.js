// pages/api/seed-database.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Connect to MongoDB
      const client = await MongoClient.connect(uri, {
        useUnifiedTopology: true,
      });

      // Access the database
      const database = client.db("ecommerce");

      // Access the collection
      const collection = database.collection("products");

      // Sample data to insert
      const sampleProducts = [
        {
          name: "Product D",
          price: 100,
          description: "A high-quality product",
          stock: 50,
        },
        {
          name: "Product E",
          price: 200,
          description: "A premium product",
          stock: 20,
        },
        {
          name: "Product F",
          price: 300,
          description: "A luxury product",
          stock: 30,
        },
      ];

      // Insert data into the collection
      const result = await collection.insertMany(sampleProducts);

      // Close the client
      await client.close();

      // Respond to the request
      res
        .status(200)
        .json({ message: `Inserted ${result.insertedCount} products.` });
    } catch (error) {
      console.error("Error seeding database:", error);
      res
        .status(500)
        .json({ message: "An error occurred while seeding the database." });
    }
  } else {
    res.status(405).json({ message: "Only POST requests are allowed." });
  }
}
