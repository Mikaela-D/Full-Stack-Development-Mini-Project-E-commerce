import clientPromise from "/Users/mdiaz/Desktop/Code/full-stack-mini-project-e-commerce/src/mongodb/mongodb.js";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db(); // Use the default database from the URI

  switch (req.method) {
    case "GET":
      // Fetch all products from the database
      const products = await db.collection("products").find({}).toArray();
      res.status(200).json(products);
      break;

    case "POST":
      // Add a new product to the database
      const { name, price, description, stock } = req.body;
      const newProduct = { name, price, description, stock };
      const result = await db.collection("products").insertOne(newProduct);
      res.status(201).json(result.ops[0]); // Return the newly added product
      break;

    default:
      res.status(405).json({ message: "Method Not Allowed" });
  }
}
