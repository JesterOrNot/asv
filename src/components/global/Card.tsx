import React from "react"

export type CardProps = {
  image?: {
    src: string
    alt: string
  }
  content: string | React.ReactNode
  isProject: boolean
}

export const Card: React.FC<CardProps> = ({ image, content, isProject }) => (
  <div
    className={`card ${isProject ? "is-project" : ""}`}
    style={{ height: "100%" }}
  >
    {image && (
      <div className="card-image">
        <figure
          className={`image is-16by9 ${isProject ? "project-image" : ""}`}
        >
          <img {...image} />
        </figure>
      </div>
    )}
    <div className="card-content" style={{ height: "100%" }}>
      {content}
    </div>
  </div>
)
