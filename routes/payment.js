"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("../constants");
const index_js_1 = require("../utils/index.js");
const router = express_1.default.Router();
router.get("/payment", (req, res) => {
    if (!(0, index_js_1.authKey)(req.headers.api_key)) {
        return res.status(403).json({ message: "error" });
    }
    return res.status(200).json(constants_1.payment);
});
router.get("/paymentSaleLate", (req, res) => {
    if (!(0, index_js_1.authKey)(req.headers.api_key)) {
        return res.status(403).json({ message: "error" });
    }
    return res.status(200).json(constants_1.paymentSaleLate);
});
exports.default = router;
