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
