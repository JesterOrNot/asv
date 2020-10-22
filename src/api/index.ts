import Axios from "axios"

export interface BaseResponse {
  success: boolean
  error?: {
    kind: string
    message: string
  }
  data?: object
}

export const axi = () => {
  const axios = Axios
  axios.defaults.baseURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000/api/v1"
      : "https://api.asvgroup.cz/v1"
  const token = localStorage.getItem("asv_token")

  if (typeof token == "string")
    axios.defaults.headers["authorization"] = `Bearer ${token}`

  return axios
}
