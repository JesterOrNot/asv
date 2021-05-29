import fasteerExceptions from "@fasteerjs/exceptions"
import { FasteerInstance } from "@fasteerjs/fasteer"

const exceptionHandler = (app: FasteerInstance) => {
  app.plugin(
    fasteerExceptions({
      errorHandler: (err, req, res) => {
        // This error is thrown when using the parseAuthHeader function.
        // Unfortunetely, right now there is no better way to figure out
        // whether it's this error other than checking the message.
        if (err.message && /(auth|authorization) (prefix|header)/g.test(err.message)) {
          return res.send({
            success: false,
            error: {
              kind: "UNAUTHORIZED",
              message: "Invalid auth header",
            },
          })
        }

        return res.send({
          success: false,
          error: {
            kind: "UNAUTHORIZED",
          },
        })
      },
    })
  )
}

export { exceptionHandler }

export default exceptionHandler
