<script setup lang="ts">
const MenuList = [
  {
    name: 'Works',
    to: 'https://qtim.pro/projects/',
    isTargetBlank: true,
  },
  {
    name: 'About',
    to: 'https://qtim.pro/projects/',
    isTargetBlank: true,
  },
]
</script>

<template>
  <header class="header bg-light">
    <div class="header__container">
      <div class="header__flex">
        <div class="header__logo">
          <nuxt-link class="header__logo-link" to="/">
            <nuxt-img
              class="header__logo-image"
              src="/images/logo.svg"
              width="84"
              height="25" />
          </nuxt-link>
        </div>
        <nav class="header__navigation">
          <div class="header__menu">
            <ui-menu-list
              :items="MenuList"
              class="header__menu-list"
              type-link="size-lg" />
          </div>
          <div class="header__buttons">
            <ui-select-lang class="header__select-language" />
            <div class="header__wrap-button">
              <ui-button-link
                class="header__button-link"
                to="https://qtim.pro/"
                size="lg"
                rounded="lg"
                color="dark">
                Let's work
              </ui-button-link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 3.5rem 0;

  &__container {
    padding: 0 4rem;
  }

  &__flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo-link {
    display: flex;
  }

  &__logo-image {
    width: 8.4rem;
    height: 2.5rem;
    object-fit: cover;
  }

  &__navigation {
    display: flex;
    align-items: center;
  }

  &__menu {
    margin-right: 9rem;
  }

  &__menu-list {
    column-gap: 6rem;
  }

  &__buttons {
    display: flex;
    align-items: center;
    column-gap: 1.6rem;
  }
}
</style>
