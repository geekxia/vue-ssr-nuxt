<template lang="html">
<div>
  <h1>首页</h1>
  <h2 v-text='msg'></h2>

  <!-- 测试Vuex -->
  <button type="button" name="button" @click='click'>添加todo</button>
  <br>
  <div v-for='(item,idx) in list' :key='idx' v-text='item'></div>
  <br>

  <!-- 二级组件的承载容器 -->
  <nuxt-child></nuxt-child>

  <!-- 使用 Element -->
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话">
        <template slot-scope="scope">
          <span>{{ scope.row.phone.p2 }}</span>
          <span>{{ scope.row.phone.p1 }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script>

// 映射Vuex的状态和方法
import { mapState, mapMutations } from 'vuex'
export default {
  data: function() {
    return {
      msg: 'hello 1912',
      tableData: [
        {date: '2019', name: 'xt', address: '西部', phone: {p1: '123', p2: '0755'}},
        {date: '2020', name: 'xt2', address: '西部2', phone: {p1: '123', p2: '0755'}}
      ]
    }
  },
  computed: {
    // 第一个参数指定 子module 的命名空间，即文件名
    // 第二参数是数组，指定要引入的state数据
    ...mapState('todo', ['list'])
  },
  methods: {
    // 第一个参数指定 子module 的命名空间，即文件名
    // 第二参数是数组，指定要引入的mutations方法
    ...mapMutations('todo', ['add']),
    click() {
      // 使用mutations方法，改变Vuex中的state数据
      this.add(Math.random())
    }
  }
}
</script>

<style lang="css" scoped>
</style>
