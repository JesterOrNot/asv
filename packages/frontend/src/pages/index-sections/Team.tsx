import React from "react"
import { TeamMember } from "../../api/misc"
import { Column } from "../../components/flex/Column"
import ColumnWrapper from "../../components/flex/ColumnWrapper"
import { Person } from "../../components/global/Person"

export type TeamProps = {
  team: TeamMember[]
}

export const Team: React.FC<TeamProps> = ({ team }) => (
  <div className="container">
    <div className="content is-landing-section has-text-centered">
      <div className="mb-6">
        <h1 className="has-text-white">Náš tým</h1>
      </div>

      <div className="main-space">
        <ColumnWrapper mobile={true}>
          {team.map((member, key) => (
            <Column size="default" centered={true} key={key}>
              <Person
                name={member.name}
                position={member.position}
                image={{
                  src: member.image,
                  alt: member.name,
                }}
              />
            </Column>
          ))}
        </ColumnWrapper>
      </div>
    </div>
  </div>
)
