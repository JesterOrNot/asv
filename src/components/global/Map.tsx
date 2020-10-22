import React, { useState } from "react"
import { HashLoader } from "react-spinners"

export type MapProps = {
  url: string
  height: string
  width: string
}

export const MapLoader = () => (
  <div style={{ position: "absolute" }}>
    <HashLoader color="#004987" size="100" />
  </div>
)

export const Map: React.FC<MapProps> = ({ url, height, width }) => {
  const [mapLoaded, setMapLoaded] = useState(false)

  return (
    <>
      <iframe
        title="Mapy Google"
        onLoad={() => setMapLoaded(true)}
        style={{ height, width }}
        src={url}
      ></iframe>
      {!mapLoaded && <MapLoader />}
    </>
  )
}
