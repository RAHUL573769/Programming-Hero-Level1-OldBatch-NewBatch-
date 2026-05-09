"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_services_1 = require("../services/user.services");
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
const UserController = { createUserController };
exports.default = UserController;
