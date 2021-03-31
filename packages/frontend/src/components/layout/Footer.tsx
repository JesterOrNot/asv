import React from "react"

export type FooterProps = {
  index?: boolean
}

export const Footer: React.FC<FooterProps> = ({ index }) => {
  return (
    <div className={`asv_footer ${index ? "index" : ""}`}>
      <div className="inner">
        <p>
          &copy; {new Date().getFullYear()} ASV Group &ndash; Všechna práva
          vyhrazena.
        </p>
      </div>
    </div>
  )
}

export default Footer
