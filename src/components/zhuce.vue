<template>
    <div class="register_wrap" id="zhuce">
    <div class="register_header">
      <a  href="#" class="register_header_l"><i class="icon iconfont">&#xe601;</i></a>
      <h2 class="register_header_tlt">注册</h2>
      <a href="#" class="register_header_r"><router-link to="/home" style="color:#fff">登陆</router-link></a>
    </div>
    <div class="register_mai">
      <div class="Use_mai">
        <div class="register_mai_cont register_div">
          <div class="Use_mai_err display">
            <i><img src="../assets/img/errshi.png" alt=""/></i>
            <p>手机号码格式错误</p>
          </div>
          <div class="Use_mai_cher">
            <!--账号-->
            <div class="Use_mai_phone">
              <label for="">手机号</label><input type="text" placeholder="请输入手机号码" class="Use_phone_txt" maxlength="11" v-model="userphone" @blur="phonefn"/>
            </div>
            <div class="Use_mai_line"></div>
            <!--密码-->
            <div class="Use_mai_code">
              <label for="">验证码</label>
              <input type="text" placeholder="请输入验证码" class="Use_code_pwd" maxlength="4" v-model="userpwd"/>
              <input class="Use_code_btn" id="qu_ma" value="获取短信验证码" type="button"  @click="bunfn(1000,9999)"/>
            </div>
          </div>
        </div>
        <!--协议-->
        <div class="Use_mai_xie">
        	<router-link to="/agreement" class="a">*注册即表示您同意《丝集用户协议》</router-link>
        </div>
        <!--注册按钮-->
        <div class="Use_mai_footer">
          <button>注册</button>
        </div>
      </div>



    </div>
  </div>

</template>

<script>
  export default {
  name: 'zhuce',
  data(){
    return {
       userphone:"",
       userpwd:""
    }
  },
  methods:{
      phonefn(){
          var maierr = document.querySelector(".display");
          var prompt = document.querySelector(".prompt");

          var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则

          var phoneNum = '15507621999';//手机号码

          var flag = reg.test(this.userphone); //true
          if(!flag){
              maierr.style.display = "block";
          }else{
              maierr.style.display = "none";

          }
      },
      bunfn(min,max){
          this.userpwd=Math.floor(Math.random()*(max-min+1))+min
      }
  }

}
</script>
<style>
  @import "../assets/reset.css";
</style>
<style scoped>
  @import "../assets/scss/index.css";
</style>

