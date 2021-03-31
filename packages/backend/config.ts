const fastify = {
  port: 4000,
  address: "0.0.0.0",
  allowProxy: false,
}

const postgres = {
  host: "localhost",
  url: process.env.DATABASE_URL,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
}

const jwtSecret = "dfsgdsfgsídfgsdfgsdfgsdfgsdfgsdferfghwegveafgfdsg"

export { fastify, postgres, jwtSecret }
