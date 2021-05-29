import { createFasteer, FasteerInstance } from "@fasteerjs/fasteer"
import { registerContainerServices } from "@matherioneu/container"
import { PrismaClient } from "@prisma/client"
import { greenBright, bold } from "chalk"
import path from "path"
import { dev } from "./env"
import lifecycle from "./http/lifecycle"

const db = new PrismaClient()

const opts = {
  host: process.env.HOST ?? "127.0.0.1",
  port: typeof process.env.PORT === "string" ? Number(process.env.PORT) : 4200,
}

const app = createFasteer({
  controllers: [path.join(__dirname, "http", "controllers", "*.{ts,js}")],
  ...opts,
  logEmits: [],
  loggerOptions: {
    consoleLogging: {
      logErrors: true,
    },
  },
  cors: {
    origin: process.env.CORS ?? `${opts.host}:${opts.port}`,
    credentials: true,
  },
  helmet: true,
  development: dev,
})

app.plugin(lifecycle)

app.inject("db", db)

registerContainerServices({
  app: FasteerInstance,
  logger: FasteerInstance["logger"],
})

const start = async () => {
  const addr = await app.start()

  app.logger.info(greenBright(`Started at ${bold(addr)} | Development: ${bold(dev)}`))
}

start()
