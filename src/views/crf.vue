<template>
  <div class="crf">
 <div class='form_operation_btn'> 
       <el-button :icon="menuState==false?'el-icon-menu':'el-icon-arrow-down'" @click='menuState = !menuState'  type="primary" circle></el-button>
      <transition name="el-zoom-in-top">
        <div v-show="menuState" class="transition-box">

              

            <ul class='form_operation_btn'>
               <el-tooltip class="item" effect="dark" content="基本信息" placement="right">
                <li> <el-button type="primary" icon="el-icon-edit" circle></el-button></li>
                 </el-tooltip>


                <li style='position:relative'  @mouseenter='menuStateAddBtn = true' @mouseleave='menuStateAddBtn = false'>
                  <el-tooltip class="item" effect="dark" content="选择表单类型" placement="right"><el-button type="success" icon="el-icon-plus" circle></el-button></el-tooltip>
                  <transition name="el-fade-in-linear">
                  <div v-show="menuStateAddBtn" class="transition-box">
                  <ul class='form_operation_add_btn' >
                    <li>
                        <el-tooltip class="item" effect="dark" content="单选" placement="top"><el-button type="success" icon="el-icon-check" circle></el-button></el-tooltip>
                    </li>
                    <li>
                        <el-tooltip class="item" effect="dark" content="多选" placement="top"><el-button type="success" icon="el-icon-check" circle></el-button></el-tooltip>
                    </li>
                    <li>
                        <el-tooltip class="item" effect="dark" content="输入文本" placement="top"><el-button type="success" icon="el-icon-check" circle></el-button></el-tooltip>
                    </li>
                    <li>
                        <el-tooltip class="item" effect="dark" content="判断" placement="top"><el-button type="success" icon="el-icon-check" circle></el-button></el-tooltip>
                    </li>

                  </ul>
                  </div>
                  </transition>
                </li>
                <li><el-button type="info" icon="el-icon-message" circle></el-button></li>
                <li> <el-button type="warning" icon="el-icon-star-off" circle></el-button></li>
                <el-tooltip class="item" effect="dark" content="保存" placement="right">
                <li> <el-button type="primary" icon="el-icon-check" circle></el-button></li>
                 </el-tooltip>
                 <li> <el-button type="danger" icon="el-icon-delete" circle></el-button></li>
                
            </ul>
  
          
  
  
 
  
         </div>
    

        
      </transition>
           </div> 
  		<el-row >
  		 
  			<el-col :span='4' style='border-right:1px solid rgb(242,242,242);padding-right:15px'>
  		
<div style='height:70vh' class='aside_nav'>
  			<el-scrollbar style="height: 100%;">

  				<el-input
  placeholder="输入关键字进行过滤"
  v-model="filterText">
</el-input>

<el-tree
  class="filter-tree"
  :data="data2"
  :props="defaultProps"
  default-expand-all
  :filter-node-method="filterNode"
  ref="tree2"
  style='margin-top:10px'>
</el-tree>

</el-scrollbar>
</div>
  			</el-col>
  			





  			<el-col :span='6' style='border-right:1px solid rgb(242,242,242);padding-right:10px'>
<div style='height:70vh' class='aside_nav'>
<el-scrollbar style="height: 100%;">
				<h4>字段</h4>
				<h5 style='color:rgb(150,150,150)'>11</h5>
  				<el-tag style='cursor:pointer;margin-top:10px;margin-left:10px' 
  v-for="tag in tags"
  :key="tag.name"
  
  :type="tag.type">
  {{tag.name}}
</el-tag>

</el-scrollbar>
</div>
  			</el-col>

  			<el-col :span='12'> 

  			<h3 style='text-align:left;margin-left:10px;margin-bottom:15px'>编辑字段</h3>
  				<el-form ref="form" :model="form" label-width="80px">
  					<el-row :gutter='15'>
  					<el-col :span='12'>
  						 <el-form-item label="字段名">
    					<el-input v-model="form.name"></el-input>
  					</el-form-item>
  					</el-col>

  					<el-col :span='12'>
  						<el-form-item label="code代码">
    					<el-input v-model="form.code"></el-input>
  					</el-form-item>
  					</el-col>

  					<el-col :span='12'>
  						<el-form-item label="类型">
    <el-select v-model="form.type" disabled  placeholder="请选择活动区域" style='width：100%'>
      <el-option label="多选" value="check"></el-option>
      <el-option label="单选" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  					</el-col>

  					<el-col :span='12'>
  						  <el-form-item label="是否有效" prop="delivery">
    <el-switch style='text-align:left' v-model="form.delivery"></el-switch>
  </el-form-item>
  				
  					</el-form-item>
  					</el-col>

  					<el-col :span='24'>


  					</el-col>

  					<el-col :span='24'>
  						<el-form-item label="内容">
    <el-checkbox-group v-model="form.type" style='text-align:left'>
     <el-checkbox label="单纯品牌曝光" name="type" style='margin-left:30px'></el-checkbox>
      <el-checkbox label="地推活2222222222222222222222动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  						
  					</el-col>
  					<el-col :span='24'  style='text-align:right'>
  						<el-button type="primary">
  							提交审核
  						</el-button>
  					</el-col>
  				</el-row>
  				</el-form>
  				
  				
  					
  					

  					


  			</el-col>
  		</el-row>
  </div>
</template>

<script>
export default {
  name: 'crf',
  data () {
    return {

      msg: 'Welcome to Your Vue.js App',
      form:{
      		name:'',
      		code:'',
      		type:'check',
      		effection:true
      },
      tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三2', type: 'info' },
          { name: '标签四22222222222222222222222', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ],
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
	  filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
  		

  },
  mounted(){

  		
  },
  watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.crf{
  position:relative
}
.form_operation_add_btn{
  position:absolute;
  width:200px;
  top:0px;
  bottom:0px;
  right:40px;
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
}

.aside_nav /deep/ .el-scrollbar__wrap{
	overflow-x:hidden
}
.tree{
      overflow-y: hidden;
      overflow-x: scroll;
    

     
  } 
  .el-tree {
     min-width: 100%;
     display:inline-block !important;

 }
</style>
