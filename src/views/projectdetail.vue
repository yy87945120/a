<template>
  <div class="projectdetail">
       <el-tabs value="2" type="border-card" >
   
    <el-tab-pane label="进度管理" name="2" :lazy='true'><projectprogress></projectprogress></el-tab-pane>
    <el-tab-pane label="受试者管理" name="7" :lazy='true'><visitor></visitor></el-tab-pane>
    <el-tab-pane label="CRF表配置" name="3" :lazy='true'>CRF表配置</el-tab-pane>
    <el-tab-pane label="成员管理" name="4" :lazy='true'><menber></menber></el-tab-pane>
    <el-tab-pane label="资料上传" name="5" :lazy='true'>资料上传</el-tab-pane>
    <el-tab-pane label="随访中心" name="6" :lazy='true'><visit></visit></el-tab-pane>
     <el-tab-pane label="基本信息" name="1" v-loading="fullscreenLoading" :lazy='true'><project></project></el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
  import project from '@/components/projectdetail/project'
  import visit from '@/components/projectdetail/visit'
  import projectprogress from '@/components/projectdetail/projectprogress'
  import visitor from '@/components/projectdetail/visitor'
  import menber from '@/components/projectdetail/menber'
export default {
  name: 'projectdetail',
  components:{project,visit,projectprogress,visitor,menber},

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      
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
  min-height: 70vh !important;
}
</style>
