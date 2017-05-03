<template>
  <div id="app">
   <header class="classify-header">
       <router-link to="/"><i  class="iconfont classify-back">&#xe601;</i></router-link>
      <h3>更多分类</h3>
    </header>
    <section class="classify-cont">
       <ul class="classify-uls" id="classify-uls">
        <li v-for="(item,index) in data" @click="as(index)">{{item.name}}</li>
      </ul>
      <div class="classify-ols" id="ols">
        <ol v-for="(item,index) in data" class="classify-ol" :model="index">
          <li v-for="items in item.con">{{items.name}}</li>   
        </ol>
      </div>
    </section>
    <footer class="classify-footer">
      <span>确定</span>
    </footer>
  </div>
</template>
<script type="text/javascript">
  export default{
    name:"app",
    data(){
      return{
        data:{}
      }
    },
    mounted:function(){
      this.$http.get("../../static/data.json").then(function(date){
        this.data=JSON.parse(date.bodyText);
      })
    },
    methods:{
      as:function(val){
        this.index = val;
        var i=0,x=0;
        var uls = document.querySelector("#classify-uls");
        var lis = uls.querySelectorAll("li");
        var ols = document.querySelectorAll(".classify-ol");
        for(i=0;i<lis.length;i++){
          lis[i].className="";        
        }
        for(x=0;x<ols.length;x++){
          ols[x].style.display="none"
        }

        if(!lis[val].classList.contains("on")){
          lis[val].classList.add("on")
          ols[this.index].style.display="block";
        }else{
          lis[val].classList.remove("on");      
        }
      }
    }
  }
</script>
<style>
   @import "../assets/base.css"; 
</style>
<style>
  @import "../assets/classify.css"; 
</style>