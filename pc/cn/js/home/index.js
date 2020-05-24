
function Home() {
}
Home.prototype = {
    /**
     * @function bannerSwiper 初始化首页轮播
     */
    bannerSwiper: function() {
        console.log('初始化首页轮播')
        var banner_swiper = new Swiper('.banner-swiper', {
            speed:500,
            autoplay: 3000,
            loop: true,
            autoplayDisableOnInteraction : false,
            resistanceRatio : 0,
            pagination : '.swiper-pagination'
        });
        if($('.banner-swiper .swiper-slide').length < 2){
            $('.swiper-pagination').hide();
        }
    },
    /**
     * @function solutionHover 解决方案里hover事件
     */
    solutionHover: function() {
        for (let index = 0; index < $(".solution li").length; index++) {
            (function(i) {
                var element = $(".solution li").eq(i)
                element.hover(function(){
                    element.children('.solutionImg').addClass('hover')
                    element.children('.goto').addClass('hover')
                },function(){
                    element.children('.solutionImg').removeClass('hover')
                    element.children('.goto').removeClass('hover')
                });
            })(index)
        }
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
        console.log('初始化页面')
        this.bannerSwiper()
        this.solutionHover()
        this.gotoTop()
    }
}
var home = new Home()
$(function(){
	home.init();
})