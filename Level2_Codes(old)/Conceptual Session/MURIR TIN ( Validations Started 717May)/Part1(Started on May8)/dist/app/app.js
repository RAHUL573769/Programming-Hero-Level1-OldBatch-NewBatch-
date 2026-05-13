"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = require("../middlewares/globalErrorHandler");
const routes_1 = __importDefault(require("../routes"));
// import { router } from '../routes'
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// app.use("/users", UserRouter)
// const globalRoute = express.Router()
// globalRoute.use("/users",UserRouter)
app.use("/api/v1", routes_1.default);
//htmkl dei..chai res.jon moton
// app.all("*", (req: Request, res: Response) => {
//   res.status(400).json({
//     message:"Router not Found",
//     path:req.path
//   })
// })
// app.all("/*", (req: Request, res: Response) => {
//   res.status(400).json({
//     message: "Router not Found",
//   });
// });
// app.use("*",(req: Request, res: Response) => {
//   res.status(404).json({
//     message: "Route not Found",
//     path: req.path
//   });
// });
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// app.use((req: Request, res: Response) => {
//   res.status(404).json({
//     success: false,
//     message: "Route Not Found",
//     path: req.path
//   });
// });
// app.use('*',notFound)
app.use(globalErrorHandler_1.globalErrorHandler);
// app.use(
//   (err: any, req: Request, res: Response, next: NextFunction) => {
//     const statusCode = err.statusCode || 500;
//     res.status(statusCode).json({
//       success: false,
//       message: "Internal Server Error",
//       error: err,
//     });
//   }
// );
exports.default = app;
