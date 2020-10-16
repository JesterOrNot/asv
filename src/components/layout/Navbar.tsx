import React, { useEffect, useState } from "react"
import Logo, { LogoProps } from "../global/Logo"
import { debounce } from "lodash"
import { Link } from "react-router-dom"

export default () => {
  const [fixed, setFixed] = useState(false)
  const [logoColor, setLogoColor] = useState(
    (fixed ? "secondary" : "primary") as LogoProps["color"]
  )

  const handleScroll = () => setFixed(window.scrollY > 100)

  useEffect(() => {
    setLogoColor(fixed ? "secondary" : "primary")
  }, [fixed])

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll))

    return () => window.removeEventListener("scroll", () => handleScroll)
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

          <a role="button" className="navbar-burger burger">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <Link className="navbar-item" to="/what-do-we-do">
                Co děláme
              </Link>
              <a className="navbar-item">Portfolio</a>
              <a className="navbar-item">Kontakt</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
