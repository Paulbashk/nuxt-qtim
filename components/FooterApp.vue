<script setup lang="ts">
const menuListLeft = [
  {
    name: 'Facebook',
    to: 'https://www.facebook.com/qtim.pro/',
    isTargetBlank: true,
  },
  {
    name: 'Instagram',
    to: 'https://www.instagram.com/qtim.pro/',
    isTargetBlank: true,
  },
  {
    name: 'Telegram',
    to: 'https://t.me/qtim71',
    isTargetBlank: true,
  },
]

const menuListRight = [
  {
    name: 'Behance',
    to: '/',
    isTargetBlank: false,
  },
  {
    name: 'Linkedn',
    to: 'https://www.linkedin.com/company/qtim',
    isTargetBlank: true,
  },
  {
    name: 'Privacy Policy',
    to: 'https://api.qtim.ru/upload/cookie-agreement-qtim.pdf',
    isTargetBlank: true,
  },
]

function handleClick(event: MouseEvent) {
  const target = event.target as HTMLLinkElement

  if (target) {
    target.classList.add('footer__circle-link--clicked')
  }
}
</script>

<template>
  <footer class="footer bg-light-purple">
    <div class="footer__top footer-top">
      <div class="container">
        <div class="footer-top__grid">
          <div class="footer-top__left">
            <div class="footer-top__wrap-title">
              <span class="footer-top__subtext">Is there a project?</span>
              <nuxt-link
                to="https://qtim.pro/"
                class="footer-top__title title title--xl"
                data-title="Let’s work together">
                <span>Let’s work together</span>
              </nuxt-link>
            </div>
          </div>
          <div class="footer-top__right">
            <div class="footer-top__blocks">
              <div class="footer-top__block">
                <span class="footer-top__block-title">For all questions</span>
                <div class="footer-top__block-wrapper">
                  <div class="footer-top__block-content">
                    <a href="tel:+79202780068">+7 (920) 278—00—68</a>
                    <a href="emailto:qtim@agency.com">qtim@agency.com</a>
                  </div>
                </div>
              </div>
              <div class="footer-top__block">
                <span class="footer-top__block-title">Office in Russia</span>
                <div class="footer-top__block-wrapper">
                  <div class="footer-top__block-content">
                    <span class="footer-top__block-text">
                      139 Ruben Station Lake Drew, NM 52678
                    </span>
                  </div>
                  <div class="footer-top__block-links">
                    <ui-button-link
                      to="/"
                      class="footer-top__block-btn footer-top__block-btn--location"
                      color="dark"
                      size="xs"
                      rounded="circle"
                      with-icon>
                      <Icon
                        class="footer-top__block-icon"
                        name="icon:location" />
                    </ui-button-link>
                  </div>
                </div>
              </div>
              <div class="footer-top__block">
                <span class="footer-top__block-title">Office in Dubai</span>
                <div class="footer-top__block-wrapper">
                  <div class="footer-top__block-content">
                    <span class="footer-top__block-text">
                      139 Ruben Station Lake Drew, NM 52678
                    </span>
                  </div>
                  <div class="footer-top__block-links">
                    <ui-button-link
                      to="/"
                      class="footer-top__block-btn footer-top__block-btn--location"
                      color="dark"
                      size="xs"
                      rounded="circle"
                      with-icon>
                      <Icon
                        class="footer-top__block-icon"
                        name="icon:location" />
                    </ui-button-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom footer-bottom">
      <div class="container">
        <div class="footer-bottom__flex">
          <div class="footer-bottom__left">
            <ui-menu-list
              class="footer-bottom__menu-list"
              :items="menuListLeft"
              type-link="size-sm" />
          </div>
          <div class="footer-bottom__right">
            <ui-menu-list
              class="footer-bottom__menu-list"
              :items="menuListRight"
              type-link="size-sm" />
          </div>
        </div>
      </div>
    </div>
    <nuxt-link
      to="https://qtim.pro/"
      class="footer__circle-link"
      @click="handleClick">
      <span class="footer__circle-text">Go</span>
    </nuxt-link>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  overflow: hidden;
  position: relative;

  &__circle-link {
    position: absolute;
    display: flex;
    justify-content: center;
    text-decoration: none;
    width: 35.8rem;
    height: 35.8rem;
    position: absolute;
    left: 50%;
    z-index: 3;
    bottom: 0;
    transform: translate(-50%, calc(35.8rem / 2));
    background-color: var(--background-dark);
    border-radius: 50%;
    padding-top: 12.2rem;
    transition-property: transform, width, height;
    transition-duration: 1s;
    transition-timing-function: var(--transition-function);

    &--clicked {
      left: 50%;
      width: 150vw;
      height: 150vw;
      transform: translate(-50%, calc(100vw / 2));

      .footer__circle-text {
        opacity: 0;
      }
    }
  }

  &__circle-text {
    font-size: 3.2rem;
    text-align: center;
    line-height: 1;
    color: var(--on-background-dark);
  }
}

.footer-top {
  padding: 14rem 0 23.75rem 0;

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10rem;
  }

  &__right {
    padding-top: 7.4rem;
    display: flex;
    justify-content: center;
  }

  &__wrap-title {
    max-width: 46.4rem;
  }

  &__subtext {
    display: block;
    margin-bottom: 5.5rem;
    font-size: 1.6rem;
    line-height: 1.2;
    letter-spacing: 0.05rem;
  }

  &__title {
    display: block;
    position: relative;
    text-decoration: underline;
    text-decoration-thickness: 0.1rem;
    text-underline-offset: 1.25rem;
    color: var(--color-dark-1);
    text-decoration-color: var(--color-dark-1);
    transition-property: color, text-decoration-color;
    transition-duration: var(--transition-delay);
    transition-timing-function: var(--transition-function);

    &:hover {
      color: var(--color-light-green);
      text-decoration-color: var(--color-light-green);
    }

    &::before {
      content: attr(data-title);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      pointer-events: none;
      user-select: none;
    }

    &::after {
      content: '';
      position: absolute;
      width: 8.4rem;
      height: 0.8rem;
      left: 7.7rem;
      bottom: 1.7rem;
      z-index: 1;
      background-color: var(--background-light-purple);
      user-select: none;
    }

    span {
      position: relative;
      z-index: 0;
    }
  }

  &__blocks {
    display: flex;
    flex-direction: column;
    row-gap: 3.6rem;
  }

  &__block {
    max-width: 15.2rem;
  }

  &__block-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 0.8rem;
  }

  &__block-title {
    display: block;
    margin-bottom: 1.2rem;
  }

  &__block-content {
    display: flex;
    flex-direction: column;
    row-gap: 0.4rem;

    a {
      color: var(--color-dark);
      text-decoration: none;
      transition-property: color;
      transition-duration: var(--transition-delay);
      transition-timing-function: var(--transition-function);

      &:hover {
        color: var(--color-light-green);
      }
    }
  }

  &__block-title,
  &__block-content {
    font-size: 1.6rem;
    line-height: 1.2;
    letter-spacing: 0.01rem;
  }

  &__block-btn:hover {
    background-color: var(--color-light-green);
  }

  &__block-btn--location span {
    width: 1.2rem;
    height: 1.2rem;
  }
}

.footer-bottom {
  padding: 3rem 0;

  &__flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  &__menu-list {
    column-gap: 3.2rem;
  }
}
</style>
