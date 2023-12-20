import express, { Request, Response } from "express";
import { payment, paymentSaleLate } from "../constants";
import { authKey } from "../utils/index.js";

const router = express.Router();

router.get("/payment", (req: Request, res: Response) => {
  if (!authKey(req.headers.api_key)) {
    return res.status(403).json({ message: "error" });
  }

  return res.status(200).json(payment);
});

router.get("/paymentSaleLate", (req: Request, res: Response) => {
  if (!authKey(req.headers.api_key)) {
    return res.status(403).json({ message: "error" });
  }

  return res.status(200).json(paymentSaleLate);
});

export default router;
