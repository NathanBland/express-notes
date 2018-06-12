const pkg = require('./package')

const nodeExternals = require('webpack-node-externals')

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/express-notes'
  }
} : {}

module.exports = {
  ...routerBase,
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    host: process.env.NODE_ENV === 'production' ? 'express-notes-api.herokuapp.com' : '127.0.0.1',
    port: process.env.NODE_ENV === 'production' ? 443 : 8000,
    prefix: '/api/',
    crossDomain: true,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    https: process.env.NODE_ENV === 'production' ? true : false,
    credentials: true
  },

  /*
  ** Build configuration
  */
 build: {
  /*
  ** You can extend webpack config here
  */
  vendor: ['babel-polyfill'],
  babel: {
    presets: [
      ['vue-app', {
        useBuiltIns: true,
        targets: { ie: 11, uglify: true },
      },
      ],
    ],
  },
  extend(config, ctx) {
    // Run ESLint on save
    if (ctx.isDev && ctx.isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      })
    }
    if (ctx.isServer) {
      config.externals = [
        nodeExternals({
          whitelist: [/^vuetify/]
        })
      ]
    }
  }
}
}
