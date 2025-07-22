// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // srcDir: 'src/',
  // compatibilityDate: '2025-07-15',
  // devtools: { enabled: true },
  // alias: {
  //   'widgets': './src/widgets',
  //   'app': './app'
  // },
  // imports: {
  //   dirs: ['~/widgets/**/ui'] 
  // },
  // components: [
  //   { path: '~/app/layouts', global: true },
  //   { path: '~/widgets', pathPrefix: false } 
  // ]

  srcDir: 'src/',
  devtools: { enabled: true },
  components: [
    { 
      path: '~/widgets',
      pathPrefix: false,
      global: true
    },
    {
      path: '~/app/layouts',
      global: true
    }
  ],
  imports: {
    dirs: [
      '~/widgets/**/components'
    ]
  }

})
