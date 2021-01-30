<template>
  <v-container>
    <div>
      <div
        class="display-1"
      >
        Hi, I'm Damian Malek
      </div>
      <div>
        UX Designer with full stack developer background
      </div>
    </div>
    <v-img
      src="assets/images/heroimg.png"
    />
  </v-container>
</template>

<script>
export default {
  layout: ctx => ctx.isTablet ? 'tablet' : (ctx.isDesktop ? 'desktop' : 'default')
}
</script>
