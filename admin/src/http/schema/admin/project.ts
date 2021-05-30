import { Prisma, Project, TeamMember } from "@prisma/client"
import s from "fluent-json-schema"
import { WithId } from ".."
import { requiredProjectSchema, projectSchema } from "../../../schema"

interface CreateProject {
  Body: Omit<Prisma.ProjectCreateInput, "AND" | "OR" | "NOT">
}

type ProjectId<TParams extends object = object> = WithId<string, TParams>

interface UpdateProject extends ProjectId {
  Body: Partial<Project>
}

interface DeleteProject extends ProjectId {}

const createProject = s.object().prop("body", requiredProjectSchema).required(["body"])

const updateProject = s.object().prop("body", projectSchema).required(["body"])

export { createProject, updateProject, CreateProject, ProjectId, UpdateProject, DeleteProject }
