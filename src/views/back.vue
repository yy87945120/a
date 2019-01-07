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
              </el-submenu>

              <el-menu-item index="4" @click="backRouter('newproject');addTab('newproject','科研立项')">
                <i class="el-icon-setting"></i>
                <span slot="title">科研立项</span>
              </el-menu-item>

              <el-submenu index="5">
               <template slot="title">
                <i class="el-icon-document"></i>
                <span slot="title">审核</span>
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
              <span slot="title">数据录入</span>
            </template>
            <el-menu-item index="5-1" @click="backRouter('user')">
              CRF发布审核
            </el-menu-item>
            <el-menu-item index="5-2" @click="backRouter('deo')">
              问卷修改审核
            </el-menu-item>
          </el-submenu>

          <el-submenu index="7">
           <template slot="title">
            <i class="el-icon-document"></i>
            <span slot="title">项目总结</span>
          </template>
          <el-menu-item index="5-1" @click="backRouter('user')">
            CRF发布审核
          </el-menu-item>
          <el-menu-item index="5-1" @click="backRouter('user')">
            CRF修改审核
          </el-menu-item>
          <el-menu-item index="5-2" @click="backRouter('deo')">
            问卷修改审核
          </el-menu-item>
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
        activeList:[],
        activeName2: 'first',
        editableTabsValue: 'pane',
        editableTabs: [{
          title: '系统首页',
          name: '系统首页',
          router:'pane',
          query:{}
        }],
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

        let tabArr= this.editableTabs.find(item=>item.name == itemOption.name);
        let query = tabArr.query || {};
        // if(tabArr.router.indexOf('projectdetail') != -1){
        //   // let reg = /\w\d+$/;
        //   let router = tabArr.router
        //   let filter = router.replace(/\d+$/,'');
        //   console.log(filter)
        
        //         this.$router.push({name:filter,query:query});
        //         return ;
        // }

        this.$router.push({name:tabArr.router,query:query});


      },
      backRouter(to){
        if(this.editableTabs.length > 7){
          
          return ;
          alert("标签页不能大于7页");
          
        }
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
        let _this = this;
          	//添加
            let flag = this.editableTabs.some(item=>item.name == name);
            



            if(!flag){

              let newTabName = name;
              this.editableTabs.push({
                title: name,
                name: name,
                router:router,
                query:data

              });
  // if(router != 'projectdetail'){
    
  // }
  _this.activeList.push(router);
  console.log(_this.activeList);

  this.editableTabsValue = newTabName;
}else{


  let tabArr = _this.editableTabs.find(item=>item.title == name)


  _this.editableTabsValue = tabArr.title;

}



},
handleTabsEdit(targetName, action) {
  if (action === 'add') {
    let newTabName = ++this.tabIndex + '';
    this.editableTabs.push({
      title: 'New Tab',
      name: newTabName

    });
    this.editableTabsValue = newTabName;
  }
  if (action === 'remove') {
    if(targetName == '系统首页') return;
    let tabs = this.editableTabs;
    let activeName = this.editableTabsValue;
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          let nextTab = tabs[index + 1] || tabs[index - 1];
          if (nextTab) {
            activeName = nextTab.name;
          }
        }
      });
    }

    //当前激活tab
    this.editableTabsValue = activeName;

    //去除tab
    this.editableTabs = tabs.filter(tab => tab.name !== targetName);



    //获取当前激活路由的参数
    var query ={};
    tabs.map(item=>{
      if(item.title == this.editableTabsValue){
        // console.log(item.query);
        query = item.query || {};
      }
    })

    var router ='';
    tabs.map(item=>{
      if(item.title == this.editableTabsValue){
        
        router = item.router;
      }
    })
    //缓存列表
    let num = 0;

    this.activeList = this.activeList.filter(t => t == router);

    // console.error(this.activeList);

    this.$router.push({name:router,query:query});

  }
}

},
mounted(){
    this.editableTabsValue = '系统首页';
    this.activeList.push('pane');

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
