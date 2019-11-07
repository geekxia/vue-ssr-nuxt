<template lang="html">
<div>
  <h2>二级路由 bar</h2>
  <br>

  <div v-for='(item, idx) in list' :key='idx' @click='click(item)'>
    <span v-text='item.name'></span>
    <span v-text='item.phone'></span>
  </div>
</div>
</template>

<script>
export default {
  data:function() {
    return {
      list: [
        { id:0, name: '张三', phone: '120'},
        { id:1, name: '李四', phone: '119'}
      ]
    }
  },
  methods: {
    click(item) {
      // 编程式路由，路由传参
      this.$router.push('/detail/'+item.id)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
