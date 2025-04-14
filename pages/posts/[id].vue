<script setup lang="ts">
const route = useRoute()

const id = route.params.id

const { data, error, status } = await useFetch('/api/posts/:id', {
  query: { id: id },
})

const isLoaded = computed<boolean>(() => status.value === 'success')

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  })
}

useSeoMeta({
  title: data.value.post.title,
  description: data.value.post.description,
})
</script>

<template>
  <section class="article-page">
    <div v-if="isLoaded" class="container">
      <div v-if="data" class="article-page__wrap-content">
        <div class="article-page__wrap-title">
          <h1 class="article-page__main-title title title--xl">
            {{ data.post.title }}
          </h1>
        </div>
        <div class="article-page__wrap-image">
          <nuxt-img :src="data.post.image" class="article-page__main-image" />
        </div>
        <div class="article-page__content">
          <div class="article-page__block">
            <h2 class="article-page__block-title title title--xs">About</h2>
            <div class="article-page__text">
              <p>{{ data.post.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="error">An error occurred. Please try again later.</div>
    </div>
    <div v-else class="container">
      <div class="article-page__wrap-title">
        <h1>Loading...</h1>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.article-page {
  padding: 12rem 0 8rem 0;

  &__wrap-title {
    margin-bottom: 7.2rem;
  }

  &__main-title {
    margin-bottom: 0;
  }

  &__wrap-image {
    margin-bottom: 8rem;
    width: 100%;
  }

  &__main-image {
    display: block;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 70rem;
    object-fit: cover;
  }

  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 4rem;
  }

  &__block {
    max-width: 69.5rem;
  }

  &__block-title {
    margin-bottom: 3.2rem;
  }

  &__text {
    p {
      font-size: 3.6rem;
      line-height: 1.24;
      margin: 0;
    }
  }
}
</style>
