import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In development, use a global variable so the MongoClient is not constantly reinitialized during hot reloads
  if (global._mongoClientPromise) {
    clientPromise = global._mongoClientPromise;
  } else {
    global._mongoClientPromise = client.connect();
    clientPromise = global._mongoClientPromise;
  }
} else {
  // In production, it's safe to directly use the MongoClient without caching
  clientPromise = client.connect();
}

export default clientPromise;
