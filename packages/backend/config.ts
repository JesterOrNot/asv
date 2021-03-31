const fastify = {
  port: 4000,
  address: "0.0.0.0",
  allowProxy: false,
}

const postgres = {
  url:
    "postgres://hdmvtbjerbgcir:d3f6c723773c8c05a4ad34f4db17978b47a621da8f36e39df4b2a423dea437cc@ec2-54-228-250-82.eu-west-1.compute.amazonaws.com:5432/d9ogs8ma292kv",
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
}

const jwtSecret = "dfsgdsfgsídfgsdfgsdfgsdfgsdfgsdferfghwegveafgfdsg"

export { fastify, postgres, jwtSecret }
