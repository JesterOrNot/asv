import { UserInputException } from "@fasteerjs/exceptions"

class EntityNotFoundException extends UserInputException {
  constructor(message = "The queried resource was not found.") {
    super(message)
  }
}

export { EntityNotFoundException }

export default EntityNotFoundException
