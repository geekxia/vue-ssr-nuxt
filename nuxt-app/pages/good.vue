<template lang="html">
<div>
  <h1>测试ElementUi</h1>
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
        label="联系方式">
      </el-table-column>
    </el-table>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      tableData: [
        {date: '2019年11月7日', name:'张三', address: '西部硅谷', phone: '0755-66996699'},
        {date: '2019年11月7日', name:'张三', address: '西部硅谷', phone: '0755-66996699'},
        {date: '2019年11月7日', name:'张三', address: '西部硅谷', phone: '0755-66996699'}
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
