"use strict";
// export type TErrorResponse = {
//   //messi pm
//   message: string
//   statusCode: number
//   status: "error"
Object.defineProperty(exports, "__esModule", { value: true });
exports.TErrorResponse = void 0;
//   issues: [
//     {path:string,
//       message:string,
//     }
//   ]
// }
// type TErrorIssue = {
// }
exports.TErrorResponse = {
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
