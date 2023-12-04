import { config } from "dotenv";
config();
import express from "express";
import { router } from "./routes";
import { PORT } from "./utils/constants/environment";

const app = express();

app.use(express.json());

app.use("/v1", router);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}/`);
});
