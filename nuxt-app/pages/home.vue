<template lang="html">
<div>
  <h1>首页</h1>
  <p v-for='(item,idx) in arr' v-text='item'></p>

  <div>
    <nuxt-link to='/home/foo'>foo</nuxt-link>
    <nuxt-link to='/home/bar'>bar</nuxt-link>
  </div>

  <nuxt-child></nuxt-child>
</div>
</template>

<script>
export default {
  data:function(){
    return {
      arr: [1,2,3,4]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
