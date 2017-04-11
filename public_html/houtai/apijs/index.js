$(function(){
	get_user_id();
	function index(){
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
	}
	index();
})