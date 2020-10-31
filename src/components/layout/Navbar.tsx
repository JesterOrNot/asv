import React, { useEffect, useState } from "react"
import Logo, { LogoProps } from "../global/Logo"
import { debounce } from "lodash"
import { Link } from "react-router-dom"
import { Parallax } from "react-spring/renderprops-addons"
import userEvent from "@testing-library/user-event"
import useUser from "../../hooks/useUser"

export type NavbarProps = {
  isParallax: boolean
  parallax?: () => Parallax | null
}

export const RegularNavbarItems: React.FC = () => {
  const { user } = useUser()
  console.log(user)
  return (
    <div className="navbar-item">
      <Link className="navbar-item" to="/">
        Domov
      </Link>
      <Link to="/projects" className="navbar-item">
        Projekty
      </Link>
      <Link to="/services" className="navbar-item">
        Služby
      </Link>
      <Link to="/contact" className="navbar-item">
        Kontakt
      </Link>
    </div>
  )
}

export const ParallaxNavbarItems: React.FC<{
  parallax?: (() => Parallax | null) | null
  handleFixed: (value: boolean) => any
}> = ({ parallax, handleFixed }) => {
  const scroll = (num: number) => {
    const para = parallax ? parallax() : null
    if (!para) return null

    para.scrollTo(num)
  }

  return (
    <div className="navbar-item">
      <a onClick={() => scroll(0)} className="navbar-item">
        Domov
      </a>
      <a onClick={() => scroll(1)} className="navbar-item">
        O nás
      </a>
      <a onClick={() => scroll(2)} className="navbar-item">
        Náš tým
      </a>
      <a onClick={() => scroll(3)} className="navbar-item">
        Projekty
      </a>
      <Link to="/services" className="navbar-item">
        Služby
      </Link>
      <Link to="/contact" className="navbar-item">
        Kontakt
      </Link>
    </div>
  )
}

export const Navbar: React.FC<NavbarProps> = ({ isParallax, parallax }) => {
  const [fixed, setFixed] = useState(false)
  const [logoColor, setLogoColor] = useState(
    (fixed ? "secondary" : "primary") as LogoProps["color"]
  )
  const [active, setActive] = useState(false)

  const handleScroll = (el: Window | HTMLDivElement) =>
    setFixed(el instanceof Window ? el.scrollY > 100 : el.scrollTop > 100)

  useEffect(() => {
    setLogoColor(fixed ? "secondary" : "primary")
  }, [fixed])

  useEffect(() => {
    const eventTarget = isParallax
      ? (document.getElementsByClassName(
          "parallax-wrapper"
        )[0] as HTMLDivElement)
      : window
    if (!eventTarget) return

    const scroll = () => handleScroll(eventTarget)

    eventTarget.addEventListener("scroll", debounce(scroll))

    return () => eventTarget.removeEventListener("scroll", () => handleScroll)
  })

  //   return (
  //     <div className={`asv_navbar ${fixed ? "fixed" : ""}`}>
  //       <div className="container is-fluid">
  //         <div className="columns">
  //           <div className="column">
  //             <Logo color={logoColor} width="150" height="550" />
  //           </div>
  //           <div className="column">
  //             <div className="navbar">

  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )

  return (
    <nav
      className={`navbar asv_navbar ${fixed ? "fixed" : ""}`}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container is-fluid">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <Logo color={logoColor} width="150" height="56" />
          </Link>

          <a
            className={`navbar-burger burger ${active ? "is-active" : ""}`}
            onClick={() => setActive(!active)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${active ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            {isParallax ? (
              <ParallaxNavbarItems
                parallax={parallax ? parallax : null}
                handleFixed={(val) => setFixed(val)}
              />
            ) : (
              <RegularNavbarItems />
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
