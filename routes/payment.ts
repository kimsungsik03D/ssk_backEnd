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
    { key: "uri", name: "우리카드" },
    { key: "hyundai", name: "현대" },
    { key: "lotte", name: "롯데" },
    { key: "toss", name: "토스" },
    { key: "hana", name: "하나" },
    { key: "bc", name: "비씨" },
    { key: "nonghyup", name: "농협" },
    { key: "kakaobank", name: "카카오뱅크" },
    { key: "kbank", name: "케이뱅크" },
    { key: "kiup", name: "기업" },
    { key: "master", name: "마스터" },
  ];

  res.status(200).json(payment);
});

export default router;
