import { HttpController } from "../../../types"
import { transformAccessRecord } from "../../transformers"

const AccessController: HttpController = async (app, { db }) => {
  app.get("/", async (req, res) => {
    res.ok({
      records: (
        await db.accessRecord.findMany({
          where: {
            user: await req.guard.user(),
          },
        })
      ).map(transformAccessRecord),
    })
  })
}

export const routePrefix = "/admin/access"

export default AccessController
