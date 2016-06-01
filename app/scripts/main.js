'use strict';

console.log('Go go go!');


/********************************

  When menu parent is clicked, toggle an 'active' to display nested-menu

*********************************/

jQuery.noConflict();

(function( $ ) {
  $('.menu-parent').on('click', function(e) {
      $(this).toggleClass('active');
      $(this).next( '.nested-menu' ).toggleClass('active');

      if ($(this).find('.fa-caret-right').length) {
        $(this).find('i').removeClass('fa-caret-right');
        $(this).find('i').addClass('fa-caret-down');
      }
      else {
        $(this).find('i').addClass('fa-caret-right');
      }
      e.preventDefault();
    });
})(jQuery);



/********************************

  Scroll to top

*********************************/

(function( $ ) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });
})(jQuery);


/********************************

  Tabs

*********************************/

(function( $ ) {
  $('ul.tabs').each(function(){
    // For each set of tabs, we want to keep track of
    // which tab is active and its associated content
    var $active, $content, $links = $(this).find('a');

    // If the location.hash matches one of the links, use that as the active tab.
    // If no match is found, use the first link as the initial active tab.
    $active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
    $active.addClass('active');

    $content = $($active[0].hash);

    // Hide the remaining content
    $links.not($active).each(function () {
      $(this.hash).hide();
    });

    // Bind the click event handler
    $(this).on('click', 'a', function(e){
      // Make the old tab inactive.
      $active.removeClass('active');
      $content.hide();

      // Update the variables with the new link and content
      $active = $(this);
      $content = $(this.hash);

      // Make the tab active.
      $active.addClass('active');
      $content.show();

      // Prevent the anchor's default click action
      e.preventDefault();
    });
  });
})(jQuery);
