import React from "react"
import DefaultLayout from "../layouts/DefaultLayout"
import iceland from "../assets/img/projects/iceland.jpg"
import { Container } from "../components/flex/Container"
import { Column } from "../components/flex/Column"
import { Card } from "../components/global/Card"
import { Link } from "react-router-dom"

export const Projects: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="hero is-primary is-medium">
        <Container>
          <div className="hero-body">
            <h1 className="is-size-1">Projekty</h1>
          </div>
        </Container>
      </div>

      <div className="main-space">
        <div className="container mt-6 pt-6">
          <div className="content">
            <div className="columns is-multiline mb-6">
              <Column size="is-one-quarter">
                {/* todo slug */}
                <Link to={`/project/${"project-a"}`}>
                  <Card
                    content={<h1>Projekt A</h1>}
                    image={{ src: iceland, alt: "A" }}
                    isProject={true}
                  />
                </Link>
              </Column>

              <Column size="is-one-quarter">
                <Card
                  content={<h1>Projekt A</h1>}
                  image={{ src: iceland, alt: "A" }}
                  isProject={true}
                />
              </Column>

              <Column size="is-one-quarter">
                <Card
                  content={<h1>Projekt A</h1>}
                  image={{ src: iceland, alt: "A" }}
                  isProject={true}
                />
              </Column>

              <Column size="is-one-quarter">
                <Card
                  content={<h1>Projekt A</h1>}
                  image={{ src: iceland, alt: "A" }}
                  isProject={true}
                />
              </Column>

              <Column size="is-one-quarter">
                <Card
                  content={<h1>Projekt A</h1>}
                  image={{ src: iceland, alt: "A" }}
                  isProject={true}
                />
              </Column>

              <Column size="is-one-quarter">
                <Card
                  content={<h1>Projekt A</h1>}
                  image={{ src: iceland, alt: "A" }}
                  isProject={true}
                />
              </Column>

              <Column size="is-one-quarter">
                <Card
                  content={<h1>Projekt A</h1>}
                  image={{ src: iceland, alt: "A" }}
                  isProject={true}
                />
              </Column>

              <Column size="is-one-quarter">
                <Card
                  content={<h1>Projekt A</h1>}
                  image={{ src: iceland, alt: "A" }}
                  isProject={true}
                />
              </Column>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Projects
