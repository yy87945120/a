<template>
 <div class="portal">

  <div id='header'>
    <div class='layout'>
      <div style='float:left'>
        <div style='line-height:40px;font-size:16px'>logo</div>
      </div>
      <div style='float:right'>
        <div class='nav-item'>
         <i class="el-icon-setting" style='font-size:16px'></i>&nbsp;<el-dropdown>
          <span class="el-dropdown-link" style='font-size:16px'>
           18819747163<i class="el-icon-arrow-down el-icon--right"></i>
         </span>
         <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>技术咨询</el-dropdown-item>
          <el-dropdown-item>项目升级</el-dropdown-item>
          <el-dropdown-item @click.native="navItem('back')">进入后台</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>


    </div>
    <div class='nav-item inform' @click.native="navItem('message')"><el-badge :value="200" :max="99" class="item">
     <i class="el-icon-bell"></i> 消息
   </el-badge></div>
   <div class='nav-item' @click='loginout()'><i class='iconfont icon-tuichu2' style="margin-right: 3px"></i>退出</div>
 </div>
</div>
</div>


<div id='main'>
  <div class='layout main_layout'>
   <transition name='fade' mode='out-in'>     
    <router-view class='child-view'></router-view>
  </transition>
</div>
</div>
<!-- <div id='footer' style='line-height:40px;color:rgb(150,150,150);font-size: 14px'>
  <el-row :gutter='10'>
    <el-col :span = 4>
      provided by yzf
    </el-col>

    <el-col :span = 16 style='margin-top:10px'>
     <el-progress :percentage="70"></el-progress>
   </el-col>



 </el-row>
</el-row>
</div> -->
<!-- 按钮组 -->
 
</div>
</template>

<script>
  export default {
    name: 'portal',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        username:'',
        password:''

      }
    },
    methods:{
      navItem(target){

        this.$router.push({name:target,params:{ userId: '1' }});
      },
      loginout(){
          sessionStorage.removeItem('user');
          this.$router.push({name:'login'});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-item{
  float:left;
  line-height:40px;
  padding:0px 20px !important;
  cursor:pointer
}

.main_layout{
  padding:0px 0px;
  box-sizing:border-box;
  position:relative;
  /*overflow:hidden;*/
  margin-top:20px;
  border-left:1px solid rgb(242,242,242);
  border-right:1px solid rgb(242,242,242)
}
/*#footer{
  height:40px;
  background:rgb(242,242,242);
  width:100%;
  position:fixed;
  bottom:0px
}*/
#main{

}
.nav-item /deep/ .el-badge__content{
  top:17px;
  right:-1px
}

.nav-item:hover{
  color:yellow;
}

.el-dropdown-link{
  color:white
}

.nav-item:hover .el-dropdown-link{
  color:yellow;
}

nav-item /deep/ .el-dropdown-menu el-popper{
  top:0px
}

.inform{
  line-height:38px;
  margin-right: 10px
}
#header{
  background:#0078c8;
  height:40px;
  width:100%;
  font-size:16px;
  color:white;
 /* position:fixed;*/
  z-index:99
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
