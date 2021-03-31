import { getManager } from "typeorm"
import { ControllerFunc } from "../.."
import { Project } from "../../db/EntityManager"
import createContext from "../helpers/Context"
import * as PS from "../schemas/ProjectSchema"

export const routePrefix = "/projects"

const ProjectController: ControllerFunc = async fastify => {
  fastify.get("/all", async (req, res) => {
    const projects = await Project.find()
    res.send({ success: true, data: { projects } })
  })

  fastify.get<PS.ProjectGet>(
    "/:slug",
    { schema: PS.projectGet },
    async (req, res) => {
      const project = await Project.findOne({ slug: req.params.slug })
      if (!project)
        return res.send({
          success: false,
          error: {
            kind: "user_input",
            message: "Daný projekt nebyl nalezen.",
          },
        })

      return res.send({
        success: true,
        data: {
          project,
        },
      })
    }
  )

  fastify.put<PS.ProjectPut>(
    "/add",
    { schema: PS.projectPut },
    async (req, res) => {
      const ctx = await createContext(req)
      if (!ctx.success) return res.send(ctx)

      const { project } = req.body

      const newProject = Project.create(project)
      const proj = await getManager().save(newProject)

      res.send({
        success: true,
        data: {
          project: proj,
        },
      })
    }
  )
}

export default ProjectController
