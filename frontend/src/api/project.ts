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
  investments: { en: "Investments & Acquisitions" },
  asset_management: { en: "Asset Management & Leasing" },
  advisory: { en: "Advisory & Financing" },
  development: { en: "Development & Construction Management" },
  mixed: { en: "Mixed Use" },
  office: { en: "Office" },
  residential: { en: "Residential" },
  retail: { en: "Retail" },
}

export const getProjectTypeDisplayText = (type: keyof typeof PROJECT_TYPES) => {
  const lang = "en" // TODO: change

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
