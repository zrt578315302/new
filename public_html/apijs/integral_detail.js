$(function(){
	//get_user_id();
	function integral_detail(){
		var user_id=getCookie('id');      		//用户id
		var token=getCookie('token');					    //密钥
		var user_code=getCookie('user_code');				//用户编号
		$.ajax({
			type: "post",
			url: ApiUrl + "user/integral_log",
			data: {
				"user_code":user_code,
                "user_id":user_id,
                "token":token
			},
			dataType: "json",
			success: function(data){
				console.log(data);
				if(data.status.succeed=="1"){
					var r = template.render("integral-tmpl", data);
					$("#integral").html(r);
				}else{
					$("#integral").html("暂无数据");
				};
			}
		});
	}
	integral_detail();
})