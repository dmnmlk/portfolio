<template>
  <div>
    <v-app-bar
      app
      color="secondary"
      dense
      elevate-on-scroll
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list>
        <v-list-item>
          <NuxtLink to="/">
            Homepage
          </NuxtLink>
        </v-list-item>
        <v-list-item>
          <NuxtLink to="/about">
            About me
          </NuxtLink>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      drawer: false
    }
  }
}
</script>
