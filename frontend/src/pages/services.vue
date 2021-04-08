<template>
  <DefaultLayout>
    <div class="hero is-primary" :style="{ display: 'flex', justifyContent: 'center' }">
      <div class="hero-body has-text-centered">
        <h1 class="is-size-1">Co děláme</h1>
      </div>
    </div>

    <div class="container mt-6 pt-6">
      <div class="content">
        <h1 class="is-size-1 mb-6">Naše činnost</h1>

        <div class="content mt-4">
          <ColumnWrapper>
            <Column size="is-one-quarter">
              <WdwdItem title="Development & Construction Management" :image="placeholderImage" />
            </Column>

            <Column size="is-one-quarter">
              <WdwdItem title="Investments & Acquisitions" :image="placeholderImage" />
            </Column>

            <Column size="is-one-quarter">
              <WdwdItem title="Asset Management & Leasing" :image="placeholderImage" />
            </Column>

            <Column size="is-one-quarter">
              <WdwdItem title="Advisory & Financing" :image="placeholderImage" />
            </Column>
          </ColumnWrapper>
        </div>
      </div>

      <div class="content mt-6">
        <h1 class="is-size-1 mb-6">Typy pozemků</h1>

        <div class="content mt-4">
          <ColumnWrapper>
            <Column size="is-one-quarter">
              <WdwdItem title="Mixed-Use" :image="placeholderImage" />
            </Column>

            <Column size="is-one-quarter">
              <WdwdItem title="Office" :image="placeholderImage" />
            </Column>

            <Column size="is-one-quarter">
              <WdwdItem title="Residential" :image="placeholderImage" />
            </Column>

            <Column size="is-one-quarter">
              <WdwdItem title="Retail" :image="placeholderImage" />
            </Column>
          </ColumnWrapper>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script>
import { defineComponent } from "vue"
import Column from "../components/flex/Column.vue"
import ColumnWrapper from "../components/flex/ColumnWrapper"
import DefaultLayout from "../layouts/DefaultLayout.vue"
import WdwdItem from "../components/global/WdwdItem.vue"

export default defineComponent({
  components: {
    WdwdItem,
    Column,
    ColumnWrapper,
    DefaultLayout,
  },
})
</script>
