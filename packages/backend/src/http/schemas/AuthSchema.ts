import { RouteGenericInterface } from "fastify/types/route"

export interface Login extends RouteGenericInterface {
  Body: {
    username: string
    password: string
    remember: boolean
  }
}

export const login = {
  body: {
    type: "object",
    required: ["username", "password", "remember"],
    properties: {
      username: {
        type: "string",
      },
      password: {
        type: "string",
      },
      remember: {
        type: "boolean",
      },
    },
  },
}
