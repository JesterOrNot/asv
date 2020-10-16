import React from "react"

export type ContainerProps = {
  fluid?: boolean
}

export const Container: React.FC<ContainerProps> = ({ children, fluid }) => (
  <div className={`container main-space ${fluid ? "is-fluid" : ""}`}>
    {children}
  </div>
)
