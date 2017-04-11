
$(function(){
	//获取商家信息
	$("#shop_parent_code").blur(function(){
		var shop_parent_code=$("#shop_parent_code").val();
		if(shop_parent_code==""){
			$("#user_parent_code").removeAttr("readonly");
			$("#user_parent_name").removeAttr("readonly");
			$("#user_parent_code").attr('placeholder','请输入您的推荐人编号');
			$("#user_parent_code").attr('style','color:#999;font-weight:300');
		}
		$.ajax({
			type: "post",
			url: ApiUrl + "register/get_shop_info",
			data: {
				'shop_code':shop_parent_code
			},
			dataType: "json",
			success: function(data){
				console.log(data);
				if(data.status.succeed=="1"){
					$("#shop_parent_name").val(data.data.shop_name);
					$("#user_parent_code").attr('readonly','readonly');
					$("#user_parent_name").attr('readonly','readonly');
					$("#user_parent_code").attr('placeholder','您已经输入推荐商家号，无需再输入');
				}else{
					alert(data.status.error_desc);
					$("#user_parent_code").removeAttr("readonly");
					$("#user_parent_name").removeAttr("readonly");
					$("#user_parent_code").attr('placeholder','请输入您的推荐人编号');
					$("#user_parent_name").val('');
					$("#shop_parent_code").val('');
					$("#shop_parent_name").val('');
				};
			}
		});
	});
	//获取推荐用户姓名和商家编号和信息
	$("#user_parent_code").blur(function(){
		var user_parent_code=$("#user_parent_code").val();
		
		if(user_parent_code !== '' || user_parent_code != "请输入您的推荐人编号" || user_parent_code != "您已经输入推荐商家号，无需再输入"){
			$.ajax({
				type: "post",
				url: ApiUrl + "register/get_parent_info",
				data: {
					'user_code':user_parent_code
				},
				dataType: "json",
				success: function(data){
					console.log(data);
					if(data.status.succeed=="1"){
						$("#user_parent_name").val(data.data.user_name);
						$("#shop_parent_code").val(data.data.shop_parent_code);
						$("#shop_parent_name").val(data.data.shop_parent_name);
					}else{
						alert(data.status.error_desc);
						$("#user_parent_code").val('');
						$("#user_parent_name").val('');
						$("#shop_parent_code").val('');
						$("#shop_parent_name").val('');
					};
				}
			});
		}
	});

	
	$("#sure").click(function(){
		var phone=getCookie('iphone')             					//手机号码
		var passwd=getCookie('passwd')            					//密码
		var second_password=getCookie('second_password')            //二次密码
		var verify_code=getCookie('yzm_inp')						//验证码
		var user_name=$("#name").val();    							//用户名称
		var user_card=$("#card").val();								//用户身份证
		
		var prov_no=$("#city_4 .prov").find("option:selected").attr("data-code"); 	//省份code
		var prov = $("#city_4 .prov").find("option:selected").val();   				//省份名
		var city_no=$("#city_4 .city").find("option:selected").attr("data-code");   //城市code
		var city=$("#city_4 .city").find("option:selected").val();     				//城市
		var dist_no = $("#city_4 .dist").find("option:selected").attr("data-code"); //地区code
		var dist = $("#city_4 .dist").find("option:selected").val();    			//地区
		
		var area_no=prov_no+','+city_no+','+dist_no;				//地区编码
		var detail=prov+city+dist;									//地区中文

		
		var address=$("#adress").val();								//详细地址
		var shop_parent_code=$("#shop_parent_code").val();			//推荐商家编号
		var shop_parent_name=$("#shop_parent_name").val();			//推荐商家名称
		var user_parent_code=$("#user_parent_code").val();			//推荐用户编号
		var user_parent_name=$("#user_parent_name").val();			//推荐用户名称
		
		if(user_parent_code=="您已经输入推荐商家号，无需再输入"){
			user_parent_code="";
		}
		
		var exg=/^\d{17}[\w\d]$/;     					//验证身份证
		var reg = /^(\d{16}|\d{19})$/;					//验证银行卡号（16-19）
		var teg=/^d{3}-d{8}|d{4}-d{7}/;   
		
		if(user_name=="" || user_card=="" || address==""|| shop_parent_code=="" || shop_parent_name==""){
			alert('内容不能为空');
		}else if(!exg.test(user_card)){
			alert('身份证输入不正确');
		}else{
			var data={'phone':phone,'password':passwd,'second_password':second_password,'verify_code':verify_code,'user_name':user_name,'user_card':user_card,'area_no':area_no,'detail':detail,'address':address,'shop_parent_code':shop_parent_code,'shop_parent_name':shop_parent_name,'user_parent_code':user_parent_code,'user_parent_name':user_parent_name}
			$.ajax({
				type: "post",
				url: ApiUrl + "register/user_register",
				data: data,
				dataType: "json",
				success: function(data){
					console.log(data);
					if(data.status.succeed=="1"){
						window.location.href="register_user_success.html?user_code="+data.data.user_code;
					}else{
						var t=data.status.error_desc
						if(t){
							alert(data.status.error_desc);
						}else{
							alert('注册失败');
						}
					};
				}
			});
		}
	});
})
