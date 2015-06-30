/**
 * Created by lufei01 on 2015/6/26 0026.
 */
$(function(){
    /*classify*/
    //子菜单显示隐藏
    $("#classify .menu").on('mouseenter','.item',function(){
        console.log("over")
        var $item=$(this);
        $item.addClass('active');
    })
    $("#classify .menu").on('mouseleave','.item',function(){
        var $item=$(this);
        $item.removeClass('active');
    })
    //菜单开关触发
    $("#classify").on("click","h2.title",function(){
        var $classify=$("#classify");
        if($classify.hasClass("resident")){
            return;
        }
        $classify.toggleClass("fold");
    })
    /*tab切换
     * 给元素加【node-type=tag】
     * */
    $("[node-type=tab]").on('click','.tag',function(){
        var $tag=$(this),
            $tab =$tag.closest("[node-type=tab]"),
            $tab_hd=$tab.children("[node-type=tab-hd]"),
            $tab_bd=$tab.children("[node-type=tab-bd]"),
            $tags=$tab_hd.children('.tag'),
            $tab_item=$tab_bd.children('.tab-item'),
            _index=$tags.index($tag);
        $tab_item.eq(_index).show().siblings().hide();
        $tags.removeClass('active');
        $tag.addClass('active');
    })
    /*表格内tips*/
    $("table").on("mouseover",'.tb-tips',function(e){
        var $tipsWrap=$(this).find(".tips-wrap");
        $(this).addClass("active");
        $tipsWrap.css({'margin-left':$tipsWrap.width()/-2})
    })
    $("table").on("mouseout",'.tb-tips',function(){
        $(this).removeClass("active");
    })
})
