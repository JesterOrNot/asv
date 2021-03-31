<template>
  <div class="asv-footer">
    <div class="container">
      <div class="mb-6 pb-3 mt-6">
        <div class="has-text-centered mb-6">
          <Logo color="primary" height="150px" />
        </div>

        <div class="content has-text-centered">
          <h1>Pojďte do toho s námi!</h1>
          <h2>Viditelný studie té skryté praxi zde největších.</h2>

          <div class="contact-button-wrapper mt-6">
            <router-link
              to="/contact"
              class="button is-primary is-large is-contact"
            >
              Kontaktujte nás
            </router-link>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <hr />
      </div>

      <div class="contact columns mt-6">
        <div class="info column is-half is-contact" v-if="phone.length >= 1">
          <div
            v-for="(el, i) in phone"
            :key="i"
            :style="{ marginBottom: '5px' }"
          >
            <PhoneCall size="2rem" />
            <span>{{ el }}</span>
          </div>
        </div>

        <div class="info column is-half">
          <Map size="2rem" />
          <div class="address has-text-left">
            <span v-for="(el, i) in address.split('\n')" :key="i">
              {{ el }}
              <br />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    address: {
      type: String,
    },
    phone: {
      type: Array,
    },
  },
})
</script>
