import mongoose from "mongoose";
let database: mongoose.Connection;

const { MONGO_USER, MONGO_PASSWORD, MONGO_DATABASE } = process.env;

const connect = () => {
  const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.ynxhs.mongodb.net/${MONGO_DATABASE}?retryWrites=true&w=majority`;

  if (database) {
    return;
  }

  mongoose.connect(uri);

  database = mongoose.connection;

  database.once("open", async () => {
    console.log("[Database] MongoDB connected");
  });

  database.on("error", () => {
    console.log("Error connecting to database");
  });
};

const disconnect = () => {
  if (!database) {
    return;
  }
  mongoose.disconnect();
};

export { connect, disconnect };
