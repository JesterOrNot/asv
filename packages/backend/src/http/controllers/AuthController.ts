import { ControllerFunc } from "../.."
import { IPRecord, User } from "../../db/EntityManager"
import * as AS from "../schemas/AuthSchema"
import bcrypt from "bcryptjs"
import Jwt from "../helpers/Jwt"
// import { IPRecord } from "../../db/entity/IPRecord"
import { getManager } from "typeorm"

export const routePrefix = "/auth"

const AuthController: ControllerFunc = async fastify => {
  fastify.post<AS.Login>("/login", { schema: AS.login }, async (req, res) => {
    const { username, password, remember } = req.body

    // const newAdmin = User.create({
    //   username: "Vottus",
    //   password: "test123",
    //   role: "Administrator",
    //   loginIPs: [],
    // })
    // const newUser = User.create({
    //   username: "VottusUser",
    //   password: "test123",
    //   role: "User",
    //   loginIPs: [],
    // })

    // getManager().save([newAdmin, newUser])

    const user = await User.findOne({ username })
    if (!user)
      return res.send({
        success: false,
        error: {
          kind: "user_input",
          message: "Uživatelské jméno neexistuje.",
        },
      })

    if (!bcrypt.compareSync(password, user.password))
      return res.send({
        success: false,
        error: {
          kind: "user_input",
          message: "Heslo je nesprávné.",
        },
      })

    const jwt = Jwt.create({ userId: user.id }, remember)

    const newRecord = IPRecord.create({
      token: jwt.token,
      date: new Date(),
      ip: req.ip,
    })
    await getManager().save(newRecord)

    user.loginIPs = user.loginIPs ? [...user.loginIPs, newRecord] : [newRecord]
    await getManager().save(user)

    res.send({
      success: true,
      data: {
        token: jwt,
      },
    })
  })
}

export default AuthController
