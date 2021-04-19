<template>
  <v-container>
    <v-card
      class="top-bar"
      :class="{ 'top-bar--hidden': !showNavbar }"
      :elevation="!showNavbar || lastScrollPosition < 50 ? 0 : 6"
      tile
      color="secondary"
    >
      <div class="top-subbar d-flex justify-space-between align-center">
        <NuxtLink to="/" class="text-decoration-none text-h2">
          DM
        </NuxtLink>
        <div>
          <NuxtLink to="/cv.pdf" class="text-decoration-none menu-item text-body-1">
            Resume
          </NuxtLink>
          <NuxtLink to="/about" class="text-decoration-none menu-item text-body-1">
            About me
          </NuxtLink>
        </div>
      </div>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      showNavbar: true,
      lastScrollPosition: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 50) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '~vuetify/src/styles/styles.sass';

  .top-bar {
    position: fixed;
    background-color: #EEECE8;
    z-index: 999;
    top: 0;
    width:100%;
    left: 0;
    transform: translate3d(0, 0, 0);
    transition: 0.1s all ease-out;
  }

  .top-subbar {
    margin: 16px auto;
    max-width: 1056px;
    @media #{map-get($display-breakpoints, 'md-and-down')} {
      max-width: calc(100% - 24px);
    }
  }

  .top-bar.top-bar--hidden {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
    transition: 0.1s all ease-in;
  }

  .menu-item {
    margin-left: 40px;
  }
</style>
