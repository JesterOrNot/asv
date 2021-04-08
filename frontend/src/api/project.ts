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
  getProject = (slug: string): Promise<{ status: number; data: GetProjectResponse }> =>
    new Promise(res =>
      res({
        status: 200,
        data: {
          success: true,
          data: {
            project: [
              {
                name: "Project 1",
                mainImage: "https://via.placeholder.com/600x300",
              },
              {
                name: "Project 2",
                mainImage: "https://via.placeholder.com/600x300",
              },
              {
                name: "Project 3",
                mainImage: "https://via.placeholder.com/600x300",
              },
              {
                name: "Project 4",
                mainImage: "https://via.placeholder.com/600x300",
              },
            ],
          },
        },
      })
    )
  // this.axios.get<GetProjectResponse>(`/projects/${slug}`)

  // TODO: add,edit,delete projects
}

export default Project
