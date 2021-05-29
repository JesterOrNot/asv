import { FasteerInstance } from "@fasteerjs/fasteer"
import { FastifyReply } from "fastify"
import { BaseError, ErrorRes, SuccessRes } from "../../utils/response"

const baseDecorators = (app: FasteerInstance) => {
  // Guard
  app.fastify.decorateRequest("guard", null)
  // Default auth decorators
  app.fastify.decorateRequest("session", null)
  app.fastify.decorateRequest("user", null)
  app.fastify.decorateRequest("authenticated", () => false)
  // Response
  app.fastify.decorateReply(
    "ok",
    <T extends object>(data: T): SuccessRes<T> => ({
      success: true,
      data,
    })
  )
  app.fastify.decorateReply(
    "err",
    (error: BaseError): ErrorRes => ({
      success: false,
      error,
    })
  )
}

const responseDecorators = (res: FastifyReply) => {
  res.ok = <T extends object>(data: T): SuccessRes<T> => {
    const success: SuccessRes<T> = {
      success: true,
      data,
    }

    res.send(success)

    return success
  }

  res.err = (error: BaseError): ErrorRes => {
    const err: ErrorRes = {
      success: false,
      error,
    }

    res.send(err)

    return err
  }
}

export { baseDecorators, responseDecorators }
