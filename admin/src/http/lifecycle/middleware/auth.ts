import { UnauthorizedException } from "@fasteerjs/exceptions"
import { FastifyRequest, FastifyReply } from "fastify"
import TokenGuard from "../guard/tokenGuard"

const NO_AUTH = [
  // Routes that don't require authentication
  "/auth",
]

const authMiddleware = async (req: FastifyRequest, _: FastifyReply): Promise<boolean> => {
  req.guard = new TokenGuard(req)

  if (NO_AUTH.some(req.routerPath.startsWith)) return true

  if (!req.guard.has()) {
    throw new UnauthorizedException("Invalid or missing auth header")
  }

  return true
}

export { authMiddleware }

export default authMiddleware
