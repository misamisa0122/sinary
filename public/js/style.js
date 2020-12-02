  
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
  
  