<script setup lang="ts">
import { useSeoMeta } from 'nuxt/app'

useSeoMeta({
  title: 'Posts',
  description: 'Posts',
})
</script>

<template>
  <articles-app />
</template>
