"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const colors_1 = __importDefault(require("colors"));
const index_1 = __importDefault(require("./routes/index"));
const db_1 = require("./config/db");
const port = 4000;
(0, db_1.connectDB)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ credentials: true }));
app.use(express_1.default.json());
app.use("/fitness", index_1.default);
app.listen(port, () => {
    console.log(colors_1.default.rainbow(`Backend Server Started and Running on Port ${port}...`));
});
