<template>
  <DefaultLayout v-if="state.info">
    <div
      class="hero is-primary"
      :style="{ display: 'flex', justifyContent: 'center' }"
    >
      <div class="hero-body has-text-centered">
        <h1 class="is-size-1">Kontaktujte nás</h1>
      </div>
    </div>
    <div class="main-space">
      <div class="container mt-6 pt-6">
        <div class="content">
          <div class="columns mb-6">
            <div
              class="column is-half"
              :style="{ marginTop: 'auto', marginBottom: 'auto' }"
            >
              <div class="contact">
                <div
                  class="info bigger mb-6"
                  v-for="(el, i) in state.info.phones"
                  :key="i"
                >
                  <PhoneCall size="4rem" />
                  {{ el }}
                </div>

                <div class="info bigger mb-6">
                  <MapIcon size="4rem" />
                  <div>
                    <div
                      v-for="(el, i) in state.info.address.split('\n')"
                      :key="i"
                    >
                      {{ el }}
                      <br />
                    </div>
                  </div>
                </div>

                <div
                  class="info bigger mb-6"
                  v-for="(el, i) in state.info.emails"
                  :key="i"
                >
                  <Mail size="4rem" />
                  {{ el }}
                </div>
              </div>
            </div>

            <div
              class="column is-half"
              :style="{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }"
            >
              <Map
                height="100%"
                width="100%"
                url="https://maps.google.com/maps?q=%C5%A1t%C4%9Bp%C3%A1nsk%C3%A1%202071%2F37&t=&z=19&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>

  <FullscreenLoader v-else-if="state.info === null" />

  <FullscreenFetchError v-else />
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue"
import Misc, { MainSettings } from "../api/misc"

export default defineComponent({
  setup() {
    const state = reactive({
      info: null as MainSettings | null,
    })

    onMounted(async () => {
      const res = await new Misc().getSettings()
      state.info = res.data.data ? res.data.data.settings : null
    })

    return {}
  },
})
</script>
