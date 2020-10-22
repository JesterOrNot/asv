import React, { useEffect, useState } from "react"
import Slider, { Image } from "../components/global/Slider"
import Navbar from "../components/layout/Navbar"

import mvc from "../assets/img/projects/mvc.jpg"
import iceland from "../assets/img/projects/iceland.jpg"
import vl from "../assets/img/projects/vl.jpg"
import teamBg from "../assets/img/projects/1.jpg"

import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import ParallaxFooter from "../components/layout/ParallaxFooter"
import { Projects } from "./index-sections/Projects"
import { Team } from "./index-sections/Team"
import { About } from "./index-sections/About"
import Axios from "axios"
import Misc, { MiscGetSettingsResponse } from "../api/misc"
import { FullscreenLoader } from "../components/global/FullscreenLoader"
import { FullscreenFetchError } from "../components/global/FullscreenFetchError"

export default () => {
  let parallax = null as Parallax | null
  const pageCount = 4

  const [settings, setSettings] = useState<
    MiscGetSettingsResponse["data"] | null | false
  >(null)

  const determineShitOffset = () => {
    if (window.innerHeight < 900) {
      return 0.3
    } else {
      return 0
    }
  }

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await new Misc().getSettings()
        if (response.status !== 200 || !response.data.data) return //
        setSettings(response.data.data)
      } catch (e) {
        setSettings(false)
      }
    }

    fetchSettings()
  }, [])

  return (
    <>
      {settings !== null ? (
        settings !== false ? (
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
                <Slider images={settings ? settings.slides : []} />
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

              <ParallaxLayer
                offset={2}
                speed={0.8}
                // @ts-ignore
                style={{
                  background: `url(http://asvgroup.cz/themes/frontend/img/homepage/bg.jpg)`,
                }}
                // @ts-ignore
                className="full-bg"
              />

              <ParallaxLayer
                offset={2}
                speed={0.8}
                // @ts-ignore
                style={{ background: `rgba(0, 73, 135, 0.3)` }}
              />

              {/* Layer 2 - Our Team */}
              <ParallaxLayer
                offset={2}
                speed={0.4}
                // @ts-ignore
                onClick={() => parallax?.scrollTo(3 - determineShitOffset())}
                // @ts-ignore
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Team team={settings ? settings.team : []} />
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
                <ParallaxFooter
                  phone={settings ? settings.settings.phones : []}
                  address={settings ? settings.settings.address : null}
                />
              </ParallaxLayer>
            </Parallax>
          </div>
        ) : (
          <FullscreenFetchError />
        )
      ) : (
        <FullscreenLoader />
      )}
    </>
  )
}
