import { UserInputException } from "@fasteerjs/exceptions"
import { HttpController } from "../../types"
import { login, Login } from "../schema/auth/login"
import { transformUser } from "../transformers"

const AuthController: HttpController = async (app, { db }) => {
  app.post<Login>("/login", { schema: login.valueOf() }, async (req, res) => {
    if (req.user) throw new UserInputException("You are already authenticated.")

    const user = await req.guard.attempt(req.body.email, req.body.password)

    const session = await db.session.create({
      data: {
        user: { connect: user },
      },
    })

    res.ok({
      token: session.id,
      user: transformUser(user),
    })
  })
}

export const routePrefix = "/auth"

export default AuthController
