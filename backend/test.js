require("dotenv").config();

const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

console.log("URI:", uri);

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected!");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

run();