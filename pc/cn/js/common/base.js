
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
            var company = $('.company input').val()
            var email = $('.email input').val()
            var message = $('.remark input').val()
            var mobile = $('.tel input').val()
            var name = $('.name input').val()
            if (!name) {
                alert('请填写姓名')
                return false
            }
            if (!mobile) {
                alert('请填写手机号')
                return false
            }
            var phone1Reg = /^1[3456789]\d{9}$/
            if (!(phone1Reg.test(mobile))) {
                alert('请填写正确的联系方式')
                return false
            }
            var phone2Reg = /(\d{4}-)?\d{6,8}/
            if (!(phone2Reg.test(mobile))) {
                alert('请填写正确的联系方式')
                return false
            }
            var params = {
                "company": company, "email": email, "message": message, "mobile": mobile, "name": name
            }
            $.ajax({
                type: 'POST',
                async: false,
                url: "http://api.shuhezhitong.com/sales/insert",
                data: JSON.stringify(params),
                dataType: 'json',
                contentType: "application/json;charset=utf-8",
                success: function (data) {
                    $('.mask').hide()
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