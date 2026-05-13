import { model, Query, Schema } from "mongoose";
import IUser from "../interface/user.interface";


const userSchema = new Schema<IUser>({
    name: {
        type:String
    },
    age: {
        type:String
    },
    email: {
        type:String
    },
    photo: {
    type:String
},
    role: {
    type:String,
    enum:["user","admin"]
    },
    userStatus: {
      type:String,
      enum:["active","inactive"],
      default:"active"
    }

})





// // PRE QUERY MIDDLEWARE
// userSchema.pre(/^find/, function (this: Query<any, IUser>, next: NextFunction) {
//   console.log("Before Find Query");

//   // filter active users
//   this.find({ userStatus: "active" });

//   next();
// });

const User = model<IUser>("User", userSchema);

export default User