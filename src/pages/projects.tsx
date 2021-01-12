import React, { useEffect, useState } from "react"
import DefaultLayout from "../layouts/DefaultLayout"
import { Column } from "../components/flex/Column"
import { Link } from "react-router-dom"
import Project from "../api/project"
import { HashLoader } from "react-spinners"
import { WdwdItem } from "./services"

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState<any[] | null>(null)

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
    <DefaultLayout>
      <div
        className="hero is-primary"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="hero-body has-text-centered">
          <h1 className="is-size-1">Projekty</h1>
        </div>
      </div>

      {projects ? (
        <div className="main-space">
          <div className="container mt-6 pt-6">
            <div className="content">
              <div className="columns is-multiline mb-6">
                {projects.map((el, key) => (
                  <Column size="is-half">
                    <WdwdItem title={el.name} image={el.mainImage} />
                  </Column>
                ))}
                {/* <Column size="is-one-quarter">
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
              </Column> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15rem",
          }}
        >
          <HashLoader size="100px" color="#004987" />
        </div>
      )}
    </DefaultLayout>
  )
}

export default Projects
