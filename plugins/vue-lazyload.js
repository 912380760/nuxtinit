// vue-lazyload图片懒加载
import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload,{
  preLoad: 1,
  error: '/replace.png',
  loading: '/loading.gif',
  try: 1 // default 1
})