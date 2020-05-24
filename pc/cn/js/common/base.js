
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
    /**
     * @function init 初始化页面里面的所有方法
     */
    init: function() {
        this.gotoTop()
    }
}
var base = new Base()
$(function(){
	base.init();
})