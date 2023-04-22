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
        <div class="d-flex">
          <!-- This in case I would need Polish and English CV in the future -->
          <!-- <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <div
                class="link menu-item text-body-1"
                v-bind="attrs"
                v-on="on"
              >
                Resume
              </div>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in resumeItems"
                :key="index"
              >
                <v-list-item-title>
                  <a :href="item.link" target="_blank" class="link text-body-1">{{ item.title }}</a>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu> -->
          <NuxtLink to="/damian_malek_cv.pdf" target="_blank" class="link menu-item text-body-1">
            Resume
          </NuxtLink>
          <NuxtLink to="/about" class="link menu-item text-body-1">
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
      lastScrollPosition: 0,
      resumeItems: [
        { title: 'English', link: '/damian_malek_en.pdf' },
        { title: 'Polish', link: '/damian_malek_pl.pdf' }
      ]
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

  .link {
    text-decoration: none;
  }

  .link:hover {
    text-decoration: underline;
  }
</style>
