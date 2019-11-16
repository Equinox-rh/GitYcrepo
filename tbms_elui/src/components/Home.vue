<template>
<el-container>
  <el-header style="height: 70px;width: auto;">
    <header-nav></header-nav>
    </el-header>
  <el-container>
    <el-aside width="160px" style="overflow: hidden;"><left></left></el-aside>
   <el-main style="background: aliceblue;height: 680px;overflow: hidden;"><router-view></router-view></el-main>
  </el-container>
</el-container>
</template>

<script>
import header from './Header.vue';
import left from './Left.vue';

export default{
    components: {
        headerNav: header,
        left: left
      }
}

</script>

<style>
    body{
      margin: 0;
    }

    .el-header,
    .el-footer {
      text-align: center;
      line-height: 100px;
      width: 100%;

    }

</style>
