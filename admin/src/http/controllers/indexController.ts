import { HttpController } from "../../types"

const IndexController: HttpController = async (app, { db }) => {
  app.get("/", async (req, res) => {
    res.ok({})
  })
}

export default IndexController
