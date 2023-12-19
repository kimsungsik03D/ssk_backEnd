import express, { Request, Response } from "express";

const router = express.Router();

interface Payment {
  key: string;
  name: string;
}

router.get("/payment", (req: Request, res: Response) => {
  const payment: Payment[] = [
    { key: "samsung", name: "삼성카드" },
    { key: "kokmin", name: "국민카드" },
  ];

  res.status(200).json(payment);
});

export default router;
