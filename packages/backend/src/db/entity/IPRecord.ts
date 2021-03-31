import { prop, pre } from "@typegoose/typegoose"
import { Types } from "mongoose"
import slugify from "slugify"
import shortid from "shortid"
import asv from "../.."
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

@Entity()
export class IPRecord {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  token: string

  @Column({ default: new Date() })
  date?: Date = new Date()

  @Column()
  ip: string

  @ManyToOne(() => User, user => user.loginIPs)
  belongsTo: User
}
