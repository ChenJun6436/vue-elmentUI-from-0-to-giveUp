<template>
  <div>
    <!--<el-carousel :interval="5000" arrow="always">-->
      <!--<el-carousel-item v-for="item in 4" :key="item">-->
        <!--<h3>{{ item }}</h3>-->
      <!--</el-carousel-item>-->
    <!--</el-carousel>-->
    <el-button type="" @click="dialogVisible = true">点击打开modal</el-button>
    <!--点击提示-->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      size="tiny"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    name: 'Chen',
    data() {
      return {
        user: '第一用户',
        dialogVisible: false
      }
    },
    methods: {
      alertMessage() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        })
      },
      /*点击右边关闭图标*/
      handleClose(done) {
        //确认按钮
        this.$confirm('确认关闭？')
          .then(_ => {
            console.log('我点击确认关闭了')
            done();
          })
          .catch(_ => {});
      }
    },
    created() {
      this.alertMessage()
    }
  }
</script>
