"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_model_1 = __importDefault(require("../model/user.model"));
const createUser = async (payload) => {
    const result = await user_model_1.default.create(payload);
    return result;
};
exports.UserService = { createUser };
