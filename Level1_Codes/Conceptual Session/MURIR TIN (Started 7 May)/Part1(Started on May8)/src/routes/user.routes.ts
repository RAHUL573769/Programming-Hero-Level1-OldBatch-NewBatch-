import express from 'express';
import UserController from '../controllers/user.controller';



const router = express.Router()

router.post("/create-user", UserController.createUserController)

const UserRouter = router
export default UserRouter