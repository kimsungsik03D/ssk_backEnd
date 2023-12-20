"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const test_js_1 = __importDefault(require("./routes/test.js"));
const payment_js_1 = __importDefault(require("./routes/payment.js"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
// const uuidAPIKey = require("uuid-apikey");
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
