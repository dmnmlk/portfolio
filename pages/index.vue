<template>
  <v-container>
    <div class="above-the-fold">
      <div class="text-and-image">
        <div>
          <div class="text-h1">
            <div v-if="$vuetify.breakpoint.smAndUp">
              Hi, I'm Damian Malek
            </div>
            <div v-else>
              Hi, I'm<br /> Damian Malek
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
    <div class="case-studies">
      <div class="case-study-1">
        <v-img
          :src="require('~/assets/images/homepage/hiking_app.png')"
          :lazy-src="require('~/assets/images/homepage/hiking_app.png')"
          contain
          :height="$vuetify.breakpoint.smAndDown ? '250px' : '618px'"
        />
        <div class="cs-text">
          <div class="text-caption">
            Case Study / Concept project
          </div>
          <div class="text-h3 font-weight-bold">
            Hiking mApp
          </div>
          <div class="text-body-1">
            Map based application that allows you to create hiking routes and collect information about your badges.
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
  @import '~vuetify/src/styles/styles.sass';

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
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .text-h1 {
      margin-bottom: 40px;
    }
  }

  .cs-text {
    max-width: 504px;
    & div {
      padding-bottom: 16px;
    }

    & .text-caption {
      color: rgba(48, 54, 51, 0.5);
      @media #{map-get($display-breakpoints, 'sm-and-down')} {
        margin-top: 40px;
      }
    }
  }

  .text-h3 {
    margin: 0;
  }

  .case-study-1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      flex-direction: column;
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
