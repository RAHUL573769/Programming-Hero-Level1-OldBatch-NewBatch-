import express from 'express';
import UserController from '../controllers/user.controller';



const router = express.Router()
router.get("/get-user",UserController.getUserController)
router.post("/create-user", UserController.createUserController)
router.get("/get-user/:id",UserController.getSingleUserController)
router.patch("/update-user/:id",UserController.updateUserController)

const UserRouter = router
export default UserRouter