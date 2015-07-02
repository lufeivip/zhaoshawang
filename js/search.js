/**
 * Created by lufei01 on 2015/7/1 0001.
 */
$(function(){
    /*翻页*/
    $(".pagination").pagination({
        items: 150,//总条目数
        itemsOnPage: 10,//每页显示条数
        onPageClick:function(pn, event){
            //点击翻页后的操作
            console.log("跳转到第",pn,"页")
        }
    });
    /*搜索筛选*/
    $(".filter-panel").on("click",".list .v",function(){
        var $panel=$(this).closest(".filter-panel"),
            $result_wrap=$panel.find(".selected-c"),
            $list=$(this).closest(".list"),
            $k=$list.find(".k"),
            _v=$(this).text(),
            _k=$list.data("type"),
            tp="";
        console.log("k:",_k,"; v:",_v);
        $(this).addClass("active").siblings(".v").removeClass("active");
        if($result_wrap.find("[data-type="+_k+"]").size()){
            $result_wrap.find("[data-type="+_k+"]").find(".v").text(_v);
        }else{
            tp+='<dd data-type="'+_k+'">';
            tp+='<span class="k">'+$k.text()+'</span>';
            tp+='<span class="v">'+_v+'</span>';
            tp+='<a class="close" href="javasctipt:;">x</a>';
            tp+='</dd>';
            $result_wrap.append(tp);
        }
    })
    $(".filter-panel").on("click",".selected-c .close",function(){
        var $item=$(this).closest("dd"),
            $panel=$(this).closest(".filter-panel"),
            _k=$item.data("type");
        $item.remove();
        $panel.find(".factor dl[data-type="+_k+"] .v").removeClass("active");
    })
})