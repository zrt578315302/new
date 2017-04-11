$(function(){
	$("#login").click(function(){
		var username=$("#account").val();     //账号
		var pad=$("#psd").val();               //密码
		if(username=="" || pad==""){
			alert('账号或密码不能为空');
		}
		$.ajax({
			type: "post",
			url: ApiUrl + "login/wap_login",
			data: {
				'username':username,
				'password':pad
			},
			dataType: "json",
			success: function(data){
				console.log(data);
				if(data.status.succeed=="1"){
					addCookie('houtai_id',data.data.id);
					addCookie('username',data.data.username);
					window.location.href="index.html"
				}else{
					alert(data.status.error_desc);
				};
			}
		})
	});
})