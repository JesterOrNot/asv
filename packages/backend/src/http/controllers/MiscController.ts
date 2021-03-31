import { ControllerFunc, logger } from "../.."
import { Settings, Slide, TeamMember } from "../../db/EntityManager"
import * as MS from "../schemas/MiscSchema"
import createContext from "../helpers/Context"
import { getManager } from "typeorm"
import { TeamMember as DBTeamMember } from "../../db/entity/TeamMember"
import { Slide as DBSlide } from "../../db/entity/Slide"

// const processSettingsChange = (obj: any, req: FastifyRequest<MS.Settings>) => {
//   req.body.slides && (obj.slides = req.body.slides)
//   req.body.about && (obj.about = req.body.about)
//   req.body.team && (obj.team = req.body.team)
//   req.body.contact && (obj.contact = req.body.contact)

//   return obj
// }

export const createDefaultSettings = () => {
  let settings = Settings.create({
    date: new Date(),
    about: "Hello World",
    address: "Unknown Address\nPrague",
    phones: ["+1 111 111"],
    emails: ["test@asvgroup.cz"],
  })

  return settings
}

export const findCurrentSettings = async () =>
  (await Settings.find({ order: { date: "DESC" }, take: 1 })).shift()

const MiscController: ControllerFunc = async fastify => {
  fastify.get("/settings", async (req, res) => {
    const slides = await Slide.find()
    const team = await TeamMember.find()
    let settings = await findCurrentSettings()

    if (!settings) {
      logger.warn("Missing settings - Creating example one!")

      settings = await getManager().save(createDefaultSettings())
    }

    res.send({
      success: true,
      data: {
        slides,
        team,
        settings,
      },
    })

    // if (!settings)
    //   return res.send({
    //     success: false,
    //     error: {
    //       kind: "maintenance",
    //       message:
    //         "Nejsou k dispozici žádná nastavení. Kontaktujte prosím administrátora.",
    //     },
    //   })

    // settings.slides = settings.slides.map(el => el[0])

    // return res.send({
    //   success: true,
    //   data: {
    //     settings: removeKeys(settings, ["_id", "__v", "date"]),
    //   },
    // })
  })

  fastify.patch<MS.SettingsPatch>(
    "/settings",
    { schema: MS.settingsPatch },
    async (req, res) => {
      const ctx = await createContext(req)
      if (!ctx.success || !ctx.user) return res.send(ctx)

      const { main, team, slides } = req.body

      if (main) {
        const { phones, emails, address, about } = main
        let settings = await findCurrentSettings()

        if (!settings) settings = createDefaultSettings()

        phones && (settings.phones = phones)
        emails && (settings.emails = emails)
        address && (settings.address = address)
        about && (settings.about = about)

        await getManager().save(settings)
      }

      if (team) {
        // It is ugly. But easy
        const validate = team.every(
          el =>
            Object.keys(el).length === 3 && // Making sure there's only name and position
            el.hasOwnProperty("name") && // that name exists
            typeof el.name === "string" && // and it's a string
            el.hasOwnProperty("position") && // that position exists
            typeof el.position === "string" && // and it's a string
            el.hasOwnProperty("image") && // that image exists
            typeof el.image === "string" // and it's a string
        )
        if (!validate)
          return res.send({
            success: false,
            error: {
              kind: "user_input",
              message:
                "Váš vstup není validní. Zkontrolujte ho a zkuste to znovu.",
            },
          })

        let where: { name: string }[] = []
        let newMembers: DBTeamMember[] = []

        team.forEach(member => {
          where.push({ name: member.name })
          newMembers.push(TeamMember.create(member))
        })

        // Removing old TeamMembers
        const members = await TeamMember.find({ where })
        await getManager().remove(members)
        await getManager().save(newMembers)
      }

      if (slides) {
        // It is ugly. But easy
        const validate = slides.every(
          el =>
            Object.keys(el).length === 2 && // Making sure there's only src, image and text
            el.hasOwnProperty("src") && // that src exists
            typeof el.src === "string" && // and it's a string
            el.hasOwnProperty("text") && // that text exists
            typeof el.text === "string" // and it's a string
        )
        if (!validate)
          return res.send({
            success: false,
            error: {
              kind: "user_input",
              message:
                "Váš vstup není validní. Zkontrolujte ho a zkuste to znovu.",
            },
          })

        let where: { src: string }[] = []
        let newSlides: DBSlide[] = []

        slides.forEach(slide => {
          where.push({ src: slide.src })
          newSlides.push(Slide.create(slide))
        })

        // Removing old Slides
        const oldSlides = await Slide.find({ where })
        await getManager().remove(oldSlides)
        await getManager().save(newSlides)
      }

      res.send({
        success: true,
      })
    }
  )
}

export default MiscController
