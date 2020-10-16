import React from "react"
import {
  BrowserRouter as Router,
  Route,
  RouteProps,
  Switch,
} from "react-router-dom"
import ContactPage from "../pages/contact"
import IndexPage from "../pages/index"
import WhatDoWeDo from "../pages/what-do-we-do"

const routes: RouteProps[] = [
  {
    path: "/contact",
    component: ContactPage,
  },
  {
    path: "/",
    component: IndexPage,
  },
]

export default () => (
  <Router>
    <Switch>
      {routes.map((route, key) => (
        <Route {...route} key={key} />
      ))}
    </Switch>
  </Router>
)
