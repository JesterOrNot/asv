import bcrypt from "bcryptjs"
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm"
import { IPRecord } from "./IPRecord"
@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ unique: true })
  username: string

  @Column()
  password!: string

  @Column({ default: "User" })
  role?: string = "User"

  @Column({ default: new Date() })
  createdAt?: Date = new Date()

  @Column({ default: new Date() })
  lastEditedAt?: Date = new Date()

  @OneToMany(() => IPRecord, ip => ip.belongsTo, {
    cascade: ["insert", "update"],
    eager: true,
  })
  loginIPs: IPRecord[]

  @BeforeInsert()
  beforeInsert() {
    this.hashPassword()
    this.lastEditedAt = this.createdAt = new Date()
  }

  @BeforeUpdate()
  beforeUpdate() {
    this.hashPassword()
    this.createdAt = new Date()
  }

  hashPassword() {
    this.password = bcrypt.hashSync(this.password)
  }
}
