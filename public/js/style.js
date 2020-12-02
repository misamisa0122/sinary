/*スムーズスクロール*/
$(function(){
    $('a[href^="#"]').click(function(){
      var adjust = -20;
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top + adjust;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });
  
  /*ページトップに戻るボタン*/
  $(function() {
      var pagetop = $('#page_top');
      $(window).scroll(function () {
          if($(this).scrollTop() > 300){
              pagetop.fadeIn();
          }else {
              pagetop.fadeOut();
          }
      });
  });
  
  /*メニューナビボタン*/
  $('.nav_button').on('click',function(){
      if( $(this).hasClass('active') ){
          $(this).removeClass('active');
          $('.nav_wrap').addClass('close').removeClass('open');
          $('html body').removeClass('overflow');
      }else {
          $(this).addClass('active');
          $('.nav_wrap').addClass('open').removeClass('close');
          $('html body').addClass('overflow');
      }
      return false;
  });
  
  
  $('.shop_jump').on('click', function() {
      if( $('.nav_button').hasClass('active') ){
          $('.nav_button').removeClass("active");
          $('.nav_wrap').addClass('close').removeClass('open');
          $('html body').removeClass('overflow');
      }else{
          $(this).addClass('active');
          $('.nav_wrap').addClass('open').removeClass('close'); 
      }
  });
  
  