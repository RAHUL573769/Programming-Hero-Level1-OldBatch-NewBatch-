import { Request, Response } from "express";
import User from "../model/user.model";
import IUser from "../interface/user.interface";


const createUser = async(payload:IUser) => {
    const result = await User.create(payload)
    return result
}

export const UserService={createUser}