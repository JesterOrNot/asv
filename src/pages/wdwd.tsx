import React from "react"
import { Column } from "../components/flex/Column"
import ColumnWrapper from "../components/flex/ColumnWrapper"
import { Container } from "../components/flex/Container"
import { Card } from "../components/global/Card"
import DefaultLayout from "../layouts/DefaultLayout"

export const WDWD: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="hero is-primary is-medium mb-6">
        <Container>
          <div className="hero-body">
            <h1 className="is-size-1">Co děláme?</h1>
          </div>
        </Container>
      </div>

      <div className="container mt-6 pt-6">
        <div className="content">
          <h1>Projekty</h1>

          <div className="content mt-4">
            <ColumnWrapper>
              <Column size="is-one-third">
                <div className="card">
                  <div className="card-content" style={{ padding: "0" }}>
                    <div className="card-image">
                      <img src="https://via.placeholder.com/150x150" alt="" />
                    </div>
                  </div>
                </div>
              </Column>
            </ColumnWrapper>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
export default WDWD
