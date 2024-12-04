import clientPromise from "@/mongodb/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("ecommerce");

  try {
    switch (req.method) {
      case "POST": // Add a new product
        const { name, price, description, stock } = req.body;

        if (!name || !price || !description || stock == null) {
          return res.status(400).json({ message: "All fields are required." });
        }

        const newProduct = { name, price, description, stock };
        const result = await db.collection("products").insertOne(newProduct);

        return res.status(201).json({ message: "Product added.", product: result.ops[0] });

      case "DELETE": // Delete a product
        const { id } = req.query;

        if (!id) {
          return res.status(400).json({ message: "Product ID is required." });
        }

        const deleteResult = await db.collection("products").deleteOne({ _id: new ObjectId(id) });

        if (deleteResult.deletedCount === 0) {
          return res.status(404).json({ message: "Product not found." });
        }

        return res.status(200).json({ message: "Product deleted." });

      default:
        res.status(405).json({ message: "Method Not Allowed." });
    }
  } catch (error) {
    console.error("Error managing products:", error);
    res.status(500).json({ message: "Internal Server Error." });
  }
}
