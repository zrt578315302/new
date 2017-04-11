
$(function(){
	//获取商家信息
	$("#user_parent_code").on('input',function(e){
		var user_parent_code=$("#user_parent_code").val();
		$.ajax({
			type: "post",
			url: ApiUrl + "register/get_shop_info",
			data: {
				'shop_code':user_parent_code
			},
			dataType: "json",
			success: function(data){
				console.log(data);
				if(data.status.succeed=="1"){
					var r = template.render("person-tmpl", data);
					$("#person").html(r);
				}else{
					
				};
			}
		});
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
		var shop_code=getCookie('shop_code');  						//商家编号
		var shop_name=$("#shop_name").val();						//商家名称
		var bank_name=$("#bank_name").val();   						//银行名称
		var bank_card=$("#bank_card").val();						//银行卡号
		var sales_address=$("#sales_address").val();				//营业网点
		var tel=$("#tel").val();									//座机号
		var user_parent_code=$("#user_parent_code").val();			//推荐用户编号(可为空)
		var user_parent_name=$("#user_parent_name").val();			//推荐用户名称(可为空)
		
		var exg=/^\d{17}[\w\d]$/;     					//验证身份证
		var reg = /^(\d{16}|\d{19})$/;					//验证银行卡号（16-19）
		var teg=/^d{3}-d{8}|d{4}-d{7}/;   
		
		if(user_name=="" || user_card=="" || address==""|| shop_name=="" || bank_name=="" || bank_card=="" || sales_address=="" || tel==""){
			alert('内容不能为空');
		}else if(!exg.test(user_card)){
			alert('身份证输入不正确');
		}else{
			var data={'phone':phone,'password':passwd,'second_password':second_password,'verify_code':verify_code,'user_name':user_name,'user_card':user_card,'area_no':area_no,'detail':detail,'address':address,'shop_code':shop_code,'shop_name':shop_name,'bank_name':bank_name,'bank_card':bank_card,'sales_address':sales_address,'tel':tel,'user_parent_code':user_parent_code,'user_parent_name':user_parent_name}
			$.ajax({
				type: "post",
				url: ApiUrl + "register/shop_register",
				data: data,
				dataType: "json",
				success: function(data){
					console.log(data);
					if(data.status.succeed=="1"){
						window.location.href="register_business_success.html"
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
