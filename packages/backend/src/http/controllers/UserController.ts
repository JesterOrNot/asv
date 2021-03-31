import { Types } from "mongoose"
import { getConnection, getManager } from "typeorm"
import { ControllerFunc } from "../.."
import { User } from "../../db/EntityManager"
import { removeKeys } from "../../utils/ObjectUtils"
import createContext from "../helpers/Context"
import * as US from "../schemas/UserSchema"

export const routePrefix = "/user"

const UserController: ControllerFunc = async fastify => {
  fastify.get("/me", async (req, res) => {
    const ctx = await createContext(req)
    if (!ctx.success) return res.send(ctx)

    ctx.user.loginIPs = ctx.user.loginIPs.map(el => {
      delete el["token"]
      return el
    })

    return res.send({
      success: true,
      data: {
        // user: ctx.user,
        user: removeKeys(ctx.user, ["password"]),
      },
    })
  })

  fastify.patch<US.UserPatch>("/", async (req, res) => {
    const ctx = await createContext(req)
    if (!ctx.success) return res.send(ctx)

    if (ctx.user.role !== "Administrator")
      return res.send({
        success: false,
        error: {
          kind: "no_permission",
          message: "Nemáte oprávnění upravovat uživatele.",
        },
      })

    if (!Types.ObjectId.isValid(req.body.user))
      return res.send({
        success: false,
        error: {
          kind: "user_input",
          message: "ID uživatele není validní.",
        },
      })

    const user = await User.findOne({ id: req.body.user })
    if (!user)
      return res.send({
        success: false,
        error: {
          kind: "user_input",
          message: "Uživatel s daným ID neexistuje.",
        },
      })

    if (user.role === "Administrator")
      return res.send({
        success: false,
        error: {
          kind: "no_permission",
          message: "Administrátor nemůže upravovat administrátora.",
        },
      })

    req.body.password && (user.password = req.body.password)
    req.body.isAdmin &&
      (user.role = req.body.isAdmin ? "Administrator" : "User")
    req.body.username && (user.username = req.body.username)

    const updatedUser = await getManager().save(user)

    return res.send({
      success: true,
      data: {
        updatedUser,
      },
    })
  })
}

export default UserController
