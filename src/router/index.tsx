import React from "react"
import { BrowserRouter as Router, Route, RouteProps } from "react-router-dom"
import IndexPage from "../pages/index"

const routes: object[] = [
  {
    path: "/",
    component: IndexPage,
  },
]

export default () => (
  <Router>
    {routes.map((route) => (
      <Route {...route} key={Math.random()} />
    ))}
  </Router>
)
