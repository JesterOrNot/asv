import React from "react"
import { Column } from "../components/flex/Column"
import ColumnWrapper from "../components/flex/ColumnWrapper"
import DefaultLayout from "../layouts/DefaultLayout"

export const WdwdItem: React.FC<{ title: string; image: string }> = ({
  title,
  image,
}) => (
  <div className="wdwd-item">
    <img src={image} alt={title} />
    <div className="bg">
      <h3>{title}</h3>
    </div>
  </div>
)

export const WDWD: React.FC = () => {
  const placeholderImage = "https://via.placeholder.com/600x300"
  
  return (
    <DefaultLayout>
      <div
        className="hero is-primary"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="hero-body has-text-centered">
          <h1 className="is-size-1">Co děláme</h1>
        </div>
      </div>

      <div className="container mt-6 pt-6">
        <div className="content">
          <h1 className="is-size-1 mb-6">Naše činnost</h1>

          <div className="content mt-4">
            <ColumnWrapper>
              <Column size="is-one-quarter">
                <WdwdItem
                  title="Development & Construction Management"
                  image={placeholderImage}
                />
              </Column>

              <Column size="is-one-quarter">
                <WdwdItem
                  title="Investments & Acquisitions"
                  image={placeholderImage}
                />
              </Column>

              <Column size="is-one-quarter">
                <WdwdItem
                  title="Asset Management & Leasing"
                  image={placeholderImage}
                />
              </Column>

              <Column size="is-one-quarter">
                <WdwdItem
                  title="Advisory & Financing"
                  image={placeholderImage}
                />
              </Column>
            </ColumnWrapper>
          </div>
        </div>

        <div className="content mt-6">
          <h1 className="is-size-1 mb-6">Typy pozemků</h1>

          <div className="content mt-4">
            <ColumnWrapper>
              <Column size="is-one-quarter">
                <WdwdItem title="Mixed-Use" image={placeholderImage} />
              </Column>

              <Column size="is-one-quarter">
                <WdwdItem title="Office" image={placeholderImage} />
              </Column>

              <Column size="is-one-quarter">
                <WdwdItem title="Residential" image={placeholderImage} />
              </Column>

              <Column size="is-one-quarter">
                <WdwdItem title="Retail" image={placeholderImage} />
              </Column>
            </ColumnWrapper>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
export default WDWD
