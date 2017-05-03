<template>
  <div class="wrap">
    <header class="supply-header">
      <div class="supply-left">
        <span @click="backInd">&#xe601;</span>
      </div>
      <h3 class="supply-title"><span>供应商入驻</span></h3>
      <div class="supply-right">
        <span @click="backInd">&#xe638;</span>
      </div>
    </header>
    <div class="supply-content">
      <div class="supply-banner">
        <img src="../img/setBanner.png" alt="">
      </div>
      <div class="supply-nav">
        <img src="../img/Set_nav_02.png" alt="">
      </div>
      <div class="supply-sell">
        <img src="../img/enter_02.png" alt="">
        <p></p>
      </div>
      <div class="supply-foot">
        <img src="../img/ruzhu_02.png" alt="">
      </div>
    </div>
    <footer class="supply-footer">
      <a href="#">首页</a>
      <p>Copyright ©2016-2028 丝集网  www.joinsilk.com版权所有</p>
    </footer>
  </div>
  
</template>

<script>
export default {
  methods:{
    backInd:function(){
      window.history.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/reset.css';
  @import '../assets/supply.css';
</style>
