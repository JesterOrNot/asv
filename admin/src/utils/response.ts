const ErrorKind = {
  USER_INPUT: "user_input",
  UNAUTHORIZED: "unauthorized",
  FORBIDDEN: "forbidden",
  INTERNAL: "internal",
  VALIDATION: "validation",
}

type ErrorKindEnum = typeof ErrorKind

interface BaseError {
  kind: keyof ErrorKindEnum
  message: string
}

interface SuccessRes<T extends object = object> {
  success: true
  data: T
}

interface ErrorRes {
  success: false
  error: BaseError
}

type SuccessOrError<TData extends object = object> = SuccessRes<TData> | ErrorRes

export { ErrorKind, ErrorKindEnum, BaseError, SuccessRes, ErrorRes, SuccessOrError }
