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

export const apiDomain = () =>
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/api"
    : "https://asvgroup.herokuapp.com/api/v2"

export const createAxios = () => {
  console.log("[ASV Axi] Chosen API:", apiDomain())

  const token = localStorage.getItem("asv_token")

  return Axios.create({
    baseURL: apiDomain(),
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    withCredentials: true
  })
}

export const $http = createAxios()

export * from "./project"
export * from "./team"
export * from "./auth"
