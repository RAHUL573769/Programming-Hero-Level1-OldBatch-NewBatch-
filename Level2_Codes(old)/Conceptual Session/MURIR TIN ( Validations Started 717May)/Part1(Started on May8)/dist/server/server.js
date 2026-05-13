"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("../app/app"));
const config_1 = __importDefault(require("../config/config"));
const port = config_1.default.port;
app_1.default.listen(port, () => {
    mongoose_1.default.connect("mongodb://localhost:27017/MurirTin5sthMay");
    console.log(`Example app listening on port1 ${port}`);
});
