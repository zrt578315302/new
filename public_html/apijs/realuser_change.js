$(function(){
	get_user_id();
/**
 *  输入了商家编号之后，
 *  自动回填姓名和名称信息
 */
$("#shop_code").on('input',function(e){
	var shop_code=$("#shop_code").val();
	$.ajax({
		type: "post",
		url: ApiUrl + "register/get_shop_info",
		data: {
			'shop_code':shop_code
		},
		dataType: "json",
		success: function(data){
			console.log(data);
			if(data.status.succeed=="1"){
				var r = template.render("shopUser_name-tmpl", data);
				var t = template.render("shopName-tmpl", data);
				$("#shopUser_name").html(r);
				$("#shopName").html(t);
			}else{
				
			};
		}
	});
}); 

/**
 * 初始化可用积分
 */
$.ajax({
    type: "post",
    url: ApiUrl + "user/get_user_info",
    data: {
        "user_code": "94278869",
        "user_id": "5",
        "token": "nnB-uvg0PXn3r_KvhogA4pMCZq0MUaIfaEk-TjdqLQ_ztNygv_NRSJzWIzR4EZRpnGgH9GCBsBQECs2o0XnpgQ"
    },
    dataType: "json",
    success: function (data) {
        console.log(data);
        if (data.status.succeed == "1") {
            userInfo = data;
            var r = template.render("realshop_change-tmpl", data);
            $("#realshop_change").html(r);
        } else {

        }
    }
});

//商品类别与商品名称联动显示
$("#goods_type").change(function(){
               $("#goods_type option").each(function(i,o){
                   if($(this).attr("selected"))
                   {
                       $(".change_inptwo").hide();
                       $(".change_inptwo").eq(i).show();
                   }
               });
           });
           $("#goods_type").change();

//确定按钮后提交信息
$("#sure").click(function () {

	var token = getCookie('token');	//密钥
	var user_id=getCookie("id");      		//用户id
	var user_code = getCookie('user_code');	
	var shop_code = $("#shop_code").val();
	var shop_name=$("#shop_name").val();
	var shop_user_name=$("#shop_user_name").val();
	var user_name=getCookie("user_name");
	var integral=$("#integral").val();
	var goods_number=$("#goods_number").val();
	var goods_type=$("#goods_type").val();
	var goods_name=$("#goods_name").val();
	var second_password=$("#second_password").val();
    var data = {
        "user_code": user_code,
        "user_id": user_id,
        "token": token,
        "shop_code": shop_code,
        "shop_name": shop_name,
        "shop_user_name": shop_user_name,
        "user_name": user_name,
        "integral": integral,
        "goods_name": goods_name,
        "goods_number": goods_number,
        "goods_type": goods_type,
        "second_password": second_password
    };
    $.ajax({
        type: "post",
        url: ApiUrl + "user/user_shopping",
        data: data,
        dataType: "json",
        success: function (data) {
            console.log(data);
            if (data.status.succeed == "1") {
                window.location.href="order_success.html";
            } else {
                //alert('啊哦,订单提交失败了！');
				alert(data.status.error_desc);
            }
        }
    });

})
})


/**
 * 数据检查
 */
//function checkData() {
//
// /* alert(userInfo.data.user_code);
//  alert(shoperInfo.data.shop_code);
//  alert(shoperInfo.data.shop_name);
//  alert(shoperInfo.data.user_name);
//  alert(userInfo.data.user_name);
//  alert($("#integral").val());
//  alert($("#goods_number").val());
//  alert($("#goods_type").val());
//  alert($("#second_password").val());*/
//
//  if(userInfo==null || shoperInfo==null) {
//      return false;
//  }
//  return true;
//}
