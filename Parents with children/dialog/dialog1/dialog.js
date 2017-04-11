//by : 钱招严

/* options 参数  
    {
          text:[],  //可以是数组 字符串 数字  显示弹窗的内容
          button:{ // 有确定  取消按钮  里面的是函数  点击后需要执行的
                ok:fun,
                cancel:fun
            },
            height:"100px",  // 可以是字符串或者数字  或者 百分比的字符串
            width:"100px"
     }
*/
var dialog = function(options) {
    if (!(this instanceof dialog)) {
        return new dialog.init(options)
    }
}

dialog.init = function(options) {
    var self = this;
    this._wrap = document.createElement('div');

    var wrap = this._wrap;
    wrap.className = "dialog_wrap";

    var transparent_mask = document.createElement('div');
    transparent_mask.className = 'transparent_mask'

    var dialog_content = document.createElement('div');
    dialog_content.className = "dialog_content"

    if (!!options.text) {
        var content_div = document.createElement('div');
        this.content = content_div;
        dialog_content.appendChild(content_div)
        if (options.text instanceof Array) {
            for (var i = 0; i < options.text.length; i++) {
                var p = document.createElement('p');
                p.innerHTML = options.text[i];
                content_div.appendChild(p)
            }
        } else if (typeof options.text == 'string' || typeof options.text == 'number') {
            var p = document.createElement('p');
            p.innerHTML = options.text;
            content_div.appendChild(p)
        }
    }

    if (!!options.button) {
        var divBtn = document.createElement('div');
        var on = document.createElement('div');
        var off = document.createElement('div');
        var ona = document.createElement('span');
        var offa = document.createElement('span');
        offa.onclick = function() {
            self.remove();
            if (!!options.button.cancel) {
                options.button.cancel.call(self)
            }
        }

        ona.onclick = function() {
            self.remove();
            if (!!options.button.ok) {
                options.button.ok.call(self)
            }
        }
        divBtn.className = "dialog_Btn"
        ona.innerHTML = "确 定"
        offa.innerHTML = "取 消"
        on.appendChild(ona)
        off.appendChild(offa)
        divBtn.appendChild(on)
        if(!!options.button.cancel){
        	 divBtn.appendChild(off)
        }    
        dialog_content.appendChild(divBtn)
    } else {
        var delay = options.delay || 2000;
        setTimeout(function() {
            self.remove();
            if (typeof options.success == "function") {
                options.success.call(this)
            }
        }, delay)
    }

    var width = options.width || "75%"
    var height = options.height || "auto"
    if (typeof width == "number") {
        width = width + "px"
    }

    if (typeof height == "number") {
        height = height + "px"
    }

    dialog_content.style.width = width
    dialog_content.style.height = height

    wrap.appendChild(transparent_mask)
    wrap.appendChild(dialog_content)
    document.body.appendChild(wrap)

    //    dialog_content.addEventListener('click', function(eve) {
    //        var eve = window.event || eve;
    //        eve.stopPropagation()
    //    }, false)
    //
    //    document.addEventListener('click', function() {
    //        wrap.style.display = "none";
    //    }, false)

    //    if (typeof options.success == "function") {
    //        options.success.call(this)
    //    }

    return this;
}

dialog.init.prototype = {

    //    隐藏弹窗
    hide: function() {
        this._wrap.style.display = "none"
        return this
    },

    //    移除弹窗
    remove: function() {
        if (this._wrap.remove) {
            this._wrap.remove()
        } else {
            this._wrap.parentNode.removeChild( this._wrap );
        }
        return this
    },

    //     改变提示框文本内容 
    changeText: function(content) {
        var self = this
        if (content instanceof Array) {
            self.content.innerHTML = "";
            for (var i = 0; i < content.length; i++) {
                var p = document.createElement('p');
                p.innerHTML = content[i];
                self.content.appendChild(p)
            }
        }
        return this
    }

}