import { $http } from "./index";

/**
 * Authenticate
 *
 * @param username
 * @param password
 */
export const login = (username: string, password: string) => $http.request({
  method: "POST",
  url: "/auth/login",
  data: {
    username,
    password
  }
})
