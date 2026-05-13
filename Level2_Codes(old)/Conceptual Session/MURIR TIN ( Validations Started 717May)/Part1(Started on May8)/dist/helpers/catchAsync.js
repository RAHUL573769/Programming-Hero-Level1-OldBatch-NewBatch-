"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchAsyncFunction = void 0;
const catchAsyncFunction = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        }
        catch (error) {
            next(error);
        }
    };
};
exports.catchAsyncFunction = catchAsyncFunction;
