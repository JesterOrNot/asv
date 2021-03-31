<template>
  <div class="container">
    <div class="content is-landing-section has-text-centered">
      <div class="mb-6">
        <h1 class="has-text-white">Náš tým</h1>
      </div>

      <div class="main-space">
        <ColumnWrapper :mobile="true">
          <Column
            size="default"
            v-for="(member, i) in team"
            :centered="true"
            :key="i"
          >
            <Person
              :name="member.name"
              :position="member.position"
              :image="{ src: member.image, alt: member.name }"
            />
          </Column>
        </ColumnWrapper>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Column from "../../components/flex/Column.vue"
import ColumnWrapper from "../../components/flex/ColumnWrapper.vue"
import Person from "../../components/global/Person.vue"

export default defineComponent({
  components: {
    Column,
    ColumnWrapper,
    Person,
  },
  props: {
    team: {
      type: Array,
    },
  },
})
</script>
