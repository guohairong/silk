<template>
  <div class="hstrip_wrap" id="app">
    <div class="common_header">
      <a  href="#" class="register_header_l" @click="history"><i class="icon iconfont">&#xe601;</i></a>
      <h2 class="register_header_tlt">丝集头条</h2>
      <a href="#" class="register_header_r"><i class="icon iconfont">&#xe638;</i></a>
    </div>
    <!--丝集头条swiper轮播-->
    <div class="hstript_banner">
      <swiper :dataList="pica"></swiper>
     <!--  <div class="swiper-container hstript_conta">
       <ul class="swiper-wrapper">
         <li class="swiper-slide">
           <div class="conta_box">
             <a href="#"><img src="../assets/img/lb1.png" alt="" class="priceUI"/></a>
             <div class="banner_title">这是一个小小的</div>
           </div>
     
         </li>
         <li class="swiper-slide">
           <div class="conta_box">
             <a href="#"><img src="../assets/img/lb2.png" alt="" class="priceUI"/></a>
             <div class="banner_title">可换个人法国人</div>
           </div>
         </li>
         <li class="swiper-slide">
           <div class="conta_box">
             <a href="#"><img src="../assets/img/lb3.png" alt="" class="priceUI"/></a>
             <div class="banner_title">对方个人天赋和</div>
           </div>
     
         </li>
       </ul>
       如果需要分页器
       <div class="swiper-pagination swiper_bullets" style="bottom:0rem;right:-1.2rem"></div>
     </div> -->
    </div>
    <!--丝集导航-->
    <div  class="hstript_tab">
      <nav class="hstript_nav">
          <div v-for="(item,index) in data" @click="navbun(index)" class="nav_btn">{{ item.name }}</div>
      </nav>

    </div>
    <div class="hstript_content">
      <!--更多 -->
      <div class="hstript_gengduo">
        <router-link to="/details" class="gengduo_a">更多>></router-link>
      </div>
      <div class="hstrip_tiao">
        <div class="hstrip_most">
          <div class="hstrip_tabcon">
            <div v-for="x in data1" class="hstrip_list common-list">
                <router-link :to="{path:'/dlinedetails',query:{
              id:`${x.id}`
            }}">
                  <div class="tabcon_title">
                      <h2 class="tabtit_left">{{x.title}}</h2>
                      <span class="tabtit_right">2017-04-16</span>
                  </div>
                  <div class="tabcon_pon">{{x.summary}}</div>
                </router-link>
            </div>
          </div>
          <div class="hstrip_tabcon">
            <div v-for="x in data2" class="hstrip_list common-list">
                <router-link :to="{path:'/dlinedetails',query:{
              id:`${x.id}`
            }}">
                  <div class="tabcon_title">
                      <h2 class="tabtit_left">{{x.title}}</h2>
                      <span class="tabtit_right">2017-04-15</span>
                  </div>
                  <div class="tabcon_pon">{{x.summary}}</div>
                </router-link>   
                
            </div>
          </div>
          <div class="hstrip_tabcon">
            <div v-for="x in data3" class="hstrip_list common-lists">
                <router-link :to="{path:'/dlinedetails',query:{
              id:`${x.id}`
            }}">
                  <div class="tabcon_title">
                      <h2 class="tabtit_left">{{x.title}}</h2>
                      <span class="tabtit_right">2017-04-13</span>
                  </div>
                  <div class="tabcon_pon">{{x.summary}}</div>
                </router-link>
            </div>
          </div>
        </div>
        
      </div>
    </div>

    <div>
      <div class="common_footer">
        <div class="common_nav">
          <router-link to="/hstrip" >
             <h5>首页</h5>     
          </router-link>
          <div class="common_navp">Copyright ©2016-2028 丝集网  www.joinsilk.com版权所有</div>
        </div>
      </div>
      
    </div>


    
                  
                
                  
                


  </div>
</template>

<script>
import _$ from 'jquery'
import swiper from "./swiper"
export default {
  name: 'app',
  data(){
    return{
      pica:{},   //swiper轮播数据
      data:{},   //nav数据
      data1:{},  //nav下热点数据
      data2:{},  //nav下行业动态数据
      data3:{},  //nav下丝绸文化数据
      info:true
    }
  },
  components:{
    swiper
  },

  mounted:function(){
    setTimeout(function(){
      _$('.nav_btn').eq(0).addClass('active');
        /*document.querySelector(".hstript_nav").querySelectorAll(".nav_btn")[0].setAttribute("class","active");*/
        
    })

    //请求swiper轮播数据
    this.$http.get("../../static/picture.json").then((data)=>{
        this.pica=eval("(" + data.bodyText +")").data.list
        //console.log(this.pica)
    })
      
    
    //请求nav数据
    this.$http.get("../../static/route.json").then(function(data){
        this.data=eval("(" + data.bodyText +")").data
        
    })
    //请求nav下热点数据
    this.$http.get("../../static/redian.json").then(function(data){
        this.data1=eval("(" + data.bodyText +")").data.list
        //console.log(this.data1)
        
    })

    //请求nav下行业动态数据
    this.$http.get("../../static/wenhua.json").then(function(data){
        this.data2=eval("(" + data.bodyText +")").data.list
        
    })
    //请求nav下丝绸文化数据
    this.$http.get("../../static/detail.json").then(function(data){
        this.data3=eval("(" + data.bodyText +")").data.list
    })

    
    /*new Swiper ('.swiper-container', {
      //direction: 'vertical',
      loop: true,
      autoplay:2000,
      // 如果需要分页器
      pagination: '.swiper-pagination'

      // 如果需要前进后退按钮
       // nextButton: '.swiper-button-next',
       // prevButton: '.swiper-button-prev',

      // 如果需要滚动条
      //scrollbar: '.swiper-scrollbar'
    })
    */


  },
  methods:{
    navbun:function(index){ 

      let most = document.querySelector(".hstrip_most");
      let tabcon = most.querySelectorAll(".hstrip_tabcon");

      let navbox = document.querySelector(".hstript_nav");
      let navbtn = navbox.querySelectorAll(".nav_btn");

      for(let i = 0;i<tabcon.length;i++){
        tabcon[i].style.display = "none";
        navbtn[i].classList.remove("active");
      }
      tabcon[index].style.display = "block"; 
      navbtn[index].classList.add("active");
    },
    history:function(){
        window.history.go(-1)
    }
  }

}
</script>

<style scoped>
  @import "../assets/swiper/css/swiper.css";
</style>
<style scoped>
  @import "../assets/scss/index.css";
</style>
<style>
  @import "../assets/scss/hstrip.css";
</style>
