/*function slideBox(x) {
    var self = $(this)
    var childBox = self.children('.child')
    
    $('.' + x).hover(function() {
        childBox.slideDown()
        self.addClass('tianjia');
    }, function() {
        childBox.slideUp()
        self.removeClass('tianjia');
    })
}

slideBox("ng-site-nav-box")*/
/*function slidedown(x) { 
    var my = $(this);
    var childBox = my.children('.child');
    
    $(x).hover(function(){
        childBox.slideDown();
         my.addClass('tianjia');
                   
    },function(){
        childBox.slideUp();
    my.removeClass('tianjia');
    }
    )




}
slidedown(".ng-site-nav-box");*/


$('.ng-site-nav-box').mouseenter(function() {
    if (!$('.site-nav-child').is(":animated")) {
        $('.site-nav-child').slideDown(200);
    }
    $('.ng-site-nav-box').addClass('tianjia');
    $('.ng-site-nav-box').addClass('kongbai');

})

$('.ng-site-nav-box').mouseleave(function() {
    $('.site-nav-child').slideUp(200);
    $('.ng-site-nav-box').removeClass('tianjia');
    $('.ng-site-nav-box').removeClass('kongbai');

})




$('.shop-handle').mouseenter(function() {
    if (!$('.shop-center-child').is(":animated")) {
        $('.shop-center-child').slideDown(200);
    }
    $('.shop-handle').addClass('tianjia');
    $('.shop-handle').addClass('kongbai');

})

$('.shop-handle').mouseleave(function() {
    $('.shop-center-child').slideUp(200);
    $('.shop-handle').removeClass('tianjia');
    $('.shop-handle').removeClass('kongbai');

})





$('.wddd').mouseenter(function() {
    if (!$('.myorder-child').is(":animated")) {
        $('.myorder-child').slideDown(200);
    }

    $('.myorder-handle').addClass('tianjia');
    $('.myorder-handle').addClass('kongbai');

})

$('.myorder-handle').mouseleave(function() {
    $('.myorder-child').slideUp(200);
    $('.myorder-handle').removeClass('tianjia');
    $('.myorder-handle').removeClass('kongbai');

})



$('.mb-suning').mouseenter(function() {
    if (!$('.mb-down-child').is(":animated")) {
        $('.mb-down-child').slideDown(200);
    }

    $('.app-down-box').addClass('tianjia');
    $('.app-down-box').addClass('kongbai');

})

$('.app-down-box').mouseleave(function() {
    $('.mb-down-child').slideUp(200);
    $('.app-down-box').removeClass('tianjia');
    $('.app-down-box').removeClass('kongbai');

})


$('.khfw').mouseenter(function() {

    if (!$('.service-center-child').is(":animated")) {
        $('.service-center-child').slideDown(200);
    } else {

    }
    $('.service-handle').addClass('tianjia');
    $('.service-handle').addClass('kongbai');

})

$('.service-handle').mouseleave(function() {


    $('.service-center-child').slideUp(200);
    $('.service-handle').removeClass('tianjia');
    $('.service-handle').removeClass('kongbai');

})




$('.wdyg').mouseenter(function() {

    if (!$('.mysuning-child').is(":animated")) {
        $('.mysuning-child').slideDown(200);
    } else {

    }
    $('.mysuning-handle').addClass('tianjia');
    $('.mysuning-handle').addClass('kongbai');

})

$('.mysuning-handle').mouseleave(function() {


    $('.mysuning-child').slideUp(200);
    $('.mysuning-handle').removeClass('tianjia');
    $('.mysuning-handle').removeClass('kongbai');

})