import React from "react"
import DefaultLayout from "../layouts/DefaultLayout"
import iceland from "../assets/img/projects/iceland.jpg"

export const WhatDoWeDo = () => {
  return (
    <DefaultLayout>
      <div
        className="about-us bg"
        style={{ backgroundImage: `url(${iceland})` }}
      ></div>
      <section
        id="about-us"
        className="container is-fluider is-fluid section full-w"
      >
        <div className="content">
          <h1>O nás</h1>

          <p>
            Skupinu ASV Group založili v roce 2014 Aleš Vobruba a Pavel Menšík,
            manažeři s dlouholetými zkušenostmi z mezinárodní realitní
            společnosti, jako realitní investiční platformu, která zahrnuje
            projekty v různých oborech a teritoriích – komerční nemovitosti,
            obchodní parky v České republice a na Slovensku, rezidenční a
            smíšené projekty v České republice, Rakousku a Chorvatsku
          </p>

          <p>Další informace</p>
          <ul>
            <li>Lorem ipsum</li>
            <li>Dolor sit</li>
            <li>amet consectuor</li>
          </ul>

          <p>Další informace</p>
          <ul>
            <li>Lorem ipsum</li>
            <li>Dolor sit</li>
            <li>amet consectuor</li>
          </ul>

          <p>Další informace</p>
          <ul>
            <li>Lorem ipsum</li>
            <li>Dolor sit</li>
            <li>amet consectuor</li>
          </ul>
        </div>
      </section>
    </DefaultLayout>
  )
}

export default WhatDoWeDo
