<script setup lang="ts"></script>

<template>
  <div class="select-language">
    <div class="select-language__wrap-button">
      <ui-button
        class="select-language__btn"
        color="light"
        size="lg"
        rounded="circle"
        border-size="lg"
        border-color="grey"
        border
        with-icon
        no-hover-effect>
        <Icon class="select-language__button-icon" name="icon:united-kingdom" />
      </ui-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.select-language {
  &__button-icon {
    width: 2.4rem;
    height: 2.4rem;
  }
}
</style>
