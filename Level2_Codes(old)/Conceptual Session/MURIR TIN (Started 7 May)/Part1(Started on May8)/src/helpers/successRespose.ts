import { Response } from "express";

type TResponse<T> = {
  statusCode: number;
  status: "success" | "failed";
  message: string;
  data: T | T[] | null;
};

export const successResponse = <T>(
  res: Response,
  responseData: TResponse<T>
) => {
  res.status(responseData.statusCode).json({
    status: responseData.status,
    message: responseData.message,
    data: responseData.data,
  });
};