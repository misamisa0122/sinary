  
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
  
/*ページトップ*/

  $(function(){
    var pagetop = $('#page_top');
    // ボタン非表示
    pagetop.hide();
  
    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
       }
    });
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });
  