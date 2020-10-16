import React from "react"
import Footer from "../components/layout/Footer"
import Navbar from "../components/layout/Navbar"

export const DefaultLayout: React.FC = ({ children: View }) => {
  return (
    <>
      <Navbar isParallax={false} />
      <div className="page-content">
        <div className="view">{View}</div>
        <Footer />
      </div>
    </>
  )
}

export default DefaultLayout
