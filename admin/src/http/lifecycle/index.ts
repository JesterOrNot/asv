import { FasteerInstance } from "@fasteerjs/fasteer"
import { baseDecorators, responseDecorators } from "./decorators"
import exceptionHandler from "./exception"
import authMiddleware from "./middleware/auth"

const middlewares = [
  // Authentication middleware
  authMiddleware,
]

const registerLifecycle = (app: FasteerInstance) => {
  baseDecorators(app)

  app.fastify.addHook("onRequest", async (req, res) => {
    responseDecorators(res)

    for (const middleware of middlewares) {
      const next = await middleware(req, res)
      if (!next) return // middleware failed, fail
    }
  })

  exceptionHandler(app)
}

export { registerLifecycle }

export default registerLifecycle
