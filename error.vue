<script setup lang="ts">
import type { NuxtError } from '#app'

interface IProps {
  error: NuxtError
}

defineProps<IProps>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <nuxt-layout name="default">
    <div class="page-error">
      <h2>{{ error.statusCode }}</h2>
      <ui-button @click="handleError">Go Home Page</ui-button>
    </div>
  </nuxt-layout>
</template>
