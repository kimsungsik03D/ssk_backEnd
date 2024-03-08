import express, { Request, Response } from "express";
import { authKey } from "./utils";
import test from "./routes/test.js";
import payment from "./routes/payment.js";
import openAi from "./routes/openAi.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
// const uuidAPIKey = require("uuid-apikey");

const port = 8085;

app.use((req, res, next) => {
  if (!authKey(req.headers.api_key)) {
    console.log("is Usealbe API_KEY");
    return res.status(403).json({ message: "is usealbe API_KEY" });
  } else {
    console.log("is usealbe API_KEY");
    next();
  }
});

app.use("/v1/test", test);
app.use("/v1/common", payment);
app.use("/v1/openai", openAi);

app.get("/get", (req: Request, res: Response) => {
  res.status(200);
  res.send({ text: "good" });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
