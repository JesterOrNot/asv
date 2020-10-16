import React from "react"
import Slider, { Image } from "../components/global/Slider"
import Navbar from "../components/layout/Navbar"

import mvc from "../assets/img/projects/mvc.jpg"
import iceland from "../assets/img/projects/iceland.jpg"
import vl from "../assets/img/projects/vl.jpg"
import Footer from "../components/layout/Footer"
import { Link } from "react-router-dom"
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
    <Footer index={true} />
  </div>
)
