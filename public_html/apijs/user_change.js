$(function(){
	$("#sure").click(function(){
		var user_id=getCookie('user_id');//商家id
		var token = getCookie('token'); //秘钥
		var user_name=$('#user_name').val();//商家姓名
		var user_card=$("#user_card").val(); //用户身份证号
		
		var prov_no=$(".change_address #prov").find("option:selected").attr("data-code"); 	//省份code
		var prov = $(".change_address #prov").find("option:selected").val();   				//省份名
		var city_no=$(".change_address #city").find("option:selected").attr("data-code");   //城市code
		var city=$(".change_address #city").find("option:selected").val();     				//城市
		var dist_no = $(".change_address #dist").find("option:selected").attr("data-code"); //地区code
		var dist = $(".change_address #dist").find("option:selected").val();    			//地区
		
		var area_no=prov_no+','+city_no+','+dist_no;				//地区编码
		var detail=prov+city+dist;									//地区中文
		var address=$("#address").val();							//详细地址
		var shop_code=getCookie('shop_code');						//商家编号
		var shop_name=$("#shop_name").val();						//商家名称
		var bank_name=$("#bank_name").val();						//银行名称
		var bank_card=$("#bank_card").val();    //银行卡号
		var sales_address=$("#sales_address").val();   // 	营业网点
		var tel=$("#tel").val();     //座机号
		var exg=/^\d{17}[\w\d]$/;     					//验证身份证
		var reg = /^(\d{16}|\d{19})$/;	

		
		if(user_name=="" || user_card=="" || address==""|| shop_name=="" || bank_name=="" || bank_card=="" || sales_address=="" || tel==""){
			alert('内容不能为空');
		}else if(!exg.test(user_card)){
			alert('身份证输入不正确');
		}else if(!reg.test(bank_card)){
			alert('银行卡号输入不正确');
		}else{
			$.ajax({
				type: "post",
				url: ApiUrl + "user/edit_user",
				data: {
					'token':token,
					'user_id':user_id,
					'user_name':user_name,
					'user_card':user_card,
					'area_no':area_no,
					'detail':detail,
					'address':address,
					'shop_code':shop_code,
					'shop_name':shop_name,
					'bank_name':bank_name,
					'bank_card':bank_card,
					'sales_address':sales_address,
					'tel':tel
				},
				dataType: "json",
				success: function(data){
					console.log(data);
					if(data.status.succeed=="1"){
						alert('修改成功！');
						window.location.href="business.html"
					}else{
						alert('修改失败！');
					}
				}
			});
		}
	});
})