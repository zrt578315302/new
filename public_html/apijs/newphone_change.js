
$(function(){
	$("#yzm").click(function(){
		reg=/^1[3|4|5|7|8]\d{9}$/;//验证手机正则    //验证手机
		var iphone=$("#iphone").val();
		if(!reg.test(iphone)){
			alert('手机输入不正确');
		}else{
			yzm();
		}
	});
	$("#sure").click(function(){
		var iphone=$("#iphone").val();				//  手机号码
		var yzm_inp=$("#yzm_inp").val();			//  验证码
		var shop_code=getCookie('shop_code');       // 	商家编号
		var user_id=getCookie('user_id');			// 	商家id
		var token=getCookie('token');				//  秘钥
		if(iphone=="" || yzm_inp==""){
			alert('手机号码或验证码不能为空');
		}else{
			$.ajax({
				type: "post",
				url: ApiUrl + "user/first_check",
				data: {
					'shop_code': shop_code,
					'user_id': user_id,
					'token':token,
					'phone':iphone,
					'is_update':'2',
					'verify_code':yzm_inp
				},
				dataType: "json",
				success: function(data){
					console.log(data);
					if(data.status.succeed=="1"){
						addCookie('newiphone',iphone);          //保存手机号码
						addCookie('newyzm_inp',yzm_inp);        //验证码
						window.location.href="set_up.html";
					}else{
						alert(data.status.error_desc);
					};
				}
			});
			
		}
	});
})
function yzm(){
	var iphone=$("#iphone").val();
	$.ajax({
		type: "post",
		url: ApiUrl + "shortmsg/send",
		data: {
			'phone': iphone,
			'type': '5'
		},
		dataType: "json",
		success: function(data){
			console.log(data);
			if(data.status.succeed=="1"){
				var countdown=90;
				function time(){
					if (countdown == 0) { 
						$("#yzm").val('验证码');
						countdown = 90; 
						clearTimeout(t);
					} else { 
						$("#yzm").val(countdown+"s");
						countdown--; 
						t=setTimeout(function(){time()},1000);
					}
				}
				time();
			}else{
				alert('验证码发送失败');
			};
		}
	});
}



