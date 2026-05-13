import express, { Application, NextFunction, Request, Response } from 'express'
import cors from "cors"
import UserRouter from '../routes/user.routes'
import notFound from '../middlewares/notFound'
import { globalErrorHandler } from '../middlewares/globalErrorHandler'
import globalRoute from '../routes'
// import { router } from '../routes'

const app:Application = express()


app.use(express.json())
app.use(cors())




// app.use("/users", UserRouter)

// const globalRoute = express.Router()

// globalRoute.use("/users",UserRouter)
app.use("/api/v1", globalRoute)
//htmkl dei..chai res.jon moton

// app.all("*", (req: Request, res: Response) => {
//   res.status(400).json({
//     message:"Router not Found",
//     path:req.path
//   })
// })
// app.all("/*", (req: Request, res: Response) => {
//   res.status(400).json({
//     message: "Router not Found",

//   });
// });


// app.use("*",(req: Request, res: Response) => {
//   res.status(404).json({
//     message: "Route not Found",
//     path: req.path
//   });
// });
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})
// app.use((req: Request, res: Response) => {
//   res.status(404).json({
//     success: false,
//     message: "Route Not Found",
//     path: req.path
//   });
// });
// app.use('*',notFound)
app.use(globalErrorHandler)

// app.use(
//   (err: any, req: Request, res: Response, next: NextFunction) => {
//     const statusCode = err.statusCode || 500;

//     res.status(statusCode).json({
//       success: false,
//       message: "Internal Server Error",
//       error: err,
//     });
//   }
// );
export default app