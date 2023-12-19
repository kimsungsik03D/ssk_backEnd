import express, { Request, Response } from "express";
import test from "./routes/test.js";
import payment from "./routes/payment.js";

const app = express();
const router = express.Router();

const port = 8080;

app.use("/v1/test", test);
app.use("/v1/common", payment);

app.get("/get", (req: Request, res: Response) => {
  res.status(200);
  res.send({ text: "good" });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
