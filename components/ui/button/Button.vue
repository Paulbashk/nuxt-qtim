<script setup lang="ts">
import type { IPropsButton } from './types'

const {
  color = 'dark',
  size = 'lg',
  border = false,
  withIcon = false,
  rounded = 'lg',
  borderColor = 'grey',
  borderSize = 'lg',
  noHoverEffect = false,
} = defineProps<IPropsButton>()

const classNames = computed<string[]>(() => {
  const classes = [
    'btn',
    `btn--rounded-${rounded}`,
    `btn--size-${size}`,
    `btn--${color}`,
  ]

  if (withIcon) {
    classes.push('btn--with-icon')
  }

  if (border) {
    classes.push(
      ...[
        'btn--border',
        `btn--border-${borderColor}`,
        `btn--border-${borderSize}`,
      ]
    )
  }

  if (noHoverEffect) {
    classes.push('btn--no-hover')
  }

  return classes
})
</script>

<template>
  <button v-if="$slots.default" :class="classNames">
    <slot />
  </button>
</template>

<style scoped lang="scss" src="./styles.scss"></style>
