<template>
  <div class="formVue">
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

           
        <h1 style='margin-top:0px'>关于22222病人镜像分析的研究会议</h1>
        <el-row style='margin-top:5px;color:rgb(150,150,150)'>
          <el-col :span='20' :offset="2" style='text-align:center;padding-right:20px;margin-top:10px'>
              创建人：姚展锋  &nbsp;&nbsp; 时间：2018-11-2 12:00
          </el-col>
        </el-row>
        <div v-for='(item,index) in formData' >



        <div v-if="item.type == 'radio'">
        <el-row style='margin-top:5px;color:rgb(150,150,150)' >
          <el-col :span='23' :offset='1' style='text-align:left;margin-top:10px'>
              <h3>{{index+1}}.关于深恶的是数据展示aaaaaaaaaaaaaaaaaaaaaaaaaaaaa少时诵诗书所所所所所所所所所所所所所所所所所所</h3>
          </el-col>
          
          
          
        </el-row>
        <el-row>
          <div v-if = "item.style == 'v'" v-for='detailItem in item'><el-col :span='10' :offset='2' >
        
              <el-radio v-model='item.label'  label="detailItem.text">{{detailItem.text}} </el-radio>

          </el-col></div>

        </el-row>
        </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'formVue',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      menuState:true,
      menuStateAddBtn:false,
      formData:[
        {
          index:0,
          editState:false,
          type:"radio",
          title:"此题为单选题",
          style:"v",
          label:"",
          options:[
              {
                text:'单选题一',
                checked:false
              },
              {
                text:'单选题二',
                checked:false
              },
              {
                text:'单选题三'
              }
          ]

        }
      ]
    }
  },
  methods:{

  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.formVue{
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
</style>
