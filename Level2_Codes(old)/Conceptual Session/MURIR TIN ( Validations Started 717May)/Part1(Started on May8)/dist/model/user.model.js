"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "Nmae is Needed"]
    },
    age: {
        type: String,
        unique: true,
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
// // PRE QUERY MIDDLEWARE
// userSchema.pre(/^find/, function (this: Query<any, IUser>, next: NextFunction) {
//   console.log("Before Find Query");
//   // filter active users
//   this.find({ userStatus: "active" });
//   next();
// });
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
