
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
            autoplay: true,
            loop: true,
            // autoplayDisableOnInteraction : false,
            // resistanceRatio : 0,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    console.log(index, className)
                    return '<span class="' + className + '"></span>';
                },
            },
        });
        if($('.banner-swiper .swiper-slide').length < 2){
            $('.swiper-pagination').hide();
        }
    },
    /**
     * @function productSwiper 初始化产品轮播
     */
    productSwiper: function() {
        console.log('初始化首页轮播')
        var banner_swiper = new Swiper('.product-swiper', {
            speed:500,
            autoplay: false,
            loop: false,
            // autoplayDisableOnInteraction : false,
            // resistanceRatio : 0,
            pagination: {
                el: '.product-swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    console.log(index, className)
                    return '<span class="' + className + '"></span>';
                },
            },
        });
        if($('.product-swiper .swiper-slide').length < 2){
            $('.product-swiper-pagination').hide();
        }
    },
    /**
     * @function solutiontSwiper 初始化产品轮播
     */
    solutiontSwiper: function() {
        console.log('初始化首页轮播')
        var banner_swiper = new Swiper('.solution-swiper', {
            // speed:500,
            // autoplay: true,
            // loop: true,
            slidesPerView: 'auto',
            // spaceBetween: 10,
            // autoplayDisableOnInteraction : false,
            // resistanceRatio : 0,
            pagination: {
                el: '.solution-swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    console.log(index, className)
                    return '<span class="' + className + '"></span>';
                },
            },
        });
        // if($('.product-swiper .swiper-slide').length < 2){
        //     $('.product-swiper-pagination').hide();
        // }
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
        this.productSwiper()
        this.solutiontSwiper()
        this.gotoTop()
    }
}
var home = new Home()
$(function(){
	home.init();
})