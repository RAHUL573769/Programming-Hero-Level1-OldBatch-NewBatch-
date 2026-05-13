import express from 'express';
import UserRouter from './user.routes';
const globalRoute = express.Router()

// globalRoute.use("/users", UserRouter)



// globalRoute.use("/tours", TourRouter)

// globalRoute.use("/services", ServiceRouter)

const randomArray = [
    {
        path:"/users",
        route:UserRouter
    }
]
randomArray.forEach((x) => {
    // globalRoute.use("/services", ServiceRouter)
  globalRoute.use(x.path,x.route)
})
export default globalRoute