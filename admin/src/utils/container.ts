// Type wrappers for the Service Container
import { useContainer, useServices } from "@matherioneu/container"
import { ServiceContainer } from "../types"

const services = () => useServices<ServiceContainer>()

const service = <T extends keyof ServiceContainer>(key: T): ServiceContainer[T] =>
  useContainer().service(key)

export { service, services }
