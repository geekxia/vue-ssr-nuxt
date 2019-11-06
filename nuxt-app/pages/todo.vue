<template lang="html">
<div>
  <h1>Todo List</h1>

  <h1 v-text='$store.state.todo.msg'></h1>

  <button type="button" name="button" @click='click'>添加todo</button>

  <h3 v-for='(item,idx) in list' :key='idx' v-text='item'></h3>

</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState('todo', ['list'])
  },
  methods: {
    ...mapMutations('todo', ['add']),
    click() {
      this.add(Math.random())
    }
  }
}
</script>

<style lang="css" scoped>
</style>
