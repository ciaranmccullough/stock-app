"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: '.env',
});
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("./routes/user.routes");
exports.app = express_1.default();
const API_ENDPOINT = '/api';
const API_VERSION = 'v1';
exports.app.use(`${API_ENDPOINT}/${API_VERSION}/users`, user_routes_1.userRouter);
//# sourceMappingURL=app.js.map