<template>
        <el-container style="background: white;">
          <el-header style="height: 100px;">
            <el-form ref="form" :model="form" label-width="150px" id="form" >
              <el-row>
                <el-col :span="11" class="form-col" style="margin-bottom: 10px;margin-top: 10px;">
                  <el-form-item label="所属组织">
                     <el-cascader
                        expand-trigger="hover"
                        :options="options"
                        >
                      </el-cascader>
                  </el-form-item>
                </el-col>
                <el-col :span="11" class="form-col" style="margin-bottom: 10px;margin-top: 10px;">
                  <el-form-item label="台区名称">
                    <el-input placeholder="请输入台区名称"  v-model="tqmc_i" clearable></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11" class="form-col">
                  <el-form-item label="地区特征">
                    <el-select placeholder="请选择地区特征" v-model="SelectValue" @change="SelectChange">
                      <el-option v-for="item in selectItem" :label="item.dmmc" :key="item.dmbm" v-model="item.dmbm">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
               <!-- <el-col :span="16">
                  <el-form-item label="业务日期">
                    <el-col :span="11">
                      <el-date-picker type="date" placeholder="选择开始日期" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                      <el-date-picker type="date" placeholder="选择结束日期" style="width: 100%;"></el-date-picker>
                    </el-col>
                  </el-form-item>
                </el-col> -->
                <el-col :span="11" class="form-col">
                  <el-form-item>
                    <el-button type="primary" @click="queryForm()">查询</el-button>
                    <el-button type="warning">清空</el-button>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </el-header>
<el-divider><i class="el-icon-location"></i></el-divider>

          <el-main style="height: 350px;overflow: hidden;">
            <el-table :data="tableData" height="340" highlight-current-row @current-change="handleCurrentChange"
             border style="width: 100%;height: 350px;" v-for="tbdata in tableData":key="tbdata.tqbs">
             <el-table-column type="index" width="50"></el-table-column>
              <el-table-column prop="czsj" label="日期" width="180" v-text="tbdata.czsj">
              </el-table-column>
              <el-table-column prop="tqbs" label="台区标识" width="120" v-text="tbdata.tqbs">
              </el-table-column>
              <el-table-column prop="tqbh" label="台区编号" v-text="tbdata.tqbh">
              </el-table-column>
              <el-table-column prop="tqmc" label="台区名称" v-text="tbdata.tqmc">
              </el-table-column>
              <el-table-column prop="tqtzdm" label="台区特征代码" v-text="tbdata.tqtzdm">
              </el-table-column>
            </el-table>

          </el-main>
          <el-divider></el-divider>
          <el-footer style="height: 110px">
            <el-form ref="form" :model="form" label-width="150px">
              <el-row>
                <el-col :span="11" class="form-col">
                  <el-form-item label="所属组织">
                   <el-cascader
                      expand-trigger="hover"
                      :options="options"
                     >
                    </el-cascader>
                  </el-form-item>
                </el-col>
                <el-col :span="11" class="form-col" style="margin-bottom: 10px;">
                  <el-form-item label="台区名称">
                    <el-input></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11" class="form-col" style="margin-bottom: 10px;">
                  <el-form-item label="地区特征">
                    <el-select placeholder="请选择地区特征" v-model="SelectValue" @change="SelectChange">
                      <el-option v-for="item in selectItem" :label="item.dmmc" :key="item.dmbm"  v-model="item.dmbm">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="11" class="form-col">
                  <el-form-item>
                    <el-button type="warning">清空</el-button>
                    <el-button type="primary">修改</el-button>
                    <el-button type="danger">删除</el-button>
                    <el-button type="success">新增</el-button>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>

          </el-footer>
        </el-container>
</template>

<script>

  export default {
    data() {
      return {
        tqmc_i:'',
        selectItem:'',
        SelectValue:'城镇',
        tableData: [],
        isCollapse: true,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
        options: [{
          label: '云南电网责任有限公司',
          children: [{
            label: '昆明供电局',
            children: [{
              label: 'xxx供电所'
            }, {
              label: 'xxx1供电所'
            }, {
              label: 'xxx2供电所'
            }, {
              label: 'xxx3供电所'
            }]
          }, {
            label: '玉溪供电局',
            children: [{
              label: 'xxx供电所',
              label: 'xxx1供电所',
              label: 'xxx2供电所',
              label: 'xxx3供电所'
            }]
          }, {
            label: '曲靖供电局',
            children: [{
              label: 'xxx供电所',
              label: 'xxx1供电所',
              label: 'xxx2供电所',
              label: 'xxx3供电所'
            }],
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      SelectChange(val){
        console.log(val)
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleNodeClick(data) {
        console.log(data);
      },
      handleCurrentChange(){
        
      },
      queryForm: function(){
        var self = this;
        var tqmc = this.tqmc_i;
        var gddwbm = "0502";
        var dqtzdm =this.SelectValue ;
        var data="gddwbm="+gddwbm+"&tqmc="+tqmc+"&dqtzdm="+dqtzdm;
        console.log(data);
        this.$axios.post('/tqgl/queryPaginationTqByZzbm', data).then(successResponse => {
            this.tableData = successResponse.data;
            console.log(this.tableData)
         }).catch(failResponse => {})
      }

    },

    created:function(){
      this.$axios.post('/xtdmgl/queryDmByDmflbm?dmflbm=DQTZDM').then(result => {
        this.selectItem=result.data;
      }).catch(failResponse => {})
    }

}



</script>


<style>
  .el-main{
    padding: 10px;
  }

</style>
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

  .form-col{
    height: 40px;
  }

</style>
