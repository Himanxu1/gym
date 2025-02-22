import express from "express";
import { logger } from "./middleware/logger/logger";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  logger.info("her");
  return console.log(`Express is listening at http://localhost:${port}`);
});
