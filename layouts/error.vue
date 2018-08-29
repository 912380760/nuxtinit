<template>
  <div class="container">
    <img src="~/assets/404.png" alt="404Page" class="img">
    <div class="nof">页面丢失，这是一个 404 错误页面。</div>
    <div class="nof-text">网络错误 / 页面已被删除 / 被大量访问</div>
    <el-button type="primary" >
      <nuxt-link to="/" class="toindex" >返回首页</nuxt-link>
    </el-button>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "错误页面"
    };
  },
  props: ["error"],
  layout: "blog" // you can set a custom layout for the error page
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 950px;
  margin: 0 auto;
  padding-bottom: 40px;
  overflow: hidden;
}
.img {
  display: block;
  width: 100%;
  height: 462px;
  margin: 70px 0;
}
.nof {
  width: 100%;
  font-size: 32px;
  color: #1b3143;
  padding-bottom: 40px;
  text-align: center;
}
.nof-text {
  width: 100%;
  font-size: 16px;
  color: #1b3143;
  opacity: 0.3;
  text-align: center;
  padding-bottom: 40px;
}
.toindex {
  color: #fff;
  text-decoration: none;
}

@media (max-width: 1300px) {
  .container {
    width: 100%;
  }
}
@media (max-width: 1300px) {
  .nof {
    display: none;
  }
  .img {
    height: 2.2rem;
  }
}
</style>
