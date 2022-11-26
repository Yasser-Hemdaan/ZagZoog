window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (currentScrollPos == 0) {
      document.getElementById("navbar").style.top = "0";     
      document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0)";
      document.getElementById("navbar").style.height = "5rem";
      document.getElementById("navbar").style.transition = "3s";
      
  } else {
      document.getElementById("navbar").style.top = "0";
      document.getElementById("navbar").style.backgroundColor = "black";
      document.getElementById("navbar").style.height = "2.8rem";
      document.getElementById("navbar").style.transition = "3s";      
  }
   
    if (currentScrollPos == 0) {
    document.getElementById("myBtn").style.display = "none";
  } else {
    document.getElementById("myBtn").style.display = "block";
  }
    
}

function moveTopMapDetails(){
    document.getElementById("mapCaption").style.top="0";
    document.getElementById("mapCaption").style.transition="1.5s";
    document.getElementById("mapCaption").style.fontSize="2.5rem";
    document.getElementById("mapCaption").style.backgroundColor="rgba(0,0,0,0.875)";
    document.getElementById("mapCaption").style.height="21%";
    document.getElementById("mapCaptionHeader").style.fontSize="2.5rem";
    document.getElementById("mapCaptionParagraph").style.visibility="hidden";
    document.getElementById("mapCaptionParagraph").style.transitionDelay="0s";  
    document.getElementById("mapData").style.color="red"; 
    document.getElementById("mapData").style.visibility="visible";
    document.getElementById("mapData").style.bottom="3%";
    document.getElementById("mapCaption").style.marginBottom="7.5%";
}

function moveDownMapDetails(){
    document.getElementById("mapCaption").style.top="30%";
    document.getElementById("mapCaption").style.transition="1.5s";
    document.getElementById("mapCaption").style.fontSize="2.5";
    document.getElementById("mapCaption").style.backgroundColor="rgba(0,0,0,0.75)";
    document.getElementById("mapCaption").style.height="34%";
    document.getElementById("mapCaptionParagraph").style.visibility="visible";
    document.getElementById("mapCaptionParagraph").style.transitionDelay="1.5s";
    document.getElementById("mapData").style.visibility="hidden";
}

(function ($) {
  "use strict";

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 10) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  // Initiate the wowjs animation library
  new WOW().init()

  
  // Porfolio isotope and filter
  var TechIsotope = $('.Tech-container').isotope({
    itemSelector: '.Tech-item',
    layoutMode: 'fitRows'
  });

  $('#Tech-flters li').on( 'click', function() {
    $("#Tech-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    TechIsotope.isotope({ filter: $(this).data('filter') });
  });

    $(".infoBtn").click(function(){
    if(this.id=="Yasser"){
        $("#Name").html("Yasser");
        $("#star4").removeClass("fa fa-star-half-full");
        $("#star4").addClass("fa fa-star checked");
        $("#Date").html("20/08/2018");
    }
    if(this.id=="Ahmed"){
        $("#Name").html("Ahmed");
        $("#star4").removeClass("fa fa-star-half-full");
        $("#star4").addClass("fa fa-star checked");
        $("#Date").html("16/01/1995");
    }
    if(this.id=="Mona"){
        $("#Name").html("Mona");
        $("#star4").removeClass("fa fa-star-half-full");
        $("#star4").addClass("fa fa-star-o");
        $("#Date").html("20/05/2005");
    }
  });
    
    
  // Brands carousel (uses the Owl Carousel library)
  $(".Brands-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
    }
  });

})(jQuery);

