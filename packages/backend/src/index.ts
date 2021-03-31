import Fastify, { FastifyInstance } from "fastify"

// import { Mongoose, connect as connectDb } from "mongoose"
import { createConnection, Connection } from "typeorm"

import { createLogger, transports, format } from "winston"

import pkg from "../package.json"
import path from "path"
import { fastify } from "../config"
import InitPlugin from "./http/plugins/InitPlugin"

export type ControllerFunc = (fastify: FastifyInstance, options: any) => any

const loggerFormat = format.printf(
  ({ level, message, timestamp }) => `${timestamp} | ${level}: ${message}`
)

export const logger = createLogger({
  transports: [
    new transports.Console({
      format: format.combine(
        format.timestamp(),
        format.colorize(),
        loggerFormat
      ),
    }),
    new transports.File({
      format: format.combine(format.timestamp(), loggerFormat),
      filename: path.join(__dirname, "..", "logs", "combined.log"),
    }),
  ],
  exceptionHandlers: [
    new transports.File({
      filename: path.join(__dirname, "..", "logs", "exception.log"),
    }),
  ],
})

export class ASV {
  fastify = Fastify()
  // mongoose: Mongoose
  database: Connection

  constructor() {
    this.init()
  }

  init = async () => {
    logger.info(`ASV Backend ${ASV.version()}`)

    if (process.env.NODE_ENV === "development") {
      logger.warn(
        "ASV Backend is running in development mode. Please make sure it is running in production mode when deploying!"
      )
    }

    logger.info("Connecting to Postgres...")
    await this.initPostgres()
    // logger.info("Connecting to MongoDB...")
    // await this.initMongoDB()

    logger.info("Starting Fastify...")
    await this.initFastify()
  }

  // initMongoDB = async () => {
  initPostgres = async () => {
    try {
      // this.mongoose = await connectDb(mongoDb.url, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      // })
      // logger.info("Connected to MongoDB")
      this.database = await createConnection(require("../ormconfig"))
      logger.info("Connected to Postgres")
    } catch (e) {
      // logger.error("An error has occurred while starting MongoDB")
      logger.error("Error occurred while connecting to Postgres")
      console.error(e)

      this.exit(1)
    }
  }

  initFastify = async () => {
    this.fastify.register(InitPlugin)
    try {
      const addr = await this.fastify.listen(fastify.port, fastify.address)
      logger.info(`Fastify started at ${addr}`)
    } catch (e) {
      logger.error("An error has occurred while starting Fastify")
      logger.error(e.message)
      logger.error({ e })

      this.exit(1)
    }
  }

  static version = () => (pkg.version ? pkg.version : "1.0.0 (not exact)")

  static dev = () => process.env.NODE_ENV === "development"

  exit = (code = 0) => {
    logger.warn("Exiting application...")
    // this.mongoose.disconnect()
    if (this.database && this.database.hasOwnProperty("close"))
      this.database.close()

    process.exit(code)
  }
}

const asv = new ASV()
export default asv
