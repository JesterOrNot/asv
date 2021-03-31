const postgres = require("./config").postgres

module.exports = {
  type: "postgres",
  ...postgres,
  entities: ["./src/db/entity/*.ts", "./src/db/entity/*.js"],
  migrationsTableName: "migrations",
  migrations: ["./migrations/*.ts", "./migrations/*.js"],
  cli: {
    migrationsDir: "migrations",
  },
}
