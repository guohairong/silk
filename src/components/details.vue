<template>
  <div class="details_wrap" id="details">
    <div class="common_header">
        <a  href="#" class="register_header_l"><i class="icon iconfont">&#xe601;</i></a>
        <h2 class="register_header_tlt">丝集热点</h2>
        <a href="home.html" class="register_header_r"><i class="icon iconfont">&#xe638;</i></a>
    </div>
    <div class="details_conbox">
      <div class="details_conlist">
        <ul class="details_listul">
            <li v-for="x in data1" class="common_list details_list">
              <router-link :to="{path:'/dlinedetails',query:{id:`${x.id}`}}">
                <div class="tabcon_title">
                    <h2 class="tabtit_left">{{x.title}}</h2>
                </div>
                <div class="tabcon_pon">{{x.summary}}</div>
              </router-link>
            </li>
            <li v-for="x in data2" class="common_list details_list">
              <router-link :to="{path:'/dlinedetails',query:{id:`${x.id}`}}">
                <div class="tabcon_title">
                    <h2 class="tabtit_left">{{x.title}}</h2>
                </div>
                <div class="tabcon_pon">{{x.summary}}</div>
              </router-link>
            </li>
            <li v-for="x in data3" class="common_list details_list">
              <router-link :to="{path:'/dlinedetails',query:{id:`${x.id}`}}">
                <div class="tabcon_title">
                    <h2 class="tabtit_left">{{x.title}}</h2>
                </div>
                <div class="tabcon_pon">{{x.summary}}</div>
              </router-link>
            </li>

        </ul>
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
  name: 'details',
  data(){
    return{
      data:{},
      data1:{},
      data2:{},
      data3:{},
      info:true
    }
  },
  mounted:function(){

    this.$http.get("../../static/route.json").then(function(data){
        this.data=eval("(" + data.bodyText +")").data
        
        //console.log(eval("(" + data.bodyText +")").data)
        
    })
    this.$http.get("../../static/redian.json").then(function(data){
        this.data1=eval("(" + data.bodyText +")").data.list
        //console.log(this.data1)
        
    })
    this.$http.get("../../static/wenhua.json").then(function(data){
        this.data2=eval("(" + data.bodyText +")").data.list
        
    })
    this.$http.get("../../static/detail.json").then(function(data){
        this.data3=eval("(" + data.bodyText +")").data.list
    })
    
     
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import "../assets/reset.css";
</style>
<style>
  @import "../assets/scss/common.css";
</style>
<style scoped>
  @import "../assets/scss/details.css";
</style>

