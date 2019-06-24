$(document).ready(function() {

  // navbar scroll
  $(window).scroll(function() {
    if($(window).scrollTop() >= 400) {
      $('.navbar').css({
        'backgroundColor' : '#000',
        'padding' : '.5rem'
      })
    } else {
      $('.navbar').css({
        'backgroundColor' : 'transparent',
        'padding' : '2.5rem 1rem'
      })
    }
  })

  $('.projects a').click(function(e) {
    e.preventDefault();
  })
  // filter for projects

  $('.grid').isotope({

  itemSelector: '.col-lg-4',
  layoutMode: 'fitRows'
});
$('.filters ul li').click(function () {

  $('.filters ul li').removeClass('active');
  $(this).addClass('active');

  var selector = $(this).attr('data-filter');
  $('.grid').isotope({
    filter: selector
  });
  return false;

});



})


  // toggle image for header
  var myElement = document.getElementById('header'),
  myImgs = [
    'img/home_artist_slider_slide2.jpg',
    'img/home_artist_slider_slide1.jpg'
  ],
  secondElement = document.getElementById('onimg');

  function changeImage(myElement, myImgs) {
    'use strict';
    setInterval(function () {
      var myRandomImg = Math.floor(Math.random() * myImgs.length);
      myElement.style.cssText = 'background-image: url(' + myImgs[myRandomImg] + ')';

      if(myElement.style.backgroundImage === 'url("img/home_artist_slider_slide2.jpg")') {
        secondElement.setAttribute('src', 'img/home_artist_slider_slide_on.png');
      } else {
        secondElement.setAttribute('src', 'img/index.png');

      }

  }, 3000)
  }

  changeImage(myElement, myImgs);
