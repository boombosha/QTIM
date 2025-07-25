// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  devtools: { enabled: true },

  components: [
    { 
      path: '~/widgets',
      pathPrefix: false,
      global: true
    },
    
    {
      path: '~/features',
      pathPrefix: false,
      global: false
    },
    
    '~/components'
  ],

  imports: {
    dirs: [
      '~/widgets/**/components',
      '~/features/**/api',
      '~/features/**/lib'
    ]
  },

  css: [
    '@/app/styles/main.css'
  ],

  runtimeConfig: {
    public: {
      apiBase: 'https://6082e3545dbd2c001757abf5.mockapi.io'
    }
  },

  modules: ['@nuxt/image']
})