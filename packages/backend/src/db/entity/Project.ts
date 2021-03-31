import { prop, pre } from "@typegoose/typegoose"
import { Types } from "mongoose"
import shortid from "shortid"
import slugify from "slugify"
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import asv from "../.."

@Entity()
export class Project {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  name: string

  @Column()
  slug?: string

  @Column({ default: "" })
  description?: string = ""

  @Column()
  website?: string = "%none%"

  @Column({ default: "Neznámá" })
  address?: string = "Neznámá"

  @Column({ default: "https://via.placeholder.com/150x150" })
  mainImage?: string = "https://via.placeholder.com/150x150"

  @Column("text", { array: true })
  images: string[]

  @BeforeInsert()
  async beforeInsert() {
    let slug = slugify(this.name, { lower: true })

    try {
      let res = await asv.database.query(
        "SELECT * from project WHERE slug = $1",
        [slug]
      )
      if (res instanceof Array && res.length >= 1)
        slug = `${slug}-${shortid.generate()}`
    } catch (e) {
      slug = `${slug}-${shortid.generate()}` // lets just make sure...
    }

    this.slug = slug
  }
}
