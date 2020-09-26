import React from "react"
import { Image } from "../app/hooks/useSlider"
import Slider from "../components/Slider"
import Navbar from "../components/layout/Navbar"

import mvc from "../assets/img/projects/mvc.jpg"
import iceland from "../assets/img/projects/iceland.jpg"
import vl from "../assets/img/projects/vl.jpg"

const images: Image[] = [
  {
    src: mvc,
    text: "Text 1",
  },
  {
    src: iceland,
    text: "Text 2",
  },
  {
    src: vl,
    text: "Text 3",
  },
]

export default () => (
  <div>
    <Navbar />
    <Slider images={images} />
  </div>
)
