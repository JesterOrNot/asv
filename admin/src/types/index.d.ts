import { PrismaClient, Session, User } from ".prisma/client"
import { Fasteer, FasteerInstance } from "@fasteerjs/fasteer"
import { FastifyInstance } from "fastify"
import Guard from "../http/lifecycle/guard"
import { BaseError, ErrorRes, SuccessRes } from "../utils/response"

interface ServiceContainer {
  app: FasteerInstance
  logger: FasteerInstance["logger"]
  db: PrismaClient
}

type HttpController = Fasteer.FCtrl<FastifyInstance, {}, ServiceContainer>

declare module "fastify" {
  interface AuthenticatedRequest {
    user: User
    session: Session
  }

  interface FastifyRequest {
    user: User | null
    session: Session | null
    authenticated: () => this is AuthenticatedRequest
    guard: Guard
  }

  interface FastifyReply {
    ok: <T extends object>(data: T) => SuccessRes<T>
    err: (error: BaseError) => ErrorRes
  }
}

export { ServiceContainer, HttpController }
