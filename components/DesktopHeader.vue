<template>
  <v-container>
    <div class="top-bar">
    <NuxtLink to="/" class="text-decoration-none top-bar-child">
      Case Studies
    </NuxtLink>
    <NuxtLink to="/about" class="text-decoration-none top-bar-child">
      About
    </NuxtLink>
    </div>
  </v-container>
</template>
<style scoped>
  .top-bar {
    display: flex;
    justify-content: flex-end;
  }

  .top-bar-child {
    margin-left: 80px;
  }
</style>
