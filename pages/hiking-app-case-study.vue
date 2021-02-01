<template>
  <v-container>
    <div class="above-the-fold">
      <div class="text-and-image">
        <div class="text-h1">
          Hiking mApp case study
        </div>
        <v-img
          :src="require('~/assets/images/homepage/hiking_app.png')"
          :lazy-src="require('~/assets/images/homepage/hiking_app.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '118px' : '291px'"
        />
      </div>
      <div class="arrow-container">
        <v-icon
          class="arrow-down"
          x-large
        >
          mdi-chevron-down
        </v-icon>
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
  .container {
    max-width: 1080px;
  }

  .above-the-fold {
    height: calc(100vh - 57px); //57px ma desktop header
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .arrow-container {
    width: 40px;
  }

  .text-and-image {
    width: 720px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media #{map-get($display-breakpoints, 'xs-only')} {
      flex-direction: column-reverse;
    }

    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      width: initial;
    }

    & .text-h1 {
      max-width: 340px;
      @media #{map-get($display-breakpoints, 'sm-and-down')} {
        margin-top: 40px;
      }
    }
  }

  @-webkit-keyframes downarrow {
    0% { -webkit-transform: translateY(0); opacity: 0.6 }
    100% { -webkit-transform: translateY(0.4em); opacity: 1 }
  }
  .arrow-down {
    -webkit-animation: downarrow 1.0s infinite alternate ease-in-out;
  }
</style>
