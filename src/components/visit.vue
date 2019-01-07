<template>
  <div class="visit">
    <el-row>
      <el-col :span='12'><el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/project' }">我的项目</el-breadcrumb-item>
        <el-breadcrumb-item>随访管理</el-breadcrumb-item>

      </el-breadcrumb></el-col>
     <el-col :span='12'> </el-col>
    </el-row>
      <el-row :gutter='15' style='margin-top:15px'>
        <div v-for="item in 3">
          <el-col :span="8" type='height:180px'>
            <el-card shadow="hover">
      总是显示
    </el-card>
          </el-col>
        </div>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'visit',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
  	 
  },
  mounted(){
    console.log('我是id');
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
