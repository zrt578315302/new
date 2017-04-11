  var a=0;
    var b;
     $('.page-item').mouseover(function(){
         var b=$('.page-item').filter('.page-current').index()
         a=$(this).index();
         if(a!==b){
         
         $('.bian-1').eq(b).fadeOut(300);
         $('.bian-1').eq(a).fadeIn(300);
            $('.page-item').removeClass('page-current')
            $('.page-item').eq(a).addClass('page-current')
            
         }
         
     })
   $('.huan').mouseover(function(){
       $('.angle-btn').show()  
       
   })
    $('.huan').mouseout(function(){
       $('.angle-btn').hide()  
       
   })
    $('.next-btn').click(function(){
        qian();
    })
    $('.prev-btn').click(function(){
        hou();
    })
     function qian(){
         
         var b=$('.page-item').filter('.page-current').index();
         a=b;
         b=++b;
          if(b<3) {
         go(a,b)
          }else{
              b=0;
              go(a,b)
              
          }
         
     }
    function hou(){
         
         var b=$('.page-item').filter('.page-current').index();
         a=b
         b=--b;
          if(b>-1) {
         go(a,b)
          }else{
              b=2;
             go(a,b)
              
          }
         
     }
    function go(a,b){
        $('.bian-1').eq(a).fadeOut(300);
         $('.bian-1').eq(b).fadeIn(300);
            $('.page-item').removeClass('page-current')
            $('.page-item').eq(b).addClass('page-current')
        
    }
      /* $('.fl').mouseover(function() {
        var index = $(this).index();
        $('.g-tab-list').css('display', 'none')
        $('.g-tab-list').eq(index+1).css('display', 'block');




    })*/
       function turn(x,y) {
           $(x).mouseover(function(){
               var index=$(this).index();
               $(y).css('display', 'none')
               $(y).eq(index+1).css('display', 'block');
           })
           
           
       }
turn('.fz-child','.g-tab-list');
    