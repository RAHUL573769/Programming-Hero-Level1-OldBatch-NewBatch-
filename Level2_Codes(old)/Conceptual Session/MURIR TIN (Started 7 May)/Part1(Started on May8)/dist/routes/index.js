"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./user.routes"));
const globalRoute = express_1.default.Router();
// globalRoute.use("/users", UserRouter)
// globalRoute.use("/tours", TourRouter)
// globalRoute.use("/services", ServiceRouter)
const randomArray = [
    {
        path: "/users",
        route: user_routes_1.default
    }
];
randomArray.forEach((x) => {
    // globalRoute.use("/services", ServiceRouter)
    globalRoute.use(x.path, x.route);
});
exports.default = globalRoute;
