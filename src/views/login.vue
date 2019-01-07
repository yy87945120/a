<template>

  	<div class="login" style='position:absolute;height:100%;width:100%;background:rgb(0,120,200)'>
<el-row style='margin-top:70px'>
    <h1 style='font-weight: bold;margin-bottom:10px;color:white'> 临床科研数据采集系统（EDC）
 </h1>
</el-row>
<el-row style='margin-top:15px'>
    <img :src='imgUrl' width='250px'/>
</el-row>

<el-row>
    <div class="login_form">


        <el-form ref="form"  label-width="0px">
          
            <i  class=""> </i>
          
           <el-form-item label="" class='login_form_item'>
          
              <el-input v-model="username" placeholder="请输入账号" @focus="active('user')" :prefix-icon="activeItem.user?'icon-yonghu iconfont iconfont_active':'icon-yonghu iconfont iconfont_normal'"></el-input>
            
          </el-form-item>
          
   
           <el-form-item label="" class='login_form_item'>
            <el-input v-model="password" placeholder="请输入密码" @focus="active('key')"  :prefix-icon="activeItem.key?'iconfont icon-tubiao202 iconfont_active':'iconfont icon-tubiao202 iconfont_normal'"></el-input>
            
          </el-form-item style='line-height:0px'>
          <el-form-item label="" class='login_form_item'>
          <el-row :gutter='5'>
                <el-col :span='14'> <el-input v-model="code" @focus="active('code')" placeholder="请输入验证码" class="identifyinput"  :prefix-icon="activeItem.code?'iconfont icon-yanzhengma1  iconfont_active':'iconfont icon-yanzhengma1  iconfont_normal'"></el-input></el-col>
                <el-col :span='8'> <validate :identifyCode="identifyCode"></validate></el-col>
               
          </el-row>
         <el-row style='line-height:0px'>
               <el-col :span='24' style='text-align:right'> <el-button @click="refreshCode" type='text' style='color:rgba(232,232,232,.9);padding-top:0px' class="textbtn">看不清，换一张</el-button></el-col>
         </el-row>
            
            <el-row >
               <el-button type="primary" class='loginbtn' @click="onSubmit">登陆</el-button>
         </el-row>
                    
          </el-form-item>

          
        </el-form>
        

      </div>
</el-row>
  		
	</div>
</template>

<script>
import validate from '@/components/validate'

export default {
  name: 'login',
  components:{
    validate

  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username:'',
      password:'',
      verifycode:'',
            identifyCodes: '1234567890',
                  identifyCode: '',
                     imgUrl:require("@/assets/logo.png"),
	  activeItem:{
        user:false,
        key:false,
        code:false
    },
    code:''
  }

  },
  methods:{
    active(target){
        let _this = this;

        for(let i in _this.activeItem){
              _this.activeItem[i] = false;
        }
        
        this.activeItem[target] = true;
        sessionStorage.setItem('user');
    },
    onSubmit(){
        let user = {
          user:this.username,
          password:this.password,
          code:this.code
        }
        let fillter = JSON.stringify(user);
        sessionStorage.setItem('user',fillter);
        this.$router.push({ name: 'portal', params: { userId: 'wise' }});
    } ,  
            randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    }, 
    refreshCode() {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    makeCode(o, l) {
        let _this = this;
      for (let i = 0; i < l; i++) {
        _this.identifyCode += _this.identifyCodes[
          _this.randomNum(0, _this.identifyCodes.length)
        ]
      }
      console.log(_this.identifyCode)
    }

    
  },
  mounted(){
      this.identifyCode = '';
    this.makeCode(this.identifyCodes, 4);
    console.log(2)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginbtn{
    width:100%;
    background:#FF8E00;
    
}

.loginbtn:hover{

    background:#FFAA40;
    color:rgba(255,255,255,1)
}
.textbtn:hover{
    color:rgba(255,255,255,1) !important
}

.logo{
  display: inline-block;
  margin: 80px auto;

  width: 400px;
  border-radius: 10px;
  background: white;
  
}
.login_form_item /deep/ .iconfont_normal{
  font-size: 22px;
}
.login_form_item /deep/ .iconfont_active{
   font-size: 22px;
   color: rgb(0,120,200);
}
.login_form{
  display:inline-block;
	margin: 15px 0px;
 
	width: 280px;
	border-radius: 10px;


	padding: 20px 30px 30px 20px;
}
.login_form el-form-item{
  color:white
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
