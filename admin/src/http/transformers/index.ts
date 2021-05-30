import { User, TeamMember, AccessRecord, Project } from "@prisma/client"
import { unserialize as unserializePhp } from "php-serialize"

const omit = {
  user: ["password"] as (keyof User)[],
  teamMember: [] as (keyof TeamMember)[],
}

type Transforms = {
  User: Omit<User, "password">
  TeamMember: TeamMember
  Project: Omit<Project, "images" | "types"> & { images: string[]; types: string[] }
  AccessRecord: AccessRecord
}

const transformUser = (user: User): Transforms["User"] => {
  for (const key of omit.user) {
    user[key] = undefined
  }

  return user
}

// Currently there's no properties to be changed in the team member model,
// however still making a function because that may change in the future.
const transformTeamMember = (teamMember: TeamMember): Transforms["TeamMember"] => teamMember

// Same applies as for TeamMember
const transformAccessRecord = (accessRecord: AccessRecord): Transforms["AccessRecord"] =>
  accessRecord

const transformProject = (project: Project): Transforms["Project"] => {
  return {
    ...project,
    // Stupid PHP serialization...
    images: unserializePhp(project.images),
    types: project.types.split(","),
  }
}

export {
  Transforms,
  omit,
  transformUser,
  transformTeamMember,
  transformAccessRecord,
  transformProject,
}
