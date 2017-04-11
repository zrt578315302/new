$(function(){
	$("#register_pass").click(function(){
		var reg=/^\d{17}$/
		var shop_code=$("#shop_code").val();            //商家编号
		var passwd=$("#psd").val();						//密码
		var sure_psd=$("#sure_psd").val();    			//确认密码
		var second_password=$("#er_psd").val();			//二次密码
		var sure_erpsd=$("#sure_erpsd").val();			//确认二级密码
		if(shop_code=="" || passwd=="" || sure_psd=="" || second_password=="" || sure_erpsd==""){
			alert('内容不能为空，请输入');
		}else if(!reg.test(shop_code)){
			alert('请输入邮编加手机号注册');
		}else if(passwd != sure_psd){
			alert('密码输入不统一，请从新输入');
		}else if(second_password != sure_erpsd){
			alert('二级密码输入不统一，请从新输入');
		}else{
			addCookie('shop_code',shop_code);      					//商家编号
			addCookie('passwd',passwd);      	   					//密码
			addCookie('second_password',second_password);      	    //二次密码
			if ($('#checkbox').attr('checked')){
				window.location.href="register_business1.html";
			}else{
				alert('请选择注册协议');
			}
				
		}
	});
})