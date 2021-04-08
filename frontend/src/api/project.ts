import { $http, ErrorResponse, SuccessResponse } from "./index";

export interface ProjectResDto {
  id: string
  name: string
  slug: string
}

/**
 * Get projects (paginated)
 *
 * @param {number} page Current page
 * @param {number} limit Projects per page
 */
export const getProjects = (page = 1, limit = 10) =>
  $http.request<SuccessResponse<{ projects: ProjectResDto[] }> | ErrorResponse>({
    method: "GET",
    url: "/project/list",
    params: {
      page,
      limit
    }
  })

/**
 * Get project by id/slug
 *
 * @param {string} id Project id/slug
 */
export const getProject = (id: string) =>
  $http.request<SuccessResponse<{ project: ProjectResDto }> | ErrorResponse>({
    method: "GET",
    url: "/project",
    params: {
      id
    }
  })
