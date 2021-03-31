import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

// export type Slide = {
//   src: string
//   text: string
// }

// export type Contact = {
//   address: string
//   phones: string[]
//   emails: string[]
// }

// export type TeamPerson = {
//   name: string
//   image: string
//   position: string
// }

@Entity()
export class Settings {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ default: new Date() })
  date?: Date = new Date()

  @Column({ default: "" })
  about?: string = ""

  @Column()
  address: string

  @Column("text", { array: true })
  phones: string[]

  @Column("text", { array: true })
  emails: string[]
}
