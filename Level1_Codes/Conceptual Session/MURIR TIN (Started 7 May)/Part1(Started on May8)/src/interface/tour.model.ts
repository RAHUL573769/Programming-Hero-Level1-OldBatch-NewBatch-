interface ITour{
    name: string
    durationHours: number
    ratingsAverage: number
    ratingsQuality: number
    price: number
    imageCover: string
    images: string[]
    createdAt: Date
    startDates: Date[]
    locations: string[]
    startLocation:string
slug:string
}

export default ITour