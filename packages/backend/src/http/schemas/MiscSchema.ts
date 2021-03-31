import { RouteGenericInterface } from "fastify/types/route"

export interface SettingsPatch extends RouteGenericInterface {
  Body: {
    main?: {
      emails: string[]
      phones: string[]
      address: string
      about: string
    }
    slides?: { src: string; text: string }[]
    team?: { name: string; position: string; image: string }[]
  }
}

export const settingsPatch = {
  body: {
    type: "object",
    properties: {
      main: {
        // main settings
        type: "object",
        properties: {
          emails: {
            type: "array",
          },
          phones: {
            type: "array",
          },
          address: {
            type: "string",
          },
          about: {
            type: "string",
          },
        },
      },
      slides: {
        type: "array",
      },
      team: {
        type: "array",
      },
    },
  },
}
