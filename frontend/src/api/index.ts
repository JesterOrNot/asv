import Axios from "axios"

export interface SuccessResponse<TData extends object = object> {
  success: true
  data: TData
}

export interface BaseError {
  kind: string
  message: string
}

export interface ErrorResponse<TError extends BaseError = BaseError> {
  success: false
  error: TError
}

export const isStaging = () => window.location.hostname.startsWith("staging")

export const apiDomain = () =>
  process.env.NODE_ENV === "development"
    ? "http://192.168.2.52:4000/api/v2"
    : // : "https://asvgroup.cz/api/v2"
      "http://192.168.2.52:4000/api/v2"

export const createAxios = () => {
  console.log("[ASV Axi] Staging Server:", isStaging())
  console.log("[ASV Axi] Chosen API:", apiDomain())

  const token = localStorage.getItem("asv_token")

  return Axios.create({
    baseURL: apiDomain(),
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  })
}

export const $http = createAxios()

export * from "./project"
export * from "./team"
export * from "./auth"
