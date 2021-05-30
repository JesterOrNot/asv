import { HttpController } from "../../../types"
import EntityNotFoundException from "../../exceptions"
import { numberId } from "../../schema"
import {
  CreateTeamMember,
  DeleteTeamMember,
  UpdateTeamMember,
  createTeamMember,
  updateTeamMember,
} from "../../schema/admin/team"
import { transformTeamMember } from "../../transformers"

const TeamController: HttpController = async (app, { db }) => {
  app.get("/", async (_, res) =>
    res.ok({
      members: (await db.teamMember.findMany()).map(transformTeamMember),
    })
  )

  app.put<CreateTeamMember>("/", { schema: createTeamMember.valueOf() }, async (req, res) => {
    const member = await db.teamMember.create({
      data: req.body,
    })

    res.ok({
      member: transformTeamMember(member),
    })
  })

  app.patch<UpdateTeamMember>("/:id", { schema: updateTeamMember.valueOf() }, async (req, res) => {
    const member = await db.teamMember.findUnique({
      where: {
        id: req.params.id,
      },
    })

    if (!member) throw new EntityNotFoundException()

    const updatedMember = await db.teamMember.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    })

    res.ok({
      member: transformTeamMember(member),
      updatedMember: transformTeamMember(updatedMember),
    })
  })

  app.delete<DeleteTeamMember>("/:id", { schema: numberId.valueOf() }, async (req, res) => {
    const member = await db.teamMember.delete({
      where: {
        id: req.params.id,
      },
    })

    if (!member) throw new EntityNotFoundException()

    res.ok({
      member: transformTeamMember(member),
    })
  })
}

export const routePrefix = "/admin/team"

export default TeamController
