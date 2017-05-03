<template>
<!-- 列表详情页 -->
  <div class="dlinedetails_wrap" id="dlinedetails">
      <div class="common_header">
        <a  href="#" class="register_header_l"><i class="icon iconfont">&#xe601;</i></a>
        <h2 class="register_header_tlt">丝集头条</h2>
        <a href="home.html" class="register_header_r"><i class="icon iconfont">&#xe638;</i></a>
      </div>
      <div class="dls_content">
        <div class="dls_cont">
            <h3>
              {{tit}}
            </h3>
            <div class="dls_contst">
              <span>2017-04-15 14:06:38</span>
              <span class="dls_contst_ly">来源：<i>丝集网</i></span>
            </div>
            <div class="dls_content_p">
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
export default {
  name: 'dlinedetails',
  data(){
    return{
      newid:"",
      data1:{},
      tit:"",
      newtitle:""
    }
  },

  mounted:function(){
    this.newid = this.$route.query.id;
    this.nwetitle=this.$route.query.title;
    console.log(this.nwetitle)
    this.$http.get("../../static/redian.json").then(function(data){
        this.data1=eval("(" + data.bodyText +")").data.list
        for(let x in this.data1){
          if(this.data1[x].id==this.newid){
            this.tit=this.data1[x].title      
            document.querySelector(".dls_content_p").innerHTML=this.data1[x].detail
          } 
           
        }       
    })

    this.$http.get("../../static/wenhua.json").then(function(data){
        this.data2=eval("(" + data.bodyText +")").data.list     
        for(let x in this.data1){
          if(this.data2[x].id==this.newid){
            this.tit=this.data2[x].title
            document.querySelector(".dls_content_p").innerHTML=this.data2[x].detail
          } 
          
        }        
    })
    
    this.$http.get("../../static/detail.json").then(function(data){
        this.data3=eval("(" + data.bodyText +")").data.list
        for(let x in this.data1){
          if(this.data3[x].id==this.newid){
            this.tit=this.data3[x].title
            document.querySelector(".dls_content_p").innerHTML=this.data3[x].detail

          }    
          }
    })


     this.$http.get("../../static/picture.json").then(function(data){
        this.pic1=eval("(" + data.bodyText +")").data.list     
        for(let x in this.pic1){
          if(this.pic1[x].id==this.newid){
            this.tit=this.pic1[x].title
            document.querySelector(".dls_content_p").innerHTML=this.pic1[x].detail
          }else{
            this.tit=this.pic1[0].title
            document.querySelector(".dls_content_p").innerHTML=this.pic1[x].detail
          }     
          
        }        
    })

    
  },
  
}







</script>


<style scoped>
  @import "../assets/scss/common.css";
</style>
<style>
  @import "../assets/scss/dlinedetails.css";
</style>
