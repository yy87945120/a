<template>
  <div class="crf">
      <el-row>
      <el-col :span='12'><el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/project' }">我的项目</el-breadcrumb-item>
        <el-breadcrumb-item>CRF管理</el-breadcrumb-item>

      </el-breadcrumb></el-col>
     <el-col :span='12'> </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'crf',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
  	setData(data){
  		this._data = data;
  	}
  },
  mouted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
