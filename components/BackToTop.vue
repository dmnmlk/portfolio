<template>
  <v-hover
    v-slot="{ hover }"
  >
    <v-fab-transition>
      <v-btn
        v-show="currentScrollPosition > 2000"
        :elevation="hover ? 16 : 8"
        fab
        fixed
        right
        bottom
        color="secondary"
        @click="scrollToTop"
      >
        <v-icon
          color="primary"
        >
          mdi-chevron-up
        </v-icon>
      </v-btn>
    </v-fab-transition>
  </v-hover>
</template>
<script>
export default {
  data () {
    return {
      currentScrollPosition: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    scrollToTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    onScroll () {
      this.currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
    }
  }
}
</script>
