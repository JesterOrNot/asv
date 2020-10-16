import React from "react"
import Footer from "../components/layout/Footer"
import Navbar from "../components/layout/Navbar"

export const DefaultLayout: React.FC = ({ children: View }) => {
  return (
    <>
      <Navbar />
      <div className="page-content">{View}</div>
      <Footer />
    </>
  )
}

export default DefaultLayout
