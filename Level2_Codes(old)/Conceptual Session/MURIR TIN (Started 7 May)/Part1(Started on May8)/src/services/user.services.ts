import { Request, Response } from "express";
import User from "../model/user.model";
import IUser from "../interface/user.interface";


const createUser = async(payload:IUser) => {
    const result = await User.create(payload)
    return result
}



const getUser = async() => {
    const result = await User.find()
    return result
}


const getSingleUser = async(id:string):Promise<IUser|null> => {
    const result = await User.findById(id)
    return result
}

const updateUser = async(id:string,userData:IUser):Promise<IUser|null> => {
    const result = await User.findByIdAndUpdate(id, userData, {
        new: true,
        runValidators:true

    })

    return result
}





export const UserService={createUser,getUser,getSingleUser,updateUser}