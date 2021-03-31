<template>
  <Container>
    <div class="content is-landing-section has-text-centered mb-6">
      <h1>Naše projekty</h1>
    </div>
    <ColumnWrapper v-if="projects">
      <Column
        size="is-one-third"
        v-for="(el, i) in projects.sort(() => 0.5 - Math.random()).slice(0, 3)"
        :key="i"
      >
        <router-link :to="`/project/${el.slug}`">
          <Card :image="{ src: el.mainImage, alt: el.name }" :isProject="true">
            <h1>{{ el.name }}</h1>
          </Card>
        </router-link>
      </Column>
    </ColumnWrapper>
    <div class="content mt-6 has-text-centered">
      <router-link to="/projects" class="button is-primary is-large">
        Všechny naše projekty
      </router-link>
    </div>
  </Container>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
import Project from "../../api/project"
import Column from "../../components/flex/Column.vue"
import ColumnWrapper from "../../components/flex/ColumnWrapper.vue"
import Container from "../../components/flex/Container.vue"
import Card from "../../components/global/Card.vue"

export default defineComponent({
  components: {
    Column,
    ColumnWrapper,
    Container,
    Card,
  },
  setup() {
    const state = reactive({
      projects: null as object[] | null | false,
    })

    const fetch = async () => {
      try {
        const proj = new Project()
        const res = await proj.getProjects()

        state.projects = res.data.data.projects
      } catch (e) {
        console.log(e)
        state.projects = []
      }
    }
    fetch()

    return state
  },
})
</script>
