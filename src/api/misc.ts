import { axi, BaseResponse } from "."
import { Image } from "../components/global/Slider"

/**
 * Path Types
 */

// PATCH /misc/settings
export type MiscPatchSettingsData = {
  main?: MainSettings
  team?: TeamMember[]
  slides?: Image[]
}

// GET /misc/settings
export interface MiscGetSettingsResponse extends BaseResponse {
  data?: {
    slides: Image[]
    team: TeamMember[]
    settings: MainSettings
  }
}

/**
 * Misc Types
 */

export type MainSettings = {
  about: string
  address: string
  phones: string[]
  emails: string[]
}

export type TeamMember = {
  name: string
  image: string
  position: string
}

/**
 * Misc API
 */
export class Misc {
  axios = axi()

  getSettings = (): Promise<{
    status: number
    data: MiscGetSettingsResponse
  }> =>
    new Promise((res) =>
      res({
        status: 200,
        data: {
          success: true,
          data: {
            team: [
              {
                name: "Jan Novák",
                position: "CEO",
                image: "https://via.placeholder.com/200x300",
              },
              {
                name: "Honza Novák",
                position: "Finanční ředitel",
                image: "https://via.placeholder.com/200x300",
              },
            ],
            slides: [
              {
                src:
                  "https://asv-demo-ver2.vott.us/static/media/intro_bg.aa8aee11.png",
                text: "ASV Group",
              },
            ],
            settings: {
              about:
                "Skupinu ASV Group založili v roce 2014 Aleš Vobruba a Pavel Menšík, manažeři s dlouholetými zkušenostmi z mezinárodní realitní společnosti, jako realitní investiční platformu, která zahrnuje projekty v různých oborech a teritoriích – komerční nemovitosti, obchodní parky v České republice a na Slovensku, rezidenční a smíšené projekty v České republice, Rakousku a Chorvatsku.",
              phones: ["+420 222 222 222"],
              emails: ["asv@asv13.cz"],
              address: [
                "Štěpánská 2071/37",
                "110 00 Praha 1 - Nové Město",
              ].join("\n"),
            },
          },
        },
      })
    )
  // this.axios.request<MiscGetSettingsResponse>({
  //   url: "/settings",
  //   method: "GET",
  // })

  patchSettings = (data: MiscPatchSettingsData) =>
    this.axios.request<BaseResponse>({
      url: "/settings",
      method: "PATCH",
      data,
    })
}

export default Misc
