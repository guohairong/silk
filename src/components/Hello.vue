<template>
  <div id="hello" class="hello">
    <header class="hello-header">
        <a>
            <span><img src="../img/logo.png"/></span>
        </a>
       <router-link to="/sousuo"> <a>
            <input type="text" class="txt" placeholder="寻找商品店铺"/>
        </a></router-link>
        <router-link to="/home">
        <a class="iconfont">&#xe618;</a>
        </router-link>
    </header>
   <div class="swiper-container qinlu">
       <div class="swiper-wrapper">
           <div class="swiper-slide">
               <img src="http://m.joinsilk.com/File/download?id=846695803341766656&M=fixed&L=0&W=639&H=285"/>
           </div>
           <div class="swiper-slide">
               <img src="http://m.joinsilk.com/File/download?id=814768328127021056&M=fixed&L=0&W=639&H=285"/>
           </div>
           <div class="swiper-slide">
               <img src="http://m.joinsilk.com/File/download?id=841839748833083392&M=fixed&L=0&W=639&H=285"/>
           </div>
           <div class="swiper-slide">
               <img src="http://m.joinsilk.com/File/download?id=819808532109983744&M=fixed&L=0&W=639&H=285"/>
           </div>
           <div class="swiper-slide">
               <img src="http://m.joinsilk.com/File/download?id=819808496080912384&M=fixed&L=0&W=639&H=285"/>
           </div>
       </div>
       <div class="swiper-pagination"></div>
   </div>
    <div class="index-menu" id="index-menu">
        <dl class="menu-dl">
          <router-link to="/hstrip">
            <dt><img src="../img/toutiao.png" alt=""></dt>
            <dd>丝集头条</dd>
          </router-link>
        </dl>
        <dl class="menu-dl">
          <router-link to="/supply">
            <dt><img src="../img/ruzhu.png" alt=""></dt>
            <dd>商家入驻</dd>
          </router-link>
        </dl>
        
        <dl class="menu-dl">
          <router-link to="/shoucang">
            <dt><img src="../img/cai.png" alt=""></dt>
            <dd>商品收藏</dd>
          </router-link>  
        </dl>
        
         
        <dl class="menu-dl">
          <router-link to="/shoucang">
            <dt><img src="../img/shoucang.png" alt=""></dt>
            <dd>店铺收藏</dd>
             </router-link>
        </dl>
       
    </div>
    <div class="index-classify">
        <h2 class="classify-title"><i><img src="../img/biaoqian.png" alt=""></i><span>精选分类</span></h2>
        <div class="classify-info" id="classify-info" >

            <dl class="classify-info-dl" v-for="x in classify">
              <router-link :to="{path:'/xiangqing',query:{
              name:`${x.name}`
            }}">
               <dd>{{x.name}}</dd>
               <dt><img :src="`http://m.joinsilk.com//File/download?id=${x.resourceId}&M=fixed&L=0&W=55&H=55`"></dt>
               </router-link>
            </dl>
            
            <router-link to="/classify">
              <dl class="classify-info-dl else">
                  <dd>更多分类</dd>
                  <dt><img src="../img/classify.png" alt=""></dt>
              </dl>
            </router-link>
        </div>
    </div>
    <div class="index-bao">
        <div class="index-bao-left"><img src="../img/bulletin.png" alt=""></div>
        <div class="index-bao-right">
        <div class="swiper-container qqq" id="o-c" >
            <div class="swiper-wrapper">
                <div class="swiper-slide" style="height:0.4rem">丝集网招商通知</div>
                <div class="swiper-slide" style="height:0.4rem">丝集网服务介绍</div>
            </div>
        </div>
        </div>
    </div>
  <div class="index-classify index-shangpin">
      <h2 class="classify-title"><i><img src="../img/jingxuan.png" alt=""></i><span>精选推荐</span></h2>
      <div class="index-goods-list" id="index-goods-list">

          <dl class="index-goods-list-dl" v-for="i in list">
            <router-link :to='{path:"/shangpinxiangqingye",query:{id:`${i.goodsId}`}}'>
              <dt><img :src="`http://m.joinsilk.com//File/download?id=${i.picAddress}&M=fixed&L=0&W=178&H=178`" alt=""></dt>
              <dd>
                  <p class="index-shangpin-info">{{i.goodsName}}</p>
                  
                  <p class="index-shangpin-price">￥{{i.goodsPrice}}</p>
              </dd>
              </router-link>
          </dl>
      </div>
  </div>
    <footer class="index-footer">
        <p>首页</p>
        <p>Copyright ©2016-2028 丝集网  www.joinsilk.com版权所有</p>
    </footer>
  </div>
  
</template>

<script>
import _$ from 'jquery' 
export default {
  name: 'hello',
  data(){
    return{
      classify:{},
      list:{}
    }
  },
  mounted:function(){
    this.$http.get('../../static/classify.json').then(function(data){
      this.classify=JSON.parse(data.bodyText).data
      
    })
    this.$http.get("../../static/list.json").then(function(lis){
     this.list=JSON.parse(lis.bodyText).data.list
     console.log(JSON.parse(lis.bodyText).data.list)
    })
    new Swiper(".qinlu",{
        pagination: '.swiper-pagination',
        autoplay:2000
    }),
    new Swiper('#o-c',{
        direction : 'vertical',
        mousewheelControl: true,
        loop:true,
        autoplay:2000 
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/reset.css';
  @import '../assets/swiper.min.css';
  @import '../assets/shou.css';
</style>
