import React from "react"
import useUser from "./hooks/useUser"
import Router from "./router"

export default () => {
  const { user } = useUser()

  return <Router />
}
