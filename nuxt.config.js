var webpack = require('webpack')
const baseURL = require('./plugins/baseurl')
const axios = require('axios')
axios.defaults.baseURL = baseURL.api;
module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'meowji',
    meta: [{
        charset: 'utf-8'
      },
      // og:为社交分享相关的内容
      {
        property: 'og:title',
        content: '-CPG|互联网娱乐集团'
      },
      {
        property: 'og:description',
        content: 'Capital Power Global Limited（CPG）创立于2007年，是一家旨在「为世界创造科技娱乐新体验」的互联网娱乐集团。拥有丰富领先的技术实力、产业链资源与业内经验，能提供您最完善的包套服务。'
      },
      // 兼容iphongx底部问题
      {
        name: 'viewport',
        content: 'initial-scale=1, width=device-width, viewport-fit=cover'
      },
      // 网站描述
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'normalize.css',
    'animate.css',
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        
      }
    },

    // 提取公共模块
    vendor: [
      'element-ui',
      'axios',
    ],

    // webpack配置
    plugins: [
      // 添加jquery全局变量
      new webpack.ProvidePlugin({ // 全局变量插件
        $: 'jquery',
        jQuery: 'jquery',
      }),
    ]
  },

  // 配置插件，相当于main.js
  plugins: [
    '@/plugins/filters.js',
    '@/plugins/vue-lazyload.js',
    {
      src: '~/plugins/element-ui.js',
      ssr: false
    },
  ],

  // 引入一些nuxt自己的插件
  modules: [
    '@nuxtjs/axios',
    // '@nuxtjs/sitemap',
  ],
  
  // 接口请求插件配置
  axios: {
    baseURL: baseURL.api,
    // proxyHeaders: false
  }

  // 自动生成网站地图
  // sitemap: {
  //   path: '/sitemap.xml',
  //   hostname: 'http://13.114.14.98',
  //   cacheTime: 1000 * 60 * 60 * 24,
  //   gzip: true,
  //   // 自动更新
  //   generate: false,
  //   async routes() {
  //     let arr = [];
  //     // ISO时间
  //     let timeISO = new Date().toISOString();
  //     await axios('/test').then(res => {
  //       let temp = {
  //         url: '/xxx1/' + res.id,
  //         priority: 0.8,
  //         lastmodISO: timeISO,
  //       }
  //       arr.push(temp);
  //     })
  //     await axios('/test2').then(res => {
  //       let temp = {
  //         url: '/xxx2/' + res.id,
  //         priority: 0.8,
  //         lastmodISO: timeISO,
  //       }
  //       arr.push(temp);
  //     })
  //     return arr;
  //   }
  // }
}
