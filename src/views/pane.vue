<template>
  <div class="pane" >
   <el-row :gutter='15'>
    <el-col :span='17'>
     <el-card shadow="always" style='height:320px'>
        系统面板
     </el-card>
     <el-row :gutter='15' style='margin-top:15px'>
       <el-col :span='9'>
        <el-card shadow="always" style='height:320px'>
            <el-row>本产品已经开通移动办公</el-row>
            <el-row>
                
            </el-row>
            <el-row>
                扫描二位码
            </el-row>
            
        </el-card>
      </el-col>
      <el-col :span='15'>
        <el-card shadow="always" style='height:320px'>
3
        </el-card>
      </el-col>
    </el-row>
  </el-col> 
  <el-col :span='7'>
    <el-card shadow="always" style='height:400px'>
4
    </el-card>
    <el-row style='margin-top:15px'>
        <el-col :span='24'>
          <el-card shadow="always" style='height:150px'>
5
        </el-card>
        </el-col>
    </el-row>
  </el-col>
</el-row>
</div>
</template>

<script>
  export default {
    name: 'pane',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
      
      }
    },
    methods:{
      set(data){

        this._data = data;
      }
    },
    mounted(){

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
