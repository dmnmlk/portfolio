<template>
  <v-container>
    <div class="d-flex flex-column justify-space-around align-center">
      <div class="d-flex justify-space-between align-center" style="width: 100%;">
        <div
          class="mw720 hero-text"
        >
          <div class="text-h1 mb-4 font-weight-bold">
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
          <div class="text-h4">
            Product Designer with coding background. Passionate about user-centric approach in everyday work.
          </div>
          <div class="text-body-1 d-flex align-center mt-6">
            <div>
              📌 Based in <a href="https://goo.gl/maps/jjWivrC4usAJopNC7" target="_blank" rel="noopener noreferrer">Rzeszow</a>, Poland
            </div>
          </div>
          <div class="text-body-1 d-flex align-center mt-2">
            <div>
              💻 Currently working at <a href="https://www.ideoagency.com" target="_blank" rel="noopener noreferrer">Ideo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NuxtLink to="/hiking-app-case-study" class="text-decoration-none menu-item text-body-1">
      <v-hover
        v-slot="{ hover }"
      >
        <v-card
          tile
          :elevation="hover ? 16 : 8"
          class="d-flex align-center flex-column flex-md-row mx-sm-auto mx-md-0"
          :max-width="$vuetify.breakpoint.smOnly ? '528px' : '100%'"
        >
          <v-img
            :src="require('~/assets/images/homepage/hiking_app.png')"
            :lazy-src="require('~/assets/images/homepage/hiking_app.png')"
            contain
            :max-width="$vuetify.breakpoint.smOnly ? '528px' : $vuetify.breakpoint.mdAndUp ? '50%' : '100%'"
          />
          <div>
            <v-card-text class="text-body-1">
              <div class="text-overline grey-color">
                Case Study / Concept project
              </div>
              <div class="text-h2 font-weight-bold mt-3 mb-3">
                Hiking mApp
              </div>
              Map based application that allows you to create hiking routes and collect information about your badges.
              <div class="mt-6">
                <v-chip label>
                  Product Designer
                </v-chip>
                <v-chip label>
                  UX Researcher
                </v-chip>
              </div>
            </v-card-text>
          </div>
        </v-card>
      </v-hover>
    </NuxtLink>
    <NuxtLink to="/grocery-store-case-study" class="text-decoration-none menu-item text-body-1">
      <v-hover
        v-slot="{ hover }"
      >
        <v-card
          tile
          :elevation="hover ? 16 : 8"
          class="d-flex align-center flex-column flex-md-row-reverse mx-sm-auto mx-md-0 mt-16"
          :max-width="$vuetify.breakpoint.smOnly ? '528px' : '100%'"
        >
          <v-img
            :src="require('~/assets/images/homepage/grocery_store.png')"
            :lazy-src="require('~/assets/images/homepage/grocery_store.png')"
            contain
            :max-width="$vuetify.breakpoint.smOnly ? '528px' : $vuetify.breakpoint.mdAndUp ? '50%' : '100%'"
          />
          <div>
            <v-card-text class="text-body-1">
              <div class="text-overline grey-color">
                Case Study / Concept project
              </div>
              <div class="text-h2 font-weight-bold mt-3 mb-3">
                Grocery Store
              </div>
              Responsive website that allows customers to order groceries to their doorsteps or as click & collect mechanism.
              <div class="mt-6">
                <v-chip label>
                  Product Designer
                </v-chip>
                <v-chip label>
                  UX Researcher
                </v-chip>
              </div>
            </v-card-text>
          </div>
        </v-card>
      </v-hover>
    </NuxtLink>
    <!-- <v-hover
      v-slot="{ hover }"
    >
      <v-card
        tile
        :elevation="hover ? 16 : 8"
        class="d-flex align-center flex-column flex-md-row-reverse mx-sm-auto mx-md-0 mt-16"
        :max-width="$vuetify.breakpoint.smOnly ? '528px' : '100%'"
      >
        <v-img
          :src="require('~/assets/images/homepage/automotive_app.png')"
          :lazy-src="require('~/assets/images/homepage/automotive_app.png')"
          contain
          :max-width="$vuetify.breakpoint.smOnly ? '528px' : $vuetify.breakpoint.mdAndUp ? '50%' : '100%'"
        />
        <div>
          <v-card-text class="text-body-1">
            <div class="text-overline grey-color">
              Case Study / Commercial project with NDA restrictions
            </div>
            <div class="text-h2 font-weight-bold mt-3 mb-3">
              Redesign of e-commerce website
            </div>
            E-commerce website that is connected with automotive industry.
            <div class="mt-6">
              <v-chip label>
                UX Designer
              </v-chip>
              <v-chip label>
                UX Researcher
              </v-chip>
            </div>
          </v-card-text>
        </div>
      </v-card>
    </v-hover> -->
  </v-container>
</template>

<script>
export default {
  layout: ctx => ctx.isTablet ? 'tablet' : (ctx.isDesktop ? 'desktop' : 'default')
}
</script>
<style lang="scss" scoped>
  @import '~vuetify/src/styles/styles.sass';

  .hero-text {
    margin: 200px 0;

    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      margin: 100px 0;
    }
  }

  .cs-text {
    max-width: 488px; // for 40px between text and image
  }

  .v-card:hover {
    -moz-transform: translate(0px, -8px);
    -ms-transform: translate(0px, -8px);
    -o-transform: translate(0px, -8px);
    -webkit-transform: translate(0px, -8px);
    transform: translate(0px, -8px);
    transition: 0.3s;
  }

  .v-card {
    -moz-transform: translate(0px, 0px);
    -ms-transform: translate(0px, 0px);
    -o-transform: translate(0px, 0px);
    -webkit-transform: translate(0px, 0px);
    transform: translate(0px, 0px);
    transition: 0.3s;
  }
</style>
