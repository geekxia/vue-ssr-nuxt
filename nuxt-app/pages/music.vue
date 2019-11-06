<template lang="html">
<div>
  <h1>音乐页面</h1>
  <div v-for='(item,idx) in list' :key='idx'>
    <p v-text='item.name'></p>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  asyncData() {
    let baseUrl = process.server ? 'https://c.y.qq.com' : 'http://localhost:3000'
    let url = baseUrl + '/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=62138375681444245&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%91%A8%E6%9D%B0%E4%BC%A6&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'

    return axios.get(url).then(res=>{
      // 这里是无法访问this的
      console.log('this000000', this)
      console.log('process 这次是不是服务请求', process.server)
      console.log(res.data.data.song.list.length)
      return {
        list: res.data.data.song.list
      }
    })
  }
}
</script>

<style lang="css" scoped>
</style>
