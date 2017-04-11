
$(function(){
	$("#yzm").click(function(){
		reg=/^1[3|4|5|7|8]\d{9}$/;//验证手机正则    //验证手机
		var iphone=$("#iphone").val();
		if(!reg.test(iphone)){
			alert('手机输入不正确');
		}else{
			$.ajax({
				type: "post",
				url: ApiUrl + "register/check_user_field",
				data: {
					'field': 'phone',
					'value': iphone
				},
				dataType: "json",
				success: function(data){
					console.log(data);
					if(data.status.succeed=="1"){
						yzm();
					}else{
						alert('手机无效');
					};
				}
			});
			
		}
	});
	$("#pass").click(function(){
		reg=/^1[3|4|5|7|8]\d{9}$/;//验证手机正则    //验证手机
		var iphone=$("#iphone").val();
		var yzm_inp=$("#yzm_inp").val();
		if(iphone=="" || yzm_inp==""){
			alert('手机号码或验证码不能为空');
		}else if(!reg.test(iphone)){
			alert('手机输入不正确');
		}else{
			$.ajax({
				type: "post",
				url: ApiUrl + "register/check_verify",
				data: {
					'phone': iphone,
					'verify_code': yzm_inp,
					'type':'1'
				},
				dataType: "json",
				success: function(data){
					//console.log(data);
					if(data.status.succeed=="1"){
						addCookie('iphone',iphone);          //保存手机号码 
						addCookie('yzm_inp',yzm_inp);        //验证码    			
						window.location.href="register_user2.html";
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
			'type': '1'
		},
		dataType: "json",
		success: function(data){
			console.log(data);
			if(data.status.succeed=="1"){
				var countdown=90;
				function time(){
					if (countdown == 0) { 
						$("#yzm").text('验证码');
						countdown = 90; 
						clearTimeout(t);
					} else { 
						$("#yzm").text(countdown+"s");
						countdown--; 
						t=setTimeout(function(){time()},1000);
					}
				}
				time();
			}else{
				//alert(4);
			};
		}
	});
}



