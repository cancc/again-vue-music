<template>
  <div>singer</div>
</template>

<script type="text/ecmascript-6">
import { getSingerList } from "api/singer"
import { ERR_OK } from "api/config"
import Singer from 'common/js/singer.js'

export default {
  data() {
    return {
      singers: []
    }
  },
  created() {
    this._getSingerList()
  },
  methods: {
    _getSingerList() {
      getSingerList().then((res) => {
        console.log('歌手数据>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
        console.log(res)
        if(res.code === ERR_OK) {
          this.singers = res.data.list
          console.log(this.singers)
          console.log(this._normalizeSinger(this.singers))
        }
      })
    },
    _normalizeSinger(list) {
      let map = {
        hot: {
          title: '热门',
          items: []
        }
      }
      list.forEach((item, index) => {
        if(index<10) {
          // 取前十条数据作为hot组
          map.hot.items.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          }))
        }
        // 非hot组，判断如果不存在就添加一个空对象
        const key = item.Findex
        if(!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        // 补充空对象里面的数组
        map[key].items.push(new Singer({
          id: item.Fsinger_mid,
          name: item.Fsinger_name
        }))
      })

      let hot = []
      let ret = []
      for(let key in map){
        let val = map[key]
        if(val.title==='热门') {
          hot.push(val)
        }else if(val.title.match(/[a-zA-Z]/)) {
          ret.push(val)
          // console.log(ret)
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(ret) 
    }
  }
}



</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>