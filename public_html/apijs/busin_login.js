$(function(){
	$("#login").click(function(){
		var shop_code=$("#account").val();     //商家编号
		var pad=$("#psd").val();               //密码
		if(shop_code=="" || pad==""){
			alert('账号或密码不能为空');
		}
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
					delCookie('user_code');
					window.location.href="business.html?user_id="+data.data.id;
				}else{
					alert('登录失败，账号或密码不正确');
				};
			}
		})
	});
})