<script setup lang="ts">
const route = useRoute()
const queryPage = route.query.page

const sectionArticlesEl = useTemplateRef<HTMLDivElement>('articles')

const page = ref<number>(queryPage ? Number(queryPage) : 1)

const { data, status, error } = await useFetch('/api/posts', {
  query: { page: page, limit: 8 },
})

const isLoaded = computed<boolean>(() => status.value === 'success')

const setPage = (_page: number) => {
  page.value = _page

  if (sectionArticlesEl.value) {
    scrollTop({ top: sectionArticlesEl.value.offsetTop })
  }

  window.history.pushState({}, '', `/posts?page=${_page}`)
}
</script>

<template>
  <section ref="articles" class="articles bg-light">
    <div class="container">
      <div class="articles__wrap-title">
        <h1 class="articles__main-title title title--lg">Articles</h1>
      </div>
      <div v-if="isLoaded" class="articles__content">
        <div v-if="data && data.posts.length" class="articles__wrapper">
          <div class="articles__items">
            <article-card
              v-for="post in data.posts"
              :key="post.id"
              :post="post"
              class="articles__item" />
          </div>
          <ui-pagination
            class="articles__pagination"
            :bullets="data.pages"
            :active="page"
            @on-set-active="setPage" />
        </div>
        <div v-else-if="error">An error occurred. I'll check later.</div>
        <div v-else>No records found</div>
      </div>
      <div v-else>Loading...</div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.articles {
  margin-bottom: 6.4rem;
  padding: 12rem 0 14rem 0;

  &__wrap-title {
    margin-bottom: 6.4rem;
  }

  &__main-title {
    margin-bottom: 0;
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 3.2rem;
    row-gap: 4rem;
    margin-bottom: 5rem;
  }
}
</style>
