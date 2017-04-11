$(function(){
	if ($('#checkbox').attr('checked')){
		var user_pad=getCookie('user_pad')
		var shop_pad=getCookie('shop_pad')
		if(user_pad){
			$("#psd").val(user_pad);
		}else if(shop_pad){
			$("#psd").val(shop_pad);
		}
	}
	
	$("#login").click(function(){
		var reg=/^\d{17}$/   
		var user_code=$("#user_code").val();     //用户编号
		var pad=$("#psd").val();               //密码	
		
		if(reg.test(user_code)){
			//商家登录
			var shop_code=$("#user_code").val();     //商家编号
			var pad=$("#psd").val();               //密码
			if(shop_code=="" || pad==""){
				alert('请输入账号和密码');
			}else{
				$.ajax({
					type: "post",
					url: ApiUrl + "login/shop_login",
					data: {
						'shop_code': shop_code,
						'password':pad
					},
					dataType: "json",
					success: function(data){
						console.log(data);
						if(data.status.succeed=="1"){
							addCookie('shop_code',data.data.shop_code);
							addCookie('token',data.data.token);
							addCookie('shop_name',data.data.shop_name);
							addCookie('user_id',data.data.id);
							if ($('#checkbox').attr('checked')){
								addCookie('shop_pad',pad);
								delCookie('user_pad');
							}else{
								delCookie('shop_pad');
								delCookie('user_pad');
							}
							
							window.location.href="business.html?user_id="+data.data.id;
						}else{
							alert(data.status.error_desc);
						};
					}
				})
			}
		}else{
			//用户登录
			var user_code=$("#user_code").val();     //用户编号
			var pad=$("#psd").val();               //密码
			if(user_code==""  || pad==""){
				alert('请输入账号和密码');
			}else{
				$.ajax({
					type: "post",
					url: ApiUrl + "login/user_login",
					data: {
						'user_code': user_code,
						'password':pad
					},
					dataType: "json",
					success: function(data){
						console.log(data);
						if(data.status.succeed=="1"){
							addCookie('id',data.data.id);
							addCookie('user_code',data.data.user_code);
							addCookie('token',data.data.token);
							addCookie('user_token',data.data.token);
							addCookie('user_name',data.data.user_name);
							addCookie('is_apply',data.data.is_apply);
							if ($('#checkbox').attr('checked')){
								addCookie('user_pad',pad);
								delCookie('shop_pad');
							}else{
								delCookie('user_pad');
								delCookie('shop_pad');
							}
							//delCookie('shop_code');
							window.location.href="index.html";
						}else{
							alert(data.status.error_desc);
						};
					}
				})
			}
		}
	});
})