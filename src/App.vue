<template>

<div style="height: 100vh;" id='app'>

 <!-- <el-scrollbar style="height: 100%;"> <!-- 滚动条 --> 

  <transition name='fade' mode='out-in'>
        <router-view class="child-view"></router-view>
      </transition>

<!--  </el-scrollbar> --><!-- /滚动条 -->
</div>

</template>

<script>
export default {
  name: 'App'
}
</script>
//全局样式
<style>

#editor{
  min-width:400px;
}
.w-e-text-container{
  height:50px !important;

}

.tree{
      overflow-y: scroll;
      overflow-x: scroll;


  }
  .el-tree {
     min-width: 100%;
     display:inline-block !important;
 }

.form_controller{
  width:100%;
  padding:0px 0px 10px;
  border-bottom:1px solid rgb(242,242,242);
  box-sizing:border-box
}
.group_title{
  text-align:left;
  margin-bottom:20px;
}
.collect_icon{
    font-size:24px;
    margin-right:10px;
    cursor: pointer;
}
.form_controller .el-input__inner{
    height: 35px
}


.form_title{
    background:rgb(240,240,240);
    margin-top:10px;
    margin-bottom:10px;
    font-size:14px;
    color:rgb(40,40,40);
    padding:5px 0px;
    text-align:center;
    box-sizing:border-box
}
.check_icon{
  color:rgb(230,230,230)
}

.itemName{
  text-align:left;
}
.label_style{

}
.check_icon_light{

  color:rgb(101,147,124)
}
.item_label{
  text-align:right;
  padding-left:5px;
  
  word-wrap:break-word;
  margin-top: 8px;
  margin-bottom: 8px
}
.item_controller_row{
    margin-top:10px
}


*{
    margin:0px;
    padding:0px
}

.sidebar {
 position: fixed;
 border-right: 1px solid rgba(0,0,0,.07);
 overflow-y: auto;
  overflow-x: heidden;
 position: absolute;
 top: 0;
 bottom: 0;
 left: 0;
 transition: transform .25s ease-out;
 width: 300px;
 z-index: 3;
}
.sidebar::-webkit-scrollbar {
 width: 4px
}

.sidebar::-webkit-scrollbar-thumb {
 background: transparent;
 border-radius: 4px
}

.sidebar:hover::-webkit-scrollbar-thumb {
 background: hsla(0,0%,53%,.4)
}

.sidebar:hover::-webkit-scrollbar-track {
 background: hsla(0,0%,53%,.1)
}


.child-view {


  transition: all .3s cubic-bezier(.55,0,.1,1);
}



.layout{
  width: 100%
}




#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-y:hidden !important; 
}


.fade-enter-active,
.fade-leave-active {
  transition: all .2s ease;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
}
</style>
