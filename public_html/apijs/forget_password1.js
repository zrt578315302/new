$(function(){
	$("#sure").click(function(){
		var reg=/^\d{17}$/   
		var code=getCookie('code');       					// 	编号
		var phone=getCookie('forget_iphone');				// 	手机号码
		var verify_code=getCookie('forget_yzm_inp');		// 	验证码
		var passwd=$("#password").val();			// 	新设置密码
		var password_er=$("#password_er").val();	//  确认密码
		var second_password=$("#second_password").val()	// 	新设置二级密码
		var second_password_er=$("#second_password_er").val();//确认二级密码
		
		
		if(code==""|| password_er=="" || passwd=="" || second_password=="" || second_password_er==""){
			alert('内容不能为空，请输入');
		}else if(passwd != password_er){
			alert('密码输入不统一，请从新输入');
		}else if(second_password != second_password_er){
			alert('二级密码输入不统一，请从新输入');
		}else{
			if(reg.test(code)){
				$.ajax({
					type: "post",
					url: ApiUrl + "user/forget_password",
					data: {
						'code': code,
						'user_type': '2',
						'phone':phone,
						'verify_code':verify_code,
						'password':passwd,
						'second_password':second_password
					},
					dataType: "json",
					success: function(data){
						console.log(data);
						if(data.status.succeed=="1"){
							window.location.href="login.html"
						}else{
							alert(data.status.error_desc);
						};
					}
				});
			}else{
				$.ajax({
					type: "post",
					url: ApiUrl + "user/forget_password",
					data: {
						'code': code,
						'user_type': '1',
						'phone':phone,
						'verify_code':verify_code,
						'password':passwd,
						'second_password':second_password
					},
					dataType: "json",
					success: function(data){
						console.log(data);
						if(data.status.succeed=="1"){
							window.location.href="login.html"
						}else{
							alert(data.status.error_desc);
						};
					}
				});
			}
			
		}
	});
})

