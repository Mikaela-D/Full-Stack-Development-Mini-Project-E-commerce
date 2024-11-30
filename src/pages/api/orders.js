import clientPromise from "/Users/mdiaz/Desktop/Code/full-stack-mini-project-e-commerce/src/mongodb/mongodb.js";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db(); // Use the default database from the URI

  switch (req.method) {
    case "GET":
      // Fetch all orders from the database
      const orders = await db.collection("orders").find({}).toArray();
      res.status(200).json(orders);
      break;

    case "POST":
      // Create a new order in the database
      const { customer, items, total, status } = req.body;
      const newOrder = {
        customer,
        items,
        total,
        status,
        createdAt: new Date(),
      };
      const result = await db.collection("orders").insertOne(newOrder);
      res.status(201).json(result.ops[0]); // Return the newly created order
      break;

    default:
      res.status(405).json({ message: "Method Not Allowed" });
  }
}
