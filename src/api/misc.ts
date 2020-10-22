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

  getSettings = () =>
    this.axios.request<MiscGetSettingsResponse>({
      url: "/settings",
      method: "GET",
    })

  patchSettings = (data: MiscPatchSettingsData) =>
    this.axios.request<BaseResponse>({
      url: "/settings",
      method: "PATCH",
      data,
    })
}

export default Misc
