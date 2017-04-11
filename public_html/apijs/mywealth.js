$(function(){
    get_user_id();
    //获取用户已使用的积分和剩余积分
    var used_score1 = parseInt(getCookie("shop_integral"));
    //alert(typeof used_score1);
    var used_score2 = parseInt(getCookie("send_integral"));
    //alert(typeof used_score2);
    var used_score = (used_score1+used_score2);
    //alert(used_score);
    //alert(used_score);
    var user_integral = getCookie("user_integral"); //现有积分
    $("#used_score").html(used_score);
    $("#save_score").text(user_integral);
//	function wealth(){     	
//      var user_id = getCookie("id");  //用户id
////		alert(user_id);
//		var token=getCookie('token');
//		var user_code=getCookie('user_code');
//		//alert(user_code);
//	    $.ajax({
//			type: "post",
//			url: ApiUrl + "user/get_user_info",
//			data: {
//				'user_id':user_id,
//				'user_code':user_code,
//				'token':token
//			},
//			dataType: "json",
//			success: function(data){
//				console.log(data);
//				if(data.status.succeed=="1"){
////					alert(1);
//					var r = template.render("mywealth-tmpl", data);
//					//console.log(r);
//					$(".change_ul").html(r);
//				}else{
//				};
//			}
//		});
//	}
//	wealth();
})