import { RouteGenericInterface } from "fastify/types/route"

export interface UserPatch extends RouteGenericInterface {
  Body: {
    user: string
    password?: string
    username?: string
    isAdmin?: boolean
  }
}
