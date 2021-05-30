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
  .prop("createdAt", s.raw({ type: "date", default: new Date() }))
  .prop("updatedAt", s.oneOf([s.raw({ type: "date" }), s.null()]).default(null))

const requiredUserSchema = userSchema.required(["email", "password"])

const projectSchema = s
  .object()
  .prop("name", s.string())
  .prop("website", s.oneOf([s.string(), s.null()]).default(null))
  .prop("description", s.string())
  .prop("address", s.oneOf([s.string(), s.null()]).default(null))
  .prop("types", s.array().minItems(1))
  .prop("images", s.array().default([]))

const requiredProjectSchema = projectSchema.required(["name", "description", "types"])

export {
  teamMemberSchema,
  requiredTeamMemberSchema,
  userSchema,
  requiredUserSchema,
  projectSchema,
  requiredProjectSchema,
}
