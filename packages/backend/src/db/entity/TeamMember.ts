import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class TeamMember {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ unique: true })
  name: string

  @Column()
  position: string

  @Column({ default: "https://via.placeholder.com/150x150" })
  image: string
}
