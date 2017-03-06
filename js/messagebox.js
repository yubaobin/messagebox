/**
 * author: ybb 
 * 消息提示框
 * vesion: 1.0.1
 *  
 */
;(function(global) {
    "use strict";
    global = global ? global : window;

    let MsgBox = function(el,options) {
        this._init(el,options);
    };

    MsgBox.prototype = {
        _init: function(el,options,callback_show,callback_hide) {
            let me = this;
            me.$el = el;
            me.callback_show = callback_show;
            me.callback_hide = callback_hide;
            if(el){
                me.msgbox = _createOneEl('div',me.$el); 
            }else {
                me.msgbox = _createEl('div'); 
            }
            //默认选项
            me.options = {
                height:'30px',
                message: "",
                bgColor:"rgba(39,174,96, 0.6)",
                color:"#FFF",                
                top:"40%",
                fontSize:'16px',
                lineHeight:'30px',
                autoHide:false,
                border:""
            }
            for (let i in options) {
                me.options[i] = options[i];
            }
            if(!me.$el) {
                throw new Error("Can not find the element!");
            }
            me.msgbox.style.width = '100%';
            me.msgbox.style.position = 'fixed';
            me.msgbox.style.textAlign = 'center';
            me.msgbox.style.display = 'none';
            me.msgbox.style.opacity = '0';     
            me.msgbox.style.transition = 'all 600ms';       
            me._refresh();
        },

        _refresh: function(){
            let me = this;
            me.msgbox.style.top = me.options.top;
            me.msgbox.style.color = me.options.color;
            me.msgbox.style.fontSize = me.options.fontSize;
            me.msgbox.style.lineHeight = me.options.lineHeight;
            me.msgbox.innerHTML = `<span style="padding:5px 10px;background-color:${me.options.bgColor};">${me.options.message}</span>`;
        },

        show: function(){
            let me = this;
            me.msgbox.style.display = '';
            setTimeout(function(){
                me.msgbox.style.opacity = 1;
                if(me.options['shown'] && typeof me.options['shown'] == "function"){
                    me.options['shown'].call(null);
                }
            },20)
            if(me.options.autoHide){//自动隐藏
                setTimeout(function(){
                    me.hide();
                },2000);
            }
        },
        //隐藏元素
        hide: function(){
            let me = this;
            me.msgbox.style.opacity = 0;
            setTimeout(function(){
                me.msgbox.style.display = 'none';
                if(me.options['hidden'] && typeof me.options['hidden'] == "function"){
                    me.options['hidden'].call(null);
                }
            },600)
        },
        //移除元素
        remove: function(el){
            el.style.opacity = 0;
            setTimeout(function(){
                document.querySelector('body').removeChild(el);
            },600);
        },
        setOption: function(options){
            let me = this;
            for (let i in options) {
                me.options[i] = options[i];
            }
            me._refresh();
        },
        
        //绑定事件
        on: function(name,callback){
            let me = this
            if(callback && typeof callback == "function"){
                me.options[name] = callback;
            }
        },

        //解除绑定
        off: function(name){
            let me = this;
            me.options[name] = "";
        }
    };


    //创建唯一元素
    function _createOneEl(tagName,id){
        let tag = document.getElementById(id);
        if(!tag){
            tag = document.createElement(tagName);
            tag.id = id;
            document.querySelector('body').appendChild(tag);
        }
        return tag;
    }
    //创建随机id元素
    // function _createEl(tagName){
    //     let tag = document.createElement(tagName);
    //     tag.id = 'msg' + Math.random().toString().substr(2, 8);
    //     document.querySelector('body').appendChild(tag);
    //     return tag;
    // }

    if (typeof module !== 'undefined' && module.exports) module.exports = MsgBox;
    if (typeof define === 'function') define(function() { return MsgBox; });

    global.MsgBox = MsgBox;

})(this);