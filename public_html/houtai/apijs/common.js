//取出get参数
function getQueryString(e) {
    var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)");
    var a = window.location.search.substr(1).match(t);
    if (a != null) return a[2];
    return ""
}
//将数据存入cookie
function addCookie(e, t, a) {
    var n = e + "=" + escape(t) + "; path=/";
    if (a > 0) {
        var r = new Date;
        r.setTime(r.getTime() + a * 3600 * 1e3);
        n = n + ";expires=" + r.toGMTString()
    }
    document.cookie = n
}

//取出cookie参数
function getCookie(e) {
    var t = document.cookie;
    var a = t.split("; ");
    for (var n = 0; n < a.length; n++) {
        var r = a[n].split("=");
        if (r[0] == e) return unescape(r[1])
    }
    return null
}
//删除cookie  主要用来做退出登录
function delCookie(e) {
    var t = new Date;
    t.setTime(t.getTime() - 1);
    var a = getCookie(e);
    if (a != null) document.cookie = e + "=" + a + "; path=/;expires=" + t.toGMTString()
}
function get_user_id(){
		var id;
		id=getCookie('houtai_id');
		if(id == null){
			//alert("111");
			window.location.href='./busin_login.html';
		}else{
			return id;
		}
}
function checkLogin(e) {
    if (e == 0) {
        location.href = WapSiteUrl + "/tmpl/member/login.html";
        return false
    } else {
        return true
    }
}
function contains(e, t) {
    var a = e.length;
    while (a--) {
        if (e[a] === t) {
            return true
        }
    }
    return false
}
function buildUrl(e, t) {
    switch (e) {
    case "keyword":
        return WapSiteUrl + "/tmpl/product_list.html?keyword=" + encodeURIComponent(t);
    case "special":
        return WapSiteUrl + "/special.html?special_id=" + t;
    case "goods":
        return WapSiteUrl + "/tmpl/product_detail.html?goods_id=" + t;
    case "url":
        return t
    }
    return WapSiteUrl
}
function errorTipsShow(e) {
    $(".error-tips").html(e).show();
    setTimeout(function() {
        errorTipsHide()
    },
    3e3)
}
function errorTipsHide() {
    $(".error-tips").html("").hide()
}
function writeClear(e) {
    if (e.val().length > 0) {
        e.parent().addClass("write")
    } else {
        e.parent().removeClass("write")
    }
    btnCheck(e.parents("form"))
}
function btnCheck(e) {
    var t = true;
    e.find("input").each(function() {
        if ($(this).hasClass("no-follow")) {
            return
        }
        if ($(this).val().length == 0) {
            t = false
        }
    });
    if (t) {
        e.find(".btn").parent().addClass("ok")
    } else {
        e.find(".btn").parent().removeClass("ok")
    }
}

