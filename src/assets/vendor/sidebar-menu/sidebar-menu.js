

 $('.accordion').on('click', '.title', function(event) {
        event.preventDefault();
        $(this).siblings('.accordion .active').next().slideUp('normal');
        $(this).siblings('.accordion .title').removeClass("active");
        
        if($(this).next().is(':hidden') == true) {
            $(this).next().slideDown('normal');
            $(this).addClass("active");
        }
    });
    $('.accordion .content').hide();
    $('.accordion .active').next().slideDown('normal');
    

// for hover dropdown menu
  $('ul.nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });













	
