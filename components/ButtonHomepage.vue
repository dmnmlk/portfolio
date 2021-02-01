<template>
  <NuxtLink to="/hiking-app-case-study" class="text-decoration-none menu-item text-body-1">
    <v-hover
      v-slot="{ hover }"
    >
      <v-btn
        x-large
        :block="$vuetify.breakpoint.smAndDown ? true : false"
        color="primary"
        outlined
        class="button text-button"
        :elevation="hover ? 5 : 0"
      >
        Read case study
      </v-btn>
    </v-hover>
  </NuxtLink>
</template>

<style lang="scss" scoped>
  @import '~vuetify/src/styles/styles.sass';

  .button {
    @media #{map-get($display-breakpoints, 'md-and-up')} {
      margin-top: 40px;
    }
  }
  .v-btn:before {
    background-color: transparent;
  }
</style>
