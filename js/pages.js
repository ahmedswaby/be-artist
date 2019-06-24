// var countDiv = document.getElementById('number'),
//     secondDiv = document.getElementById('clients'),
//     number = 0,
//     countDown,
//     countInterval = setInterval(function() {
//       'use strict';
//       countDown();

//     },10);

//     function countDown() {

//       number <= 36 ? countDiv.textContent = number++ : clearInterval(countInterval)


//

// import counterUp from 'counterup2'

// const el = document.querySelector( '.counter' )

// // Start counting, do this on DOM ready or with Waypoints.
// counterUp( el, {
//     duration: 4000,
//     delay: 16,
// } )
// var waypoint = new Waypoint({
//   element: document.getElementById('waypoint'),
//   handler: function(direction) {
//     console.log('Scrolled to waypoint!')
//   }
// })

// $('.counter').counterUp({
//   delay: 10,
//   time: 2000
// });


// // On DOM ready.
// require( 'waypoints/lib/noframework.waypoints.js' )
// const el = document.querySelector( '.counter' )
// new Waypoint( {
//     element: el,
//     handler: function() { 
//         counterUp( el ) 
//         this.destroy()
//     },
//     offset: 'bottom-in-view',
// } )



$(document).ready(function () {

  // navbar scroll

  $(window).scroll(function () {


    if ($(window).scrollTop() >= 400) {
      $('.navbar').css({
        'backgroundColor': '#000',
        'padding': '.5rem'
      })
    } else {
      $('.navbar').css({
        'backgroundColor': 'transparent',
        'padding': '2.5rem 1rem'
      })
    }

    

    if ($(window).scrollTop() >= 1900) {
      $({
        countNum: $('.counter1').text()
      }).animate({
        countNum: 36
      }, {
          duration: 3000,
          easing: 'linear',
          step: function () {
            $('.counter1').text(Math.ceil(this.countNum));
          },
          complete: function () {
            $('.counter1').text("36");
          }
        });



      $({
        countNum: $('.counter2').text()
      }).animate({
        countNum: 245
      }, {
          duration: 3000,
          easing: 'linear',
          step: function () {
            $('.counter2').text(Math.ceil(this.countNum));
          },
          complete: function () {
            $('.counter2').text("245");
          }
        });

      $({
        countNum: $('.counter3').text()
      }).animate({
        countNum: 14
      }, {
          duration: 3000,
          easing: 'linear',
          step: function () {
            $('.counter3').text(Math.ceil(this.countNum));
          },
          complete: function () {
            $('.counter3').text("14");
          }
        });

      $({
        countNum: $('.counter4').text()
      }).animate({
        countNum: 1
      }, {
          duration: 3000,
          easing: 'linear',
          step: function () {
            $('.counter4').text(Math.ceil(this.countNum));
          },
          complete: function () {
            $('.counter4').text("1");
          }
        })


    }
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
  // prevent default for images
  $('.projects a').click(function (e) {
    e.preventDefault();
  })

})


function placeholder(id) {
  'use strict';
  document.getElementById(id).onfocus = function () {
    this.setAttribute('data-place', this.getAttribute('placeholder'));
    this.setAttribute('placeholder', '');

    document.getElementById(id).onblur = function () {
      this.setAttribute('placeholder', this.getAttribute('data-place'));
      this.setAttribute('data-place', '');
    }

  }
}

placeholder('name');
placeholder('email');
placeholder('subject');
placeholder('textarea');








