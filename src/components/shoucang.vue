<template>
  <div class="favorite-wrap">
    <header class="favorite-header">
      <div class="favorite-left">
        <span @click="back">&#xe601;</span>
      </div>
      <h3 class="favorite-title">收藏夹</h3>
      <div class="favorite-right">
        <span>&#xe638;</span>
      </div>
    </header>
    <div class="favorite-contain">
      <div class="favorite-tab">
        <p class="border-bottom">商品收藏<i>(0)</i></p>
        <p>店铺收藏<i>(0)</i></p>
      </div>
      <div class="favorite-cont">
        <p>暂无收藏</p>
        <p>随便逛逛</p>
      </div>
      <div class="favorite-main">
        <dl class="list">
          <dt><img src="../img/shoucang1.png"/></dt>
          <dd>
            <p><span>商品名称</span><em @click="del(0)">X</em></p>
            <p><b>￥677</b><i>杭州</i></p>
          </dd>
        </dl>
        <dl class="list">
          <dt><img src="../img/shoucang1.png"/></dt>
          <dd>
            <p><span>商品名称</span><em @click="del(1)">X</em></p>
            <p><b>￥677</b><i>杭州</i></p>
          </dd>
        </dl>
        <dl class="list">
          <dt><img src="../img/shoucang1.png"/></dt>
          <dd>
            <p><span>商品名称</span><em @click="del(2)">X</em></p>
            <p><b>￥677</b><i>杭州</i></p>
          </dd>
        </dl>
      </div>
    </div>
    <footer class="favorite-footer">
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
      
      }
    },
    methods:{
      del:function(ind){
       let mark=_$("<div class='favorite-mark'></div>")
       let box=_$("<div class='box'><h3>是否删除该收藏</h3></div>")
       let box_p=_$('<p></p>')
       let box_p_span=_$('<span class="no">取消</span><span class="yes">确定</span>')
       mark.css('width','100%')
       mark.css('height','100%')
       mark.css('position','absolute')
       mark.css('left','0')
       mark.css('top','0')
       mark.css('background','rgba(0,0,0,0.7)')
       box.css('width','40%')
       box.css('height','.4rem')
       box.css('padding','.1rem')
       box.css('margin',"40% auto")
       box.css('text-align','center')
       box.css('color','#000')
       box.css('background','#fff')
       box.css('border-radius','.05rem')
       box_p.css('line-height','.3rem')
       box_p.css('padding-right','.1rem')
       _$(".no").css("padding-right","0.1rem")
       box_p.append(box_p_span)
       box.append(box_p)
       mark.append(box)
       _$("#app").append(mark)
       let that=this
       _$(".yes").on("click",function(){
          mark.remove()
         _$('.list').eq(ind).remove()
       })
      },
      back:function(){
        window.history.go(-1)
      }
    }
  }
</script>

<style scoped>
  @import '../assets/reset.css';
  @import '../assets/favorite.css';
</style>


