import { compareSync, hashSync } from "bcryptjs"

class Password {
  static verify(plain: string, hash: string) {
    return compareSync(plain, hash)
  }

  static hash(plain: string) {
    return hashSync(plain)
  }
}

export { Password }

export default Password
