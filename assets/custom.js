/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 */

/*
* Disable buy now, add to card if there are no values on items
*/


document.addEventListener('variant:changed', function(event) {
	var variant = event.detail.variant; // Gives you access to the whole variant details
  	let type = variant.title.replace(/\s/g, "_").toLowerCase();
  	setupLeftSideImages(type);
});


var mobileSlider = document.querySelector('.mobile-slider');
var flkty = new Flickity( mobileSlider, {
  // options
  prevNextButtons: false,
  pageDots: true,
  adaptiveHeight: true,
  watchCSS: true,
  dragThreshold: 8,
  arrowShape: {"x0": 20, "x1": 60, "y1": 40, "x2": 60, "y2": 35, "x3": 25}
});


let currentVariant = document.getElementsByClassName('ProductForm__SelectedValue');
currentVariant = currentVariant[0].innerHTML.replace(/\s/g, "_").toLowerCase();
setupLeftSideImages(currentVariant);



function setupLeftSideImages(type) {

  let leftSideImages = document.getElementsByClassName('Product__SlideshowNavScroller');
  let leftSideImagesThumbnail = leftSideImages[0].childNodes;
  let leftSideImagesDots = leftSideImages[1].childNodes;


  for(i = 0; i < leftSideImagesThumbnail.length; i++) {
   	(leftSideImagesThumbnail[i].classList.contains(type) || leftSideImagesThumbnail[i].classList.contains('models'))
    	? leftSideImagesThumbnail[i].classList.remove('d-none')
    	: leftSideImagesThumbnail[i].classList.add('d-none');
  }

  for(e = 0; e < leftSideImagesDots.length; e++) {
    if(leftSideImagesDots[e].classList)
     (leftSideImagesDots[e].classList.contains(type) || leftSideImagesDots[e].classList.contains('models'))
      	? leftSideImagesDots[e].classList.remove('d-none')
      	: leftSideImagesDots[e].classList.remove('d-none');
  }

  let mainImages = document.getElementsByClassName('Product__Slideshow ');
  mainImages = mainImages[0].childNodes;


  /*
  * For Desktop Use
  */
  for(x = 0; x < mainImages.length; x++) {
    if(mainImages[x].classList)
      (mainImages[x].classList.contains(type) || mainImages[x].classList.contains('models'))
      	? mainImages[x].classList.remove('d-none')
      	: mainImages[x].classList.add('d-none');
  }

  /*
  * For Mobile Use
  */
  let flickity_slider = document.querySelector('.flickity-slider');
  var mobileSlider = document.querySelector('.mobile-carousel');

  mobileSlider.classList.remove('flickity-enabled', 'is-draggable');
  mobileSlider.removeAttribute('tabindex');
  mobileSlider.innerHTML = '';

  try {
    for(e = 0; e < flickity_slider.children.length; e++) {
       if(flickity_slider.childNodes[e].classList
          && flickity_slider.childNodes[e].classList.contains(type)
          || flickity_slider.childNodes[e].classList.contains('models')) {

         flickity_slider.childNodes[e].classList.remove('d-none');
         mobileSlider.appendChild(flickity_slider.childNodes[e].cloneNode(true))
       }
    }
  } catch (e) {
    console.log("Mobile flickity error");
  } finally {

  }

  setupMobileSlider(mobileSlider.children);


}

function setupMobileSlider(elements) {

  try {
    let flickity_slider = document.getElementsByClassName('flickity-slider')[1].childNodes;
    flkty.remove(flickity_slider);

    // append
    flkty.append(elements);

    // scroll
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (e) {
    console.log(e);
  } finally {

  }

}

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
