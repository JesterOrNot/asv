import s from "fluent-json-schema"

interface Login {
  Body: {
    email: string
    password: string
  }
}

const login = s
  .object()
  .prop(
    "body",
    s
      .object()
      .prop("email", s.string())
      .prop("password", s.string().minLength(6))
      .required(["email", "password"])
  )
  .required()

export { Login, login }
