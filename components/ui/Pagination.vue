<script setup lang="ts">
interface IProps {
  bullets: number
  active: number
  visibleBy?: number
}

interface IEmitEvents {
  (e: 'onSetActive', page: number): void
}

const { bullets, active, visibleBy = 5 } = defineProps<IProps>()
const emit = defineEmits<IEmitEvents>()

const visibleBullets = computed<number>(() =>
  bullets >= visibleBy ? visibleBy : bullets
)

const addNumberBulletWhenMax = ref<number>(active > 5 ? active - visibleBy : 0)

function handleBulletClick(bulletNumber: number) {
  const currentActive = bulletNumber + addNumberBulletWhenMax.value

  if (active !== currentActive) {
    if (active > visibleBy) {
      const currentAdded = currentActive - visibleBy
      addNumberBulletWhenMax.value = currentAdded < 0 ? 0 : currentAdded
    }

    emit('onSetActive', currentActive)
  }
}

function handleNavigationButtonPrevClick() {
  if (active > visibleBy) {
    addNumberBulletWhenMax.value--
    emit('onSetActive', active - 1)
  }
}

function handleNavigationButtonNextClick() {
  if (active < bullets) {
    if (active >= visibleBy) {
      addNumberBulletWhenMax.value++
    }

    emit('onSetActive', active + 1)
  }
}
</script>

<template>
  <div class="pagination">
    <div class="pagination__wrapper">
      <div class="pagination__navigation pagination__navigation--prev">
        <ui-button
          v-if="addNumberBulletWhenMax > 0"
          class="pagination__navigation-button"
          size="sm"
          color="light"
          rounded="xs"
          border-size="xs"
          border-color="grey"
          border
          with-icon
          @click.prevent="handleNavigationButtonPrevClick">
          <Icon name="icon:arrow-left" />
        </ui-button>
      </div>
      <div class="pagination__bullets">
        <div
          v-for="bullet in visibleBullets"
          :key="bullet + addNumberBulletWhenMax"
          class="pagination__bullet">
          <ui-button
            class="pagination__bullet-button"
            size="sm"
            :color="
              active === bullet + addNumberBulletWhenMax ? 'dark' : 'light-grey'
            "
            rounded="xs"
            with-icon
            @click="handleBulletClick(bullet)">
            {{ bullet + addNumberBulletWhenMax }}
          </ui-button>
        </div>
      </div>
      <div class="pagination__navigation pagination__navigation--next">
        <ui-button
          v-if="active < bullets"
          class="pagination__navigation-button"
          size="sm"
          color="light"
          rounded="xs"
          border-size="xs"
          border-color="grey"
          border
          with-icon
          @click.prevent="handleNavigationButtonNextClick">
          <Icon name="icon:arrow-right" />
        </ui-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  &__wrapper,
  &__bullets {
    display: flex;
    align-items: center;
    column-gap: 0.8rem;
  }

  &__bullet-button {
    padding-top: 0.2rem;
  }

  &__navigation-button {
    span {
      transition-property: filter;
      transition-duration: var(--transition-delay);
      transition-timing-function: var(--transition-function);
    }

    &:hover {
      span {
        filter: invert(1) brightness(2);
      }
    }
  }
}
</style>
