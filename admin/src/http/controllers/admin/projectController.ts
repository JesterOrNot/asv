import { serialize as serializePhp, unserialize as unserializePhp } from "php-serialize"
import { createClient } from "../../../file/ftp"
import { HttpController } from "../../../types"
import EntityNotFoundException from "../../exceptions"
import { stringId } from "../../schema"
import {
  createProject,
  CreateProject,
  DeleteProject,
  ProjectId,
  updateProject,
  UpdateProject,
} from "../../schema/admin/project"
import { transformProject } from "../../transformers"
import { Project } from "@prisma/client"
import { processMultipartProject } from "../../../file/project"

const ProjectController: HttpController = async (app, { db }) => {
  app.get("/", async (_, res) =>
    res.ok({
      projects: (await db.project.findMany()).map(transformProject),
    })
  )

  app.get<ProjectId>("/:id", { schema: stringId.valueOf() }, async (req, res) => {
    const project = await db.project.findUnique({
      where: {
        id: req.params.id,
      },
    })

    if (!project) throw new EntityNotFoundException()

    res.ok({
      project: transformProject(project),
    })
  })

  app.put<CreateProject>("/", { schema: createProject.valueOf() }, async (req, res) => {
    const project = await db.project.create({
      data: req.body,
    })

    res.ok({
      project: transformProject(project),
    })
  })

  app.post<UpdateProject>("/:id", { schema: updateProject.valueOf() }, async (req, res) => {
    const project = await db.project.findUnique({
      where: {
        id: req.params.id,
      },
    })

    if (!project) throw new EntityNotFoundException()

    const updatedProject = await db.project.update({
      where: {
        id: req.params.id,
      },
      data: req.isMultipart()
        ? { images: serializePhp(await processMultipartProject(project, req.parts())) }
        : {
            ...req.body,
            // TODO
          },
    })

    res.ok({
      project: transformProject(project),
      updatedProject: transformProject(updatedProject),
    })
  })

  app.delete<DeleteProject>("/:id", { schema: stringId.valueOf() }, async (req, res) => {
    const project = await db.project.delete({
      where: {
        id: req.params.id,
      },
    })

    if (!project) throw new EntityNotFoundException()

    res.ok({
      project: transformProject(project),
    })
  })
}

export const routePrefix = "/admin/project"

export { ProjectController }

export default ProjectController
