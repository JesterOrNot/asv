import React from "react"
import Slider, { Image } from "../components/global/Slider"
import Navbar from "../components/layout/Navbar"

import mvc from "../assets/img/projects/mvc.jpg"
import iceland from "../assets/img/projects/iceland.jpg"
import vl from "../assets/img/projects/vl.jpg"

import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import ParallaxFooter from "../components/layout/ParallaxFooter"
import { Projects } from "./index-sections/Projects"
import { Team } from "./index-sections/Team"
import { About } from "./index-sections/About"

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

export default () => {
  let parallax = null as Parallax | null
  const pageCount = 4

  return (
    <div>
      <Navbar isParallax={true} parallax={() => parallax} />
      <Parallax
        ref={(ref) => (parallax = ref)}
        pages={pageCount + 1}
        // @ts-ignore
        className="parallax-wrapper"
      >
        {/* Layer 0 - Welcome Slider */}
        <ParallaxLayer
          offset={0}
          factor={1}
          speed={0.1}
          // @ts-ignore
          onClick={() => parallax?.scrollTo(1)}
        >
          <Slider images={images} />
        </ParallaxLayer>

        {/* Layer 1 - About Us */}
        <ParallaxLayer
          offset={1}
          speed={0.2}
          // @ts-ignore
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          // @ts-ignore
          onClick={() => parallax?.scrollTo(2)}
        >
          <About />
        </ParallaxLayer>

        {/* Layer 2 - Our Team */}
        <ParallaxLayer
          offset={2}
          speed={0.4}
          // @ts-ignore
          onClick={() => parallax?.scrollTo(3)}
          // @ts-ignore
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Team />
        </ParallaxLayer>

        {/* Layer 3 - Projects */}
        <ParallaxLayer
          offset={3}
          speed={0.8}
          // @ts-ignore
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          // @ts-ignore
          onClick={() => parallax?.scrollTo(4)}
        >
          <Projects />
        </ParallaxLayer>

        {/* Layer 4 - Footer */}
        <ParallaxLayer
          offset={4}
          speed={0.8}
          // @ts-ignore
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#222",
          }}
          // @ts-ignore
          onClick={() => parallax?.scrollTo(0)}
        >
          <ParallaxFooter />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
