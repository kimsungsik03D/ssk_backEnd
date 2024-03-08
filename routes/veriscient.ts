import express, { Request, Response } from "express";

import { getSelect, getConnection } from "../db/connect";

const router = express.Router();

router.get("/select", async (req: Request, res: Response) => {
  let conn = null;
  try {
    conn = await getConnection();

    const no = req.query.no;

    const resultFetch = await conn.execute(
      "SELECT * FROM KSS.BOARD where no = :no ORDER BY REG_DT DESC",
      [no]
    );

    const { rows } = resultFetch;
    console.log(rows);

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json(error);
  } finally {
    if (conn) {
      try {
        await conn.close();
      } catch (error) {
        console.log(error);
      }
    }
    // return result;
  }
});

router.get("/selectList", async (req: Request, res: Response) => {
  let conn = null;
  try {
    conn = await getConnection();

    const resultFetch = await conn.execute(
      "SELECT * FROM KSS.BOARD ORDER BY REG_DT DESC"
    );
    // const resultFetch = await conn.execute("SELECT * FROM KSS.BOARD where no>:no and CATE_CD = :cateCd ORDER BY REG_DT DESC",[20,'3']);

    const { rows, metaData } = resultFetch;

    const data = rows.map((value: any) => {
      return {
        contentNum: value[0],
        title: value[1],
        cont: value[2],
        cateNm: value[3],
        noteYn: value[4],
        regDt: value[5],
        modDt: value[6],
      };
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  } finally {
    if (conn) {
      try {
        await conn.close();
      } catch (error) {
        console.log(error);
      }
    }
  }
});

router.post("/insert", async (req: Request, res: Response) => {
  let conn = null;
  try {
    conn = await getConnection();

    const { title, cateCd, noteYn, cont } = req.body;
    console.log("title : ", req);
    console.log("title : ", req.body);
    console.log("title : ", title);
    console.log("cateCd : ", cateCd);
    console.log("noteYn : ", noteYn);
    console.log("cont : ", cont);

    // const result = await conn.executeMany(
    //   "INSERT INTO KSS.BOARD( NO, TITLE, CONT, CATE_CD, NOTE_YN, MOD_DT, REG_DT) VALUES( (SELECT NVL(MAX(NO), 0) + 1 as maxNum FROM KSS.BOARD), :title, :cont, :cateCd, :noteYn, SYSDATE, SYSDATE)",
    //   [[title, cont, cateCd, noteYn]]
    // );

    // console.log(result);
    // const { rowsAffected } = result;
    // console.log(rowsAffected);

    // res.status(200).json(rowsAffected);
    res.status(200).json({});
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

router.post("/delete", async (req: Request, res: Response) => {
  try {
    const result = await getSelect(req, res);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/test", async (req: Request, res: Response) => {
  const result = await getSelect(req, res);

  res.status(200).json(result);
  // res.send("hello list");
});

export default router;
