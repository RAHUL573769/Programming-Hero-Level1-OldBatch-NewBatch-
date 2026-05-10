"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_services_1 = require("../services/user.services");
const node_console_1 = __importDefault(require("node:console"));
const createUserController = async (req, res) => {
    try {
        const userData = req.body;
        const result = await user_services_1.UserService.createUser(req.body);
        res.status(200).json({
            status: "Success",
            message: "Data Created",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            status: "Fsiled",
            message: "Failed To Create User"
        });
    }
};
const getUserController = async (req, res) => {
    try {
        const result = await user_services_1.UserService.getUser();
        res.status(200).json({
            status: "Success",
            message: "Data Created",
            data: result
        });
    }
    catch (error) {
        node_console_1.default.log(error);
    }
};
const getSingleUserController = async (req, res) => {
    try {
        node_console_1.default.log(req.params.id);
        const result = await user_services_1.UserService.getSingleUser(req.params.id);
        res.status(200).json({
            status: "Success",
            message: "Data Created",
            data: result
        });
    }
    catch (error) {
        node_console_1.default.log(error);
    }
};
const updateUserController = async (req, res) => {
    try {
        const result = await user_services_1.UserService.updateUser(req.params.id, req.body);
        node_console_1.default.log('70', req.params.id);
        res.status(200).json({
            status: "Success",
            message: "Data Updated",
            data: result
        });
    }
    catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Data Updated",
            data: error
        });
    }
};
const UserController = { createUserController, getUserController, getSingleUserController, updateUserController };
exports.default = UserController;
