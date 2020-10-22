import React from "react"
import { HashLoader } from "react-spinners"
import FullscreenWrapper from "./FullscreenWrapper"

export const FullscreenLoader: React.FC = () => (
  <FullscreenWrapper>
    <HashLoader size="100" color="#fff" />
  </FullscreenWrapper>
)
