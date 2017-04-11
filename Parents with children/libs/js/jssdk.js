var dataId = __getParam(window.location.href, 'id');
var __openId= __getParam(window.location.href, 'openId');
$.ajax({
    url:'http://vote2.5260wawa.com/eventvote/share/getTicketAndInfo',
    type: 'post',
    dataType: 'json',
    data: {
        applyId: dataId,
        url: encodeURIComponent(location.href),
        openId:__openId
    }
}).done(function (data) {
    var pageName = window.location.href.match(/\/([^\/]+)\/index.html/)[1]; //获取页面名
    var showMenuFlag=false; 
    var url = geturl({
        id: dataId,
        share: "1"
    });
    var title=data.isStart=='0'?"超萌亲子照大赛投票活动开始啦!":"超萌亲子照大赛正在火热报名中!";
    var onMenuShareDate = {
        'timeline': {
            'title': title,
            'link': url,
            'imgUrl': img_path + data.activity_path
        },
        'appMessage': {
            'title': title,
            'link': url,
            'desc': "中华学前教育协会、启蒙号、吾儿网中国幼儿在线联合举办！",
            'imgUrl': img_path + data.activity_path
        }
    }
    switch (pageName) {
        case "index":
        	showMenuFlag=true;
            // default
            break;
        case "childDetails":
        	showMenuFlag=true;
        	var name=data.isOwner=='0'?'我':'TA';
        	var end=data.isStart=='0'?",请投"+name+"一票!":",快来参加吧!";
            onMenuShareDate.timeline.title = name+"是" + data.apply_name + ",编号" + data.number + ",正在参加超萌亲子照大赛" +end ;
            onMenuShareDate.appMessage.title = name+"是" + data.apply_name + ",编号" + data.number + ",正在参加超萌亲子照大赛"  +end;
           /* if (activityChange && rank) {
                $.each(activityChange, function (index, value) {
                    if (parseInt(data.activityId) == parseInt(value)) {
                        onMenuShareDate.timeline.title = data.name + "进入决赛啦，谢谢大家支持!"
                        onMenuShareDate.appMessage.title = data.name + "进入决赛啦，谢谢大家支持!"
                        return false
                    }
                })
            }*/
            break;
        default:
            break;
    }

    wx.config({
        //debug: true,
        appId: data.appId,
        timestamp: data.timestamp,
        nonceStr: data.noncestr,
        signature: data.sign,
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage','hideMenuItems']
    });
    wx.ready(function () {
    	wx.hideMenuItems({
    	    menuList: ["menuItem:copyUrl","menuItem:openWithQQBrowser","menuItem:openWithSafari"] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
    	});
    //if(showMenuFlag){
	        //分享到朋友圈
	        if (typeof (onMenuShareDate) == 'object') {
	            if (typeof (onMenuShareDate.timeline) == 'object') {
	                wx.onMenuShareTimeline({
	                    title: onMenuShareDate.timeline.title,
	                    link: onMenuShareDate.timeline.link,
	                    imgUrl: onMenuShareDate.timeline.imgUrl,
	                    success: function () {
	                    	addShare();
	                    },
	                    cancel: function () {}
	                });
	            }
	
	            // 分享给朋友
	            if (typeof (onMenuShareDate.appMessage) == 'object') {
	                wx.onMenuShareAppMessage({
	                    title: onMenuShareDate.appMessage.title,
	                    desc: onMenuShareDate.appMessage.desc,
	                    link: onMenuShareDate.appMessage.link,
	                    imgUrl: onMenuShareDate.appMessage.imgUrl,
	                    type: onMenuShareDate.appMessage.type,
	                    dataUrl: onMenuShareDate.appMessage.dataUrl,
	                    success: function () {
	                    	addShare();
	                    },
	                    cancel: function () {
	
	                    }
	                });
	            }
	        }
//	    }else{
//	    	document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
//	    	    // 通过下面这个API隐藏右上角按钮
//	    	    WeixinJSBridge.call('hideOptionMenu');
//	    	});
//	    }
    });
    wx.error(function (res) {});
}).fail(function (err) {

});
function addShare(){
	$.ajax({
		url: 'http://vote2.5260wawa.com/eventvote/share/addShareInfo',
		data: {
			openId: __openId,
			id: dataId
		},
		success: function(data) {
			
		}
	});
}
function base64Decode(input) {
    var rv = window.atob(input);
    rv = escape(rv);
    rv = decodeURIComponent(rv);
    return rv;
}

function base64Encode(url) {
    var rv = window.btoa(url);
    return rv;
}

function geturl(params) {
    var Hash = ""
    for (key in params) {
        if (Hash != "") {
            Hash += ("&" + key + "=" + params[key])
        } else {
            Hash += (key + "=" + params[key])
        }
    }
   var redirecturl = encodeURIComponent("http://wx.520wawa.com/mini/eventvote.html?" + Hash); //111*222*333

    //var redirecturl = encodeURIComponent("http://testoss.5260wawa.cn/eventvote/eventhtml/eventvote.jsp?" + Hash); //111*222*333

    var urlBase = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa04873527032bf1d&redirect_uri=" + redirecturl + "&response_type=code&scope=snsapi_base&state=123#wechat_redirect";

    // var urlBase = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxca8c7274c6192ae6&redirect_uri=" + redirecturl + "&response_type=code&scope=snsapi_base&state=123#wechat_redirect";
    return urlBase;
}
