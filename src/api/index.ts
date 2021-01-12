import Axios from "axios"

export interface BaseResponse {
  success: boolean
  error?: {
    kind: string
    message: string
  }
  data?: object
}

export const isStaging = () => window.location.hostname.startsWith("staging")

export const resolveApiDomain = () => {
  if (process.env.NODE_ENV === "development")
    return "http://localhost:4000/api/v1"
  return isStaging()
    ? "https://staging-api.asvgroup.cz/v1"
    : "https://api.asvgroup.cz/v1"
}

export const axi = () => {
  console.log("[ASV Axi] Staging Server:", isStaging())
  console.log("[ASV Axi] Chosen API:", resolveApiDomain())
  const axios = Axios
  axios.defaults.baseURL = resolveApiDomain()
  const token = localStorage.getItem("asv_token")

  if (typeof token == "string")
    axios.defaults.headers["authorization"] = `Bearer ${token}`

  return axios
}
