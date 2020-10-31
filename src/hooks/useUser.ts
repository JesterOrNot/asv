import useSWR from "swr"
import { axi } from "../api"

export const useUser = () => {
  const { data, mutate, error } = useSWR("/user/me", (url) =>
    axi()
      .get(url)
      .then((res) => res.data.data.user)
  )

  return {
    loading: !data && !error,
    user: data,
    mutate,
  }
}

export default useUser
