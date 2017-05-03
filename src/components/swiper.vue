<template>
    <div class="swiper-container hstript_conta">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="v in dataList">
                <div class="conta_box">
                <router-link :to="{path:'/dlinedetails',query:{id:`${v.id}`
              
            }}" class="a"><img :src="'http://m.joinsilk.com/File/download?id='+v.resourceId+'&M=fixed&L=0&W=750&H=334'" alt="sijibanner"/></router-link>
                    
                    <div class="banner_title">{{v.title}}</div>
                </div>
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination swiper_bullets" style="bottom:0rem;right:-1.2rem"></div>
    </div> 


    <!--  -->
                  
                
    
</template>
<script>
export default{
    props: ['dataList'],
	data(){
        return{
           
        }
    },
    mounted: function() {
       /* console.log(this.dataList)
        setTimeout(function(){
            new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop:true,
                autoplay:1000
            })
        },200)*/
        setTimeout(function(){
            new Swiper ('.swiper-container', {
              //direction: 'vertical',
              loop: true,
              autoplay:2000,
              // 如果需要分页器
              pagination: '.swiper-pagination'

              // 如果需要前进后退按钮
              /* nextButton: '.swiper-button-next',
               prevButton: '.swiper-button-prev',*/

              // 如果需要滚动条
              //scrollbar: '.swiper-scrollbar'
            })
        },20)
    }
}
</script>
