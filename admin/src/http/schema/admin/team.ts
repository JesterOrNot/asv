import { Prisma, TeamMember } from "@prisma/client"
import s from "fluent-json-schema"
import { WithId } from ".."
import { requiredTeamMemberSchema, teamMemberSchema } from "../../../schema"

interface CreateTeamMember {
  Body: Omit<Prisma.TeamMemberCreateInput, "AND" | "OR" | "NOT">
}

type TeamMemberId<TParams extends object = object> = WithId<number, TParams>

interface UpdateTeamMember extends TeamMemberId {
  Body: Partial<TeamMember>
}

interface DeleteTeamMember extends TeamMemberId {}

const createTeamMember = s.object().prop("body", requiredTeamMemberSchema).required(["body"])

const updateTeamMember = s.object().prop("body", teamMemberSchema).required(["body"])

export {
  createTeamMember,
  updateTeamMember,
  CreateTeamMember,
  TeamMemberId,
  UpdateTeamMember,
  DeleteTeamMember,
}
