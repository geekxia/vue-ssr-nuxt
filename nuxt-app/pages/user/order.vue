<template lang="html">
  <div>
    <h2>二级路由 order</h2>
    <div v-for='(item,idx) in list' :key='idx'>
      <h3 v-text='item.orderName' @click='skipToDetail(item)'></h3>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      list: [
        { id: 0, orderName: '电脑', price: 1000 },
        { id: 1, orderName: '手机', price: 500 },
        { id: 2, orderName: '衣服', price: 200 }
      ]
    }
  },
  methods: {
    skipToDetail(item) {
      this.$router.push('/detail/'+item.id)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
