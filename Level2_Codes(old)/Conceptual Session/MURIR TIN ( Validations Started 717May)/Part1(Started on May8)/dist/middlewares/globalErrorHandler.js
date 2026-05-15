"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const globalErrorHandler = (err, request, res, next) => {
    //-------------setting here
    // const statusCode = err.statusCode || 500
    // const message = err.message
    // const status = false
    // let statusCode = err.statusCode || 500
    // let message = err.message
    // let status = false
    const errorResponse = {
        status: "error",
        statusCode: 400,
        message: "error found",
        issues: [
            {
                path: "",
                message: ""
            }
        ]
    };
    let statusCode = errorResponse.statusCode;
    let message = errorResponse.message;
    let status = errorResponse.status;
    let issues = errorResponse.issues;
    //-----------setting here
    if (err.name && err instanceof mongoose_1.default.Error.ValidationError) {
        console.log("Ami Validation error");
        errorResponse.statusCode = 400;
        errorResponse.message = "Validation ERror";
        errorResponse.status = "error";
        const errorValues = Object.values(err.errors);
        console.log(errorValues); //transform objects to arrays
        errorValues.map((x) => {
            errorResponse.issues.push({
                path: x.path,
                message: x.message
            });
            // return {
            //   path: x.path,
            //   message: x.message,
            // };
        });
        // statusCode=501
        // message = "Validations"
        // status=false
    }
    //   res.status(errorResponse.statusCode).json({
    //     message:message,
    //     status,
    // error:err
    //   })
    res.status(errorResponse.statusCode).json({
        message: errorResponse.message,
        status: errorResponse.status,
        issues: errorResponse.issues,
    });
    //   res.status(statusCode).json({
    //     message:message,
    //     status: status,
    //     issues:issues,
    // error:err
    //   })
};
exports.globalErrorHandler = globalErrorHandler;
// export default globalErrorHandler
// import { NextFunction, Request, Response } from 'express'
// /* eslint-disable @typescript-eslint/no-explicit-any */
// const globalErrorHandler = (
//   err: any,
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   const statusCode = err.statusCode || 500
//   const message = err.message || 'Something went wrong'
//   const status = err.status || 'error'
//   res.status(statusCode).json({
//     status,
//     message,
//   })
// }
// export default globalErrorHandler
