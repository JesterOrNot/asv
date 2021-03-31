import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Slide {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ unique: true })
  src: string

  @Column()
  text: string
}
