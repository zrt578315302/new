/* ************************************** 页面跳转保持参数 ************************************** */
var __userId = __getParam(document.location.href, "userId");
var __reqId = __getParam(window.location.href, 'reqId');
var __school = __getParam(window.location.href, 'school');
var __power = {};
var __session={
	userTel:__getParam(window.location.href, 'userTel'),
	userName : __getParam(window.location.href, 'userName'),
	userType :__getParam(window.location.href, 'userType'),
	per :__getParam(window.location.href, 'per'),
	openId :__getParam(window.location.href, 'openId')
}
var cosPath = "http://192.168.6.5:8080/wcvote/";
//静态页面地址
//var __path="../../../";
//var img_path="../../"
//后台数据访问
var __path="http://vote2.5260wawa.com/";
var img_path="http://wcvoteh.5260wawa.com/eventvote/"
var __method = {
	activityInfo:__path+"eventvote/voteControl/activityInfo",
	adminControl_getAll:__path+"eventvote/adminControl/getAll",
	adminControl_getFail:__path+"eventvote/adminControl/getFail",
	adminControl_deleteById:__path+"eventvote/adminControl/deleteById",
	adminControl_approval:__path+"eventvote/adminControl/approval",
	uploading:__path+"/eventvote/uploading",
	signUp:__path+"eventvote/voteControl/signUp",
	getApplyById:__path+"eventvote/voteControl/getApplyById",
	updateApply:__path+"eventvote/voteControl/updateApply",
	voting:__path+"eventvote/voteControl/voting",
	getOpenId:__path+"eventvote/share/getOpenId",
	login:__path+"eventvote/adminControl/login",
	updateAnnouncement:__path+"eventvote/adminControl/updateAnnouncement",
	getAnnouncement:__path+"eventvote/voteControl/getAnnouncement"
}

//ajax 全局设置
$.ajaxSetup({
    type: "post",
    cache: false,
    data: {
        userId: __userId,
//      userTel:__session.userTel,
//      userName:__session.userName,
//      userType:__session.userType,
//      per:__session.per,
//      openId:__session.openId
    },
    dataType: 'json'
})

/* 获取url的参数值，没有返回空 */
function __getParam(url, key) {
    var reg = new RegExp("[&?]" + key + "=([^&#?]*)", "i");
    var m = url.match(reg);
    return (m ? m[1] : "");
}

/* 失败信息 */
function responseError(response) {

}

var stringify = function(obj) {
    //如果是IE8+ 浏览器(ff,chrome,safari都支持JSON对象)，使用JSON.stringify()来序列化
    if (window.JSON) {
        return JSON.stringify(obj);
    }
    var t = typeof(obj);
    if (t != "object" || obj === null) {
        // simple data type
        if (t == "string") obj = '"' + obj + '"';
        return String(obj);
    } else {
        // recurse array or object
        var n, v, json = [],
            arr = (obj && obj.constructor == Array);

        // fix.
        var self = arguments.callee;

        for (n in obj) {
            v = obj[n];
            t = typeof(v);
            if (obj.hasOwnProperty(n)) {
                if (t == "string") v = '"' + v + '"';
                else if (t == "object" && v !== null)
                // v = jQuery.stringify(v);
                    v = self(v);
                json.push((arr ? "" : '"' + n + '":') + String(v));
            }
        }
        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
    }
};

jQuery.prototype.serializeObject = function(must) {
    var obj = new Object();
    var flag = false;
    $.each(this.serializeArray(), function(index, param) {
        if (!(param.name in obj)) {
            if (must && $.trim(param.value) == "") {
                if (param.name != "concern") {
                    // 不等于建议关注点 再让flag = true,建议关注点不加入判断
                    flag = true;
                }
            }
            obj[param.name] = param.value || "";
        }
    });
    if (flag) {
        return false;
    }
    return obj;
};

function gotoHtml(url) {
    window.open(url, "_blank");
}

/* 快速构建标签
	nodeName	div, span, img等
	
	attributes	（可省略）一个对象。设定标签属性(id, className)，自定义属性。
					innerHTML放入这里
					“事件”(onclick等)也放入这里
					
	style		（可省略）一个对象。设定各css样式
 */
function __buildNode(nodeName, attributes, style) {
    var result = document.createElement(nodeName);
    if (typeof(attributes) == 'object') {
        for (var v in attributes) {
            switch (v) {
                case 'id':
                case 'src':
                case 'href':
                case 'className':
                case 'innerHTML':
                    result[v] = attributes[v];
                    break;
                default:
                    if (v.toLowerCase().indexOf('on') == 0) {
                        result[v] = attributes[v];
                    } else {
                        result.setAttribute(v, attributes[v]);
                    }
                    break;
            }
        }
    }
    if (typeof(style) == 'object') {
        for (var v in style) {
            result.style[v] = style[v];
        }
    }
    return result;
}

function closeWindow() {
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") != -1) {
        window.open('about:blank', '_self', '');
        window.close();
    } else {
        window.close();
    }
}

//给不能使用H5 占位符的文本框兼容
function placeholder(nodes) {
    if (nodes.length && !("placeholder" in document.createElement("input"))) {
        nodes.prev().show().click(function() {
            $(this).next('input')[0].focus();
        });
        nodes.focus(function() {
            $(this).prev().hide();
        })
        nodes.blur(function() {
            if ($(this).val() == '') {
                $(this).prev().show();
            }
        })
    }
}