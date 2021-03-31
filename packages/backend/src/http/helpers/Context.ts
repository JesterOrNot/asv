import { FastifyRequest } from "fastify"
import { User } from "../../db/EntityManager"
import Jwt from "./Jwt"

export const createContext = async (req: FastifyRequest) => {
  const token = req.headers.authorization
  if (!token)
    return {
      success: false,
      error: {
        kind: "user_input",
        message: "Chybí přihlašovací token. Prosím, přihlaste se.",
      },
    }

  if (!token.startsWith("Bearer "))
    return {
      success: false,
      error: {
        kind: "user_input",
        message: "Chybí prefix tokenu. Prosím, zkontrolujte svůj request.",
      },
    }

  const payload = Jwt.getPayload(token)
  if (!payload)
    return {
      success: false,
      error: {
        kind: "invalid_token",
        message: "Neplatný autorizační token. Prosím, přihlaste se znovu!",
      },
    }

  const user = await User.findOne({ id: payload.userId })
  if (!user)
    return {
      success: false,
      error: {
        kind: "invalid_token",
        message: "Uživatel neexistuje. Prosím, přihlaste se.",
      },
    }
  return { success: true, payload, user }
}

export default createContext
