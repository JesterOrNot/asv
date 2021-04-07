import { h, defineComponent } from "vue"
import {} from "../../component-definitions"

// export default defineComponent({
//   setup: (_, { attrs, slots }) => () =>
//     h(
//       "div",
//       {
//         ...attrs,
//         class: ["flex flex-col", attrs.class ?? ""].join(" "),
//       },
//       slots.default?.()
//     ),
// })

export default defineComponent({
  setup(_, { attrs, slots }) {
    return () => h("div", { class: "flex flex-col" }, slots.default?.())
  },
})

// export default defineRawComponent(
//   function ColumnWrapper(_, { attrs, slots }) {
//     return h("div", attrs, slots.default?.())
//   },
//   { class: "flex flex-col" }
// )
