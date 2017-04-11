$(function(){
	$("#mywealthTab").click(function(){
		var is_apply = getCookie("is_apply");
		//alert(is_apply);
		if(is_apply=="1"){
			window.location.href="mywealth2.html";
		}else if(is_apply=="2"){
			window.location.href="mywealth.html";
		}
	})
	
})
