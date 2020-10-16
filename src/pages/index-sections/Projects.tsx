import React from "react"
import { Link } from "react-router-dom"
import { Column } from "../../components/flex/Column"
import ColumnWrapper from "../../components/flex/ColumnWrapper"
import { Container } from "../../components/flex/Container"

import mvc from "../../assets/img/projects/mvc.jpg"
import iceland from "../../assets/img/projects/iceland.jpg"
import vl from "../../assets/img/projects/vl.jpg"

export const Projects: React.FC = () => (
  <Container>
    <div className="content is-landing-section has-text-centered mb-6">
      <h1>Naše projekty</h1>
    </div>
    <ColumnWrapper>
      <Column size="is-one-third">
        <div className="card is-project">
          <div className="card-image">
            <figure className="image is-16by9">
              <img src={iceland} alt="Iceland" />
            </figure>
          </div>
          <div className="card-content">
            <h1>A</h1>
          </div>
        </div>
      </Column>
      <Column size="is-one-third">
        <div className="card is-project">
          <div className="card-image">
            <figure className="image is-16by9">
              <img src={mvc} alt="Iceland" />
            </figure>
          </div>
          <div className="card-content">
            <h1>B</h1>
          </div>
        </div>
      </Column>
      <Column size="is-one-third">
        <div className="card is-project">
          <div className="card-image">
            <figure className="image is-16by9">
              <img src={vl} alt="Iceland" />
            </figure>
          </div>
          <div className="card-content">
            <h1>C</h1>
          </div>
        </div>
      </Column>
    </ColumnWrapper>
    <div className="content mt-6 has-text-centered">
      <Link to="/projects" className="button is-primary is-large">
        Všechny naše projekty
      </Link>
    </div>
  </Container>
)
