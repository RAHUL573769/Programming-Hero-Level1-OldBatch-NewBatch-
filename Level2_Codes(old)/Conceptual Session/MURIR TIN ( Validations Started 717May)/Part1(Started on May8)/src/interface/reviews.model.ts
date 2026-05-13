import { Schema } from "mongoose"

interface IReview{

    review: string
    ratings: number
    createdAt: Date
    tour: Schema.Types.ObjectId
    user:Schema.Types.ObjectId

}


export default IReview