// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  devtools: { enabled: true },
  components: [
    { 
      path: '~/widgets',
      pathPrefix: false,
      global: true
    }
  ],
  imports: {
    dirs: [
      '~/widgets/**/components'
    ]
  },
  css: [
    '@/app/styles/main.css'
  ]
})
