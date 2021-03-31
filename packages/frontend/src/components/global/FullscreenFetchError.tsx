import React from "react"
import { Link } from "react-router-dom"
import FullscreenWrapper from "./FullscreenWrapper"

export const FullscreenFetchError: React.FC = () => (
  <FullscreenWrapper>
    <h1 style={{ fontSize: "3rem", color: "#fff" }}>Došlo k chybě.</h1>
    <p style={{ color: "#fff" }}>
      Omlouváme se, ale nepodařilo se nám získat data. Zkuste to prosím později
    </p>

    <div className="mt-4">
      <Link to="/" className="button is-primary is-inverted is-medium">
        Jít domů
      </Link>
    </div>
  </FullscreenWrapper>
)
