import React from "react"

export type ColumnWrapperProps = {
  mobile?: boolean
}

export const ColumnWrapper: React.FC<ColumnWrapperProps> = ({
  children,
  mobile,
}) => {
  return (
    <div className={`columns ${mobile ? "is-mobile" : ""}`}>{children}</div>
  )
}

export default ColumnWrapper
