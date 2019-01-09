<template>
  <div class="radio">
    <el-tooltip class="item" effect="light" content="Top Center 提示文字" placement="top">
      
   
    <div  @mouseover='editBtn = true' @mouseout='editBtn = false' :style="editBtn||editorShow?'box-shadow:1px solid rgb(239,239,239);position: relative; box-shadow:rgb(239,239,239) 0px 0px 10px;margin-top:15px':'position: relative;margin-top:15px'">
      <el-row style='margin-bottom: 15px;'>
       
       
        <el-col :span="4" class='item_label' v-html ='label' >
           
        </el-col>
        <el-col :span="0.5" style='text-align:left;'>
           <span style='text-align:left;color: red;display: inline-block;margin-top:5px;width: 8px;margin-right: 15px' ><span v-show='required'>*</span></span>
        </el-col>
        
        <el-col :span="width" style='padding-top: 2.9px'>
          <el-row>
            <div v-for='(item,index) in formItem'>
              <el-col :span="span" class='itemName' style="margin-top:8px;margin-bottom:8px">

               <el-radio v-model="checkItem" disabled :label='item.check' >{{item.radioValue}}</el-radio>
               <input type='text' disabled="" style='outline: none;border: none;border-bottom: 1px solid rgb(40,40,40);width: 100px'  v-model = 'item.description' v-if = 'item.allowContent'/>
             </el-col>
           </div>
         </el-row>
       </el-col>
       <el-col :span="3" style='position:absolute;right:0px;min-width: 110px' v-show="editorShow?true:editBtn" >
         <el-button type="primary" icon="el-icon-edit" circle @click='editorShow = !editorShow'></el-button></el-button><el-button type="danger" @click='deleteitem()' icon="el-icon-delete" circle></el-button>
       </el-col>
     </el-row>

   </div>
    </el-tooltip>
   <div class='' style='position:relative;border-top:1px solid rgb(239,239,239);padding-top:10px' v-show='editorShow'>
    <i class="el-icon-caret-top" style="position: absolute;left: 100px;top: -20px;color:rgb(239,239,239);font-size:28px;"></i> 
    <editor @getVal = 'getContent'></editor>
    <el-row class='form_title'>
      <el-col :span='8'>
        选项文字
      </el-col>


      <el-col :span='3'>
        允许填空
      </el-col>


      <el-col :span='3'>
        默认
      </el-col>


      <el-col :span='3'>
        位置
      </el-col>
      <el-col :span='3'>
        操作
      </el-col>
    </el-row>
    <div class='form_controller'>

      <div class='item_controller' v-for='(item,index) in formItem'>
        <el-row class='item_controller_row'>

          <el-col :span='8'>
            <el-input placeholder='请填写内容' v-model="item.radioValue" clearable>

            </el-input>

          </el-col>
          <el-col :span='3' style='text-align:center;line-height:35px;font-size:28px'>
            <i :class="item.allowContent?'el-icon-circle-check check_icon_light':'el-icon-circle-check-outline chec_icon'" @click='toggleFlag(item,index)'></i>
          </el-col>
          <el-col :span='3' style='text-align:center;line-height:35px;font-size:28px'>
            <i :class="item.check?'el-icon-circle-check check_icon_light':'el-icon-circle-check-outline chec_icon'"  @click='checkFlag(item,index)'></i>
          </el-col>

          <el-col :span='3' style='text-align:center;line-height:35px;font-size:22px;cursor:pointer'>
            <i class="el-icon-sort-up"  @click='sortup(item,index)'></i>

            <i class="el-icon-sort-down"  @click='sortdown(item,index)'></i>
          </el-col>

          <el-col :span='3' style='text-align:center;line-height:35px;font-size:24px;cursor:pointer'>
            <i class="el-icon-circle-plus-outline"  @click='additem(item,index)'></i>

            <i class="el-icon-delete"  @click='deletedetailitem()'></i>
          </el-col>
        </el-row>
      </div>
      <el-row style='margin-top:10px'>

        <el-col :span='2' >
          <span class="label_style">必填</span>
          <el-switch
          v-model="required"
         
         
          
          >
        </el-switch>
      </el-col>
      <el-col :span='2' >
         <span class="label_style">提示</span>
         </el-col>
          <el-col :span='4' >
         <el-input ></el-input>
      </el-col>
      <el-col :span='6' :push='5'>
        <span class="label_style">表宽</span><el-slider
        v-model="width" :min='1' :max ='maxwidth'
        :step="1"></el-slider>
        <span class="label_style">列宽</span><el-slider
        v-model="span" :min='1' :max ='maxspan'
        :step="1">
      </el-slider>
    </el-col>
  </el-row>
</div>
</div>
</div>

</div>
</template>

<script>
  import editor from '@/components/wangeditor'
  
  export default {
    name: 'radio',
    components: {
      editor
    },
    props:{
        groupId:0,
        detailindex:0
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        editBtn:false,
        editorShow:false,
        required:false,
        itemId:1,
        label:'未定义',

        checkItem:true,
        formItem: [
        { 
          detailItemId:0,
          radioValue: '选项1',
          check: false,
          allowContent:false,
          description:''
        },
        { 
          detailItemId:0,
          radioValue: '选项2',
         
          check: false,
          allowContent:false,
          description:''
        },
        
        ],
        maxwidth:16,
        maxspan:24,
        width:6,
        span:10
      }

    },
    methods: {
      //编辑item按钮变化
      itemEditBtnShow(){

      },
      //获取editor的值
      getContent(val){
        this.label = val;
      },
      //默认选项按钮事件
      checkFlag(item,index){
        let _this = this;

        for(let i = 0 ; i < _this.formItem.length ; i++){
          if(i != index){
            _this.formItem[i].check = false;
          }

        }
        

        // if(item.check == false){
        //   this.checkItem = this.formItem[index].check;
        // }else{
        //   this.checkItem = '';
        // }
        
        this.formItem[index].check = !item.check;
      },
      //是否可以添加说明内容
      toggleFlag(item,index){
        this.formItem[index].allowContent = !item.allowContent;
      },

      //添加单选框选项方法
      additem(item,index){
        let _this = this;
        let initradio = {
          detailItemId:0,
          radioValue: '',
          check: false,
          allowContent:false,
        
          description:''
        };
        this.formItem.splice(index+1,0,initradio);

        this.formItem[index+1].radioValue = '选项'+ this.formItem.length;

      },

      //删除单选框选项方法
      deletedetailitem(item,index){
        let _this = this;
        let length = this.formItem.length;
        if(length < 3 ) {


          this.$notify.error({
            title: '错误',
            message: '单选框至少两个选项'
          })

          return;
        }
        this.formItem.splice(index,1);

      },
      deleteitem(){
        this.$emit('deletedetailitem',this.groupId,this.itemId);
      },
      //排序方法
      swapItems(arr, index1, index2){
       arr[index1] = arr.splice(index2, 1, arr[index1])[0];
       return arr;
     },
     sortup(item,index){
      let length = this.formItem;
      if( index - 1 < 0 ){
        this.$notify.error({
          title: '错误',
          message: '已经是最顶层了'
        })
        return ;
      }
      this.swapItems(this.formItem,index,index - 1);
    },
    sortdown(item,index){
      let length = this.formItem.length;
      if(index == length - 1){
        this.$notify.error({
          title: '错误',
          message: '已经是最底层了'
        })
        return ;
      }
      this.swapItems(this.formItem,index,index + 1);
    },


      //重新给detailItemId赋值
      refrehItemId(){
        this.formItem.map((item,index)=>{
          item.detailItemId = this.detailItemId + "||" + index;
        })
      }
    },
    mounted() {
      this.itemId = this.$randomIdMethod;
      this.refrehItemId();
    },
    watch:{
      formItem:{
       handler(newName, oldName) {

            this.refrehItemId();
            this.formItem.map((item,index)=>{
              // this.formItem.map((detailitem,detailindex)=>{
              //   if(item.radioValue == detailitem.radioValue){
              //       if(index != detailindex){
              //           detailitem.focus = true
              //       }
              //   }

              // })

              if(item.radioValue == "" || item.radioValue == undefined){

                    this.$notify({
                    title: '提示',
                    message: '第'+(index+1)+'选项框值为空，将不能保存',
                    type: 'warning'
                  });
              }
              // if(item.check ===  true ){this.checkItem=item.radioValue} 
            });

            let groupId = this.groupId;
            let detailindex = this.detailindex;
            this.$emit('getItemVal',newName,groupId,detailindex);
      },
      deep: true,
               
      },
      label(val){
        if(val == "<p><br></p>"){
          this.label = '未定义';
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.itemName{
  text-align:left;
}
.itemName:first-child{
  margin-top:5px;
}

.itemName /deep/ .el-radio{
  white-space:normal;
  word-wrap:break-all; 
  /*overflow:hidden;*/
  
}
</style>
