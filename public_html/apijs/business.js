$(function(){
	get_busin_id();
	var shop_code=getCookie('shop_code');				//商家编号
	var user_id=getCookie('user_id');       		// 商家id
	var token=getCookie('token');					 //密钥
	
	$.ajax({
		type: "post",
		url: ApiUrl + "user/get_shop_info",
		data: {
			'shop_code': shop_code,
			'user_id':user_id,
			'token':token
		},
		dataType: "json",
		success: function(data){
			console.log(data);
			if(data.status.succeed=="1"){
				var r = template.render("shop_money-tmpl", data);
				$("#shop_money").html(r);
				addCookie('user_id',data.data.id);
			}else{
				
			};
		}
	});
	
	//搜索会员
	$("#sousuo").click(function(){
		var keyword=$("#keyword").val();			//  关键字
		var shop_code=getCookie('shop_code');       // 	商家编号
		var user_id=getCookie('user_id');			// 	商家id
		var token=getCookie('token');				//  秘钥
		$.ajax({
			type: "post",
			url: ApiUrl + "user/shop_user_list",
			data: {
				'shop_code': shop_code,
				'user_id':user_id,
				'token':token,
				'page':'1',
				'keyword':keyword,
				'type':'1'
			},
			dataType: "json",
			success: function(data){
				console.log(data);
				if(data.status.succeed=="1"){
					window.location.href="viplist.html?keyword="+keyword;
				}else{
					
				};
			}
		});
	});
})