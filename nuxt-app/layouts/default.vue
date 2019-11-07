<template>
  <div>

    <div>
      <!-- 声明式路由 -->
      <nuxt-link to='/home' activeClass='on' tag='span'>首页</nuxt-link>
      <nuxt-link to='/music' activeClass='on' tag='span'>音乐</nuxt-link>
      <nuxt-link to='/user' activeClass='on' tag='span'>我</nuxt-link>
      <!-- 类比，router-link -->
    </div>

    <!-- <h1>公共文字</h1> -->

    <!-- 一级组件的承载容器 -->
    <!-- 类比，router-view -->
    <nuxt />

  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

/* tab的高亮样式 */
.on {
  background-color: red;
  color: white;
}
</style>
