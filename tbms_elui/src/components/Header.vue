<template>

  <el-header style="height: 70px" class="el-navheader">

    <el-row type="flex" class="row-bg" justify="space-between">

      <el-row :span="12" class="row-style">
        <el-col class="col-style">
          <a href="Home.vue" style="color: #fff;text-decoration: none;">
            <img style="width: 190px;height: 70px" src="../assets/nfdw.png" />
          </a>
        </el-col>
        <el-col class="col-style">
          <font style="font-family:Microsoft YaHei;font-size:large;color: #FFFFFF;">曲靖供电局营销现场作业安全管理系统</font>
        </el-col>
      </el-row>


      <el-row :span="12" class="row-style">
        <el-col :span="8" class="nav-col" style="width: 180px;">
          <i class="iconfont iconrepoyonghujilu"></i>
          <span style="color: #FFFFFF;">南方电网</span>
        </el-col>
        <el-col :span="1" class="nav-col" style="width: 30px;">
          <i class="iconfont iconrepoxiugaimima"></i>
        </el-col>
        <el-col :span="1" class="nav-col" style="width: 110px;">
          <el-button style="background: #01357C;border: #01357C;color: #FFFFFF;font-size: 17px;" v-popover:xgmmpopover>修改密码</el-button>
        </el-col>
        <el-col :span="8" class="nav-col" style="width: 140px;">
          <i class="iconfont iconrepotuichu"></i>
          <a href="Home.vue" style="color: #fff;text-decoration: none;">重新登录</a>
        </el-col>
      </el-row>

    </el-row>
    <el-popover ref="xgmmpopover"
    placement="bottom-start"
    width="200px"
    v-model="povisible">
      <el-form>
        <el-form-item label="旧密码:">
           <el-input placeholder="请输入旧密码" type="password" v-model="oldPswd"></el-input>
        </el-form-item>
        <el-form-item label="新密码:">
           <el-input placeholder="请输入新密码" type="password" v-model="newPswd" ></el-input>
        </el-form-item>
        <el-form-item label="确认密码:">
           <el-input placeholder="请确认新密码" type="password"  v-model="rePswd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="queryForm()">确认</el-button>
          <el-button type="infor">取消</el-button>
        </el-form-item>
      </el-form>
    </el-popover>
  </el-header>
</template>

<script>
   export default {
       data(){
         return{
           povisible:false,
           oldPswd:'',
           newPswd:'',
           rePswd:''
         }
       }
    }
</script>

<style>
  .nav-col{
    height: 70px;
    line-height: 70px;
  }
 .el-header{
  padding: 0;
  text-align: center;
  line-height: 100px;
  width: 100%;
  height: 70px;
}

  .el-navheader {
    background: #01357C;
  }
.el-menu-demo{
  width: 180px;
  height: 70px;
  border: 01357C;
  float: right;
}
.iconfont{
  font-size: 32px;
  vertical-align:middle;
  color: #FFFFFF;
}
</style>
<style scoped>

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
    height: 70px;
  }

  .col-style {
    width: 320px;
    height: 70px;
    line-height: 70px;
  }

  .row-style {
    width: 650px;
    height: 70px;
    line-height: 20px;
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
    height: 680px;
  }

  .el-menu-vertical-demo {
    width: 80px;
    height: 680px;
  }



  body>.el-container {
    margin-bottom: 20px;
  }
</style>
