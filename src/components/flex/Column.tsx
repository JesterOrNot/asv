import React, { ReactElement } from "react"

export type ColumnProps = {
  size: string
  centered?: boolean
}

export const Column: React.FC<ColumnProps> = ({ children, size, centered }) => (
  <div className={`column ${size} ${centered ? "centered" : ""}`}>
    {children}
  </div>
)
