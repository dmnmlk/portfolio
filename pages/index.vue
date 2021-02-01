<template>
  <v-container>
    <div class="above-the-fold d-flex flex-column justify-space-around align-center">
      <div class="d-flex justify-space-between align-center">
        <div>
          <div class="text-h1 mb-8">
            <div v-if="$vuetify.breakpoint.smAndUp">
              Hi, I'm Damian Malek
            </div>
            <div v-else>
              <div>
                Hi, I'm
              </div>
              <div>
                Damian Malek
              </div>
            </div>
          </div>
          <div class="text-h3">
            UX Designer with full stack developer background
          </div>
        </div>
        <v-img
          :src="require('~/assets/images/homepage/heroimg.png')"
          :lazy-src="require('~/assets/images/homepage/heroimg.png')"
          max-width="504px"
          class="d-none d-md-block"
        />
      </div>
      <div class="arrow-container">
        <v-icon
          class="arrow-down"
          x-large
          center
        >
          mdi-chevron-down
        </v-icon>
      </div>
    </div>
    <div>
      <div class="d-flex justfy-space-between align-center flex-column flex-md-row">
        <v-img
          :src="require('~/assets/images/homepage/hiking_app.png')"
          :lazy-src="require('~/assets/images/homepage/hiking_app.png')"
          contain
          :height="$vuetify.breakpoint.smAndDown ? '250px' : '618px'"
          :max-width="$vuetify.breakpoint.smAndDown ? '100%' : '508px'"
        />
        <div class="cs-text mt-10 mt-md-0">
          <div class="text-caption grey-color mb-4">
            Case Study / Concept project
          </div>
          <div class="text-h3 mb-4 font-weight-bold">
            Hiking mApp
          </div>
          <div class="text-body-1 mb-4">
            Map based application that allows you to create hiking routes and collect information about your badges.
          </div>
          <div class="mb-4">
            <v-chip>
              UX/UI Designer
            </v-chip>
            <v-chip>
              UX Researcher
            </v-chip>
          </div>
          <ButtonHomepage />
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  layout: ctx => ctx.isTablet ? 'tablet' : (ctx.isDesktop ? 'desktop' : 'default')
}
</script>
<style lang="scss" scoped>
  .cs-text {
    max-width: 508px; // for 40px between text and image
  }
</style>
