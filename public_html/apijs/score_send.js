/**
 * Created by Administrator on 2016/8/16.
 */
$(function (){
	get_user_id();
    var user_code = getCookie("user_code");
    var user_id = getCookie("id");
//  alert(user_id);
//	var user_id=getQueryString('user_id');  //用户id
    var token = getCookie('user_token');
//	alert(token);
	//获取积分
	function getIntegral(){
	$.ajax({
        type: "post",
        url: ApiUrl + "user/get_user_info",
        data: {
            "user_code": user_code,
            "user_id": user_id,
            "token": token
        },
        dataType: "json",
        success: function (data) {
        	//alert(1);
            console.log(data);
            if (data.status.succeed == "1") {
                var r = template.render("myScore-tmpl", data);
                $("#myScore").html(r);
            } else {

            }
        }
    })
    }
	getIntegral();


    //根据赠送的用户编号，自动回填用户姓名
    $("#sendCode").on('input',function(e){
		var sendCode=$("#sendCode").val();
		//alert(sendCode);
		$.ajax({
			type: "post",
			url: ApiUrl + "register/get_parent_info",
			data: {
				'user_code':sendCode
			},
			dataType: "json",
			success: function(data){
				console.log(data);
				if(data.status.succeed=="1"){
					var r = template.render("send_name-tmpl", data);
					$("#send_ame").html(r);
				}else{
				};
			}
		});
	});

    //提交
    $("#scoreSendSubmit").on('click', function () {
		var user_code = getCookie("user_code");
		var user_id = getCookie("id");
		var token = getCookie('user_token');
        var to_user_code = $('#sendCode').val();
        var to_user_name = $('#sendName').val();
        var integral = $("#to_user_integral").val();
        $.ajax({
            type: "post",
            url: ApiUrl + "user/send_integral",
            data: {
                "user_code": user_code,
                "user_id": user_id,
                "token": token,
                "to_user_code": to_user_code,
                "to_user_name": to_user_name,
                "integral": integral
            },
            dataType: "json",
            success: function (data) {
				console.log(data);
                if (data.status.succeed == "1") {
                    alert('赠送成功！');
					var is_apply=getCookie('is_apply');
					if(is_apply=="1"){
						window.location.href="mywealth2.html";
					}else if(is_apply=="2"){
						window.location.href="mywealth.html";
					}
                } else {
                    alert('赠送失败！');
                }
            }
        })
    })

})
