$(function(){
	$("#register_pass").click(function(){
		var passwd=$("#psd").val();						//密码
		var sure_psd=$("#sure_psd").val();    			//确认密码
		var second_password=$("#er_psd").val();			//二次密码
		var sure_erpsd=$("#sure_erpsd").val();			//确认二级密码
		if(passwd=="" || sure_psd=="" || second_password=="" || sure_erpsd==""){
			alert('内容不能为空，请输入');
		}else if(passwd != sure_psd){
			alert('密码输入不统一，请从新输入');
		}else if(second_password != sure_erpsd){
			alert('二级密码输入不统一，请从新输入');
		}else{
			addCookie('passwd',passwd);      	   					//密码
			addCookie('second_password',second_password);      	    //二次密码
			if ($('#checkbox').attr('checked')){
			window.location.href="register_user1.html";
			}else{
				alert('请选择注册协议');
			}
		}
	});
})