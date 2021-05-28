<template>
  <div class="min-w-screen min-h-screen bg-primary flex justify-center items-center">
    <div class="bg-white p-8 shadow-2xl">
      <form @submit.prevent="sendForm">
        <div class="mb-8 text-center">
          <h1 class="text-3xl text-black">Přihlášení</h1>
        </div>
        <div class="mb-8">
          <input
            :disabled="state.loading"
            @input="validateEmail"
            autofocus
            type="text"
            v-model="state.email"
            class="py-2 px-4 border transition duration-300 ease-in-out focus:outline-none"
            :class="[
              errors.email ? 'border-red-500' : 'border-gray-200',
              state.loading ? 'cursor-not-allowed bg-gray-100' : 'bg-gray-200 hover:bg-gray-300',
            ]"
            placeholder="Email"
          />
          <div v-if="errors.email" class="text-sm text-gray-500 mt-2">
            {{ errors.email }}
          </div>
        </div>

        <div class="mb-8">
          <input
            :disabled="state.loading"
            @input="validatePassword"
            type="password"
            v-model="state.password"
            class="py-2 px-4 border transition duration-300 ease-in-out focus:outline-none"
            :class="[
              errors.password ? 'border-red-500' : 'border-gray-200',
              state.loading ? 'cursor-not-allowed bg-gray-100' : 'bg-gray-200 hover:bg-gray-300',
            ]"
            placeholder="Heslo"
          />
          <div v-if="errors.password" class="text-sm text-gray-500 mt-2">
            {{ errors.password }}
          </div>
        </div>

        <div class="flex justify-between">
          <div class="w-full flex justify-start items-center">
            <loader v-if="state.loading" sizeClass="w-8 h-8" />
          </div>
          <div class="w-full flex justify-end items-center">
            <Button type="submit" color="transparent" :disabled="state.loading">
              Přihlásit se
            </Button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
import Button from "../../../components/elements/Button.vue"
import Loader from "../../../components/global/Loader.vue"
import Logo from "../../../components/global/Logo.vue"
import { emailRegex } from "../../../utils"
import {$http} from "../../../api";
import {useRoute, useRouter} from "vue-router";

export default defineComponent({
  components: { Button, Logo, Loader },
  setup() {
    const router = useRouter()

    const state = reactive({
      email: "",
      password: "",
      loading: false,
    })

    const errors = reactive({
      email: null as string | null,
      password: null as string | null,
    })

    const validateEmail = () =>
      (errors.email = state.email && emailRegex.test(state.email) ? null : "Zadejte platný email.")

    const validatePassword = () =>
      (errors.password =
        state.password && state.password.trim().length >= 6
          ? null
          : "Heslo musí mít alespoň 6 znaků.")

    const sendForm = async () => {
      try {
        if (state.loading) return

        validateEmail()
        validatePassword()

        if (errors.email || errors.password) return

        state.loading = true

        const { data } = await $http.request({
          url: '/auth/login',
          method: 'POST',
          data: {
            email: state.email,
            password: state.password
          }
        })

        state.loading = false;

        router.push("/admin");
      } catch (e) {
        console.log({e})
        state.loading = false
      }
    }

    return {
      state,
      errors,
      sendForm,
      validateEmail,
      validatePassword,
    }
  },
})
</script>
