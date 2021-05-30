import s from "fluent-json-schema"

interface WithId<TId extends string | number, TParams extends object = object> {
  Params: { id: TId } & TParams
}

const numberId = s
  .object()
  .prop("params", s.object().prop("id", s.number()).required(["id"]))
  .required(["params"])

const stringId = s
  .object()
  .prop("params", s.object().prop("id", s.string()).required(["id"]))
  .required(["params"])

export { WithId, numberId, stringId }
