"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String
    },
    age: {
        type: String
    },
    email: {
        type: String
    },
    photo: {
        type: String
    },
    role: {
        type: String,
        enum: ["user", "admin"]
    },
    userStatus: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    }
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
