import express, { Request, Response } from "express";

const router = express.Router();

router.get("/list", (req: Request, res: Response) => {
  res.send("hello list");
});

export default router;