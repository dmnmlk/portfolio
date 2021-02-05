export default {
  ssr: false,
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // mode: 'spa',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - nuxt-portfolio',
    title: 'nuxt-portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon-16.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Playfair+Display:wght@700&display=swap' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics'
  ],

  googleAnalytics: {
    id: 'G-6KDELTW452'
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/device'
  ],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    // treeShake: {
    //   loaderOptions: {
    //     progressiveImages: true
    //   }
    // },
    // defaultAssets: false,
    theme: {
      themes: {
        light: {
          primary: '#303633', // black
          accent: '#3BBA6C', // green
          secondary: '#EEECE8', // white
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  generate: {
    dir: 'docs'
  },

  server: {
    port: 8000,
    host: '0.0.0.0'
  }
}
