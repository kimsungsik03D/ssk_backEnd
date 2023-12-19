"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/payment", (req, res) => {
    const payment = [
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
exports.default = router;
