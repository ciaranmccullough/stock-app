"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_1 = require("../controllers/user");
exports.userRouter = express_1.Router();
exports.userRouter.get('/', user_1.getUsers);
//# sourceMappingURL=user.routes.js.map