// export type TErrorResponse = {
//   //messi pm
//   message: string
//   statusCode: number
//   status: "error"

import { constants } from "crypto"

//   issues: [
//     {path:string,
//       message:string,

//     }
//   ]
// }
// type TErrorIssue = {

// }

  export const TErrorResponse = {
    status:"error",
    statusCode:400,
    message: "error found",
    issues: [
      {
        path:"",
        message:""
      }
    ]

  }

export type TErrorResponse = {
  statusCode: number
  status: 'error' | 'fail'
  message: string
  issues: TErrorIssue[]
}

export type TErrorIssue = {
  path: string | number
  message: string
}