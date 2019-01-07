<template>
  <div class="project" style="position: relative;">
    <!-- <el-row>
          <el-col :span="12" style='height:50px;border-bottom:1px solid rgb(242,242,242)'>
                <el-form :inline="true"  class="demo-form-inline">
                      <el-form-item label="标题">
                          <el-input v-model="formInline.user"   placeholder="请填写标题"></el-input>
                       </el-form-item>

                       <el-form-item label="表单状态">
    <el-select v-model="formInline" placeholder="（区分管理员的和普通用户的）">
      <el-option label="新建的" value="shanghai"></el-option>
      <el-option label="正在修改的" value="beijing"></el-option>
      <el-option label="未完成的" value="beijing"></el-option>
      <el-option label="未读的" value="beijing"></el-option>
    </el-select>
  </el-form-item>
                </el-form>
          </el-col>

          <el-col :span="12" style='height:50px;border-bottom:1px solid rgb(242,242,242)'>

          </el-col>
         
        </el-row> -->
        <div style="position: absolute;right: 0px;top: 0px;width: 300px;height: 40px;padding-top:4px;padding-right:15px;z-index: 2">
          <el-row style=''>
            <el-radio-group v-model="radio3" size='small' @change="fillterList">
              <el-radio-button  label="全部"></el-radio-button>
              <el-radio-button label="新建"></el-radio-button>
              <el-radio-button label="审核中"></el-radio-button>
              <el-radio-button label="进行中"></el-radio-button>
              <el-radio-button label="完成"></el-radio-button>
            </el-radio-group></el-row>


          </div>
          <el-tabs type="border-card">

            <el-tab-pane v-loading="fullscreenLoading">
              <span slot="label"><i class="el-icon-date"></i> 单中心项目</span>
              <el-row :gutter="15" class='project_list'>
                <div v-for='item in projectList' class='card-container' >
                  <el-col :span="8" style='margin-top:10px'>
                    <el-card shadow="hover" style='height:290px;
                    position:relative;cursor: pointer;' @click.native='projectInfo(item)'>
                    <el-tooltip class="item" effect="dark" :content="item.name" placement="top">
                      <el-row style='height:30px;line-height:30px;text-align: left;padding: 0px 10px;font-size:14px;font-weight:bold;overflow:hidden; text-overflow:ellipsis; white-space:nowrap'>
                        {{item.name}}
                      </el-row>
                    </el-tooltip>
                    <img :src="item.imgUrl" height="190" width=100% />
                    <!-- <div style='position:absolute;left:-40px;width:100px;top:-40px;height:80px;border-radius:80px;background:#39ade3;text-align:right;padding-right:15px'> <span style='line-height:120px;color:white;font-size: 16px'> 未审核 </span> </div> -->

                    <div class='project_item' style='position:absolute;bottom:0px;height:70px;width:100%;background:rgb(102,178,227,1);
                    '>
                    <el-row style='height:25px;border-bottom: 1px solid rgb(255,255,255)'>
                      <div v-for='detailItem in item.detail'>

                        <el-col class='project_item_col' :span="6" @mouseover.native='detailItem.check = true' @mouseout.native='detailItem.check = false' :class="detailItem.check?'active_item':''" style='line-height: 25px'>{{detailItem.amount}} </el-col>

                      </div>
                      
                    </el-row>
                    <el-row style='height:45px'>
                      <div v-for='detailItem in item.detail'>

                       <el-col class='project_item_col' @mouseover.native='detailItem.check = true' @mouseout.native='detailItem.check = false' :span="6" :class="detailItem.check?'active_item':''"><i  :class="detailItem.icon +' project_icon'"></i><div class='project_nav'>{{detailItem.name}}</div></el-col>
                     </div>
                     <!--  <el-col class='project_item_col' @mouseover='activeBtnFlag = true' :span="6"><i class="el-icon-document project_icon" ></i><div class='project_nav'>项目信息</div></el-col>
                      <el-col class='project_item_col' @mouseover='activeBtnFlag = true' :span="6" @click.native='goRouter'><i class="el-icon-edit-outline project_icon" ></i><div class='project_nav'>CRF</div></el-col>
                      <el-col class='project_item_col' @mouseover='activeBtnFlag = true' :span="6"><i class="el-icon-edit project_icon"></i><div class='project_nav'>病例录入</div></el-col>
                      <el-col class='project_item_col' @mouseover='activeBtnFlag = true' :span="6"><i class="el-icon-edit project_icon"></i><div class='project_nav'>项目成员</div></el-col> -->

                    </el-row>
                  </div>

        <!-- <div style='position:absolute;bottom:0px;height:50px;width:100%;background:rgba(102,178,227,0.8);
          '> -->


          <!-- <div style='float:left;height:50px;width:75%;line-height:50px;color:white;'>
            进入问卷
          </div>
          


          <div class='detailBtn_container' style='float:left;height:50px;width:25%;line-height:50px;color:white;cursor:pointer'>
            <div class='detailBtn' style='border-left:1px solid rgb(220,220,220);height:30px;margin-top:10px;width:100%;line-height:30px;cursor:pointer;color:rgb(220,220,220)'>详情</div>
          </div> -->
          <!--  </div> -->
        </el-card>

      </el-col>
    </div>
<!--   <el-col :span="6" style='margin-top:10px;'>
    <el-card shadow="hover" @click.native="dialogTableVisible = true" style='height:200px;
    cursor:pointer'>
      鼠标悬浮时显示
    </el-card>

  </el-col> -->



</el-row>
</el-tab-pane>
<el-tab-pane label="多中心项目" v-loading="fullscreenLoading">多中心项目</el-tab-pane>

</el-tabs>



<el-row style='margin-top:30px;'>
  <el-row >


    <el-col :span="24"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
</el-row>
    	<!-- <el-dialog height='400px' title="请选择要添加的表单类别" :visible.sync="dialogTableVisible" >
  				<el-row :gutter="15">
  					<el-col :span='6'>
  						<img  height="150" src='问卷' />
  					</el-col>

  					<el-col :span='6'>
  						<img  height="150" src='投票' />
  					</el-col>
  				</el-row>
        </el-dialog> -->
      </div>
    </template>

    <script>
let projectListCopy = [
          {
            projectId:'1',
            name:'我的第一个项目：文体两开花特约之文体不分家,说到文体',
            status:'审核中',
            imgUrl:require("@/assets/pic.jpg"),
            detail:[

            {
              name:'随访情况',
              amount:3,
              icon:'icon-jihua iconfont'
            },
            {
              name:'CRF',
              amount:3,
              icon:'icon-zidian iconfont'
            },
            {
              name:'病例录入',
              amount:3,
              icon:'icon-qichukucunluru iconfont'
            },
            {
              name:'项目成员',
              amount:1,
              icon:'icon-chengyuan iconfont'
            }
            ]


          },
          {
            projectId:'2',
            name:'我的第二个项目：人类症状研究',
            status:'新建',
            imgUrl:require("@/assets/pic.jpg"),
            detail:[

            {
              name:'随访情况',
              amount:3,
              icon:'icon-jihua iconfont'
            },
            {
              name:'CRF',
              amount:3,
              icon:'icon-zidian iconfont'
            },
            {
              name:'病例录入',
              amount:110,
              icon:'icon-qichukucunluru iconfont'
            },
            {
              name:'项目成员',
              amount:12,
              icon:'icon-chengyuan iconfont'
            }
            ]


          },
          {
            projectId:'2',
            name:'我的第二个项目：人类症状研究',
            status:'',
            imgUrl:require("@/assets/pic.jpg"),
            detail:[

            {
              name:'随访情况',
              amount:3,
              icon:'icon-jihua iconfont'
            },
            {
              name:'CRF',
              amount:3,
              icon:'icon-zidian iconfont'
            },
            {
              name:'病例录入',
              amount:110,
              icon:'icon-qichukucunluru iconfont'
            },
            {
              name:'项目成员',
              amount:12,
              icon:'icon-chengyuan iconfont'
            }
            ]


          }
          ];
/*
	<！--<el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>-->
    */
    export default {
      name: 'project',
      data () {
        return {
          msg: 'Welcome to Your Vue.js App',
          formInline:'',
          fullscreenLoading:false,
          dialogTableVisible:false,

          projectList:[
          {
            projectId:'1',
            name:'我的第一个项目：文体两开花特约之文体不分家,说到文体',
            status:'审核中',
            imgUrl:require("@/assets/pic.jpg"),
            detail:[

            {
              name:'随访情况',
              amount:3,
              icon:'icon-jihua iconfont'
            },
            {
              name:'CRF',
              amount:3,
              icon:'icon-zidian iconfont'
            },
            {
              name:'病例录入',
              amount:3,
              icon:'icon-qichukucunluru iconfont'
            },
            {
              name:'项目成员',
              amount:1,
              icon:'icon-chengyuan iconfont'
            }
            ]


          },
          {
            projectId:'2',
            name:'我的第二个项目：人类症状研究',
            status:'新建',
            imgUrl:require("@/assets/pic.jpg"),
            detail:[

            {
              name:'随访情况',
              amount:3,
              icon:'icon-jihua iconfont'
            },
            {
              name:'CRF',
              amount:3,
              icon:'icon-zidian iconfont'
            },
            {
              name:'病例录入',
              amount:110,
              icon:'icon-qichukucunluru iconfont'
            },
            {
              name:'项目成员',
              amount:12,
              icon:'icon-chengyuan iconfont'
            }
            ]


          },
          {
            projectId:'3',
            name:'我的第三个项目：人类终极研究',
            status:'',
            imgUrl:require("@/assets/pic.jpg"),
            detail:[

            {
              name:'随访情况',
              amount:3,
              icon:'icon-jihua iconfont'
            },
            {
              name:'CRF',
              amount:3,
              icon:'icon-zidian iconfont'
            },
            {
              name:'病例录入',
              amount:110,
              icon:'icon-qichukucunluru iconfont'
            },
            {
              name:'项目成员',
              amount:12,
              icon:'icon-chengyuan iconfont'
            }
            ]


          }
          ],
          radio3:'全部',
          activeBtnFlag:false
        }
      },

      methods:{
        goDetail(){
         this.$router.push({ name: 'detail', params: { userId: 'wise' }})
       },
       goRouter(){

       },
       projectInfo(item){
        //item.projectId
          this.$router.push({name:'projectdetail',query:{id:item.projectId}});
          this.$emit("addRouters",'projectdetail',item.name,{'id':item.projectId})

          
       },
       insetCheck(){
        let _this = this;
        this.projectList.map((item,index)=>{

          item.detail.map((detailitem,detailindex)=>{

            _this.$set(detailitem,'check',false)

          })

        })
      },
      fillterList(status){
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
          if(status == '全部'){
          this.projectList = projectListCopy;
          return ;
        }
        this.projectList = projectListCopy.filter(item=>item.status == status);
        }, 1500);
        
      }
    },
    created(){
      this.insetCheck();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo-form-inline /deep/ .el-form-item{
  margin-bottom:15px
}

.card-container /deep/ .el-card{
	position:relative
}

.card-container /deep/ .el-card__body{
	position:absolute;
	width:100%;
	height:100%;
	padding:0px
}
.project_nav{
  font-size: 12px;

}
.project /deep/ .el-tabs__content{
  min-height: 500px !important;
}
.project_item{
  color: rgb(230,230,230);
  padding-bottom: 2px

}
.project_icon{
  font-size: 24px;
  height: 28px;
  margin-top:2px
}
.project_item_col{
  border-left: 1px solid rgb(230,230,230);
  cursor: pointer;

}


/*.project_item_col:hover {
  

  }*/
  .active_item{
    color: rgb(255,255,255);
  }

</style>
