<template>
  <div class="back">
    <el-container class='back_container'>

      <el-aside>
        <el-row class="tac">
          <el-col :span="24">
            <h3 style='margin-top:10px;margin-bottom:20px'>临床科研数据采集系统（EDC）
            </h3>
            <div style='height:75vh;' class='aside_nav'>
              <el-scrollbar style="height: 100%;">

                <el-menu style="width:220px"
                default-active="2"
                class="el-menu-vertical-demo back_side_nav"
                @open="handleOpen"
                @close="handleClose"
                :collapse="isCollapse">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>基础信息维护</span>
                  </template>
                  <el-menu-item index="1-1" @click="backRouter('user');addTab('user','用户信息')">
                    用户信息
                  </el-menu-item>
                  <el-menu-item index="1-2" @click="backRouter('power');addTab('power','权限管理')">
                    权限管理
                  </el-menu-item>



                </el-submenu>

                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">CRF维护</span>
                  </template>
                  <el-menu-item index="2-1" @click="backRouter('newcrf');addTab('newcrf','新建CRF字典')">
                    新建CRF字典
                  </el-menu-item>
                  <el-menu-item index="2-2" @click="backRouter('crf');addTab('crf','编辑CRF字典')">
                    编辑CRF字典
                  </el-menu-item>
                  <el-menu-item index="2-3" >
                    CRF字典查询
                  </el-menu-item>
                </el-submenu>

                <el-submenu index="3">
                 <template slot="title">
                  <i class="el-icon-picture"></i>
                  <span slot="title">项目维护</span>
                </template>
                <el-menu-item index="3-1" @click="backRouter('newproject');addTab('newproject','新建项目')">
                  新建项目
                </el-menu-item>
                <el-menu-item index="3-2" @click="backRouter('project');addTab('project','我的项目')">
                  我的项目
                </el-menu-item>

                <el-menu-item index="3-3" @click="backRouter('project2');addTab('project2','我的项目2')">
                  我的项目2
                </el-menu-item>
              </el-submenu>

              <!-- <el-menu-item index="4" @click="backRouter('newproject');addTab('newproject','科研立项')">
                <i class="el-icon-setting"></i>
                <span slot="title">科研立项</span>
              </el-menu-item> -->

              <el-submenu index="5">
               <template slot="title">
                <i class="el-icon-document"></i>
                <span slot="title">质量管理</span>
              </template>
              <el-menu-item index="5-1" @click="backRouter('user')">
                CRF发布审核
              </el-menu-item>
              <el-menu-item index="5-2" @click="backRouter('deo')">
                问卷修改审核
              </el-menu-item>
            </el-submenu>

            <el-submenu index="6">
             <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">数据接口</span>
            </template>
           <!--  <el-menu-item index="5-1" @click="backRouter('user')">
              CRF发布审核
            </el-menu-item>
            <el-menu-item index="5-2" @click="backRouter('deo')">
              问卷修改审核
            </el-menu-item> -->
          </el-submenu>

          <el-submenu index="7">
           <template slot="title">
            <i class="el-icon-document"></i>
            <span slot="title">移动短信管理</span>
          </template>
          <!-- <el-menu-item index="5-1" @click="backRouter('user')">
            CRF发布审核
          </el-menu-item>
          <el-menu-item index="5-1" @click="backRouter('user')">
            CRF修改审核
          </el-menu-item>
          <el-menu-item index="5-2" @click="backRouter('deo')">
            问卷修改审核
          </el-menu-item> -->
        </el-submenu>
      </el-menu>

    </el-scrollbar>
  </div>
</el-col>

</el-row>
</el-aside>

<el-main >
  <!-- tabComponent -->
  <el-tabs v-model="editableTabsValue" type="card" closable  @tab-click = 'gotabrouter' @edit="handleTabsEdit">
    <el-tab-pane

    :key="item.title"
    v-for="(item, index) in editableTabs"
    :label="item.title"
    :name="item.title"
    @click='gogogo'
    >

  </el-tab-pane>
</el-tabs>
<div style='height: 80vh;'>
  <el-scrollbar style='height: 100%;overflow-x: hidden;' class='scr'>
    <transition name='fade' >


      <keep-alive :include=activeList >
        <router-view ref="Child" class='child-view' @addRouters='addTab' :key="$route.fullPath" style='overflow-x: hidden;min-height:   80vh'>


        </router-view>
      </keep-alive>


    </transition>
  </el-scrollbar>
</div>
</el-main>
</el-container>
</div>
</template>

<script>
  export default {
    name: 'back',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        
        activeName2: 'first',

        isCollapse:false,
        tabIndex: 1,
        // str:"/project|projectdetail2|projectdetail1/"
      }
    },
    methods:{
      tabtorouter(item){


      },
      gogogo(){
        console.log(1)
      },
      gotabrouter(itemOption){

        let par = {
          'itemOption':itemOption
        };

        this.$store.commit('toggleTab',par);
        
      
      },
      backRouter(to){
          // if(this.editableTabs.length > 7){

          //   return ;
          //   alert("标签页不能大于7页");

          // }
          this.$router.push({name:to});
        },
        handleOpen(key, keyPath) {

        },
        handleClose(key, keyPath) {

        },
        handleClick(){

        },
        tabRoute(){

        },

        addTab(router,name,query){
          let data = query||{};
          let par = {
            'router':router,
            'name':name,
            'data':data
          };

          this.$store.commit('addTab',par);

        },
        handleTabsEdit(targetName, action) {

          let par = {
            'targetName':targetName,
            'action':action
          };

          this.$store.commit('deleteTab',par);
        }

      },
      mounted(){
       

      },

computed:{
  activeList:{
    get: function () {
      return this.$store.state.activeList
    },
    set: function (newValue) {
      this.$store.state.activeList = newValue
    }

  },
  editableTabsValue:{
   get: function () {
    return this.$store.state.editableTabsValue
  },
  set: function (newValue) {
    this.$store.state.editableTabsValue = newValue
  }
  
},
editableTabs:{
 get: function () {
  return this.$store.state.editableTabs
},
set: function (newValue) {
  this.$store.state.editableTabs = newValue
}

}

},
watch:{ 
   // 'activeList'(val){
   //      let str ='/';
   //      console.log(val);
   //      let length = val.length;
   //      val.map((item,index)=>{
   //          if(index == 0 ){
   //            if(length == 1){
   //              str = str+item+'/';
   //              return ;
   //            }
   //            str = str+item;
   //          }else{
   //            if(index != length - 1){
   //              str = str+"|"+item;
   //            }else{
   //              str = str+"|"+item+"/";
   //            }
   //          } 
   //      })
   //      this.str  = str
   //      console.log(this.str);
   // }
 }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back_side_nav{
  text-align:left;

}
.scr /deep/ .el-scrollbar__wrap{
  overflow-x: hidden;
}
.back_container /deep/ .el-aside{
  width:223px !important
}

.aside_nav /deep/ .el-scrollbar__wrap
{
  overflow-x: hidden;
}


</style>
