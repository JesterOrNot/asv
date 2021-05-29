import { User } from "@prisma/client"

const omit = {
  user: ["password"] as (keyof User)[],
}

type Transforms = {
  User: Omit<User, "password">
}

const transformUser = (user: User): Transforms["User"] => {
  for (const key of omit.user) {
    user[key] = undefined
  }

  return user
}

export { Transforms, omit, transformUser }
