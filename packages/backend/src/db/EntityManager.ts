// import { getModelForClass } from "@typegoose/typegoose"
import { User as DBUser } from "./entity/User"
import { Settings as DBSettings } from "./entity/Settings"
import { Project as DBProject } from "./entity/Project"
import { IPRecord as DBIPRecord } from "./entity/IPRecord"
import { Slide as DBSlide } from "./entity/Slide"
import { TeamMember as DBTeamMember } from "./entity/TeamMember"
import { getRepository } from "typeorm"

export const User = getRepository(DBUser)
export const Settings = getRepository(DBSettings)
export const Project = getRepository(DBProject)
export const IPRecord = getRepository(DBIPRecord)
export const Slide = getRepository(DBSlide)
export const TeamMember = getRepository(DBTeamMember)
