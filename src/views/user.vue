<template>
  <div class="user">
    <el-row style='border-bottom: 1px solid rgb(229,229,229);padding-bottom: 5px'>
      <el-col :span='6' >
        <el-form>
          <el-input size="small" placeholder='用户名/账号' @change='getUserList'> <el-button slot="append" icon="el-icon-search"></el-button></el-input>
        </el-form>
      </el-col>

      <el-col :span='18'  style='text-align: right'>
        <el-button type="success" icon="el-icon-plus" circle size='small'></el-button>
      </el-col>

    </el-row>

    <el-scrollbar style=''>

      <el-table
      :data="tableData4"  size='small'
      style="width: 100%;min-height: 60vh">
      <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="所属店铺">
            <span>{{ props.row.date }}</span>
          </el-form-item>
          <el-form-item label="商品 ID">
            <span>{{ props.row.province }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.city }}</span>
          </el-form-item>
          <el-form-item label="商品分类">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.zip }}</span>
          </el-form-item>
          
        </el-form>
      </template>
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
width="300">
</el-table-column>
<el-table-column
prop="zip"
label="邮编"
width="120">
</el-table-column>
<el-table-column
fixed="right"
label="操作"
width="220">
<template slot-scope="scope">

  <el-button
  @click.native="dialogTableVisible = true"
  type="default"
  size="mini">
  编辑
</el-button>
<el-button
@click.native="deleteUser"
type="danger"
size="small">
删除
</el-button>

<el-button
@click.native="authorityTableVisible = true"
type="primary"
size="small">
权限
</el-button>
</template>
</el-table-column>
</el-table>
</el-scrollbar>

<el-row style='margin-top:20px'>
  <el-col :span=12 :offset=12>
    <el-pagination
    background
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>
</el-col>
</el-row>

<el-dialog height='400px' title="用户基本信息修改" :visible.sync="dialogTableVisible" >
  <el-row>
    <div>
      <el-col :span='6' style='text-align: right;padding-right: 30px;line-height: 30px;font-size: 18px'>
        账号
      </el-col>

      <el-col :span='14'  style='text-align: left;'>
        <el-input size='small'></el-input>
      </el-col>
    </div>
  </el-row>
</el-dialog>

<el-dialog height='400px' title="用户权限管理" :visible.sync="authorityTableVisible" >
  <el-row>
    <div>
<!--      <treeTransfer></treeTransfer> -->
    </div>
  </el-row>
</el-dialog>

</div>
</template>

<script>
  // import treeTransfer from 'el-tree-transfer'
  export default {
    name: 'user',
    // components:{

    // }, 
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        authorityTableVisible:false,
        dialogTableVisible:false,
        userId:0,
        tableData4: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    },
    methods:{
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      edit(){

      },
      getUserList(){

      },
      deleteUser(item){
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
      
    },
    create:{

    },
    mounted(){

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user /deep/ .el-table{

}

.demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand /deep/ label {
    width: 90px;
    color: #99a9bf;
    font-size: 12px
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
    font-size: 12px !important;
  }
   .demo-table-expand /deep/ .el-form-item__content {
    
    font-size: 12px !important;
  }
  

</style>
