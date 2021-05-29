import s from "fluent-json-schema"

const teamMemberSchema = s
  .object()
  .prop("fullName", s.string())
  .prop("position", s.string())
  .prop("image", s.string().default("https://asvgroup.cz/img/default_team_member.png"))

const requiredTeamMemberSchema = teamMemberSchema.required(["fullName", "position"])

const userSchema = s
  .object()
  .prop("id", s.string())
  .prop("email", s.string())
  .prop("password", s.string())
  .prop("createdAt", s.raw({ type: "date" }))
  .prop("updatedAt", s.oneOf([s.raw({ type: "date" }), s.null()]))

const requiredUserSchema = userSchema.required(["email", "password"])

export { teamMemberSchema, requiredTeamMemberSchema, userSchema, requiredUserSchema }
