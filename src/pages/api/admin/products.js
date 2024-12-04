// /src/pages/api/admin/products.js
import { MongoClient } from "mongodb"; // Use MongoClient from 'mongodb'

const uri = process.env.MONGODB_URI;

export default async function handler(req, res) {
  // Check for POST request to add a product
  if (req.method === "POST") {
    try {
      // Connect to MongoDB
      const client = await MongoClient.connect(uri, {
        useUnifiedTopology: true,
      });

      // Access the database
      const db = client.db("ecommerce");

      // Get product data from request body
      const { name, price, description, stock } = req.body;

      // Check if all required fields are provided
      if (!name || !price || !description || stock == null) {
        return res.status(400).json({ message: "All fields are required." });
      }

      // Create a new product object
      const newProduct = { name, price, description, stock };

      // Insert the new product into the 'products' collection
      const result = await db.collection("products").insertOne(newProduct);

      // Close the client connection
      await client.close();

      // Return a success response with the new product's details
      return res.status(201).json({
        message: "Product added successfully.",
        product: result.ops[0], // Return the newly added product
      });
    } catch (error) {
      console.error("Error adding product:", error);
      return res.status(500).json({ message: "Internal Server Error." });
    }
  } else {
    // Handle unsupported methods
    return res.status(405).json({ message: "Method Not Allowed." });
  }
}

// import { MongoClient, ObjectId } from "mongodb"; // Use MongoClient and ObjectId from 'mongodb'

// const uri = process.env.MONGODB_URI;

// export default async function handler(req, res) {
//   if (req.method === "POST" || req.method === "DELETE") {
//     try {
//       // Connect to MongoDB
//       const client = await MongoClient.connect(uri, {
//         useUnifiedTopology: true,
//       });

//       // Access the database
//       const db = client.db("ecommerce");

//       if (req.method === "POST") {
//         // Add a new product
//         const { name, price, description, stock } = req.body;

//         if (!name || !price || !description || stock == null) {
//           return res.status(400).json({ message: "All fields are required." });
//         }

//         const newProduct = { name, price, description, stock };
//         const result = await db.collection("products").insertOne(newProduct);

//         // Close the client
//         await client.close();

//         return res
//           .status(201)
//           .json({ message: "Product added.", product: result.ops[0] });
//       } else if (req.method === "DELETE") {
//         // Delete a product
//         const { id } = req.query;

//         if (!id) {
//           return res.status(400).json({ message: "Product ID is required." });
//         }

//         const deleteResult = await db
//           .collection("products")
//           .deleteOne({ _id: new ObjectId(id) });

//         if (deleteResult.deletedCount === 0) {
//           await client.close();
//           return res.status(404).json({ message: "Product not found." });
//         }

//         // Close the client
//         await client.close();

//         return res.status(200).json({ message: "Product deleted." });
//       }
//     } catch (error) {
//       console.error("Error managing products:", error);
//       res.status(500).json({ message: "Internal Server Error." });
//     }
//   } else {
//     // Handle unsupported methods
//     res.status(405).json({ message: "Method Not Allowed." });
//   }
// }
