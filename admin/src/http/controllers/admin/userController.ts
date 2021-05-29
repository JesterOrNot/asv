import { HttpController } from "../../../types"
import EntityNotFoundException from "../../exceptions"
import { stringId } from "../../schema"
import {
  createUser,
  CreateUser,
  DeleteUser,
  updateUser,
  UpdateUser,
  UserId,
} from "../../schema/admin/user"
import { transformUser } from "../../transformers"

const UserController: HttpController = async (app, { db }) => {
  app.get("/", async (_, res) =>
    res.ok({
      users: (await db.user.findMany()).map(transformUser),
    })
  )

  app.get<UserId>("/:id", { schema: stringId.valueOf() }, async (req, res) => {
    const user = await db.user.findUnique({
      where: {
        id: req.params.id,
      },
    })

    if (!user) throw new EntityNotFoundException()

    res.ok({
      user: transformUser(user),
    })
  })

  app.put<CreateUser>("/", { schema: createUser.valueOf() }, async (req, res) => {
    const user = await db.user.create({
      data: req.body,
    })

    if (!user) throw new EntityNotFoundException()

    res.ok({
      user: transformUser(user),
    })
  })

  app.patch<UpdateUser>("/:id", { schema: updateUser.valueOf() }, async (req, res) => {
    const user = await db.user.findUnique({
      where: {
        id: req.params.id,
      },
    })

    if (!user) throw new EntityNotFoundException()

    const updatedUser = await db.user.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    })

    res.ok({
      user: transformUser(user),
      updatedUser: transformUser(updatedUser),
    })
  })

  app.delete<DeleteUser>("/:id", { schema: stringId.valueOf() }, async (req, res) => {
    const user = await db.user.delete({
      where: {
        id: req.params.id,
      },
    })

    if (!user) throw new EntityNotFoundException()

    res.ok({
      user: transformUser(user),
    })
  })
}

export const routePrefix = "/admin/user"

export default UserController
