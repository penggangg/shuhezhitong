
function Base() {
}
Base.prototype = {
    /**
     * @function gotoTop 回到顶部
     */
    gotoTop: function() {
        $('#gotoTop').click(function(){
                $('html ,body').animate({scrollTop: 0}, 300);
            return false;
        });
    },
    showMast: function() {
        var close = $('<span class="close">X</span>')
        $('.online').click(function() {
            if ($('.close').length) {
    
            } else {
                $('.form').eq(0).append(close)
            }
            $('.mask').show()
        })
    },
    closeMask: function() {
        $('.form').on('click', '.close', function() {
            $('.mask').hide()
        })
    },
    /**
     * @function formSubmit 表单提交事件
     */
    formSubmit: function() {
        $('.submitBtn').click(function(){
            var company = $('.company').val()
            var email = $('.email').val()
            var message = $('.remark').val()
            var mobile = $('.tel').val()
            var name = $('.name').val()
            console.log(11111)
            $.ajax({
                type: 'post',
                async: false,
                url: "http://api/shuhezhitong.com/sales/insert",
                data: { company, email, message, mobile, name},
                dataType: 'jsonp',
                jsonp:"jsoncallback",
                jsonpCallback:"callback",
                success: function (data) {
                    console.log(data)
                }
            });
        })
    },
    /**
     * @function init 初始化页面里面的所有方法
     */
    init: function() {
        this.gotoTop()
        this.formSubmit()
        this.showMast()
        this.closeMask()
    }
}
var base = new Base()
$(function(){
	base.init();
})