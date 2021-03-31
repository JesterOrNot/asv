import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import DefaultLayout from "../layouts/DefaultLayout"

import { Globe, Map } from "react-feather"
import Project from "../api/project"
import { FullscreenLoader } from "../components/global/FullscreenLoader"
import { FullscreenFetchError } from "../components/global/FullscreenFetchError"
import { MapLoader } from "../components/global/Map"
import ReactImageGallery from "react-image-gallery"
import { axi } from "../api"

export type ProjectRouteParams = {
  slug: string
}

export const ProjectPage: React.FC = () => {
  // TODO: better object type
  const [project, setProject] = useState<any | null | false>(null)
  const [mainLoaded, setMainLoaded] = useState<null | boolean>(false)
  let { slug } = useParams<ProjectRouteParams>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: res } = await new Project().getProject(slug)

        ;(res as any).data.project.images = (res as any).data.project.images.map(
          (el: string) => ({ original: el, thumbnail: el })
        )

        setProject(res.data.project)
        // setProject(false)
        console.log("Project", (res.data.project as any).mainImage)
      } catch (e) {
        console.log(e)
        setProject(false)
      }
    }

    fetchData()
  }, [slug])

  return (
    <>
      {project ? (
        <DefaultLayout>
          <div
            className="hero is-primary"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="hero-body has-text-centered">
              <h1 className="is-size-1">{project.name}</h1>
            </div>
          </div>
          <div className="main-space">
            <div className="container mt-6 pt-6">
              <div className="columns">
                <div className="column is-half">
                  <div className="project-info">
                    <div className="desc mt-6">
                      <div className="text has-text-black is-size-5">
                        {project.description}
                      </div>
                      <div className="contact mt-5">
                        {project.website !== "%none%" && (
                          <a href={project.website}>
                            <div className="info bigger">
                              <Globe size="3rem" />
                              {project.website}
                            </div>
                          </a>
                        )}
                        <div className="info bigger mt-5">
                          <Map size="3rem" />
                          <div>
                            {String(project.address)
                              .split("\n")
                              .map((el, key) => (
                                <div key={key}>
                                  {el}
                                  <br />
                                </div>
                              ))}
                          </div>

                          <textarea
                            name=""
                            id=""
                            onChange={(e) =>
                              console.log(
                                JSON.stringify({ hello: e.target.value })
                              )
                            }
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="column is-half"
                  style={{
                    marginTop: "auto",
                    marginBottom: "auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {mainLoaded !== null && (
                    <ReactImageGallery
                      items={project.images}
                      onImageError={() => setMainLoaded(false)}
                      onImageLoad={() => setMainLoaded(true)}
                    />
                  )}

                  {/* image is loading */}
                  {mainLoaded === false && <MapLoader />}

                  {/* image couldnt load */}
                  {mainLoaded === null && (
                    <div
                      style={{
                        background: "#004987",
                        color: "#fff",
                        padding: "2rem",
                        borderRadius: "4px",
                      }}
                    >
                      <h2 className="is-size-3">
                        Obrázek se nepodařilo načíst :/
                      </h2>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </DefaultLayout>
      ) : (
        <>
          {project === null ? <FullscreenLoader /> : <FullscreenFetchError />}
        </>
      )}
    </>
  )
}

export default ProjectPage
