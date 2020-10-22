import React, { useState } from "react"
import { Mail, Map as MapIcon, PhoneCall } from "react-feather"
import { Container } from "../components/flex/Container"
import { Map } from "../components/global/Map"
import DefaultLayout from "../layouts/DefaultLayout"

export const ContactPage: React.FC = () => {
  const phone = "+420 224 267 592"
  const address = (
    <>
      Štěpánská 2071/37 <br /> 110 00 Praha 1
    </>
  )

  const emails = ["av@asvgroup.cz", "pm@asvgroup.cz"]

  const [mapLoaded, setMapLoaded] = useState(false)

  return (
    <DefaultLayout>
      <div
        className="hero is-primary"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="hero-body has-text-centered">
          <h1 className="is-size-1">Kontaktujte nás</h1>
        </div>
      </div>
      <div className="main-space">
        <div className="container mt-6 pt-6">
          <div className="content">
            <div className="columns mb-6">
              <div
                className="column is-half"
                style={{ marginTop: "auto", marginBottom: "auto" }}
              >
                <div className="contact">
                  <div className="info bigger mb-6">
                    <PhoneCall size="4rem" />
                    {phone}
                  </div>

                  <div className="info bigger mb-6">
                    <MapIcon size="4rem" />
                    {address}
                  </div>

                  {emails.map((el) => (
                    <div className="info bigger mb-6">
                      <Mail size="4rem" />
                      {el}
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="column is-half"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Map
                  height="100%"
                  width="100%"
                  url="https://maps.google.com/maps?q=%C5%A1t%C4%9Bp%C3%A1nsk%C3%A1%202071%2F37&t=&z=19&ie=UTF8&iwloc=&output=embed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default ContactPage
