import { defineComponent, h, PropType } from "@vue/runtime-core"

/*********************************
 * Props                         *
 *********************************/

export const string = (_default?: string) => ({
  type: String,
  default: _default,
})

export const bool = (_default?: boolean) => ({
  type: Boolean,
  default: _default,
})

export const str = (...strs: string[]) => strs.join(" ")

export const oneOf = <
  TType extends any = any,
  TArray extends Array<TType> = Array<TType>
>(
  type: TType,
  arr: TArray,
  _default?: TType
) => ({
  type: type as PropType<TType>,
  default: _default,
  validator: (item: TType) => arr.includes(item),
})

/*********************************
 * DefineComponent shorthands    *
 *********************************/

export const defineTypographyComponent = (
  defaultTag: string,
  classes: string
) =>
  defineComponent({
    name: `Typography_${defaultTag}`,
    props: { tagName: string(defaultTag) },
    setup: (props, { attrs, slots }) => () =>
      h(
        props.tagName,
        {
          ...attrs,
          class: [classes, attrs.class ?? ""].join(" "),
        },
        slots.default?.()
      ),
  })
