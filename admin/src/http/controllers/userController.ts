import { HttpController } from "../../types"
import { transformUser } from "../transformers"

const UserController: HttpController = async app => {
  app.get("/", async (req, res) => {
    res.ok({
      user: transformUser(await req.guard.user()),
    })
  })
}

export const routePrefix = "/user"

export default UserController
