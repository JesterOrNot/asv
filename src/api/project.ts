import { axi, BaseResponse } from "."

export interface GetProjectsResponse extends BaseResponse {
  data: {
    // todo: better types
    projects: object[]
  }
}

export interface GetProjectResponse extends BaseResponse {
  data: {
    // todo: better types
    project: object
  }
}

/**
 * Project API
 */
export class Project {
  axios = axi()

  // TODO: better types, pls
  getProjects = () => this.axios.get<GetProjectsResponse>("/projects/all")
  getProject = (slug: string) =>
    this.axios.get<GetProjectResponse>(`/projects/${slug}`)

  // TODO: add,edit,delete projects
}

export default Project
