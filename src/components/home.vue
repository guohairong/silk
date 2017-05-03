<template>
  <div class="home_wrap" id="hello">
    <div class="home_header">
        <div class="register_header_l"><i class="icon iconfont">&#xe601;</i></div>
        <h2 class="register_header_tlt">登录</h2>
        <div class="register_header_r"><a href="#"><i class="icon iconfont">&#xe638;</i></a></div>
    </div>
    <div class="home_mai">
        <div class="Use_mai">
            <div class="home_mai_cont register_div">
                <div class="Use_mai_err display">
                    <i><img src="../assets/img/errshi.png" alt=""/></i>
                    <p class="prompt">手机号码格式错误</p>
                </div>
                <div class="Use_mai_cher">
                    <!--账号-->
                    <div class="Use_mai_phone">
                        <label for="">手机号</label>
                        <input type="text" placeholder="请输入手机号码" class="Use_phone_txt" maxlength="11" v-model="userphone" @blur="phonefn"/>
                    </div>
                    <div class="Use_mai_line"></div>
                    <!--密码-->
                    <div class="Use_mai_code">
                        <label for="">验证码</label>
                        <input type="text" placeholder="请输入验证码" class="Use_code_pwd" maxlength="4" v-model="userpwd"/>
                        <input class="Use_code_btn" id="qu_ma" value="获取短信验证码" type="button" style=" -webkit-tap-highlight-color: rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;" @click="bunfn(1000,9999)" />
                    </div>
                </div>
            </div>
            <div class="Use_mai_footer">
                <button>登录</button>
            </div>
            <div class="Use_mai_free">
                <router-link to="/zhuce">免费注册</router-link>
            </div>
        </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'home',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import "../assets/reset.css";
</style>
<style lang="scss" scoped>
  @import "../assets/scss/index.scss";
</style>
