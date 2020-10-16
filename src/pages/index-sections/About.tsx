import React from "react"
import { Container } from "../../components/flex/Container"

export const About: React.FC = () => (
  <Container>
    <div className="content is-landing-section">
      <div className="has-text-centered">
        <h1>O nás</h1>
      </div>
      <p className="main-sub">
        Skupinu ASV Group založili v roce 2014 Aleš Vobruba a Pavel Menšík,
        manažeři s dlouholetými zkušenostmi z mezinárodní realitní společnosti,
        jako realitní investiční platformu, která zahrnuje projekty v různých
        oborech a teritoriích – komerční nemovitosti, obchodní parky v České
        republice a na Slovensku, rezidenční a smíšené projekty v{" "}
        <strong>České republice</strong>, <strong>Rakousku</strong> a{" "}
        <strong>Chorvatsku</strong>.
      </p>
    </div>
  </Container>
)
