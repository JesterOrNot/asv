import React from "react"
import {
  BrowserRouter as Router,
  Route,
  RouteProps,
  Switch,
} from "react-router-dom"

import Contact from "../pages/contact"
import Index from "../pages/index"
import Project from "../pages/project"
import Projects from "../pages/projects"
import WhatDoWeDo from "../pages/services"

const routes: RouteProps[] = [
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/projects",
    component: Projects,
  },
  {
    path: "/project/:slug",
    component: Project,
  },
  {
    path: "/services",
    component: WhatDoWeDo,
  },
  {
    path: "/",
    component: Index,
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
