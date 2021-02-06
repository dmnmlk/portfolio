<template>
  <v-footer
    padless
    class="footer"
  >
    <v-card
      flat
      tile
      width="100%"
      class="secondary text-center"
    >
      <v-card-text>
        <a href="https://www.linkedin.com/in/damianmalek/" class="text-decoration-none">
          <v-btn
            class="mx-4"
            icon
          >
            <v-icon
              :size="$vuetify.breakpoint.smAndDown ? '48px' : '32px'"
              color="primary"
            >
              mdi-linkedin
            </v-icon>
          </v-btn>
        </a>
        <a href="https://github.com/dmnmlk" class="text-decoration-none">
          <v-btn
            class="mx-4"
            icon
          >
            <v-icon
              :size="$vuetify.breakpoint.smAndDown ? '48px' : '32px'"
              color="primary"
            >
              mdi-github
            </v-icon>
          </v-btn>
        </a>
        <a href="mailto:damianmalek@outlook.com" class="text-decoration-none">
          <v-btn
            class="mx-4"
            icon
          >
            <v-icon
              :size="$vuetify.breakpoint.smAndDown ? '48px' : '32px'"
              color="primary"
            >
              mdi-email
            </v-icon>
          </v-btn>
        </a>
      </v-card-text>
      <v-card-text>
        <div>Designed & coded by Damian Malek © {{ new Date().getFullYear() }}</div>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style lang="scss" scoped>
.footer {
  margin: 80px 0 40px;
}
</style>
