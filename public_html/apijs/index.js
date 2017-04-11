$(function(){
	get_user_id();
	//var user_code=getQueryString('user_code');       
	var user_code=getCookie('user_code');					//用户编号
	var user_id=getCookie('id');					 //用户id
	var token=getCookie('token');					 //密钥
	
	$.ajax({
		type: "post",
		url: ApiUrl + "user/get_user_info",
		data: {
			'user_code': user_code,
			'user_id':user_id,
			'token':token
		},
		dataType: "json",
		success: function(data){
			console.log(data);
			if(data.status.succeed=="1"){
				var r = template.render("index-tmpl", data);
				$("#index").html(r);
				var first_num= data.data.first_num;     // 	直推用户（大于3返回3方便处理）
				var second_num=data.data.second_num;    //直推用户下属个数
				if(first_num=="3"){
					$("#index_top").attr('src','img/y_index.png');
					if(second_num[0]=="3"&&second_num[2]=="3"&&second_num[4]=="3"){
						$("#index_main").attr('src','img/g_2.png');
						$("#shop").attr('href','realuser_change.html');
					}else if(second_num[0]=="3"&&second_num[2]=="3"&&second_num[4]=="2"){
						$("#index_main").attr('src','img/g_6.png');
					}else if(second_num[0]=="3"&&second_num[2]=="3"&&second_num[4]=="1"){
						$("#index_main").attr('src','img/g_7.png');
					}else if(second_num[0]=="3"&&second_num[2]=="3"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_8.png');
					}else if(second_num[0]=="3"&&second_num[2]=="2"&&second_num[4]=="3"){
						$("#index_main").attr('src','img/g_9.png');
					}else if(second_num[0]=="3"&&second_num[2]=="2"&&second_num[4]=="2"){
						$("#index_main").attr('src','img/g_10.png');
					}else if(second_num[0]=="3"&&second_num[2]=="2"&&second_num[4]=="1"){
						$("#index_main").attr('src','img/g_11.png');
					}else if(second_num[0]=="3"&&second_num[2]=="2"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_12.png');
					}else if(second_num[0]=="3"&&second_num[2]=="1"&&second_num[4]=="3"){
						$("#index_main").attr('src','img/g_13.png');
					}else if(second_num[0]=="3"&&second_num[2]=="1"&&second_num[4]=="2"){
						$("#index_main").attr('src','img/g_14.png');
					}else if(second_num[0]=="3"&&second_num[2]=="1"&&second_num[4]=="1"){
						$("#index_main").attr('src','img/g_15.png');
					}else if(second_num[0]=="3"&&second_num[2]=="1"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_16.png');
					}else if(second_num[0]=="3"&&second_num[2]=="0"&&second_num[4]=="3"){
						$("#index_main").attr('src','img/g_17.png');
					}else if(second_num[0]=="3"&&second_num[2]=="0"&&second_num[4]=="2"){
						$("#index_main").attr('src','img/g_18.png');
					}else if(second_num[0]=="3"&&second_num[2]=="0"&&second_num[4]=="1"){
						$("#index_main").attr('src','img/g_19.png');
					}else if(second_num[0]=="3"&&second_num[2]=="0"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_20.png');
					}else if(second_num[0]=="2"&&second_num[2]=="3"&&second_num[4]=="3"){
						$("#index_main").attr('src','img/g_3.png');
					}else if(second_num[0]=="2"&&second_num[2]=="3"&&second_num[4]=="2"){
						$("#index_main").attr('src','img/g_21.png');
					}else if(second_num[0]=="2"&&second_num[2]=="3"&&second_num[4]=="1"){
						$("#index_main").attr('src','img/g_22.png');
					}else if(second_num[0]=="2"&&second_num[2]=="3"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_23.png');
					}else if(second_num[0]=="2"&&second_num[2]=="2"&&second_num[4]=="3"){
						$("#index_main").attr('src','img/g_24.png');
					}else if(second_num[0]=="2"&&second_num[2]=="2"&&second_num[4]=="2"){
						$("#index_main").attr('src','img/g_25.png');
					}else if(second_num[0]=="2"&&second_num[2]=="2"&&second_num[4]=="1"){
						$("#index_main").attr('src','img/g_26.png');
					}else if(second_num[0]=="2"&&second_num[2]=="2"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_27.png');
					}else if(second_num[0]=="2"&&second_num[2]=="1"&&second_num[4]=="3"){
						$("#index_main").attr('src','img/g_28.png');
					}else if(second_num[0]=="2"&&second_num[2]=="1"&&second_num[4]=="2"){
						$("#index_main").attr('src','img/g_29.png');
					}else if(second_num[0]=="2"&&second_num[2]=="1"&&second_num[4]=="1"){
						$("#index_main").attr('src','img/g_30.png');
					}else if(second_num[0]=="2"&&second_num[2]=="1"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_31.png');
					}else if(second_num[0]=="2"&&second_num[2]=="0"&&second_num[4]=="3"){
						$("#index_main").attr('src','img/g_32.png');
					}else if(second_num[0]=="2"&&second_num[2]=="0"&&second_num[4]=="2"){
						$("#index_main").attr('src','img/g_33.png');
					}else if(second_num[0]=="2"&&second_num[2]=="0"&&second_num[4]=="1"){
						$("#index_main").attr('src','img/g_34.png');
					}else if(second_num[0]=="2"&&second_num[2]=="0"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_35.png');
					}else if(second_num[0]=="1"&&second_num[2]=="3"&&second_num[4]=="3"){
						$("#index_main").attr('src','img/g_4.png');
					}else if(second_num[0]=="1"&&second_num[2]=="3"&&second_num[4]=="2"){
						$("#index_main").attr('src','img/g_36.png');
					}else if(second_num[0]=="1"&&second_num[2]=="3"&&second_num[4]=="1"){
						$("#index_main").attr('src','img/g_37.png');
					}else if(second_num[0]=="1"&&second_num[2]=="3"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_38.png');
					}else if(second_num[0]=="1"&&second_num[2]=="2"&&second_num[4]=="3"){
						$("#index_main").attr('src','img/g_39.png');
					}else if(second_num[0]=="1"&&second_num[2]=="2"&&second_num[4]=="2"){
						$("#index_main").attr('src','img/g_40.png');
					}else if(second_num[0]=="1"&&second_num[2]=="2"&&second_num[4]=="1"){
						$("#index_main").attr('src','img/g_41.png');
					}else if(second_num[0]=="1"&&second_num[2]=="2"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_42.png');
					}else if(second_num[0]=="1"&&second_num[2]=="1"&&second_num[4]=="3"){
						$("#index_main").attr('src','img/g_43.png');
					}else if(second_num[0]=="1"&&second_num[2]=="1"&&second_num[4]=="2"){
						$("#index_main").attr('src','img/g_44.png');
					}else if(second_num[0]=="1"&&second_num[2]=="1"&&second_num[4]=="1"){
						$("#index_main").attr('src','img/g_45.png');
					}else if(second_num[0]=="1"&&second_num[2]=="1"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_46.png');
					}else if(second_num[0]=="1"&&second_num[2]=="0"&&second_num[4]=="3"){
						$("#index_main").attr('src','img/g_47.png');
					}else if(second_num[0]=="1"&&second_num[2]=="0"&&second_num[4]=="2"){
						$("#index_main").attr('src','img/g_48.png');
					}else if(second_num[0]=="1"&&second_num[2]=="0"&&second_num[4]=="1"){
						$("#index_main").attr('src','img/g_49.png');
					}else if(second_num[0]=="1"&&second_num[2]=="0"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_50.png');
					}else if(second_num[0]=="0"&&second_num[2]=="3"&&second_num[4]=="3"){
						$("#index_main").attr('src','img/g_5.png');
					}else if(second_num[0]=="0"&&second_num[2]=="3"&&second_num[4]=="2"){
						$("#index_main").attr('src','img/g_51.png');
					}else if(second_num[0]=="0"&&second_num[2]=="3"&&second_num[4]=="1"){
						$("#index_main").attr('src','img/g_52.png');
					}else if(second_num[0]=="0"&&second_num[2]=="3"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_53.png');
					}else if(second_num[0]=="0"&&second_num[2]=="2"&&second_num[4]=="3"){
						$("#index_main").attr('src','img/g_54.png');
					}else if(second_num[0]=="0"&&second_num[2]=="2"&&second_num[4]=="2"){
						$("#index_main").attr('src','img/g_55.png');
					}else if(second_num[0]=="0"&&second_num[2]=="2"&&second_num[4]=="1"){
						$("#index_main").attr('src','img/g_56.png');
					}else if(second_num[0]=="0"&&second_num[2]=="2"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_57.png');
					}else if(second_num[0]=="0"&&second_num[2]=="1"&&second_num[4]=="3"){
						$("#index_main").attr('src','img/g_58.png');
					}else if(second_num[0]=="0"&&second_num[2]=="1"&&second_num[4]=="2"){
						$("#index_main").attr('src','img/g_59.png');
					}else if(second_num[0]=="0"&&second_num[2]=="1"&&second_num[4]=="1"){
						$("#index_main").attr('src','img/g_60.png');
					}else if(second_num[0]=="0"&&second_num[2]=="1"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_61.png');
					}else if(second_num[0]=="0"&&second_num[2]=="0"&&second_num[4]=="3"){
						$("#index_main").attr('src','img/g_62.png');
					}else if(second_num[0]=="0"&&second_num[2]=="0"&&second_num[4]=="2"){
						$("#index_main").attr('src','img/g_63.png');
					}else if(second_num[0]=="0"&&second_num[2]=="0"&&second_num[4]=="1"){
						$("#index_main").attr('src','img/g_64.png');
					}else if(second_num[0]=="0"&&second_num[2]=="0"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_65.png');
					}
				}else if(first_num=="2"){
					$("#index_top").attr('src','img/w_index.png');
					if(second_num[0]=="3"&&second_num[2]=="3"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_66.png');
					}else if(second_num[0]=="3"&&second_num[2]=="2"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_67.png');
					}else if(second_num[0]=="3"&&second_num[2]=="1"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_68.png');
					}else if(second_num[0]=="3"&&second_num[2]=="0"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_69.png');
					}else if(second_num[0]=="2"&&second_num[2]=="3"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_70.png');
					}else if(second_num[0]=="2"&&second_num[2]=="2"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_71.png');
					}else if(second_num[0]=="2"&&second_num[2]=="1"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_72.png');
					}else if(second_num[0]=="2"&&second_num[2]=="0"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_73.png');
					}else if(second_num[0]=="1"&&second_num[2]=="3"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_74.png');
					}else if(second_num[0]=="1"&&second_num[2]=="2"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_75.png');
					}else if(second_num[0]=="1"&&second_num[2]=="1"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_76.png');
					}else if(second_num[0]=="1"&&second_num[2]=="0"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_77.png');
					}else if(second_num[0]=="0"&&second_num[2]=="3"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_78.png');
					}else if(second_num[0]=="0"&&second_num[2]=="2"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_79.png');
					}else if(second_num[0]=="0"&&second_num[2]=="1"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_80.png');
					}else if(second_num[0]=="0"&&second_num[2]=="0"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_81.png');
					}
				}else if(first_num=="1"){
					$("#index_top").attr('src','img/w_index.png');
					if(second_num[0]== 3 && second_num[2]=="0"&& second_num[4]=="0"){
						$("#index_main").attr('src','img/g_82.png');
					}else if(second_num[0]=="2"&&second_num[2]=="0"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_83.png');
					}else if(second_num[0]=="1"&&second_num[2]=="0"&&second_num[4]=="0"){
						$("#index_main").attr('src','img/g_84.png');
					}else if(second_num[0]== 0 &&second_num[2]== 0 &&second_num[4]== 0){
						$("#index_main").attr('src','img/g_85.png');
					}
				}else if(first_num=="0"){
					$("#index_top").attr('src','img/w_index.png');
					$("#index_main").attr('src','img/g_86.png');
				}
				addCookie('user_integral',data.data.user_integral);      //现有积分
				addCookie('shop_integral',data.data.shop_integral);      //购物花费积分
				addCookie('send_integral',data.data.send_integral);      //赠送花费积分
				addCookie('is_apply',data.data.is_apply);                //是否激活
				$("#shop").click(function(){
					if($("#shop").attr('href')!='realuser_change.html'){
						alert('您的推荐用户人数不够，账号暂未激活积分');
					}
				});
				
			}else{
				
			};
		}
	});
})