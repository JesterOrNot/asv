import { User } from "@prisma/client"

interface Guard {
  user(): Promise<User>
  attempt(email: string, password: string): Promise<User>
  has(): Promise<boolean>
}

export { Guard }
export default Guard
