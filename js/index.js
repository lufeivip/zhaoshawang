/**
 * Created by lufei01 on 2015/6/26 0026.
 */
var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    autoplay:3000,
    pagination: '.swiper-pagination'
})
$(function(){
    $(".swiper-container").on("click",".flip",function(){
        var swiper=mySwiper,
            isPrevBtn=$(this).hasClass("prev");
        if(isPrevBtn){
            swiper.slidePrev();
        }else{
            swiper.slideNext();
        }
    })

})
