import { UnauthorizedException } from "@fasteerjs/exceptions"
import { FastifyRequest, FastifyReply } from "fastify"
import TokenGuard from "../guard/tokenGuard"

const NO_AUTH = [
  // Routes that don't require authentication
  "/auth",
]

const authMiddleware = async (req: FastifyRequest, _: FastifyReply): Promise<boolean> => {
  req.guard = new TokenGuard(req)

  // If the route is not a valid endpoint, req.routerPath is undefined. However, we do not want to tell
  // an unauthorized user that this endpoint does not exist, rather give them an unauthorized error.
  // Otherwise, check NO_AUTH if any of the values start with the router path. Not using req.url because
  // this way URLs with params can be also used under NO_AUTH.
  if (req.routerPath && NO_AUTH.some(val => req.routerPath.startsWith(val))) return true

  if (!(await req.guard.has())) {
    throw new UnauthorizedException("Invalid or missing auth header")
  }

  return true
}

export { authMiddleware }

export default authMiddleware
