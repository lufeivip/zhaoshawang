/**
 * Created by lufei01 on 2015/6/26 0026.
 */
var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    autoplay:3000,
    pagination: '.swiper-pagination'
})
$(function(){
    /*classify*/
    $(".classify .menu").on('mouseenter','.item',function(){
        console.log("over")
        var $item=$(this);
        $item.addClass('active');
    })
    $(".classify .menu").on('mouseleave','.item',function(){
        var $item=$(this);
        $item.removeClass('active');
    })

})
