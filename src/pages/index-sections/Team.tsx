import React from "react"
import { Column } from "../../components/flex/Column"
import ColumnWrapper from "../../components/flex/ColumnWrapper"
import { Person } from "../../components/global/Person"

export const Team: React.FC = () => (
  <div className="container">
    <div className="content is-landing-section has-text-centered">
      <div className="mb-6">
        <h1>Náš tým</h1>
      </div>

      <ColumnWrapper>
        <Column size="is-half" centered={true}>
          <Person
            name="Aleš Vobruba"
            position="CEO"
            image={{
              src: "https://via.placeholder.com/100x140",
              alt: "Aleš Vobruba",
            }}
          />
        </Column>

        <Column size="is-half" centered={true}>
          <Person
            name="Pavel Menšík"
            position="Finanční ředitel"
            image={{
              src: "https://via.placeholder.com/100x140",
              alt: "Pavel Menšík",
            }}
          />
        </Column>
      </ColumnWrapper>
    </div>
  </div>
)
