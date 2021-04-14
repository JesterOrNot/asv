import { $http, ErrorResponse, SuccessResponse } from "./index"

export interface ProjectResDto {
  id: string
  name: string
  type: keyof typeof PROJECT_TYPES
  slug: string
  description: string
  website?: string | null
  images: string[]
}

export const PROJECT_TYPES = {
  office: {
    cs: "Investiční aktiva",
    en: "Office",
  },
  residential_mixed: {
    cs: "Rezidenční development",
    en: "Residential & Mixed Use",
  },
  retail: {
    cs: "Komerční development“",
    en: "Retail",
  },
}

export interface ProjectStates {
  states: {
    [key in keyof typeof PROJECT_TYPES]: number
  }
}

export const getProjectTypeDisplayText = (type: keyof typeof PROJECT_TYPES) => {
  const lang = "cs" // TODO: change

  const translation = PROJECT_TYPES[type]

  // en is fallback
  return typeof translation === "string" ? translation : translation[lang] ?? translation["en"]
}

/**
 * Get projects (paginated)
 *
 * @param {number} page Current page
 * @param {number} limit Projects per page
 * @param {keyof typeof PROJECT_TYPES} type Project Types
 */
export const getProjects = (page = 1, limit = 10, type: string | null = null) =>
  $http.request<SuccessResponse<{ projects: ProjectResDto[] }> | ErrorResponse>({
    method: "GET",
    url: "/project/list",
    params: {
      page,
      limit,
      ...(type ? { type } : {}),
    },
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
      id,
    },
  })

/**
 * Get project type states
 */
export const getProjectTypeStates = () =>
  $http.request<SuccessResponse<ProjectStates> | ErrorResponse>({
    method: "GET",
    url: "/project/typeStates",
  })
