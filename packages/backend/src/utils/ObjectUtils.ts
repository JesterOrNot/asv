export const removeKeys = <T extends object>(obj: T, keys: Array<keyof T>) => {
  for (const key of keys) {
    obj[key] = undefined
    delete obj[key]
  }
  return obj
}
