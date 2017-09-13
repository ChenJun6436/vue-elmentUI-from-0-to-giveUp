<template>
  <div >
  <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的router们</template>
      <el-menu-item :index="idX">陈</el-menu-item>
      <el-menu-item index="2-2">俊</el-menu-item>
    </el-submenu>
    <el-menu-item index="3">{{chooseWhat}}</el-menu-item>
  </el-menu>
  </div>
</template>
<script>
  export default {
    name: 'top',
    data() {
      return {
        idX:'111',
        activeIndex: '1',
        chooseWhat: '未选择任何标签'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
      //key是点击标签的index值 ， keyPath是点击的index和父index值
        console.log(key, keyPath)
        this.chooseWhat = [...keyPath] + ''
      }
    }
  }
</script>
<style>

</style>
