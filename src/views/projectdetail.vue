<template>
  <div class="projectdetail">
       <el-tabs value="1" type="border-card" >
    <el-tab-pane label="基本信息" name="1" v-loading="fullscreenLoading" :lazy='true'><project></project></el-tab-pane>
    <el-tab-pane label="随访管理" name="2" :lazy='true'><visit></visit></el-tab-pane>
    <el-tab-pane label="CRF管理" name="3" :lazy='true'>CRF管理</el-tab-pane>
    <el-tab-pane label="成员管理" name="4" :lazy='true'>成员管理</el-tab-pane>
    <el-tab-pane label="资料上传" name="5" :lazy='true'>资料上传</el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
  import project from '@/components/project'
  import visit from '@/components/visit'


export default {
  name: 'projectdetail',
  components:{project,visit},

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      label:"项目基本信息",
      fullscreenLoading:false
    }
  },
  methods:{
    changeTab(tab){
      // console.log(tab.label);
      
    },
    getProInfo(){
         this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
                
        
        
        }, 1500); 
    }
    



  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.projectdetail /deep/ .el-tabs__content{
  min-height: 500px !important;
}
</style>
