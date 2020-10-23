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
          <h1 className="is-size-1 mb-6">Služby</h1>

          <div className="content mt-4">
            <ColumnWrapper>
              <Column size="is-one-quarter">
                <WdwdItem
                  title="Development & Construction Management"
                  image="https://fra1.digitaloceanspaces.com/awooing/asv/proj/mvr/img-1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=GLWWS345RNH5YL6DZUFC%2F20201023%2Ffra1%2Fs3%2Faws4_request&X-Amz-Date=20201023T070008Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ef30a995a6aec6690ff290e15b4592ae8dd2e1ab0f6fa07f73e6e48af0036747"
                />
              </Column>

              <Column size="is-one-quarter">
                <WdwdItem
                  title="Investments & Acquisitions"
                  image="https://fra1.digitaloceanspaces.com/awooing/asv/proj/mvr/img-1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=GLWWS345RNH5YL6DZUFC%2F20201023%2Ffra1%2Fs3%2Faws4_request&X-Amz-Date=20201023T070008Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ef30a995a6aec6690ff290e15b4592ae8dd2e1ab0f6fa07f73e6e48af0036747"
                />
              </Column>

              <Column size="is-one-quarter">
                <WdwdItem
                  title="Asset Management & Leasing"
                  image="https://fra1.digitaloceanspaces.com/awooing/asv/proj/mvr/img-1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=GLWWS345RNH5YL6DZUFC%2F20201023%2Ffra1%2Fs3%2Faws4_request&X-Amz-Date=20201023T070008Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ef30a995a6aec6690ff290e15b4592ae8dd2e1ab0f6fa07f73e6e48af0036747"
                />
              </Column>

              <Column size="is-one-quarter">
                <WdwdItem
                  title="Advisory & Financing"
                  image="https://fra1.digitaloceanspaces.com/awooing/asv/proj/mvr/img-1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=GLWWS345RNH5YL6DZUFC%2F20201023%2Ffra1%2Fs3%2Faws4_request&X-Amz-Date=20201023T070008Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ef30a995a6aec6690ff290e15b4592ae8dd2e1ab0f6fa07f73e6e48af0036747"
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
                <WdwdItem
                  title="Mixed-Use"
                  image="https://fra1.digitaloceanspaces.com/awooing/asv/proj/mvr/img-1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=GLWWS345RNH5YL6DZUFC%2F20201023%2Ffra1%2Fs3%2Faws4_request&X-Amz-Date=20201023T070008Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ef30a995a6aec6690ff290e15b4592ae8dd2e1ab0f6fa07f73e6e48af0036747"
                />
              </Column>

              <Column size="is-one-quarter">
                <WdwdItem
                  title="Office"
                  image="https://fra1.digitaloceanspaces.com/awooing/asv/proj/mvr/img-1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=GLWWS345RNH5YL6DZUFC%2F20201023%2Ffra1%2Fs3%2Faws4_request&X-Amz-Date=20201023T070008Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ef30a995a6aec6690ff290e15b4592ae8dd2e1ab0f6fa07f73e6e48af0036747"
                />
              </Column>

              <Column size="is-one-quarter">
                <WdwdItem
                  title="Residential"
                  image="https://fra1.digitaloceanspaces.com/awooing/asv/proj/mvr/img-1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=GLWWS345RNH5YL6DZUFC%2F20201023%2Ffra1%2Fs3%2Faws4_request&X-Amz-Date=20201023T070008Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ef30a995a6aec6690ff290e15b4592ae8dd2e1ab0f6fa07f73e6e48af0036747"
                />
              </Column>

              <Column size="is-one-quarter">
                <WdwdItem
                  title="Retail"
                  image="https://fra1.digitaloceanspaces.com/awooing/asv/proj/mvr/img-1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=GLWWS345RNH5YL6DZUFC%2F20201023%2Ffra1%2Fs3%2Faws4_request&X-Amz-Date=20201023T070008Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ef30a995a6aec6690ff290e15b4592ae8dd2e1ab0f6fa07f73e6e48af0036747"
                />
              </Column>
            </ColumnWrapper>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
export default WDWD
