<template lang="html">
<div>
  <h1>音乐列表</h1>

  <div v-for='(item,idx) in list' :key='idx'>
    <span v-text='item.name'></span>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  // 异步数据请求
  asyncData() {
    console.log('server',process.server)
    // 解决热更新导致的跨域问题
    // 安装 @nuxtjs/proxy 插件，在 nuxt.config.js中进行代理配置
    // 配置完成后，要重启项目，代理才能生效
    let baseUrl = process.server ? 'https://c.y.qq.com' : 'http://localhost:3000'
    let url = baseUrl + '/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=66111224741792204&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%91%A8%E6%9D%B0%E4%BC%A6&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'

    // 这是固定写法，参见nuxt.js官网
    // 返回一个promise对象
    return axios.get(url).then(res=>{
      // 这里是无法访问当前组件的this对象
      console.log('this', this)
      console.log('res34', res.data.data.song.list.length)
      // 在这里return 的数据，在页面组件中可以直接使用
      return {
        list: res.data.data.song.list
      }
    })
  }
}
</script>

<style lang="css" scoped>
</style>
