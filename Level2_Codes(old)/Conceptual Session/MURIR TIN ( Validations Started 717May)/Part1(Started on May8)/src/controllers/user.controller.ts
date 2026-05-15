import { NextFunction, Request, RequestHandler, Response } from "express";
import User from "../model/user.model";
import { UserService } from '../services/user.services';
import console from "node:console";
import { successResponse } from "../helpers/successRespose";
import { catchAsyncFunction } from "../helpers/catchAsync";

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
const createUserController = catchAsyncFunction(
    async (req: Request, res: Response) => {

        const userData = req.body;
// throw new Error("Val")
        const result = await UserService.createUser(userData);

        successResponse(res, {
            status: "success",
            statusCode: 200,
            message: "User created successfully",
            data: result,
        });
    }
);
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

const getUserController = async (req: Request, res: Response) => {
    try {
        const result = await UserService.getUser()
            res.status(200).json({
            status:"Success",
            message: "Data Created",
            data:result


        })

    } catch (error) {

        console.log(error)

    }
}

const getSingleUserController = async (req: Request, res: Response) => {
    try {
        console.log(req.params.id)
        const result = await UserService.getSingleUser(req.params.id as string)
            res.status(200).json({
            status:"Success",
            message: "Data Created",
            data:result


        })

    } catch (error) {

        console.log(error)

    }
}
const updateUserController = async (req: Request, res: Response) => {
    try {

        const result = await UserService.updateUser(req.params.id as string,req.body)

        console.log('70',req.params.id)
        res.status(200).json({
            status:"Success",
            message: "Data Updated",
            data:result


        })
    } catch (error) {
res.status(400).json({
            status:"Failed",
            message: "Data Updated",
            data:error


        })
    }
}

const UserController = { createUserController ,getUserController,getSingleUserController,updateUserController}
export default UserController