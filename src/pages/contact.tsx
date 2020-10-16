import React, { useState } from "react"
import { Mail, Map, PhoneCall } from "react-feather"
import { Column } from "../components/flex/Column"
import { Container } from "../components/flex/Container"
import DefaultLayout from "../layouts/DefaultLayout"

import { HashLoader } from "react-spinners"

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
      <div className="hero is-primary is-medium">
        <Container>
          <div className="hero-body">
            <h1 className="is-size-1">Kontaktujte nás</h1>
          </div>
        </Container>
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
                    <Map size="4rem" />
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
                <iframe
                  title="Mapy Google"
                  onLoad={() => setMapLoaded(true)}
                  style={{ height: "100%", width: "100%" }}
                  src="https://maps.google.com/maps?q=%C5%A1t%C4%9Bp%C3%A1nsk%C3%A1%202071%2F37&t=&z=19&ie=UTF8&iwloc=&output=embed"
                ></iframe>

                {!mapLoaded && (
                  <div style={{ position: "absolute" }}>
                    <HashLoader color="#004987" size="100" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default ContactPage
