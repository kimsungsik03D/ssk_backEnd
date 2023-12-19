"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const test_js_1 = __importDefault(require("./routes/test.js"));
const payment_js_1 = __importDefault(require("./routes/payment.js"));
const app = (0, express_1.default)();
const router = express_1.default.Router();
const port = 8080;
app.use("/v1/test", test_js_1.default);
app.use("/v1/common", payment_js_1.default);
app.get("/get", (req, res) => {
    res.status(200);
    res.send({ text: "good" });
});
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
