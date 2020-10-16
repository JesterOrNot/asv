import React from "react"
import { Link } from "react-router-dom"
import { Column } from "../../components/flex/Column"
import ColumnWrapper from "../../components/flex/ColumnWrapper"
import { Container } from "../../components/flex/Container"

import mvc from "../../assets/img/projects/mvc.jpg"
import iceland from "../../assets/img/projects/iceland.jpg"
import vl from "../../assets/img/projects/vl.jpg"
import { Card } from "../../components/global/Card"

export const Projects: React.FC = () => (
  <Container>
    <div className="content is-landing-section has-text-centered mb-6">
      <h1>Naše projekty</h1>
    </div>
    <ColumnWrapper>
      <Column size="is-one-third">
        <Card
          content={<h1>Projekt A</h1>}
          image={{ src: iceland, alt: "A" }}
          isProject={true}
        />
      </Column>
      <Column size="is-one-third">
        <Card
          content={<h1>Projekt B</h1>}
          image={{ src: mvc, alt: "B" }}
          isProject={true}
        />
      </Column>
      <Column size="is-one-third">
        <Card
          content={<h1>Projekt C</h1>}
          image={{ src: vl, alt: "C" }}
          isProject={true}
        />
      </Column>
    </ColumnWrapper>
    <div className="content mt-6 has-text-centered">
      <Link to="/projects" className="button is-primary is-large">
        Všechny naše projekty
      </Link>
    </div>
  </Container>
)
