
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
    /**
     * @function init 初始化页面里面的所有方法
     */
    init: function() {
        // this.gotoTop()
        this.handleNavigationIsExpand()
        this.handleOpenNavigationItem()
    }
}
var base = new Base()
$(function(){
	base.init();
})