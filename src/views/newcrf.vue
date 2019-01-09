<template>
  <div class="newcrf">

    <el-row style='position: fixed;z-index: 100;height: 50px' class='btnGroup' >
      <el-col :span = '24' style='text-align: left;background: white'>
        <el-button-group>
          <el-button type="primary" icon="icon-danxuan iconfont" size='small' @click="addDetailItem('radio','单选题')">单选题</el-button>
          <el-button type="primary" icon="icon-duoxuan iconfont" size='small' @click="addDetailItem('check','多选题')">多选题</el-button>
          <el-button type="primary" icon="icon-plus-checkboxfill iconfont" size='small' @click="addDetailItem('input','多行文本')">多行文本</el-button>
          <el-button type="primary" icon="icon-icon- iconfont" size='small' @click="addDetailItem('rate','评分题')">评分</el-button>
          <el-button type="primary" icon="icon-icon- iconfont" size='small' @click="addDetailItem('progress','程度题')">程度</el-button>
          <el-button type="primary" icon="icon-icon- iconfont" size='small' @click="addDetailItem('pic','图片题')">图片题</el-button>
          <el-button type="primary" icon="icon-icon- iconfont" size='small' @click="addDetailItem('date','日期题')">日期题</el-button>
<!--           <el-button type="primary" icon="icon-icon- iconfont" size='small'>矩阵题</el-button>
  <el-button type="primary" icon="icon-icon- iconfont" size='small'>随机分组</el-button> -->
  <el-button type="primary" icon="icon-icon- iconfont" size='small' @click=''>判断题</el-button>
  <el-button type="success" icon="el-icon-check iconfont" size='small' @click=''>保存</el-button>
  <el-button type="warning" icon="icon-icon- iconfont" size='small' @click=''>重置</el-button>
  <el-button type="danger" icon="icon-icon- iconfont" size='small' @click=''>删除</el-button>
</el-button-group>
</el-col>
<!--       <el-col :span='6' >
   <el-button-group >
         
   
    </el-button-group>
       
  </el-col> -->


 <!--    <el-col :span = '4'>
    
 </el-col> -->

</el-row>
<div style='height: 50px'></div>
<el-row>
  <el-col :span='19'>
    <h3 style="text-align: left;">第一个项目：文体两开花<i class="el-icon-edit" style="margin-left:30px;cursor: pointer;"></i></h3>
    <h5 style="text-align: left;color:rgb(150,150,150)">第一次随访</h5>
  </el-col>
  <el-col :span='5' style='font-weight: bold;'>
    CRF字典

  </el-col>
</el-row>


<el-row>
  <el-col :span="19">
    <div v-for='(groupItem,index) in crfList.groupList'  style="cursor: pointer;margin-left: 3px" :class="groupItem.selected?'groupList':''" @click='selectGroupItem(groupItem)'>
      <el-row style='background: rgb(239,239,239);height:35px;margin-top:   15px;line-height:35px;text-align:  left; padding:  0px 5px'>

       <el-col :span='18'><i :class="groupItem.open?'el-icon-arrow-down':'el-icon-arrow-right'" @click='groupItem.open = !groupItem.open'></i>&nbsp;{{index + 1}}、{{groupItem.groupTitle}} <i class="el-icon-edit" style="margin-left:30px;cursor: pointer;"></i> </el-col>
       <el-col :span='6' style='text-align: right;padding-right: 0px;font-size: 24px'>
        <i class="el-icon-circle-plus-outline" style='cursor: pointer;' @click='additem(groupItem,index)'></i>
        <i class="icon-fuzhi1 iconfont" style='cursor: pointer;font-size: 24px' @click='additem(groupItem,index)'></i>
        
        <i class="el-icon-star-on" style='cursor: pointer;' @click='deleteitem(groupItem,index)'></i>
        <i class="el-icon-delete" style='cursor: pointer;' @click='deleteitem(groupItem,index)'></i>

        <i class="el-icon-sort-up"  @click='sortup(item,index)'></i>

        <i class="el-icon-sort-down"  @click='sortdown(item,index)'></i>
      </el-col>
    </el-row>
    <div v-for='(item,itemindex) in groupItem.item' v-show='groupItem.open' >
     <el-row>
      <!-- refreshGroupList子组件刷新数组更新父组件信息  groupId想子组件传递组别信息，向子组件传递组内索引-->
      <radio v-if="item.itemType == 'radio'" @deletedetailitem='deletedetailitem' @getItemVal='refreshGroupList' :groupId = 'groupItem.groupId' :detailindex='itemindex'></radio>
      <check v-if="item.itemType == 'check'" @deletedetailitem='deletedetailitem' @getItemVal='refreshGroupList' :groupId = 'groupItem.groupId' :detailindex='itemindex'></check>
    </el-row>
  </div>


</div>
</el-col>

<el-col :span="5" style="padding-left: 5px;">
 <el-card shadow="hover">
   <el-radio-group v-model="radio3" size='small'>
    <el-radio-button label="系统字典组"></el-radio-button>
    <el-radio-button label="项目自定义"></el-radio-button>
    <el-radio-button label="收藏"></el-radio-button>
    <el-input size='small'
    placeholder="输入关键字进行过滤"
    v-model="filterText">
  </el-input>
  <!-- :filter-node-method="filterNode" -->
</el-radio-group>
<el-tree
class="filter-tree"
:data="data2"
:props="defaultProps"
default-expand-all

ref="tree2"
style='margin-top:10px'>

</el-tree>
</el-card>


</el-col>
</el-row>


<!-- 添加组别时的dialog -->
<el-dialog title="添加组别" class='dialog' :visible.sync="dialogTableVisible">
  <el-form label-width='70px' style='width: 80%;display: inline-block;'>
    <el-form-item label='组别名'>
      <el-input size='small'></el-input>

    </el-form-item>
    <el-form-item label='必做' style='text-align: left'>
      <el-switch  
      v-model="value2"
      active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch>
  </el-form-item>
  <el-form-item label='图片组' style='text-align: left'>
    <el-upload
    class="upload-demo"
    drag
    list-type="picture"
    action="https://jsonplaceholder.typicode.com/posts/"
    multiple>
    <i class="el-icon-upload"></i>
    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>

  </el-upload>
</el-form-item>
<el-button type='plain'>取消</el-button>
<el-button type='primary'>确认</el-button>
</el-form>
</el-dialog>
<!-- 添加组别时的dialog -->

</div>
</template>

<script>
  import radio from '@/components/form/radio'
  import check from '@/components/form/check'
  export default {
    name: 'newcrf',
    
    components:{radio,check},
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        dialogTableVisible:false,
        radio3:'系统字典组',
        value2:false,
        crfList:{
          projectId:0,
          visitId:0,
          groupList:[
          { 
            groupId:0,
            groupTitle:'先问你一下，什么是问题两开花',
            open:true,
            selected:false,
            pic:[],
            item:[
            {
              itemType:'radio',
              itemInfo:null
            },
            {
              itemType:'radio',
              itemInfo:null
            },
            {
              itemType:'radio',
              itemInfo:null

            }

            ]
          },
          {
            groupId:1,
            groupTitle:'先问你一下，什么是问题两开花哈哈哈哈第二问',
            open:true,
            selected:false,
            pic:[],
            item:[
            {
              itemType:'check',
              itemInfo:null
            }
            ]
          },
          ]

        },

        selectProject:'',



        filterText: '',
        data2: [{
          id: 1,
          label: '项目 1',
          children: [{
            id: 4,
            label: '字段123',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '项目 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '项目 3',
          children: [{
            id: 7,
            label: '二级 3-1sssssssssssssssssssssssssssssssssssss'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        menuState:true,
        menuStateAddBtn:false,
        selectProject:''


      }
    },
    methods:{
      refreshGroupList(val,groupId,detailindex){
        this.crfList.groupList[groupId].item[detailindex].itemInfo = val ;
          // console.log(this.crfList);
          // console.log(this.crfList.groupList[groupId].item[detailindex].itemInfo);
        },
        additem(item,index){
          this.dialogTableVisible = true;


        //   let _this = this;
        //   let initGroup={
        //   groupId:0,
        //   groupTitle:'',
        //   open:true,
        //   selected:false,
        //   item:[]
        // }

        // this.crfList.groupList.splice(index+1,0,initGroup);

        //  this.crfList.groupList[index+1].groupTitle = '未定义的crf组'+ this.crfList.groupList.length;
      },
      deleteitem(item){
        this.$confirm('确定删除整个组别吗？', '确认信息', {
          distinguishCancelAndClose: true,
          confirmButtonText: '确认',
          cancelButtonText: '放弃'
        })
        .then(() => {
          this.$message({
            type: 'info',
            message: '删除成功'
          });
        })
        .catch(action => {
          this.$message({
            type: 'info',
            message: action === 'cancel'
            ? '放弃删除'
            : '已取消删除'
          })
        });
      },
      deletedetailitem(){

      },
      addDetailItem(type,name){
          
          let group = this.getSelectedGroup();
          if(group != undefined){
          group.item.push(
          {
            itemType:type,
            itemInfo:null
          })
          this.$message({
            message: '成功，在《'+group.groupTitle+'》添加了 '+name,
            type: 'success'
          });
        }else{
          this.$message({
          message: '警告，未选择字典组，无法新增表单',
          type: 'warning'
        });
        }


        },
        deletedetailitem(groupId,itemId){
            this.$confirm('确定删除此表单吗？', '确认信息', {
          distinguishCancelAndClose: true,
          confirmButtonText: '确认',
          cancelButtonText: '放弃'
        })
        .then(() => {
          this.$message({
            type: 'info',
            message: '删除成功'
          });
        })
        .catch(action => {
          this.$message({
            type: 'info',
            message: action === 'cancel'
            ? '放弃删除'
            : '已取消删除'
          })
        });
        },
        getSelectedGroup(){

          return this.crfList.groupList.find(item=>item.selected == true);

        },
        selectGroupItem(groupItem){

          this.crfList.groupList.map(item=>{
            item.selected = false;
          })
          groupItem.selected = true;

        }
      }


    }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .newcrf{
    padding:0px 0px 0px;
    position:relative;

  }

/*.form_operation_add_btn{
  position:absolute ;
  width:240px;
  top:0px;
  bottom:0px;
  right:0px;
  z-index:99
}
.form_operation_add_btn li{
  float:left;
  margin-top:0px !important;
  margin-right:10px
}
.form_operation_btn{
  position:absolute;
  right:0px;
  z-index:99
}
.form_operation_btn li{
  list-style-type:none;
  margin-top:10px
  }*/
  .groupList{
    box-shadow:rgb(150,150,150) 0px 0px 10px;

  }

</style>
