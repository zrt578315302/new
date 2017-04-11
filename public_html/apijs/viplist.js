/**
 *
 * @authors Your Name (you@example.org)
 * @date    2016-08-12 16:58:57
 * @version $Id$
 */

// 存储vip用户的信息
var vipList;

$(function () {

    // 搜索的关键字
    var searchKeyword = "";
    // 搜索的类型
    var searchType = 1;
    // 默认搜索情况

    var keyword = getQueryString('keyword')
    getVipList(1, 1, keyword);
    // 点击搜索按钮触发事件
    $(".rescha a").click(function () {
        searchKeyword = $(".inputli input").val();
        getVipList(searchType, 1, searchKeyword);
        return false;
    });

    // 选项卡搜索触发事件
    $(".tabdiv li").click(function () {
        $(".tabdiv li").removeClass("active");
        $(this).addClass("active");
        switch ($(this).html()) {
            case '所有':
                getVipList(1, 1, searchKeyword);
                searchType = 1;
                break;
            case '未开通':
                getVipList(4, 1, searchKeyword);
                searchType = 4;
                break;
            case '未激活':
                getVipList(3, 1, searchKeyword);
                searchType = 3;
                break;
            case '已激活':
                searchType = 2;
                getVipList(2, 1, searchKeyword);
                break;
            case '已兑购':
                searchType = 5;
                getVipList(5, 1, searchKeyword);
                break;
        }
    });


//  1：所有2：已激活 3：未激活 4：未同意 5：已冻结
    function getVipList(type, page, keyword) {
        var shop_code = getCookie("shop_code");
        var user_id = getCookie("user_id");
        var token = getCookie('token');
        var type = type;
        var page = page;
        var keyword = keyword;

//      var shop_code = "33330013603092536";
//      var user_id = 4;
//      var token = "N1OMRhrPjdqm_Meyg7cdZYoiAxeoM5nbAY8i358a4ZsSYer56dF2m2pkYWbjB7YJK_u0YgMlNeM0-PViRzrrpA";
//      var type = type;
//      var page = page;
//      var keyword = keyword;
        $.ajax({
            type: "post",
            url: ApiUrl + "user/shop_user_list",
            data: {
                'shop_code': shop_code,
                'user_id': user_id,
                'token': token,
                "type": type,
                "page": page,
                "keyword": keyword
            },
            dataType: "json",
            success: function (data) {
                console.log(data);
                if (data.status.succeed == "1") {
                    vipList = data.data;
                    var r = template.render("viplist-tmpl", data);
                    console.log(data.data);
                    $("#viplist").html(r);
                } else {
                    $("#viplist").html('暂无数据');
                }
            }
        });
    }

   /* $(".passvip").click(function () {
        alert("点击开通");
        var shop_code = getCookie("shop_code");
        var user_id = getCookie("user_id");
        var token = getCookie('token');
        $.ajax({
            type: "post",
            url: ApiUrl + "user/agree_user",
            data: {
                'shop_code': shop_code,
                'user_id': user_id,
                'token': token,
                'user_code': user_code
            },
            dataType: "json",
            success: function (data) {
                console.log(44444444444444);
                console.log(data);
                if (data.status.succeed == "1") {
                    alert("开通成功！您的报单币还剩余：" + data.shop_money);
                } else {
                    alert("开通失败！")
                }
            }
        });
    })*/

})
function passvip(item) {
    var shop_code = getCookie("shop_code");
    var user_id = getCookie("user_id");
    var token = getCookie('token');
    $.ajax({
        type: "post",
        url: ApiUrl + "user/agree_user",
        data: {
            'shop_code': shop_code,
            'user_id': user_id,
            'token': token,
            'user_code': vipList[item].user_code
        },
        dataType: "json",
        success: function (data) {
            console.log(data);
            if (data.status.succeed == "1") {
                alert("开通成功！您的报单币还剩余：" + data.data.shop_money);
                window.location.href="viplist.html";
            } else {
                alert("开通失败！")
            }
        }
    });
}

//删除
function delect(item) {
	//var de_li=$(this).parents('.vipdetail');
    var shop_code = getCookie("shop_code");
    var user_id = getCookie("user_id");
    var token = getCookie('token');
    $.ajax({
        type: "post",
        url: ApiUrl + "user/delete_user",
        data: {
            'shop_code': shop_code,
            'user_id': user_id,
            'token': token,
            'user_code': vipList[item].user_code
        },
        dataType: "json",
        success: function (data) {
            console.log(data);
            if (data.status.succeed == "1") {
                alert("删除成功！");
				history.go(0);
            } else {
                alert("删除失败！")
            }
        }
    });
}



