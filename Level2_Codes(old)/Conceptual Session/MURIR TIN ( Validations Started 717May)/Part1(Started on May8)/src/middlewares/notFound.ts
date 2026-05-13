import { NextFunction, Request, Response } from 'express'

const notFound = (req: Request, res: Response,next:NextFunction) => {
  res.status(404).json({
    status: 'fail',
    message: `Route Not Found for ${req.originalUrl}`,
  })
next()
}

export default notFound