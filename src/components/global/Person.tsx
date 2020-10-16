import React from "react"

export type PersonProps = {
  name: string
  position: string
  image?: {
    src: string
    alt: string
  }
}

export const Person: React.FC<PersonProps> = ({ name, position, image }) => (
  <div className="person">
    {image && (
      <div className="image-wrapper">
        <img {...image} />
      </div>
    )}
    <h3>{name}</h3>
    <span>{position}</span>
  </div>
)
