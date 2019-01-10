<template>
  <div class="visitor">
      <el-row>
      <el-col :span='12'><el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/project' }">我的项目</el-breadcrumb-item>
        <el-breadcrumb-item>受试者管理</el-breadcrumb-item>

      </el-breadcrumb></el-col>
     <el-col :span='12'> </el-col>
    </el-row>
   <el-row style="margin-top: 15px;" class='input_row'>
   	<el-col :span='8'>
  <el-input placeholder="请输入内容" size='small' v-model="input5" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="ID" value="1"></el-option>
      <el-option label="姓名" value="2"></el-option>
      <el-option label="电话" value="3"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
  </el-col>
  <el-col :span='16' style='text-align: right'>
  	<el-button type="success" icon="el-icon-plus" @click='addvisitor' circle size='small'></el-button>
  </el-col>
</el-row>

<el-row style="margin-top: 15px;height: 50vh">
	
 <el-table size='small' 
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      >
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="180">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="success" size="small">录入数据</el-button>
        <el-button type="default" size="small">编辑</el-button>

      </template>
    </el-table-column>
  </el-table>

</el-row>
<el-row style='text-align: right;margin-top: 15px'>
	<el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
</el-row>

  </div>
</template>

<script>
export default {
  name: 'visitor',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      input5:'',
      // dialognewvistorvisible:false,
      newvistor:{
      	name:'',
		region:''

      },
      select:'ID',
      tableData: [{
          date: '2016-05-03',
          id:0,
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          id:1,
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          id:2,
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          id:3,
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
    }
  },
  methods:{
  		addvisitor(){
          this.$router.push({name:'newcrf'});
          this.$emit("addRouters",'newcrf','哈哈')

  		},
      handleClick(item){
          // console.log(par);
          let name = "ID:"+item.id+" "+item.name+" 录入数据";
          let router = 'newcrf';
          let data = {id:item.id};
          let par = {
            'name':name,
            'router':router,
            'data':data
          }
          this.$store.commit('addTab',par);
      }
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input_row /deep/ .el-select .el-input {
    width: 100px;
  }
.input_row /deep/  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

</style>

