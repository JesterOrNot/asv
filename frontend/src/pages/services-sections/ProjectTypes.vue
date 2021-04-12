<template>
  <div class="w-full flex justify-between items-center" v-if="states">
    <router-link
      :to="
        !linkToEmpty
          ? states.residential_mixed < 1
            ? '#'
            : '/projects?type=residential_mixed'
          : '/projects?type=residential_mixed'
      "
      class="w-full h-32 bg-primary mr-4 hover:bg-opacity-100 transition duration-300 ease-in-out flex items-center justify-center text-center"
      :class="modelValue !== 'residential_mixed' && 'bg-opacity-80'"
    >
      <div>
        <card-subtitle>
          {{ getProjectTypeDisplayText("residential_mixed") }}
        </card-subtitle>
        <p class="text-white">Projekty: {{ states.residential_mixed }}</p>
      </div>
    </router-link>
    <router-link
      :to="
        !linkToEmpty ? (states.retail < 1 ? '#' : '/projects?type=retail') : '/projects?type=retail'
      "
      class="w-full h-32 bg-primary mr-4 hover:bg-opacity-100 transition duration-300 ease-in-out flex items-center justify-center text-center"
      :class="modelValue !== 'retail' && 'bg-opacity-80'"
    >
      <div>
        <card-subtitle>{{ getProjectTypeDisplayText("retail") }}</card-subtitle>
        <p class="text-white">Projekty: {{ states.retail }}</p>
      </div>
    </router-link>
    <router-link
      :to="
        !linkToEmpty ? (states.office < 1 ? '#' : '/projects?type=office') : '/projects?type=office'
      "
      class="w-full h-32 bg-primary hover:bg-opacity-100 transition duration-300 ease-in-out flex items-center justify-center text-center"
      :class="modelValue !== 'office' && 'bg-opacity-80'"
    >
      <div>
        <card-subtitle>{{ getProjectTypeDisplayText("office") }}</card-subtitle>
        <p class="text-white">Projekty: {{ states.office }}</p>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { getProjectTypeDisplayText, getProjectTypeStates, ProjectStates } from "../../api"
import Card from "../../components/elements/Card.vue"
import { CardTitle, CardSubtitle } from "../../components/elements/Card"
import Loader from "../../components/global/Loader.vue"
import { Title } from "../../components/typography"
import Button from "../../components/elements/Button.vue"

export default defineComponent({
  props: {
    linkToEmpty: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
    },
  },
  components: {
    Title,
    Card,
    Loader,
    CardTitle,
    CardSubtitle,
    Button,
  },
  setup() {
    const states = ref(null)

    const fetchData = async () => {
      const { data } = await getProjectTypeStates()
      if (!data.success)
        return (states.value = {
          office: 1,
          residential_mixed: 1,
          retail: 1,
        } as ProjectStates["states"])

      states.value = data.data.states
    }

    fetchData()

    return {
      getProjectTypeDisplayText,
      states,
    }
  },
})
</script>
