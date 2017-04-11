$(function(){
	//get_user_id();
	var shop_code = getCookie("shop_code");
	var user_id = getCookie("user_id");
	var user_code = getQueryString("user_code");
	var shop_name= getCookie('shop_name');
	var token = getCookie("token");
	$.ajax({
        type: "post",
        url: ApiUrl + "user/get_vip_info",
        data: {
            'shop_code': shop_code,
            'user_id': user_id,
            'token': token,
            'user_code':user_code
        },
        dataType: "json",
        success: function (data) {
            console.log(data);
            if (data.status.succeed == "1") {
            	var r = template.render("vip_info-tmpl", data);
            	$("#vip_info").html(r);
				$("#shop_name").text(shop_name);
            } else {
            	$("#vip_info").html("获取信息失败！");
            }
        }
    });
})
