import { $http, ErrorResponse, SuccessResponse } from "./index";

interface TeamResDto {
  id: number
  fullName: string
  position: string
  image?: string | null
}

export const getTeams = () =>
  $http.request<SuccessResponse<{ teamMembers: TeamResDto[] }> | ErrorResponse>({
    method: "GET",
    url: "/team/list",
  })
