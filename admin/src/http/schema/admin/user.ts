import { User } from ".prisma/client"
import s from "fluent-json-schema"
import { stringId, WithId } from ".."
import { requiredUserSchema, userSchema } from "../../../schema"

type UserId<TParams extends object = object> = WithId<string, TParams>

interface CreateUser {
  Body: User
}

interface UpdateUser extends UserId {
  Body: Partial<User>
}

interface DeleteUser extends UserId {}

const createUser = s.object().prop("body", requiredUserSchema).required(["body"])

const updateUser = stringId.prop("body", userSchema).required(["body", "params"])

export { UserId, CreateUser, UpdateUser, DeleteUser, createUser, updateUser }
