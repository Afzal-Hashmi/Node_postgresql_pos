const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  posrt: "5432",
  password: "080080800",
  database: "POS",

  // connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});

async function connectDB() {
  try {
    await client.connect();
    console.log("connected to db");
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = { client, connectDB };
