<script setup lang="ts">
import type { IPost } from '~/shared/types/IPost'

interface IProps {
  post: IPost
}

const { post } = defineProps<IProps>()

const linkPage = computed(() => ({
  name: 'posts-id',
  params: { id: post.id },
}))
</script>

<template>
  <article class="card-article">
    <div class="card-article__wrap-image">
      <nuxt-link :to="linkPage" class="card-article__image-link">
        <nuxt-img
          :src="post.image"
          :alt="post.title"
          class="card-article__image" />
      </nuxt-link>
    </div>
    <div class="card-article__wrap-title">
      <nuxt-link :to="linkPage" class="card-article__title title title--sm">
        {{ post.description }}
      </nuxt-link>
    </div>
    <div class="card-article__wrap-link">
      <nuxt-link :to="linkPage" class="card-article__link">Read more</nuxt-link>
    </div>
  </article>
</template>

<style scoped lang="scss">
.card-article {
  position: relative;
  transform: translateY(0);
  transition-property: transform;
  transition-duration: var(--transition-delay);
  transition-timing-function: var(--transition-function);

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    bottom: -1.2rem;
    height: 1.2rem;
    opacity: 0;
    z-index: 0;
  }

  &__image-link,
  &__title,
  &__link {
    text-decoration: none;
  }

  &__wrap-image {
    width: 100%;
    height: 28rem;
    margin-bottom: 2.4rem;
  }

  &__image-link,
  &__image {
    display: block;
    width: 100%;
    height: 100%;
  }

  &__image {
    max-width: 100%;
    object-fit: cover;
  }

  &__title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -moz-box;
    -moz-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-clamp: 3;
    box-orient: vertical;
    color: var(--color-dark-1);
  }

  &__wrap-link {
    position: absolute;
    bottom: -3.2rem;
    z-index: 1;
    opacity: 0;
    transition-property: opacity;
    transition-duration: var(--transition-delay);
    transition-timing-function: var(--transition-function);
  }

  &__link {
    color: var(--color-light-purple);
    transition-property: color;
    transition-duration: var(--transition-delay);
    transition-timing-function: var(--transition-function);

    &:hover {
      color: var(--color-purple);
    }
  }

  &:hover {
    transform: translateY(-2rem);

    .card-article__wrap-link {
      opacity: 1;
    }
  }
}
</style>
