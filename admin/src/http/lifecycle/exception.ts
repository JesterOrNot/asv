import fasteerExceptions from "@fasteerjs/exceptions"
import { FasteerInstance, hookLoggerToEmitter } from "@fasteerjs/fasteer"
import { ErrorKind } from "../../utils/response"

const exceptionHandler = (app: FasteerInstance) => {
  app.plugin(
    fasteerExceptions({
      errorHandler: (err, req, res) => {
        // This error is thrown when using the parseAuthHeader function.
        // Unfortunetely, right now there is no better way to figure out
        // whether it's this error other than checking the message.
        if (err.message && /(auth|authorization) (prefix|header)/g.test(err.message)) {
          return res.err({
            kind: "UNAUTHORIZED",
            message: "Invalid auth header",
          })
        }

        // console.log(req.routerPath)
        console.log({ err })
        // console.log({ err })

        return res.err({
          kind: "INTERNAL",
          message: "Internal Server Error",
        })
      },
    })
  )
}

export { exceptionHandler }

export default exceptionHandler
