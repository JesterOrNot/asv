import { RouteGenericInterface } from "fastify/types/route"
import { Project } from "../../db/entity/Project"

export interface ProjectPut extends RouteGenericInterface {
  Body: {
    project: Project
  }
}

export interface ProjectGet extends RouteGenericInterface {
  Params: {
    slug: string
  }
}

export const projectGet = {
  params: {
    types: "object",
    required: ["slug"],
    properties: {
      slug: {
        type: "string",
      },
    },
  },
}

export const projectPut = {
  body: {
    type: "object",
    required: ["project"],
    properties: {
      project: {
        required: ["name", "images", "mainImage"],
        properties: {
          name: {
            type: "string",
          },
          description: {
            type: "string",
          },
          website: {
            type: "string",
          },
          address: {
            type: "string",
          },
          images: {
            type: "array",
          },
          mainImage: {
            type: "string",
          },
        },
      },
    },
  },
}
