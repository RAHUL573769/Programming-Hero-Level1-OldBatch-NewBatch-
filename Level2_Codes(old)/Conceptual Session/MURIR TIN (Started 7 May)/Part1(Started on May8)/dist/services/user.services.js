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
const getUser = async () => {
    const result = await user_model_1.default.find();
    return result;
};
const getSingleUser = async (id) => {
    const result = await user_model_1.default.findById(id);
    return result;
};
const updateUser = async (id, userData) => {
    const result = await user_model_1.default.findByIdAndUpdate(id, userData, {
        new: true,
        runValidators: true
    });
    return result;
};
exports.UserService = { createUser, getUser, getSingleUser, updateUser };
