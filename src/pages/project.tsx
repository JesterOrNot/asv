import React from "react"
import { useParams } from "react-router-dom"
import { Container } from "../components/flex/Container"
import DefaultLayout from "../layouts/DefaultLayout"

import iceland from "../assets/img/projects/iceland.jpg"
import { Globe, Map } from "react-feather"

export type ProjectRouteParams = {
  slug: string
}

export const ProjectPage: React.FC = () => {
  let { slug } = useParams<ProjectRouteParams>()

  return (
    <DefaultLayout>
      <div className="hero is-primary is-medium">
        <Container>
          <div className="hero-body">
            {/* TODO: fetch */}
            <h1 className="is-size-1">{slug}</h1>
          </div>
        </Container>
      </div>
      <div className="main-space">
        <div className="container mt-6 pt-6">
          <div className="columns">
            <div className="column is-half">
              <div className="project-info">
                {/* TODO: fetch */}
                <h1 className={"has-text-primary is-size-1"}>{slug}</h1>

                <div className="desc mt-6">
                  <div className="text has-text-black is-size-5">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Curabitur sagittis hendrerit ante. Praesent in mauris eu
                    tortor porttitor accumsan. Maecenas ipsum velit,
                    consectetuer eu lobortis ut, dictum at dui. Nam libero
                    tempore, cum soluta nobis est eligendi optio cumque nihil
                    impedit quo minus id quod maxime placeat facere possimus,
                    omnis voluptas assumenda est, omnis dolor repellendus. Etiam
                    bibendum elit eget erat.
                  </div>
                  <div className="contact mt-5">
                    <a href="#">
                      <div className="info bigger">
                        <Globe size="3rem" />
                        www.project-a.com
                      </div>
                    </a>
                    <div className="info bigger mt-5">
                      <Map size="3rem" />
                      Neznámá Ulice 1<br />
                      Praha 6
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="column is-half"
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <img src={iceland} alt="" />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default ProjectPage
