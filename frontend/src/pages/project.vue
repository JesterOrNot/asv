<template>
  <DefaultLayout v-if="project">
    <div class="hero is-primary" :style="{ display: 'flex', justifyContent: 'center' }">
      <div class="hero-body has-text-centered">
        <h1 class="is-size-1">{{ project.name }}</h1>
      </div>
    </div>
    <div class="main-space">
      <div class="container mt-6 pt-6">
        <div class="columns">
          <div class="column is-half">
            <div class="project-info">
              <div class="desc mt-6">
                <div class="text has-text-black is-size-5">
                  {{ project.description }}
                </div>
                <div class="contact mt-5">
                  <a :href="project.website" v-if="project.website !== '%none%'">
                    <div class="info bigger">
                      <Globe size="3rem" />
                      {{ project.website }}
                    </div>
                  </a>

                  <div class="info bigger mt-5">
                    <Map size="3rem" />
                    <div>
                      <div v-for="(line, i) in project.address.split('\n')" :key="i">
                        {{ line }}
                        <br />
                      </div>
                    </div>

                    <textarea name="" id=""></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="column is-half"
            :style="{
              marginTop: 'auto',
              marginBottom: 'auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }"
          >
            <ReactImageGallery
              v-if="mainLoaded !== null"
              items="{project.images}"
              @error="mainLoaded = false"
              @load="mainLoaded = true"
            />

            <MapLoader v-if="mainLoaded === false">
              <div
                v-if="mainLoaded === null"
                :style="{
                  background: '#004987',
                  color: '#fff',
                  padding: '2rem',
                  borderRadius: '4px',
                }"
              >
                <h2 class="is-size-3">Obrázek se nepodařilo načíst :/</h2>
              </div>
            </MapLoader>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>

  <FullscreenLoader v-else-if="project === null" />
  <FullscreenFetchError v-else />
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
import { useRoute } from "vue-router"
import Project from "../api/project"

export default defineComponent({
  setup() {
    const { params } = useRoute()

    const state = reactive({
      project: null as object | null | false,
      mainLoaded: false,
    })

    const fetchData = async () => {
      try {
        const { data: res } = await new Project().getProject(params.slug)

        ;(res as any).data.project.images = (res as any).data.project.images.map((el: string) => ({
          original: el,
          thumbnail: el,
        }))

        state.project = res.data.project
        console.log("Project", (res.data.project as any).mainImage)
      } catch (e) {
        console.log(e)
        state.project = false
      }
    }

    fetchData()
  },
})
</script>
