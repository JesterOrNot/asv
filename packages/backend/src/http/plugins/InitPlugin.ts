import fastifyPlugin from "fastify-plugin"

import fastifyCors from "fastify-cors"
import fastifyHelmet from "fastify-helmet"
import { glob } from "glob"

import path from "path"
import { ASV, logger } from "../.."
import { routePrefix } from "../controllers/AuthController"

export default fastifyPlugin(async (app, options) => {
  const dev = ASV.dev()
  app.register(fastifyCors)
  app.register(fastifyHelmet)

  app.setErrorHandler(function (error, request, reply) {
    if (error.validation)
      return reply.send({
        success: false,
        error: {
          kind: "validation_error",
          message:
            "Chyba validate požadavku. Zkontrolujte ho a zkuste to později.",
        },
      })

    logger.error(error.message)
    logger.error(error)

    return reply.send({
      success: false,
      error: {
        kind: "internal_server_error",
        message: "Interní chyba serveru. Prosím, zkuste to později.",
      },
    })
  })

  // Controllers
  const ctrls = glob.sync(
    path.join(__dirname, "..", "controllers", "*Controller.ts")
  )
  for (const ctrl of ctrls) {
    const baseName = path.parse(ctrl).base
    const controller = await import(ctrl)

    if (!controller.default) {
      logger.warn(
        dev
          ? `Controller ${baseName} does not have a default export. Skipping...`
          : `An internal error has occurred while starting Fastify!`
      )
      continue
    }
    if (typeof controller.default !== "function") {
      logger.warn(
        dev
          ? `Controller ${baseName} does not default export a function. Skipping...`
          : `An internal error has occurred while starting Fastify!`
      )
      continue
    }

    if (dev) logger.info(`Controller ${baseName} registered!`)

    controller.hasOwnProperty("routePrefix")
      ? app.register(controller.default, {
          prefix: `/api/v1${controller.routePrefix}`,
        })
      : app.register(controller.default, { prefix: "/api/v1" })
  }
})
