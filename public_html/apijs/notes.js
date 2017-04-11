$(function(){
	get_user_id();
	function news(num){
		var user_id=getQueryString('user_id');      		//用户id
		var token=getCookie('token');					    //密钥
		var number=num
		$.ajax({
			type: "post",
			url: ApiUrl + "news/edit_list",
			data: {
				'user_id':user_id,
				'type':'3',
				'token':token,
				'page':'1',
				'number':number,
				'sort':'desc'
			},
			dataType: "json",
			success: function(data){
				console.log(data);
				if(data.status.succeed=="1"){
					var r = template.render("notes-tmpl", data);
					$("#notes").html(r);
					$("#page").click(function(){
						var shu=data.data.length;
						if(num<=shu){
							news(num+4);
						}else{
							$("#page").text('已全部加载完成');
						}
					});
				}else{
					$("#notes").html('暂无数据');
				};
			}
		});
	}
	news(7);
})
function fff(sort,num){
	var user_id=getQueryString('user_id');      		//用户id
	var token=getCookie('token');					    //密钥
	$.ajax({
		type: "post",
		url: ApiUrl + "news/edit_list",
		data: {
			'user_id':user_id,
			'type':'3',
			'token':token,
			'sort':sort,
			'page':'1',
			'number':num
		},
		dataType: "json",
		success: function(data){
			console.log(data);
			if(data.status.succeed=="1"){
				var r = template.render("notes-tmpl", data);
				$("#notes").html(r);
				$("#page").click(function(){
					var shu=data.data.length;
					if(num<=shu){
						fff(sort,num+4);
					}else{
						$("#page").text('已全部加载完成');
					}
				});
				$("#est a").click(function(){
					var sort=$(this).attr('id');
					fff(sort,num);
				});
			}else{
				$("#page").html('暂无数据');
			};
		}
	});
}