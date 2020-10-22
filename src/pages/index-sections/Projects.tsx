import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Column } from "../../components/flex/Column"
import ColumnWrapper from "../../components/flex/ColumnWrapper"
import { Container } from "../../components/flex/Container"

import { Card } from "../../components/global/Card"
import Project from "../../api/project"

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([])

  useEffect(() => {
    const fetch = async () => {
      try {
        const proj = new Project()
        const res = await proj.getProjects()

        setProjects(res.data.data.projects)
      } catch (e) {
        console.log(e)
        setProjects([])
      }
    }
    fetch()
  }, [])

  return (
    <Container>
      <div className="content is-landing-section has-text-centered mb-6">
        <h1>Naše projekty</h1>
      </div>
      <ColumnWrapper>
        {projects
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
          .map((el, key) => (
            <Column size="is-one-third" key={key}>
              <Link to={`/project/${el.slug}`}>
                <Card
                  content={<h1>{el.name}</h1>}
                  image={{ src: el.mainImage, alt: el.name }}
                  isProject={true}
                />
              </Link>
            </Column>
          ))}
      </ColumnWrapper>
      <div className="content mt-6 has-text-centered">
        <Link to="/projects" className="button is-primary is-large">
          Všechny naše projekty
        </Link>
      </div>
    </Container>
  )
}
