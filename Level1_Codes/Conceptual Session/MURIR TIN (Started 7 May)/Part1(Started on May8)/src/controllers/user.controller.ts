import { Request, Response } from "express";
import User from "../model/user.model";
import { UserService } from "../services/user.services";


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

const UserController = { createUserController }
export default UserController