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

> nuxt2.0更新
``` bash
# NUXT
更新到nuxt2.0

# layouts
添加404界面

# package.json
改用cross-env修改项目ip和端口 host上地址，port为端口

# element-ui 
UI框架

# jquery
暴露了$和jQuery两个变量

# @nuxtjs/axios
*nuxt下的axios,组件中使用：this.$axios，asyncData中使用：app.$axios
* plugins/axios.js axios 扩展配置

# @nuxtjs/sitemap 
自动生成sitemap地图，在nuxt.config.js中配置了sitemap例子

# animate.css 
常用动画库 给元素添加class animated animateName

# normalize.css
统一各个浏览器的样式

# cross-env
在yarn/npm命令中传递变量

# less
在style中添加 lang="less"即可

# vue-lazyload
* 把img的src改为v-lozy即可
* 如果图片是背景 v-lazy:background-image

# plugins/filter.js
添加全局filter 里面有个time时间过滤器
```

有关事物如何工作的详细解释，请查看 [Nuxt.js 文档](https://github.com/nuxt/nuxt.js).

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018 Lucien Huang