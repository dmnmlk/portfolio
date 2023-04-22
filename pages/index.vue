<template>
  <v-container>
    <div class="d-flex flex-column justify-space-around align-center">
      <div class="d-flex justify-space-between align-center" style="width: 100%;">
        <div
          class="mw720 hero-text"
        >
          <div class="text-h1 mb-4 font-weight-bold">
            <div v-if="$vuetify.breakpoint.smAndUp">
              Hello, I'm Damian Malek
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
            Senior UX Designer with technical background. Passionate about user-centric approach in everyday work.
          </div>
        </div>
      </div>
    </div>
    <!-- <NuxtLink to="/efurniture-case-study" class="text-decoration-none menu-item text-body-1">
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
            :src="require('~/assets/images/homepage/efurniture.png')"
            :lazy-src="require('~/assets/images/homepage/efurniture.png')"
            contain
            :max-width="$vuetify.breakpoint.smOnly ? '528px' : $vuetify.breakpoint.mdAndUp ? '50%' : '100%'"
          />
          <div>
            <v-card-text class="text-body-1">
              <div class="text-overline grey-color">
                Case Study / Commercial project
              </div>
              <div class="text-h2 font-weight-bold mt-3 mb-3">
                eFurniture
              </div>
              E-commerce store that offers basic and customizable furniture.
              <div>
                <v-chip label class="mt-2">
                  Web app
                </v-chip>
                <v-chip label class="mt-2">
                  UX Designer
                </v-chip>
                <v-chip label class="mt-2">
                  Analyst
                </v-chip>
              </div>
            </v-card-text>
          </div>
        </v-card>
      </v-hover>
    </NuxtLink> -->
    <NuxtLink to="/hiking-app-case-study" class="text-decoration-none menu-item text-body-1">
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
              <div>
                <v-chip label class="mt-2">
                  Android app
                </v-chip>
                <v-chip label class="mt-2">
                  Product Designer
                </v-chip>
                <v-chip label class="mt-2">
                  UX Researcher
                </v-chip>
              </div>
            </v-card-text>
          </div>
        </v-card>
      </v-hover>
    </NuxtLink>
    <!-- <NuxtLink to="/swimlane-case-study" class="text-decoration-none menu-item text-body-1">
      <v-hover
        v-slot="{ hover }"
      >
        <v-card
          tile
          :elevation="hover ? 16 : 8"
          class="d-flex align-center flex-column flex-md-row mx-sm-auto mx-md-0 mt-16"
          :max-width="$vuetify.breakpoint.smOnly ? '528px' : '100%'"
        >
          <v-img
            :src="require('~/assets/images/homepage/swimlane.png')"
            :lazy-src="require('~/assets/images/homepage/swimlane.png')"
            contain
            :max-width="$vuetify.breakpoint.smOnly ? '528px' : $vuetify.breakpoint.mdAndUp ? '50%' : '100%'"
          />
          <div>
            <v-card-text class="text-body-1">
              <div class="text-overline grey-color">
                Case Study / Concept project
              </div>
              <div class="text-h2 font-weight-bold mt-3 mb-3">
                Swimlane
              </div>
              Application for swimming pool tickets with possibility of reservation and using membership cards.
              <div>
                <v-chip label class="mt-2">
                  iOS app
                </v-chip>
                <v-chip label class="mt-2">
                  Product Designer
                </v-chip>
                <v-chip label class="mt-2">
                  UX Researcher
                </v-chip>
              </div>
            </v-card-text>
          </div>
        </v-card>
      </v-hover>
    </NuxtLink> -->
    <!-- <NuxtLink to="/grocery-store-case-study" class="text-decoration-none menu-item text-body-1">
      <v-hover
        v-slot="{ hover }"
      >
        <v-card
          tile
          :elevation="hover ? 16 : 8"
          class="d-flex align-center flex-column flex-md-row mx-sm-auto mx-md-0 mt-16"
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
                  Responsive website
                </v-chip>
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
    <NuxtLink to="/pet-rescue-case-study" class="text-decoration-none menu-item text-body-1">
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
            :src="require('~/assets/images/homepage/pet_rescue.png')"
            :lazy-src="require('~/assets/images/homepage/pet_rescue.png')"
            contain
            :max-width="$vuetify.breakpoint.smOnly ? '528px' : $vuetify.breakpoint.mdAndUp ? '50%' : '100%'"
          />
          <div>
            <v-card-text class="text-body-1">
              <div class="text-overline grey-color">
                Case Study / Concept project
              </div>
              <div class="text-h2 font-weight-bold mt-3 mb-3">
                PetRescue
              </div>
              Non-profit app for reporting lost & found pets in your area.
              <div class="mt-6">
                <v-chip label>
                  Android app
                </v-chip>
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
    </NuxtLink> -->
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
