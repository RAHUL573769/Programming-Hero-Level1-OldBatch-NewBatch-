import { model, Schema } from "mongoose";
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


const User = model<IUser>("User", userSchema)
export default User