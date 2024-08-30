import { connect, connection } from "mongoose";

const conn = {
  isConnected: false,
};

const { MONGO_URL } = process.env;

export async function dbConnect() {
  if (conn.isConnected) {
    return;
  }

  const db = await connect(
    "mongodb+srv://devloque:3k5VcuI97hUomtzx@cluster0.irxpzet.mongodb.net/nextjs?retryWrites=true&w=majority&appName=Cluster0"
  );
  // console.log(db.connection.db.databaseName);
  conn.isConnected = db.connections[0].readyState;
}

connection.on("connected", () => console.log("Mongodb connected to db"));

connection.on("error", (err) => console.error("Mongodb Errro:", err.message));
