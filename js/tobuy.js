/**
 * Created by lufei01 on 2015/7/3 0003.
 */
$(function() {
    /*��ҳ*/
    $(".pagination").pagination({
        items: 150,//����Ŀ��
        itemsOnPage: 10,//ÿҳ��ʾ����
        onPageClick: function (pn, event) {
            //�����ҳ��Ĳ���
            console.log("��ת����", pn, "ҳ")
        }
    });
})