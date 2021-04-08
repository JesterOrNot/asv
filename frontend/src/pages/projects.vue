<template>
  <DefaultLayout>
    <div class="hero is-primary" :style="{ display: 'flex', justifyContent: 'center' }">
      <div class="hero-body has-text-centered">
        <h1 class="is-size-1">Projekty</h1>
      </div>
    </div>

    <div class="main-space" v-if="projects">
      <div class="container mt-6 pt-6">
        <div class="content">
          <div class="columns is-multiline mb-6">
            <Column size="is-half" v-for="(el, i) in projects" :key="i">
              <WdwdItem :title="el.name" :image="el.mainImage" />
            </Column>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      :style="{
        display: 'flex',
        justifyContent: 'flex',
        marginTop: '15rem',
      }"
    >
      <HashLoader size="100px" color="#004987" />
    </div>
  </DefaultLayout>
</template>
