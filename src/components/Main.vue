<template>
  <div class="main" style="
    position: absolute;
    top: 0;
    width: 100%;
    left: 200px">
    <Menux title="111" :asideList='menuLists'></Menux>
    <div class="content">
      <Top></Top>
      <transition name="el-zoom-in-top">
        <router-view></router-view>
      </transition>
      <!-- <Bottom title="成都寻道科技有限公司"></Bottom> -->
    </div>
    <Box :linkTitle="linktitle"></Box>
  </div>
</template>

<script>
  import Top from './layout/Top'
  /* import Bottom from './layout/Bottom' */
  import Menux from './layout/Menux'
  import Box from './box'
//  import {_getLS} from '../tools/util'
  export default{
    name: 'Main',
    data () {
      return {
        colors: ['#29d582', '#1bddd6', '#24ccf6', '#00aaff', '#ffc62f', '#ff587b', '#f7233c', '#7d68ff', '#3472fe', '#ff6fdb', '#ff7700'],
        linktitle: '哈啥时间'
      }
    },
    components: {
      Top,
      Menux,
      Box
    },
    beforeMount () {
      this.setMenu()
      console.log(this.menuLists)
    },
    methods: {
      setMenu () {
        this.menuLists = [
          {
            type: 'chen',
            list: [
              {link: '/main/chen', color: this.colors[0], name: '提交材料', icon: 'el-icon-circle-check'},
            ]
          }
        ]
//        switch (_getLS('zjff_type')) {
//          case '1':
//            this.menu = [
//              {
//                type: 'chen',
//                list: [
//                  {link: '/main/chen', color: this.colors[0], name: '提交材料', icon: 'el-icon-circle-check'},
//                ]
//              }
//            ]
//            break
//          case '2':
//            this.menu = [
//              {
//                type: 'jun',
//                list: [
//                  {link: '/main/jun', color: this.colors[0], name: '设置参评课程', icon: '#icon-test12'},
//                ]
//              }
//            ]
//            break
//        }
      }
    }
  }
</script>
