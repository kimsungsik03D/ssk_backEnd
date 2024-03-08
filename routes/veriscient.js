"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connect_1 = require("../db/connect");
const router = express_1.default.Router();
router.get("/select", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let conn = null;
    try {
        conn = yield (0, connect_1.getConnection)();
        const no = req.query.no;
        const resultFetch = yield conn.execute("SELECT * FROM KSS.BOARD where no = :no ORDER BY REG_DT DESC", [no]);
        const { rows } = resultFetch;
        console.log(rows);
        res.status(200).json(rows);
    }
    catch (error) {
        res.status(500).json(error);
    }
    finally {
        if (conn) {
            try {
                yield conn.close();
            }
            catch (error) {
                console.log(error);
            }
        }
        // return result;
    }
}));
router.get("/selectList", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let conn = null;
    try {
        conn = yield (0, connect_1.getConnection)();
        const resultFetch = yield conn.execute("SELECT * FROM KSS.BOARD ORDER BY REG_DT DESC");
        // const resultFetch = await conn.execute("SELECT * FROM KSS.BOARD where no>:no and CATE_CD = :cateCd ORDER BY REG_DT DESC",[20,'3']);
        const { rows, metaData } = resultFetch;
        const data = rows.map((value) => {
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
    }
    catch (error) {
        res.status(500).json(error);
    }
    finally {
        if (conn) {
            try {
                yield conn.close();
            }
            catch (error) {
                console.log(error);
            }
        }
    }
}));
router.post("/insert", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let conn = null;
    try {
        conn = yield (0, connect_1.getConnection)();
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
    }
    catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}));
router.post("/delete", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, connect_1.getSelect)(req, res);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
router.get("/test", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, connect_1.getSelect)(req, res);
    res.status(200).json(result);
    // res.send("hello list");
}));
exports.default = router;
