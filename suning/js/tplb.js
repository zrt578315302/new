 var length,
     a1 = 0,
     b1,
     lunbo = false, //是否已经开始轮播
     t = 3000; //轮播时间间隔

 length = $('yc').length;
 $('.yc:not(:first)').hide();
 $('.hong:first').addClass('yanse');
 $('.anniu').hide()
 $('#pic').hover(function() {

     $('.anniu').show();
 }, function() {
     $('.anniu').hide();

 });
 $('.anniu').hover(function() {
     $('.anniu').fadeTo(100, 0.6)
 }, function() {
     $('.anniu').fadeTo(100, 1)
 });
 $('.hong').mouseover(function() {

     var a1 = $('.hong').filter('.yanse').index();
     b1 = $(this).index();
     if (a1 !== b1) {
         play(a1, b1);
         console.log(a1);
         
     }

 })

 function play(a1, b1) {
     $('.yc').eq(a1).fadeOut(200).parent().children().eq(b1).fadeIn(200);
     $('.hong').removeClass('yanse');
     $('.hong').eq(b1).addClass('yanse');
 }
 $('#an2').click(function() {
     next();
 })

 $('#an1').click(function() {
     prv();
 })

 function prv() {
     if (!b1) {
         b1 = 0;
         var a1 = b1;
         b1 = --b1;
         play(a1, b1)
     } else {
         var a1 = b1;
         b1 = --b1;
         play(a1, b1)
     }
     if (b1 < 0) {
         b1 = 6;
         var a1 = b1;
         b1 = --b1;
         play(a1, b1)
     }

 }


 function next() {
     if (!b1) {
         b1 = 0;
         var a1 = b1;
         b1 = ++b1;
         play(a1, b1)
     } else {
         var a1 = b1;
         b1 = ++b1;
         play(a1, b1)
     }
     if (b1 > 5) {
         b1 = -1;
         var a1 = b1;
         b1 = ++b1;
         play(a1, b1)
     }

 }

 function lunbo1() {

     setInterval(next, t);

 }
 lunbo1();