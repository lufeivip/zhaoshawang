/**
 * Created by lufei01 on 2015/7/1 0001.
 */
$(function(){

    $(".pagination").pagination({
        items: 150,//总条目数
        itemsOnPage: 10,//每页显示条数
        onPageClick:function(pn, event){
            //点击翻页后的操作
            console.log("跳转到第",pn,"页")
        }
    });
})