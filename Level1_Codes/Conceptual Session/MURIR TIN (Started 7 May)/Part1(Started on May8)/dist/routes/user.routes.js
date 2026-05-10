"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const router = express_1.default.Router();
router.get("/get-user", user_controller_1.default.getUserController);
router.post("/create-user", user_controller_1.default.createUserController);
router.get("/get-user/:id", user_controller_1.default.getSingleUserController);
router.patch("/update-user/:id", user_controller_1.default.updateUserController);
const UserRouter = router;
exports.default = UserRouter;
