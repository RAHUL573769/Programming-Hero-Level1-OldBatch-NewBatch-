"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const globalErrorHandler = (err, request, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message;
    const status = false;
    res.status(statusCode).json({
        message: message,
        status
    });
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
