$(document).ready(function(){
    $('.myname').click(function(){
        $(this).closest('header').find('.contents').slideToggle();
        $(this).closest('header').siblings().fadeIn("slow");
      });

    $('.boxname').click(function(){
        $(this).closest('section').find('.contents').slideToggle();
      });

  });