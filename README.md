# nuxtInit

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn # Or npm install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

## 依赖
* 使用nuxt默认模板创建
* layouts 添加404界面
* package.json添加config配置，host为线上地址，port为端口
* [element-ui](http://element.eleme.io/#/zh-CN/component/transition) UI框架
* [jquery](https://github.com/jquery/jquery) 暴露了$和jQuery两个变量使用jquery
* [@nuxtjs/axios](https://axios.nuxtjs.org/)  nuxt下的axios,组件中使用：this.$axios，asyncData中使用：app.$axios
* [@nuxtjs/sitemap](https://www.npmjs.com/package/@nuxtjs/sitemap) 自动生成sitemap地图,如有需要,请看nuxt.config.js的配置
* [animate.css](https://daneden.github.io/animate.css/) 常用动画库 animated animateName
* [normalize.css](https://github.com/necolas/normalize.css) 统一各个浏览器的样式 
* [cross-env](https://www.npmjs.com/package/cross-env) 在yarn/npm命令中传递变量,修改了dev命令
* [less](http://lesscss.org/)

有关事物如何工作的详细解释，请查看 [Nuxt.js 文档](https://github.com/nuxt/nuxt.js).

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018 Lucien Huang