import { defineTypographyComponent } from "../../component-definitions"

export interface Img {
  src: string
  alt?: string
  class?: string
}

export const CardTitle = defineTypographyComponent("p", "text-2xl text-white font-medium")

export const CardSubtitle = defineTypographyComponent("p", "text-2xl text-white font-medium")
