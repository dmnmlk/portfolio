<template>
  <v-container>
    <div class="top-bar">
      <div class="logo">
        <NuxtLink to="/" class="text-decoration-none text-h2">
          <div v-if="$vuetify.breakpoint.xsOnly">
            DM
          </div>
          <div v-else>
            Damian Malek
          </div>
        </NuxtLink>
      </div>
      <div class="top-menu">
        <!-- <NuxtLink to="/" class="text-decoration-none menu-item text-body-1">
          Case Studies
        </NuxtLink>
        <NuxtLink to="/about" class="text-decoration-none menu-item text-body-1">
          About
        </NuxtLink> -->
      </div>
    </div>
  </v-container>
</template>
<style scoped>
  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .menu-item {
    margin-left: 40px;
  }

  .container {
    max-width: 1080px;
  }

</style>
