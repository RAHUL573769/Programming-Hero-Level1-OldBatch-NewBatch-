import { Request, Response } from "express";
import User from "../model/user.model";
import { UserService } from '../services/user.services';
import console from "node:console";


const createUserController=  async (req: Request, res: Response) => {

    try {
        const userData = req.body;
        const result = await UserService.createUser(req.body)
        res.status(200).json({
            status:"Success",
            message: "Data Created",
            data:result


        })

    } catch (error) {
        res.status(500).json({
            status:"Fsiled",
            message:"Failed To Create User"
        })
    }

}

const getUserController = async (req: Request, res: Response) => {
    try {
        const result = await UserService.getUser()
            res.status(200).json({
            status:"Success",
            message: "Data Created",
            data:result


        })

    } catch (error) {

        console.log(error)

    }
}

const getSingleUserController = async (req: Request, res: Response) => {
    try {
        console.log(req.params.id)
        const result = await UserService.getSingleUser(req.params.id as string)
            res.status(200).json({
            status:"Success",
            message: "Data Created",
            data:result


        })

    } catch (error) {

        console.log(error)

    }
}
const updateUserController = async (req: Request, res: Response) => {
    try {

        const result = await UserService.updateUser(req.params.id as string,req.body)

        console.log('70',req.params.id)
        res.status(200).json({
            status:"Success",
            message: "Data Updated",
            data:result


        })
    } catch (error) {
res.status(400).json({
            status:"Failed",
            message: "Data Updated",
            data:error


        })
    }
}

const UserController = { createUserController ,getUserController,getSingleUserController,updateUserController}
export default UserController