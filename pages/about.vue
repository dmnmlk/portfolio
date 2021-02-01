<template>
  <v-row>
    <v-col>
      About Me
    </v-col>
  </v-row>
</template>
<script>
export default {
  layout: ctx => ctx.isTablet ? 'tablet' : (ctx.isDesktop ? 'desktop' : 'default')
}
</script>

<style scoped>
  .container {
    max-width: 1080px;
  }
</style>
