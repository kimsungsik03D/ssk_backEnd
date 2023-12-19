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
    ];
    res.status(200).json(payment);
});
exports.default = router;
