import express, { Request, Response } from "express";

const router = express.Router();

router.get("/list", (req: Request, res: Response) => {
  res.send("hello list");
});

router.get("/view", (req: Request, res: Response) => {
  res.send("hello view");
});

router.get("/write", (req: Request, res: Response) => {
  res.send("hello write");
});

router.post("/write", (req: Request, res: Response) => {
  res.send("hello write post");
});

router.get("/edit", (req: Request, res: Response) => {
  res.send("hello edit");
});

router.post("/edit", (req: Request, res: Response) => {
  res.send("hello edit post");
});

router.post("/delete", (req: Request, res: Response) => {
  res.send("hello delete");
});

export default router;
