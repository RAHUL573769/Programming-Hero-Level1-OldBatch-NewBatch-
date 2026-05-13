"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_services_1 = require("../services/user.services");
const node_console_1 = __importDefault(require("node:console"));
const successRespose_1 = require("../helpers/successRespose");
const catchAsync_1 = require("../helpers/catchAsync");
// const successResponse=<T>(res: Response, data: T) => {
// }
// interface TResponse<T>{
//     statusCode: number
//     status: "success" | "failed"
//     data:T|T[]|null
// }
// type TResponse<T> = {
//   statusCode: number;
//   status: "success" | "failed";
//   message: string;
//   data: T | T[] | null;
// };
// const successResponse = <T>(
//   res: Response,
//   responseData: TResponse<T>
// ) => {
//   res.status(responseData.statusCode).json({
//     status: responseData.status,
//     message: responseData.message,
//     data: responseData.data,
//   });
// };
// const catchAsyncFunction = (fn: RequestHandler): RequestHandler => {
//     return async (req: Request, res: Response, next: NextFunction) => {
//         try {
//             await fn(req, res, next);
//         } catch (error) {
//             next(error);
//         }
//     };
// };
const createUserController = (0, catchAsync_1.catchAsyncFunction)(async (req, res) => {
    const userData = req.body;
    const result = await user_services_1.UserService.createUser(userData);
    (0, successRespose_1.successResponse)(res, {
        status: "success",
        statusCode: 200,
        message: "User created successfully",
        data: result,
    });
});
// const createUserController=catchAsyncFunction(async (req: Request, res: Response,next:NextFunction) => {
//     try {
//         const userData = req.body;
//         const result = await UserService.createUser(userData)
//         // throw new Error("ndr")
//         successResponse(res, {
//             status:"success" ,
//             data: result,
//             message: "",
//              statusCode:200,
//         })
//         res.status(200).json({
//             status:"Success",
//             message: "Data Created",
//             data:result
//         })
//     } catch (error) {
//         next(error)
//         res.status(500).json({
//             status:"Fsiled",
//             message:"Failed To Create User"
//         })
//     }
// })
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
