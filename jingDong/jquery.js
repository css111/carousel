$(function(){
   var count=0;
   $('img').eq(0).show().siblings().hide();
   $('li').eq(0).css('background','red').siblings().css('background','gray');
   var timer=setInterval(run,3000);
   function run(){
       count++;
       if(count==6){
           count=0;
       }
       $('img').eq(count).fadeIn(500).siblings().fadeOut(500);
       $('li').eq(count).css('background','red').siblings().css('background','gray');


   }
   $('#contain').hover(function(){
       clearInterval(timer);
   },function(){
       timer=setInterval(run,3000);
   });
   $('li').mouseenter(function(){
       count=$(this).index();
       $('img').eq(count).fadeIn(300).siblings().fadeOut(300);
       $('li').eq(count).css('background','red').siblings().css('background','gray');
   });
   $('#button1').click(function(){
       count--;
       if(count<0){
           count=5;
       }
       $('img').eq(count).fadeIn(300).siblings().fadeOut(300);
       $('li').eq(count).css('background','red').siblings().css('background','gray');
   });
    $('#button2').click(function(){
        count++;
        if(count>5){
            count=0;
        }
        $('img').eq(count).fadeIn(300).siblings().fadeOut(300);
        $('li').eq(count).css('background','red').siblings().css('background','gray');
    });

});