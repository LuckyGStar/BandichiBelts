$(function () {
  /*scroll events*/
  var  firstScroll = false;
  var body = $("body");
  $(window).scroll(function(){
    if( $(this).scrollTop() >= 70 ) {
      if(!firstScroll){
         firstScroll = true;
          body.addClass("is-scroll");
      }
      } else {
        if (firstScroll) {
           firstScroll = false;
           body.removeClass("is-scroll")
         }
      }
  });
})
