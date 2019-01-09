<template>
  <div class="newproject">
<!-- 
    <transition name='fade' mode='out-in'>
        <router-view class="child-view" ></router-view>
      </transition> -->

    <el-form>
      <el-row class='newproject_form_item'>
        <el-col :span='6' class="newproject_label">标题</el-col>
        <el-col :span='12'><el-input placeholder="项目标题（200汉字以内）"></el-input></el-col>
      </el-row>

      <el-row class='newproject_form_item'>
        <el-col :span='6' class="newproject_label">研究疾病</el-col>
        <el-col :span='12'><el-input placeholder="项目所研究的疾病（200汉字以内）"></el-input></el-col>
      </el-row>

      <el-row class='newproject_form_item'>
        <el-col :span='6' class="newproject_label">研究人群</el-col>
        <el-col :span='12'><el-input placeholder="研究结论将外推到的人群或入选、派出标准（200汉字以内）"></el-input></el-col>
      </el-row>

      <el-row class='newproject_form_item'>
        <el-col :span='6' class="newproject_label">暴露/干预</el-col>
        <el-col :span='12'><el-input placeholder="本研究关心的暴露因素或干预方法（200汉字以内）"></el-input></el-col>
      </el-row>
      <el-row class='newproject_form_item'>
        <el-col :span='6' class="newproject_label">对照</el-col>
        <el-col :span='12'><el-input placeholder="有无对照、对照的类型及具体产生方法（200汉字以内）"></el-input></el-col>
      </el-row>
      <el-row class='newproject_form_item'>
        <el-col :span='6' class="newproject_label">结局</el-col>
        <el-col :span='12'><el-input placeholder="研究关心的具体结局或研究的终点评价指标（200汉字以内）"></el-input></el-col>
      </el-row>
      <el-row class='newproject_form_item'>
        <el-col :span='6' class="newproject_label">预计最大病例数</el-col>
        <el-col :span='12'><el-input placeholder="请输入项目预计最大的病例数（200汉字以内）"></el-input></el-col>
      </el-row>

      <el-row class='newproject_form_item'>
        <el-col :span='6' class="newproject_label">研究类型</el-col>
        <el-col :span='18' style='text-align:left'>
          <!-- <el-checkbox-group v-model="checkboxGroup1">
            <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}
            </el-checkbox-button>
          </el-checkbox-group> -->
          <el-radio-group v-model="radio3" size='small'>
            <el-radio-button  label="随机对照研究"></el-radio-button>
            <el-radio-button label="类实验"></el-radio-button>
            <el-radio-button label="前瞻性队列研究"></el-radio-button>
            <el-radio-button label="回顾性队列研究"></el-radio-button>
            <el-radio-button label="病例对照研究"></el-radio-button>
            <el-radio-button label="横断面研究"></el-radio-button>
            <el-radio-button label="病例系列研究"></el-radio-button>
            <el-radio-button label="其他"></el-radio-button>
          </el-radio-group>

        </el-col>
      </el-row>

      <el-row class='newproject_form_item'>
        <el-col :span='6' class="newproject_label">项目类型</el-col>
        <el-col :span='12' style='text-align:left'>
            <el-radio-group v-model="radio9" size='small'>
            <el-radio-button  label="单中心项目"></el-radio-button>
            <el-radio-button label="多中心项目"></el-radio-button>
          </el-radio-group>
        </el-col>
      </el-row>

      <el-row class='newproject_form_item'>
        <el-col :span='6' class="newproject_label">研究注册号</el-col>
        <el-col :span='12'><el-input placeholder="该研究在WHO认证的临床研究注册中心获得的注册号（100汉字以内）"></el-input></el-col>
      </el-row>

      <el-row class='newproject_form_item'>
       <!--  <el-col :span='6' class="newproject_label"> </el-col> -->
        <el-col :span='4' :push='6' style='text-align:left'><el-button type='success' @click="saveProject">保存</el-button></el-col>
      </el-row>
    </el-form>
    <!-- <el-row>
      <el-col :span='20'>
        <h4 class='group_title'>字典组题目（眼压）</h4>
      </el-col>
      <el-col :span='4' style='text-align:right'>
        <i class="el-icon-star-off collect_icon" @click='collectGroup'></i>
      </el-col>
    </el-row> -->
    <!-- <radio></radio> -->

  </div>
</template>

<script>

  export default {
    name: 'newproject',
    components:{
      // radio
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        content:'2',
        form:[],
        radio3:'随机对照研究',
        radio9:'单中心项目'
      }
    },
    methods:{
     collectGroup(){
      console.log(this.groupId);
    },
    saveProject(){
      this.$router.push({name:'project',params: {userId: 1}})
    }
    
  },
  mounted(){


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.newproject_label{
  text-align: right;
  padding-right: 50px
}
.newproject_form_item{
  padding: 9px 0px;
  border-bottom: 1px solid rgb(239,239,239);
  line-height: 36px;

}
.newproject_form_item /deep/ .el-input__inner{
  height:30px;
}

</style>
