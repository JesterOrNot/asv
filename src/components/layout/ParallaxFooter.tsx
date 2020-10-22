import React from "react"
import { Map, PhoneCall, PhoneMissed } from "react-feather"
import { Link } from "react-router-dom"
import Logo from "../global/Logo"

export type ParallaxFooterProps = {
  phone: string[]
  address: string | null
}

export const ParallaxFooter: React.FC<ParallaxFooterProps> = ({
  phone,
  address,
}) => (
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
        {phone.length >= 1 && (
          <div className="info column is-half is-contact">
            {phone.map((el, key) => (
              <div key={key} style={{ marginBottom: "5px" }}>
                <PhoneCall size="2rem" />
                <span>{el}</span>
              </div>
            ))}
          </div>
        )}
        {address && (
          <div className="info column is-half">
            <Map size="2rem" />
            <div className="address has-text-left">
              {address.split("\n").map((el, key) => (
                <span key={key}>
                  {el}
                  <br />
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
)

export default ParallaxFooter
