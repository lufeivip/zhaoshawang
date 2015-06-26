/**
 * Created by lufei01 on 2015/6/26 0026.
 */
$(function(){
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
})