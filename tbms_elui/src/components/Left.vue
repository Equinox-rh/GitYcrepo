<template>

  <el-aside>
    <!-- <el-radio-group v-model="isCollapse">
      <el-radio-button  :label="false" @click="isShrinkage">展开</el-radio-button>
      <el-radio-button :label="true" @click="isShrinkage">收起</el-radio-button>
    </el-radio-group> -->
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
    :default-openeds="['2']" unique-opened  router
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
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
      <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">台区管理</span>
      </template>
      <el-menu-item-group>
      <el-menu-item index="/components">台区信息管理</el-menu-item>
      </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </el-aside>

</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false,
        showPanel:true,
        hiddenPanel:true
        }
        },
        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          },
          handleNodeClick(data) {
            console.log(data);
          },
          isShrinkage(){

          }
          },
          }
</script>

<style scoped>
  .el-navheader {
    background-image: url(../assets/home_top_bg.png);
  }

  .el-row {
    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    width: 100%;
    height: 100px;
  }

  .col-style {
    height: 70px;
    line-height: 70px;
    margin-top: 15px;
  }

  .row-style {
    height: 30px;
    line-height: 30px;
  }

  .row-big {
    width: 700px;
    height: 80px;
  }

  .end-row {
    width: 100%;
    height: 90px;
    line-height: 90px;
  }

  .end-row-col {
    width: 80px;
    height: 30px;
    margin: 10px;
    float: right;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 160px;
    height: 700px;
  }

  .el-menu-vertical-demo {
    width: 80px;
    height: 700px;
  }



  .el-header,
  .el-footer {
    text-align: center;
    line-height: 100px;
    width: 100%;

  }

  .el-aside {
    text-align: center;
    height: 680px;
  }

  .el-main {

    color: #333;
    text-align: center;
    height: 680px;
    width: 1300px;
  }

  body>.el-container {
    margin-bottom: 20px;
  }
</style>
