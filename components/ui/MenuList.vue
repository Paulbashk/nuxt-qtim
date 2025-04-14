<script setup lang="ts">
interface IItem {
  name: string
  to: string
  isTargetBlank?: boolean
}

interface IProps {
  items: IItem[]
  typeLink?: 'size-lg' | 'size-sm'
}

const { typeLink = 'size-sm' } = defineProps<IProps>()
</script>

<template>
  <ul class="menu-list">
    <li v-for="item in items" :key="item.name" class="menu-list__item">
      <nuxt-link
        :class="['menu-list__item-link', `menu-list__item-link--${typeLink}`]"
        :to="item.to"
        :target="item.isTargetBlank ? '_blank' : undefined">
        {{ item.name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.menu-list {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding-left: 0;

  &__item {
    line-height: 1;
  }

  &__item-link--size-lg {
    font-size: 2rem;
    line-height: 1;
    font-weight: 400;
    text-decoration: none;
    color: var(--color-dark-1);
    transition-property: color;
    transition-duration: var(--transition-delay);
    transition-timing-function: var(--transition-function);

    &:hover {
      color: var(--color-purple);
    }
  }

  &__item-link--size-sm {
    color: var(--color-dark-1);
    text-decoration-color: var(--color-dark-1);
    line-height: 1.2;
    letter-spacing: 0.01rem;
    text-decoration: underline;
    text-underline-offset: 0.7rem;
    text-decoration-thickness: 0.1rem;
    transition-property: color, text-decoration-color, text-underline-offset;
    transition-duration: var(--transition-delay);
    transition-timing-function: var(--transition-function);

    &:hover {
      text-underline-offset: 0.5rem;
      color: var(--color-light-green);
      text-decoration-color: var(--color-light-green);
    }
  }
}
</style>
