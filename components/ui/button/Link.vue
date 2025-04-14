<script setup lang="ts">
import type { NuxtLinkProps } from '#app'
import type { IPropsButton } from './types'

type TProps = IPropsButton & NuxtLinkProps

const {
  color = 'dark',
  size = 'lg',
  border = false,
  withIcon = false,
  rounded = 'lg',
  borderColor = 'grey',
  borderSize = 'lg',
  noHoverEffect = false,
  ...otherProps
} = defineProps<TProps>()

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
  <nuxt-link
    v-if="$slots.default"
    :class="classNames"
    v-bind="{ ...otherProps }">
    <slot />
  </nuxt-link>
</template>

<style scoped lang="scss" src="./styles.scss"></style>
