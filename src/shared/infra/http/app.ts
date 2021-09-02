import express from "express";
import cors from "cors";
import { connect } from "../database/mongoose";

import { routes } from "./routes";

connect();

const app = express();

app.use(cors({ origin: "*" }));
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`[App]: Server running on port ${port}`);
});
