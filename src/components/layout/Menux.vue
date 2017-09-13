<template>
  <div style="
    position: absolute;
    top: 0;
    left: 200px;
    width: 200px;
    height: 100%;
    padding-top: 56px;
    margin: 0">
  <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" >
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>导航一</template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <!--<div v-for="y in asideList">-->
      <!--<el-menu-item index="2">-->
        <!--<router-link :to='y.link'>-->
          <!--<svg class="icon" :style="{color: y.color}" aria-hidden="true"><use v-bind:xlink:href=y.icon></use></svg>-->
          <!--{{y.name}}-->
        <!--</router-link>-->
      <!--</el-menu-item>-->
    <!--</div>-->
    <p>{{asideList}}</p>
    <router-link :to="myLink">
      <el-menu-item index="3"><i class="el-icon-setting"></i>jun</el-menu-item>
    </router-link>

  </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'Menux',
    props:[
      'asideList'
    ],
    data() {
      return {
          myLink: ''
      }
    },
    mounted() {
        console.log(this.asideList)
        this.myLink= this.asideList[0].list[0].link
      console.log(this.myLink)
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
