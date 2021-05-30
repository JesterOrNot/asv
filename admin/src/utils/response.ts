const ErrorKind = {
  USER_INPUT: "USER_INPUT",
  UNAUTHORIZED: "UNAUTHORIZED",
  FORBIDDEN: "FORBIDDEN",
  INTERNAL: "INTERNAL",
  VALIDATION: "VALIDATION",
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
