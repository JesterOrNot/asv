import { jwtSecret } from "../../../config"

import * as jwt from "jsonwebtoken"

export type JwtPayload = {
  userId: string
}

export default class Jwt {
  static create = (payload: JwtPayload, expire = true) => {
    const date = new Date()
    const validUntil = expire ? date.setDate(date.getDate() + 14) : null

    const token = expire
      ? jwt.sign(payload, jwtSecret, { expiresIn: "14d" })
      : jwt.sign(payload, jwtSecret)

    return {
      validUntil,
      token,
    }
  }

  static getPayload = (token: string): JwtPayload | null => {
    if (token.startsWith("Bearer ")) token = token.replace("Bearer ", "")

    try {
      return jwt.verify(token, jwtSecret) as JwtPayload
    } catch (e) {
      return null
    }
  }
}
