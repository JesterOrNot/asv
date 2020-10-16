import React from "react"
import { Map, PhoneCall } from "react-feather"
import { Link } from "react-router-dom"
import Logo from "../global/Logo"

export const ParallaxFooter: React.FC = () => (
  <div className="asv-footer">
    <div className="container">
      <div className="mb-6 pb-3 mt-6">
        <div className="has-text-centered mb-6">
          <Logo color="primary" height="150px" />
        </div>

        <div className="content has-text-centered">
          <h1>Pojďte do toho s námi!</h1>
          <h2>Viditelný studie té skryté praxi zde největších.</h2>

          <div className="contact-button-wrapper mt-6">
            <Link
              to="/contact"
              className="button is-primary is-large is-contact"
            >
              Kontaktujte nás
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <hr />
      </div>

      <div className="contact columns mt-6">
        <div className="info column is-half">
          <PhoneCall size="2rem" />
          +420 224 267 592
        </div>

        <div
          className="info column is-half has-text-right"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Map size="2rem" />
          <div className="address has-text-left">
            Štěpánská 2071/37 <br /> 110 00 Praha 1
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ParallaxFooter
