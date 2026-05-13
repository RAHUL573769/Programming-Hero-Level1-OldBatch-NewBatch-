"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successResponse = void 0;
const successResponse = (res, responseData) => {
    res.status(responseData.statusCode).json({
        status: responseData.status,
        message: responseData.message,
        data: responseData.data,
    });
};
exports.successResponse = successResponse;
