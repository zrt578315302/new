$(function(){
	get_user_id();
	function news(){
		var news_id=getQueryString('id');      		//新闻id
		$.ajax({
			type: "post",
			url: ApiUrl + "news/news_detail",
			data: {
				'news_id':news_id
			},
			dataType: "json",
			success: function(data){
				console.log(data);
				if(data.status.succeed=="1"){
					$("#content").append(data);
				}else{
					
				};
			}
		});
	}
	news();
})