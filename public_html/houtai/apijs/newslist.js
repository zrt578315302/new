$(function(){
	function index(){
		var username=getCookie('username');
		var user_id=getCookie('houtai_id');
		$.ajax({
			type: "post",
			url: ApiUrl + "login/news_list",
			data: {
				'username':username,
				'user_id':user_id,
				'type':'1',
				'page':'1'
			},
			dataType: "json",
			success: function(data){
				console.log(data);
				if(data.status.succeed=="1"){
					var r = template.render("list-tmpl", data);
					$("#list").html(r);
					//删除
					$(".delect").click(function(){
						$(this).parents('.rowlist').remove();
						var id=$(this).attr('alt');
						$.ajax({
							type: "post",
							url: ApiUrl + "login/delete_news",
							data: {
								'username':username,
								'user_id':user_id,
								'news_id':id
							},
							dataType: "json",
							success: function(data){
								console.log(data);
								if(data.status.succeed=="1"){
									
								}else{
									alert(data.status.error_desc);
								};
							}
						});
					});
				}else{
					alert(data.status.error_desc);
				};
			}
		});
	}
	index();
	
})