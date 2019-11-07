<template lang="html">
<div>
  <h1>个人中心</h1>
  <br>

  <!-- 声明式路由 -->
  <nuxt-link to='/user/bar'>bar tab</nuxt-link>
  <br>

  <!-- 二级组件的承载容器 -->
  <nuxt-child></nuxt-child>
  
</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
