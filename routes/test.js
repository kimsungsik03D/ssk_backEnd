"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/list", (req, res) => {
    res.send("hello list");
});
router.get("/view", (req, res) => {
    res.send("hello view");
});
router.get("/write", (req, res) => {
    res.send("hello write");
});
router.post("/write", (req, res) => {
    res.send("hello write post");
});
router.get("/edit", (req, res) => {
    res.send("hello edit");
});
router.post("/edit", (req, res) => {
    res.send("hello edit post");
});
router.post("/delete", (req, res) => {
    res.send("hello delete");
});
exports.default = router;
