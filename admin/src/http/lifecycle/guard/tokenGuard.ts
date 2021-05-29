import { parseAuthHeader, ParsedAuthHeader } from "@fasteerjs/fasteer"
import {
  UnauthorizedException,
  UserInputException,
  ValidationException,
} from "@fasteerjs/exceptions"
import { User } from "@prisma/client"
import { services } from "../../../utils/container"
import { FastifyRequest } from "fastify"
import Guard from "."
import Password from "../../../utils/password"

class TokenGuard implements Guard {
  private req: FastifyRequest<any>

  constructor(req: FastifyRequest) {
    this.req = req
  }

  async user(): Promise<User> {
    if (this.req.user) return this.req.user

    const [, sessionToken] = parseAuthHeader(this.req)

    const { db, logger } = services()

    const session = await db.session.findUnique({
      where: {
        id: sessionToken,
      },
      include: {
        user: true,
      },
    })

    if (!session) {
      logger.warn(`Unknown auth token: "${sessionToken}"`)
      throw new UnauthorizedException("Missing or invalid auth header")
    }

    this.req.session = session
    this.req.user = session.user

    // In order for the "this is" type check to work
    // this needs to be a function.
    this.req.authenticated = () => true

    return session.user
  }

  async has(): Promise<boolean> {
    try {
      return !!(await this.user())
    } catch {
      return false
    }
  }

  async attempt(email: string, password: string): Promise<User> {
    const { db, logger } = services()

    const user = await db.user.findUnique({
      where: {
        email,
      },
    })

    if (!user || !Password.verify(password, user.password)) {
      logger.warn(`${this.req.ip} attempted to login as ${email}.`)
      throw new UnauthorizedException("Invalid credentials")
    }

    logger.info(`${this.req.ip} logged in as ${email}.`)

    return user
  }
}

export { TokenGuard }
export default TokenGuard
