import { reactive } from "@vue/reactivity"

/**
 * User
 */
interface User {
  id: string
  email: string
  updated_at: Date
  created_at: Date
}

export default reactive({
  loaded: false,
  mobileMenuOpen: false,
  user: null as null | User,
})
