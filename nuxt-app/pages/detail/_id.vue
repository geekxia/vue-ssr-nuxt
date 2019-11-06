<template lang="html">
<div>
  <h1>动态的详情页</h1>
  <h1 v-text='$route.params.id'></h1>
</div>
</template>

<script>
export default {
  layout: 'detailTemp',  // 定制模板
  mounted() {
    console.log(this.$route.params.id)
  }
}
</script>

<style lang="css" scoped>
</style>
