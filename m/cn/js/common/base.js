
function Base() {
}
Base.prototype = {
    /**
     * @function handleOpenNavigationItem 展开导航栏
     */
    handleNavigationIsExpand: function() {
        $('.navigation-button').on('touchstart', function() {
            var t = $(this),
                    status = false,
                    nav = $('.navigation-wrapper'),
                    height = $(window).height() - $('#header').height(),
                    body = $('body');

            status = ( t.hasClass('active') ? true : false);
            console.log(status)
            if(status) {
                nav.animate({ 'height' : '0' }, function() {
                    nav.css('display', 'none');
                    body.css({'overflow': 'auto', 'height' : 'auto'});
                });
                t.removeClass('active');
            } else {
                t.addClass('active');
                nav.css('display', 'block').animate({ 'min-height' : height + 'px' });
                body.css({'overflow': 'hidden', 'height' : '100%'});
            }
        })
    },
    /**
     * @function handleOpenNavigationItem 展开二级菜单
     */
    handleOpenNavigationItem: function() {
        $('.navigation-item').on('touchstart', function(e) {
            console.log(123123)
            e.stopPropagation();
            var list     = $(this).children('.navigation-list');
            var height   = 0;

            console.log(list)
            // 无子级不执行
            if( list.length !== 0 ) {

                // 计算展开的高度
                height   = $(this).children('a').height() * list.find('.navigation-item').length;


                if( list.hasClass('active') ) {
                    list.css('display', 'none').animate({ 'height' : 0 }).removeClass('active');
                    list.siblings('i.icondown').removeClass('rotate');
                } else {
                    setTimeout(() => {
                        $(this).siblings('.navigation-item').find('.navigation-list').css('display', 'none').animate({ 'height' : 0 }).removeClass('active');
                        list.css('display', 'block').addClass('active').animate({ 'height' : height + 'px' });
                        list.siblings('i.icondown').addClass('rotate');
                    }, 300);
                };

            };

        });
    },
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
        $('.online').click(function() {
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
        // this.gotoTop()
        this.handleNavigationIsExpand()
        this.handleOpenNavigationItem()
        this.formSubmit()
        this.closeMask()
        this.showMast()
    }
}
var base = new Base()
$(function(){
	base.init();
})