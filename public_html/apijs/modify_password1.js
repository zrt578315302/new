$(function(){
	$("#sure").click(function(){
		var shop_code=getCookie('shop_code');       // 	商家编号
		var user_id=getCookie('user_id');			// 	商家id
		var phone=getCookie('iphone');				// 	手机号码
		var verify_code=getCookie('yzm_inp');		// 	验证码
		var passwd=$("#password").val();			// 	新设置密码
		var password_er=$("#password_er").val();	//  确认密码
		var second_password=$("#second_password").val();	// 	新设置二级密码
		var second_password_er=$("#second_password_er").val();//确认二级密码
		var token=getCookie('token');				//  秘钥

		if(password_er=="" || passwd=="" || second_password=="" || second_password_er==""){
			alert('内容不能为空，请输入');
		}else if(passwd != password_er){
			alert('密码输入不统一，请从新输入');
		}else if(second_password != second_password_er){
			alert('二级密码输入不统一，请从新输入');
		}else{
			$.ajax({
				type: "post",
				url: ApiUrl + "user/edit_password",
				data: {
					'shop_code': shop_code,
					'user_id': user_id,
					'phone':phone,
					'verify_code':verify_code,
					'password':passwd,
					'second_password':second_password,
					'token':token
				},
				dataType: "json",
				success: function(data){
					console.log(data);
					if(data.status.succeed=="1"){
						window.location.href="login.html"
						delCookie('shop_code');
						delCookie('user_id');
						delCookie('iphone');
						delCookie('yzm_inp');
						delCookie('token');
					}else{
						alert(data.status.error_desc);
					};
				}
			});
		}
	});
})

