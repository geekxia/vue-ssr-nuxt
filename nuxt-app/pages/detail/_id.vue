<template lang="html">
<div>
  <h1>动态路由，用户详情页</h1>
  <h2 v-text='$route.params.id'></h2>
</div>
</template>

<script>
export default {
  // 指定detailTemp作为根组件容器，这类似vue-router中的命名视图
  layout: 'detailTemp',
  mounted() {
    // 获取动态路由的传参
    console.log(this.$route.params.id)
  }
}
</script>

<style lang="css" scoped>
</style>
